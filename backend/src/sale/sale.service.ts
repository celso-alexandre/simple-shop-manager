import { BadRequestException, Injectable } from '@nestjs/common';
import { buildNestException } from '../common/build-nest-exception';
import { PrismaService } from '../common/prisma.service';
import { FindManySaleItemArgs, SaleItem } from '../sale-item/dto';
import type {
  CreateOneSaleArgsCustom,
  DeleteOneSaleArgs,
  FindManySaleArgs,
  FindUniqueSaleArgs,
  Sale,
  UpdateOneSaleArgs,
} from './dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class SaleService {
  constructor(private readonly prisma: PrismaService) {}

  findUnique(args: FindUniqueSaleArgs) {
    return this.prisma.sale.findUniqueOrThrow(args);
  }

  findMany(args: FindManySaleArgs) {
    return this.prisma.findManyPaginated(this.prisma.sale, args);
  }

  generateTotals(
    saleItems: Pick<SaleItem, 'totalValue' | 'totalCostValue'>[],
  ): Pick<Sale, 'totalCostValue' | 'totalValue'> {
    return saleItems.reduce(
      (prev, cur) => {
        prev = {
          totalCostValue: prev.totalCostValue + cur.totalCostValue,
          totalValue: prev.totalValue + cur.totalValue,
        };
        return prev;
      },
      { totalCostValue: 0, totalValue: 0 },
    );
  }

  generateSaleItemTotals({
    totalValue,
    quantity,
    product,
  }: Pick<SaleItem, 'quantity' | 'totalValue' | 'product'>): Pick<
    SaleItem,
    'totalCostValue' | 'totalValue'
  > {
    return {
      totalValue,
      totalCostValue: quantity * product.costValue,
    };
  }

  validateSale(sale: Sale) {
    if (!sale?.saleItems?.length) {
      throw buildNestException(
        'Sale_SaleItem_zero_length_badRequest',
        BadRequestException,
      );
    }
    for (const item of sale.saleItems) {
      if (item.quantity <= 0) {
        throw buildNestException(
          'SaleItem_quantity_zero_or_negative_badRequest',
          BadRequestException,
        );
      }
      return;
      if (item.product.controlsQty) {
        if (!item.ProductMovement?.length) {
          throw buildNestException(
            'SaleItem_ProductMovement_zero_length_badRequest',
            BadRequestException,
          );
        }
        const saleMovement = item.ProductMovement.filter(mov => mov.type === 'SALE');
        if (!saleMovement.length) {
          throw buildNestException(
            'SaleItem_ProductMovement_no_sale_movement_badRequest',
            BadRequestException,
          );
        }
        if (saleMovement.length > 1) {
          throw buildNestException(
            'SaleItem_ProductMovement_more_than_one_sale_movement_badRequest',
            BadRequestException,
          );
        }
        if (saleMovement[0].quantity !== (item.quantity * -1)) {
          throw buildNestException(
            'SaleItem_ProductMovement_quantity_mismatch_badRequest',
            BadRequestException,
          );
        }
        const emptyMovement = item.ProductMovement.find(mov => !mov.quantity);
        if (emptyMovement) {
          throw buildNestException(
            'SaleItem_ProductMovement_empty_quantity_badRequest',
            BadRequestException,
          );
        }
        return;
      }
      if (item.ProductMovement.length > 1) {
        throw buildNestException(
          'SaleItem_ProductMovement_not_allowed_for_product_badRequest',
          BadRequestException,
        );
      }
    }
  }

  createOne({ data }: CreateOneSaleArgsCustom) {
    return this.prisma.$transaction(async (prisma) => {
      const sale = await prisma.sale.create({
        data: {
          ...data,
          totalValue: 0,
          totalCostValue: 0,
          saleItems: {
            create: data.saleItems.create?.map((item) => ({
              totalCostValue: 0,
              ...item,
              ProductMovement: undefined
            })),
          },
        },
        include: { saleItems: { include: { product: true } } },
      });
      this.validateSale(sale);

      let productMovements: Parameters<PrismaClient['productMovement']['createMany']>[0]['data'] = [];
      for (const item of sale.saleItems) {
        if (!item.product.controlsQty) {
          continue;
        }
        productMovements.push({
          type: 'SALE',
          quantity: item.quantity * -1,
          productId: item.product.id,
        });
      }
      const promises: Promise<any>[] = [];
      promises.push(
        prisma.productMovement.createMany({
          data: productMovements,
        })
      );

      promises.push(
        ...sale.saleItems.map((item) => prisma.product.update({
          where: { id: item.product.id },
          data: {
            qty: {
              decrement: item.quantity,
            },
          },
        })),
      );

      await Promise.all(promises);

      const saleItems = {
        update: sale.saleItems.map((item) => ({
          where: { id: item.id },
          data: this.generateSaleItemTotals(item),
        })),
      };
      return prisma.sale.update({
        where: { id: sale.id },
        data: {
          ...this.generateTotals(saleItems.update.map((item) => item.data)),
          saleItems,
        },
      });
    });
  }

  updateOne(args: UpdateOneSaleArgs) {
    return this.prisma.$transaction(async (prisma) => {
      const saleBefore = await prisma.sale.update({
        data: { updatedAt: new Date() },
        where: { id: args.where.id },
        include: { saleItems: { include: { product: true } } },
      })

      const sale = await prisma.sale.update({
        ...args,
        data: {
          ...args.data,
          saleItems: {
            ...args.data.saleItems,
            create: args.data.saleItems?.create?.map((item) => ({
              ...item,
              totalCostValue: 0,
            })),
            update: args.data.saleItems?.update?.map((item) => ({
              ...item,
              data: {
                ...item.data,
                totalCostValue: 0,
              },
            })),
          },
        },
        include: { saleItems: { include: { product: true } } },
      });
      this.validateSale(sale);

      const promises: Promise<any>[] = [];
      let productMovements: Parameters<PrismaClient['productMovement']['createMany']>[0]['data'] = [];
      for (const item of sale.saleItems) {
        if (!item.product.controlsQty) {
          continue;
        }

        const saleItemBefore = saleBefore.saleItems.find(saleItem => saleItem.id === item.id);
        const prevQty = saleItemBefore?.quantity || 0;
        const qtyDiff = prevQty - item.quantity;
        if (!qtyDiff) {
          continue;
        }

        productMovements.push({
          type: 'SALE_EDIT',
          quantity: qtyDiff,
          productId: item.product.id,
        });

        promises.push(
          prisma.product.update({
            where: { id: item.product.id },
            data: {
              qty: {
                [qtyDiff >= 0 ? 'increment' : 'decrement']: Math.abs(qtyDiff),
              },
            },
          }),
        );
      }
      promises.push(
        prisma.productMovement.createMany({
          data: productMovements,
        })
      );

      await Promise.all(promises);

      const saleItems = {
        update: sale.saleItems.map((item) => ({
          where: { id: item.id },
          data: this.generateSaleItemTotals(item),
        })),
      };
      return prisma.sale.update({
        where: { id: sale.id },
        data: {
          ...this.generateTotals(saleItems.update.map((item) => item.data)),
          saleItems,
        },
      });
    });
  }

  deleteOne(args: DeleteOneSaleArgs) {
    return this.prisma.sale.delete(args);
  }

  forBlameUser({ id }: Sale) {
    return this.prisma.sale.findUniqueOrThrow({ where: { id } }).blameUser();
  }

  forSaleItems({ id }: Sale, args: FindManySaleItemArgs) {
    return this.prisma.findRelationAndPaginate(
      this.prisma.sale,
      id,
      'saleItems',
      args,
    );
  }
}
