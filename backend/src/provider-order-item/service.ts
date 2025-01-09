import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import type {
  FindManyProviderOrderItemArgs,
  FindUniqueProviderOrderItemArgs,
  ProviderOrderItem,
  UpdateOneProviderOrderItemArgs
} from './dto';

@Injectable()
export class ProviderOrderItemService {
  constructor(private readonly prisma: PrismaService) {}

  findUnique(args: FindUniqueProviderOrderItemArgs) {
    return this.prisma.providerOrderItem.findUniqueOrThrow(args);
  }

  findMany(args: FindManyProviderOrderItemArgs) {
    return this.prisma.findManyPaginated(this.prisma.providerOrderItem, args);
  }

  async updateOne(args: UpdateOneProviderOrderItemArgs) {
    return this.prisma.$transaction(async (prisma) => {
      const item = await prisma.providerOrderItem.findUniqueOrThrow({
        where: args.where
      });

      const updatedItem = await prisma.providerOrderItem.update({
        where: args.where,
        data: {
          moveQty: args.data.moveQty,
          quantity: args.data.quantity,
          providerId: args.data.providerId,
          productId: args.data.product.connect.id,
          providerOrderId: args.data.providerOrder.connect.id,
          totalValue: args.data.totalValue
        },
        include: { providerOrder: true, product: true }
      });

      const orderTotalValue = await prisma.providerOrderItem.aggregate({
        where: { providerOrderId: updatedItem.providerOrderId },
        _sum: { totalValue: true }
      });
      await prisma.providerOrder.update({
        where: { id: updatedItem.providerOrderId },
        data: {
          itemsValue: orderTotalValue._sum?.totalValue ?? 0
        }
      });

      let newQty = 0;
      if (updatedItem.moveQty) {
        newQty = updatedItem.quantity;
      }
      const movedQty = newQty - item.quantity;
      console.log({ movedQty });

      if (!movedQty) {
        return updatedItem;
      }

      await prisma.productMovement.create({
        data: {
          quantity: movedQty,
          type: 'PROVIDER_ORDER',
          Product: { connect: { id: updatedItem.productId } },
          providerOrderItem: { connect: { id: updatedItem.providerId } }
        }
      });

      const costValue = Math.round(
        updatedItem.totalValue / updatedItem.quantity
      );
      const productUpdateData: Parameters<
        typeof prisma.product.update
      >[0]['data'] = {
        qty: {
          increment: movedQty
        },
        controlsQty: true,
        providerId: updatedItem.providerId
      };

      if (!costValue) {
        console.log('No cost value', {
          costValue,
          totalValue: updatedItem.totalValue,
          quantity: updatedItem.quantity
        });
      } else {
        productUpdateData.costValue = costValue;
      }

      await prisma.product.update({
        where: { id: updatedItem.productId },
        data: productUpdateData
      });
      return updatedItem;
    });
  }

  forProviderOrder({ providerOrderId: id }: ProviderOrderItem) {
    return this.prisma.providerOrder.findUniqueOrThrow({ where: { id } });
  }

  forProvider({ providerId: id }: ProviderOrderItem) {
    return this.prisma.provider.findUniqueOrThrow({ where: { id } });
  }

  forProduct({ productId: id }: ProviderOrderItem) {
    return this.prisma.product.findUniqueOrThrow({ where: { id } });
  }
}
