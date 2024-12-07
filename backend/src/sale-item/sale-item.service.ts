import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import type {
  FindManySaleItemArgs,
  FindUniqueSaleItemArgs,
  SaleItem
} from './dto';

@Injectable()
export class SaleItemService {
  constructor(private readonly prisma: PrismaService) {}

  findUnique(args: FindUniqueSaleItemArgs) {
    return this.prisma.saleItem.findUniqueOrThrow(args);
  }

  findMany(args: FindManySaleItemArgs) {
    return this.prisma.findManyPaginated(this.prisma.saleItem, args);
  }

  // createOne(args: CreateOneSaleItemArgs) {
  //   return this.prisma.saleItem.create(args);
  // }

  // async createMany(args: CreateManySaleItemArgs) {
  //   await this.prisma.saleItem.createMany(args);
  //   return true;
  // }

  // updateOne(args: UpdateOneSaleItemArgs) {
  //   return this.prisma.saleItem.update(args);
  // }

  // deleteOne(args: DeleteOneSaleItemArgs) {
  //   return this.prisma.saleItem.delete(args);
  // }

  forBlameUser({ id }: SaleItem) {
    return this.prisma.saleItem
      .findUniqueOrThrow({ where: { id } })
      .blameUser();
  }

  forProvider({ id }: SaleItem) {
    return this.prisma.saleItem.findUniqueOrThrow({ where: { id } }).provider();
  }

  forProduct({ id }: SaleItem) {
    return this.prisma.saleItem.findUniqueOrThrow({ where: { id } }).product();
  }
}
