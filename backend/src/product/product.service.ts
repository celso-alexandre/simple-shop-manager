import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import {
  CreateManyProductArgs,
  CreateOneProductArgs,
  DeleteOneProductArgs,
  FindManyProductArgs,
  FindUniqueProductArgs,
  UpdateOneProductArgs,
} from './dto';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  findUnique(args: FindUniqueProductArgs) {
    return this.prisma.product.findUniqueOrThrow(args);
  }

  findMany(args: FindManyProductArgs) {
    return this.prisma.product.findMany(args);
  }

  createOne(args: CreateOneProductArgs) {
    return this.prisma.product.create(args);
  }

  async createMany(args: CreateManyProductArgs) {
    await this.prisma.product.createMany(args);
    return true;
  }

  updateOne(args: UpdateOneProductArgs) {
    return this.prisma.product.update(args);
  }

  deleteOne(args: DeleteOneProductArgs) {
    return this.prisma.product.delete(args);
  }
}
