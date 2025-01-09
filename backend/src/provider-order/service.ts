import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import type {
  CreateOneProviderOrderArgs,
  FindManyProviderOrderArgs,
  FindUniqueProviderOrderArgs,
  ProviderOrder,
  UpdateOneProviderOrderArgs
} from './dto';
import { FindManyProviderOrderItemArgs } from '../provider-order-item/dto';

@Injectable()
export class ProviderOrderService {
  constructor(private readonly prisma: PrismaService) {}

  findUnique(args: FindUniqueProviderOrderArgs) {
    return this.prisma.providerOrder.findUniqueOrThrow(args);
  }

  findMany(args: FindManyProviderOrderArgs) {
    return this.prisma.findManyPaginated(this.prisma.providerOrder, args);
  }

  createOne(args: CreateOneProviderOrderArgs) {
    return this.prisma.providerOrder.create(args);
  }

  updateOne(args: UpdateOneProviderOrderArgs) {
    return this.prisma.providerOrder.update({
      where: args.where,
      data: {
        date: args.data.date,
        itemsValue: args.data.itemsValue,
        otherValue: args.data.otherValue,
        providerOrderItems: args.data.providerOrderItems as any
      }
    });
  }

  async deleteOne(args: FindUniqueProviderOrderArgs) {
    await this.prisma.providerOrder.delete(args);
    return true;
  }

  forProviderOrderItems(
    parent: ProviderOrder,
    args: FindManyProviderOrderItemArgs
  ) {
    return this.prisma.findManyPaginated(this.prisma.providerOrderItem, {
      ...args,
      where: {
        ...args?.where,
        providerOrderId: parent.id
      }
    });
  }
}
