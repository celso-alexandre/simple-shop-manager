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
      const res = await prisma.providerOrder.create({
        data: args.data,
        include: { providerOrderItems: { include: { product: true } } }
      });
      const promises: Promise<any>[] = [];
      promises.push(
        prisma.financialMovement.create({
          data: {
            type: 'PROVIDER_ORDER',
            value: args.data.itemsValue * -1,
            providerOrder: { connect: { id: res.id } }
          }
        })
      );
      const itemsWithQty = res.providerOrderItems.filter((item) => {
        return item.moveQty && item.quantity && item.product?.controlsQty;
      });
      // console.log('itemsWithQty', JSON.stringify(itemsWithQty, null, 2));
      if (itemsWithQty.length) {
        promises.push(
          prisma.productMovement.createMany({
            data: itemsWithQty.map((item) => ({
              type: 'PROVIDER_ORDER',
              quantity: item.quantity,
              productId: item.productId,
              providerOrderItemId: item.id
            }))
          })
        );
      }
      res.providerOrderItems
        .filter((item) => item.totalValue && item.quantity)
        .forEach((item) => {
          const movedQty =
            itemsWithQty.find((i) => i.id === item.id)?.quantity ?? 0;
          const costValue = item.totalValue / item.quantity || 0;
          promises.push(
            prisma.product.update({
              where: {
                id: item.productId
              },
              data: {
                provider: !item.providerId
                  ? undefined
                  : { connect: { id: item.providerId } },
                costValue: !costValue ? undefined : costValue,
                qty: !movedQty
                  ? undefined
                  : {
                      increment: item.quantity
                    }
              }
            })
          );
        });
      await Promise.all(promises);
      return res;
    });
  }

  updateOne(args: UpdateOneProviderOrderArgs) {
    return this.prisma.$transaction(async (prisma) => {
      const order = await prisma.providerOrder.findUniqueOrThrow({
        where: args.where,
        include: { providerOrderItems: { include: { product: true } } }
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
        include: { providerOrderItems: { include: { product: true } } }
      });

      const promises: Promise<any>[] = [];
      const itemsWithQty = updatedOrder.providerOrderItems
        .map(
          ({
            id: providerOrderItemId,
            moveQty,
            quantity,
            product,
            productId,
            providerId,
            totalValue
          }) => {
            const prevOrderI = order.providerOrderItems.find(
              (item) => item.id === providerOrderItemId
            );
            let prevQty = 0;
            if (
              prevOrderI?.moveQty &&
              prevOrderI?.quantity &&
              prevOrderI?.product?.controlsQty
            ) {
              prevQty = prevOrderI.quantity ?? 0;
            }
            let newQty = 0;
            if (moveQty && quantity && product?.controlsQty) {
              newQty = quantity ?? 0;
            }
            const movedQty = newQty - prevQty;
            if (!movedQty) {
              return null;
            }

            return {
              providerOrderItemId,
              moveQty,
              movedQty,
              productId,
              providerId,
              totalValue
            };
          }
        )
        .filter((item) => item);
      if (itemsWithQty.length) {
        promises.push(
          prisma.productMovement.createMany({
            data: itemsWithQty.map((item) => ({
              type: 'PROVIDER_ORDER',
              quantity: item.movedQty,
              productId: item.productId,
              providerOrderItemId: item.providerOrderItemId
            }))
          })
        );
      }

      updatedOrder.providerOrderItems
        .filter((item) => item.totalValue && item.quantity)
        .forEach((item) => {
          const movedQty =
            itemsWithQty.find((i) => i.providerOrderItemId === item.id)
              ?.movedQty ?? 0;
          const costValue = item.totalValue / item.quantity || 0;
          promises.push(
            prisma.product.update({
              where: {
                id: item.productId
              },
              data: {
                provider: !item.providerId
                  ? undefined
                  : { connect: { id: item.providerId } },
                costValue: !costValue ? undefined : costValue,
                qty: !movedQty
                  ? undefined
                  : {
                      increment: movedQty
                    }
              }
            })
          );
        });
      await Promise.all(promises);

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
