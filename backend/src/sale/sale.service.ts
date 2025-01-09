import { BadRequestException, Injectable } from '@nestjs/common';
import { buildNestException } from '../common/build-nest-exception';
import { PrismaService } from '../common/prisma.service';
import { FindManySaleItemArgs } from '../sale-item/dto';
import type {
  CreateOneSaleArgsCustom,
  DeleteOneSaleArgs,
  FindManySaleArgs,
  FindUniqueSaleArgs,
  Sale,
  UpdateOneSaleArgs
} from './dto';
import { PrismaClient, SaleItem } from '@prisma/client';
import { handleProductMovement } from '../common/handle-product-movement';

@Injectable()
export class SaleService {
  constructor(private readonly prisma: PrismaService) {}

  findUnique(args: FindUniqueSaleArgs) {
    return this.prisma.sale.findUniqueOrThrow(args);
  }

  findMany(args: FindManySaleArgs) {
    return this.prisma.findManyPaginated(this.prisma.sale, args);
  }

  private generateTotals(
    saleItems: Pick<SaleItem, 'totalValue' | 'totalCostValue'>[]
  ): Pick<Sale, 'totalCostValue' | 'totalValue'> {
    return saleItems.reduce(
      (prev, cur) => {
        prev = {
          totalCostValue: prev.totalCostValue + cur.totalCostValue,
          totalValue: prev.totalValue + cur.totalValue
        };
        return prev;
      },
      { totalCostValue: 0, totalValue: 0 }
    );
  }

  private generateSaleItemTotals(val: {
    totalValue: number;
    quantity: number;
    costValue: number;
  }) {
    return {
      totalValue: val.totalValue || 0,
      totalCostValue: val.quantity * val.costValue
    };
  }

  private validateSale(sale: Sale) {
    if (!sale?.saleItems?.length) {
      throw buildNestException(
        'Sale_SaleItem_zero_length_badRequest',
        BadRequestException
      );
    }
    for (const item of sale.saleItems) {
      if (item.quantity <= 0) {
        throw buildNestException(
          'SaleItem_quantity_zero_or_negative_badRequest',
          BadRequestException
        );
      }
    }
  }

  private updateSaleAndItemsTotals(prisma: Partial<PrismaClient>, sale: Sale) {
    const saleItems = {
      update: sale.saleItems.map((item) => {
        return {
          where: { id: item.id },
          data: this.generateSaleItemTotals({
            totalValue: item.totalValue,
            quantity: item.quantity,
            costValue: item.product.costValue
          })
        };
      })
    };
    return prisma.sale.update({
      where: { id: sale.id },
      data: {
        ...this.generateTotals(
          saleItems.update.map((item) => {
            return item.data;
          })
        ),
        saleItems
      }
    });
  }

  createOne({ data }: CreateOneSaleArgsCustom) {
    return this.prisma.$transaction(async (prisma) => {
      const sale = await prisma.sale.create({
        data: {
          ...data,
          totalValue: 0,
          totalCostValue: 0,
          saleItems: {
            create: data.saleItems.create?.map((item) => {
              return {
                totalCostValue: 0,
                ...item,
                ProductMovement: undefined
              };
            })
          }
        },
        include: {
          saleItems: { include: { product: true, productMovements: true } }
        }
      });
      this.validateSale(sale);

      await Promise.all([
        handleProductMovement(prisma, sale),
        this.updateSaleAndItemsTotals(prisma, sale)
      ]);
    });
  }

  updateOne(args: UpdateOneSaleArgs) {
    return this.prisma.$transaction(async (prisma) => {
      const saleBefore = await prisma.sale.update({
        data: { updatedAt: new Date() },
        where: { id: args.where.id },
        include: {
          saleItems: { include: { product: true, productMovements: true } }
        }
      });

      const sale = await prisma.sale.update({
        where: args.where,
        data: {
          date: args.data.date,
          totalCostValue: args.data.totalCostValue,
          totalValue: args.data.totalValue,
          saleItems: args.data.saleItems as any
        },
        include: {
          saleItems: { include: { product: true, productMovements: true } }
        }
      });
      this.validateSale(sale);

      await Promise.all([
        handleProductMovement(
          prisma,
          {
            date: sale.date,
            totalCostValue: sale.totalCostValue,
            totalValue: sale.totalValue,
            saleItems: (sale as any).saleItems,
            blameUserId: '',
            createdAt: new Date(),
            id: sale.id,
            updatedAt: new Date()
          },
          saleBefore
        ),
        this.updateSaleAndItemsTotals(prisma, sale)
      ]);
    });
  }

  deleteOne(args: DeleteOneSaleArgs) {
    return this.prisma.$transaction(async (prisma) => {
      const saleBefore = await prisma.sale.update({
        data: { updatedAt: new Date() },
        where: { id: args.where.id },
        include: {
          saleItems: { include: { product: true, productMovements: true } }
        }
      });

      const promises: Promise<any>[] = [];
      for (const item of saleBefore.saleItems) {
        promises.push(
          prisma.productMovement.create({
            data: {
              type: 'SALE_DELETE',
              quantity: item.quantity,
              productId: item.product.id,
              saleItemId: item.id
            }
          }),
          prisma.product.update({
            where: { id: item.product.id },
            data: {
              qty: {
                increment: item.quantity
              }
            }
          })
        );
      }
      await Promise.all(promises);

      await prisma.sale.delete(args);
    });
  }

  forBlameUser({ id }: Sale) {
    return this.prisma.sale.findUniqueOrThrow({ where: { id } }).blameUser();
  }

  forSaleItems({ id }: Sale, args: FindManySaleItemArgs) {
    return this.prisma.findRelationAndPaginate(
      this.prisma.sale,
      id,
      'saleItems',
      args
    );
  }
}
