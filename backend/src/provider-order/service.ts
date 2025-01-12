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
    const itemsValue = args.data.providerOrderItems.create.reduce(
      (prev, cur) => cur.totalValue + prev,
      0
    );
    args.data.itemsValue = itemsValue;
    args.data.financialMovements = undefined;
    return this.prisma.$transaction(async (prisma) => {
      const res = await prisma.providerOrder.create(args);
      await prisma.financialMovement.create({
        data: {
          type: 'PROVIDER_ORDER',
          value: args.data.itemsValue * -1,
          providerOrder: { connect: { id: res.id } }
        }
      });
      return res;
    });
  }

  updateOne(args: UpdateOneProviderOrderArgs) {
    return this.prisma.$transaction(async (prisma) => {
      const order = await prisma.providerOrder.findUniqueOrThrow({
        where: args.where,
        include: { providerOrderItems: true }
      });
      const itemsValue = order.providerOrderItems.reduce(
        (prev, cur) => cur.totalValue + prev,
        0
      );
      const updatedOrder = await prisma.providerOrder.update({
        where: args.where,
        data: {
          ...args.data,
          itemsValue
        },
        include: { providerOrderItems: true }
      });
      const newItemsValue = updatedOrder.providerOrderItems.reduce(
        (prev, cur) => cur.totalValue + prev,
        0
      );
      if (itemsValue !== newItemsValue) {
        const diffVal = newItemsValue - itemsValue;
        await Promise.all([
          prisma.financialMovement.create({
            data: {
              value: diffVal * -1,
              type: 'PROVIDER_ORDER',
              providerOrder: { connect: { id: updatedOrder.id } }
            }
          }),
          prisma.providerOrder.update({
            where: { id: updatedOrder.id },
            data: {
              itemsValue: newItemsValue
            }
          })
        ]);
      }
      return updatedOrder;
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
