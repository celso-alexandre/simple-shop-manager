import { Injectable } from '@nestjs/common';
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
    // console.log(
    //   'stotals',
    //   saleItems,
    //   saleItems.map((x) => x?.totalCostValue),
    //   saleItems.map((x) => x?.totalValue),
    // );
    const res = saleItems.reduce(
      (prev, cur) => {
        prev = {
          totalCostValue: prev.totalCostValue + cur.totalCostValue,
          totalValue: prev.totalValue + cur.totalValue,
        };
        return prev;
      },
      { totalCostValue: 0, totalValue: 0 },
    );
    console.log('sTotals', res);
    return res;
  }

  generateSaleItemTotals({
    totalValue,
    quantity,
    product,
  }: Pick<SaleItem, 'quantity' | 'totalValue' | 'product'>): Pick<
    SaleItem,
    'totalCostValue' | 'totalValue'
  > {
    // console.log('sitotals', quantity, product?.costValue);
    return {
      totalValue,
      totalCostValue: quantity * product.costValue,
    };
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

      console.log('sale', JSON.stringify(sale, null, 2));
      const saleItems = {
        update: sale.saleItems.map((item) => ({
          where: { id: item.id },
          data: this.generateSaleItemTotals(item),
        })),
      };
      console.log('saleItems', JSON.stringify(saleItems, null, 2));
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
        include: { saleItems: { include: { product: true } } },
      });

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
