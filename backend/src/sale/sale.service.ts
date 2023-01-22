import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import {
  CreateManySaleArgs,
  CreateOneSaleArgs,
  DeleteOneSaleArgs,
  FindManySaleArgs,
  FindUniqueSaleArgs,
  UpdateOneSaleArgs,
} from './dto';

@Injectable()
export class SaleService {
  constructor(private readonly prisma: PrismaService) {}

  findUnique(args: FindUniqueSaleArgs) {
    return this.prisma.sale.findUniqueOrThrow(args);
  }

  findMany(args: FindManySaleArgs) {
    return this.prisma.sale.findMany(args);
  }

  createOne(args: CreateOneSaleArgs) {
    return this.prisma.sale.create(args);
  }

  async createMany(args: CreateManySaleArgs) {
    await this.prisma.sale.createMany(args);
    return true;
  }

  updateOne(args: UpdateOneSaleArgs) {
    return this.prisma.sale.update(args);
  }

  deleteOne(args: DeleteOneSaleArgs) {
    return this.prisma.sale.delete(args);
  }
}
