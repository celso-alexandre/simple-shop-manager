import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { FindManySaleItemArgs, SaleItem } from '../sale-item/dto';
import type {
  CreateOneSaleArgs,
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

  createOne(args: CreateOneSaleArgs) {
    return this.prisma.sale.create({
      data: {
        ...args.data,
        ...this.generateTotals(args.data.saleItems.createMany.data),
      },
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
        include: { saleItems: true },
      });
      return prisma.sale.update({
        where: args.where,
        data: this.generateTotals(sale.saleItems),
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
