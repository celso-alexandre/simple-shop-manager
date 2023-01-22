import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import {
  CreateManyProviderArgs,
  CreateOneProviderArgs,
  DeleteOneProviderArgs,
  FindManyProviderArgs,
  FindUniqueProviderArgs,
  UpdateOneProviderArgs,
} from './dto';

@Injectable()
export class ProviderService {
  constructor(private readonly prisma: PrismaService) {}

  findUnique(args: FindUniqueProviderArgs) {
    return this.prisma.provider.findUniqueOrThrow(args);
  }

  findMany(args: FindManyProviderArgs) {
    return this.prisma.provider.findMany(args);
  }

  createOne(args: CreateOneProviderArgs) {
    return this.prisma.provider.create(args);
  }

  async createMany(args: CreateManyProviderArgs) {
    await this.prisma.provider.createMany(args);
    return true;
  }

  updateOne(args: UpdateOneProviderArgs) {
    return this.prisma.provider.update(args);
  }

  deleteOne(args: DeleteOneProviderArgs) {
    return this.prisma.provider.delete(args);
  }
}
