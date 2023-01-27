import { BadRequestException, Injectable } from '@nestjs/common';
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
    if (!sale?.saleItems?.length)
      throw new BadRequestException('Sale must contain at least 1 sale item');
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
            })),
          },
        },
        include: { saleItems: { include: { product: true } } },
      });
      this.validateSale(sale);

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

  // async createMany(args: CreateManySaleArgs) {
  //   await this.prisma.sale.createMany(args);
  //   return true;
  // }

  updateOne(args: UpdateOneSaleArgs) {
    return this.prisma.$transaction(async (prisma) => {
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
