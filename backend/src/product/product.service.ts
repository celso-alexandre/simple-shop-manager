import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import type {
  CreateOneProductArgs,
  DeleteOneProductArgs,
  FindManyProductArgs,
  FindUniqueProductArgs,
  Product,
  UpdateOneProductArgs
} from './dto';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  findUnique(args: FindUniqueProductArgs) {
    return this.prisma.product.findUniqueOrThrow(args);
  }

  findMany(args: FindManyProductArgs) {
    return this.prisma.findManyPaginated(this.prisma.product, args);
  }

  createOne(args: CreateOneProductArgs) {
    return this.prisma.$transaction(async (prisma) => {
      const product = await this.prisma.product.create({
        data: args.data
      });
      if (!product.qty) {
        return product;
      }
      await prisma.productMovement.create({
        data: {
          Product: { connect: { id: product.id } },
          quantity: product.qty,
          type: 'INITIAL'
        }
      });
      return product;
    });
  }

  updateOne(args: UpdateOneProductArgs) {
    return this.prisma.$transaction(async (prisma) => {
      const prodBefore = await this.prisma.product.update({
        data: { updatedAt: new Date() },
        where: { id: args.where.id },
        select: { qty: true }
      });
      const product = await this.prisma.product.update({
        where: args.where,
        data: {
          brandName: args.data.brandName,
          controlsQty: args.data.controlsQty,
          costValue: args.data.costValue,
          isPostPaid: args.data.isPostPaid,
          name: args.data.name,
          priceValue: args.data.priceValue,
          provider: !args.data.provider?.connect?.id
            ? undefined
            : {
                connect: { id: args.data.provider.connect.id }
              },
          qty: args.data.qty
        }
      });
      const balanceDiff = product.qty - prodBefore.qty;
      if (!balanceDiff) {
        return product;
      }
      await prisma.productMovement.create({
        data: {
          Product: { connect: { id: product.id } },
          quantity: balanceDiff,
          type: 'MANUAL'
        }
      });
      return product;
    });
  }

  deleteOne(args: DeleteOneProductArgs) {
    return this.prisma.product.delete(args);
  }

  forBlameUser({ id }: Product) {
    return this.prisma.product.findUniqueOrThrow({ where: { id } }).blameUser();
  }

  forProvider({ id }: Product) {
    return this.prisma.product.findUniqueOrThrow({ where: { id } }).provider();
  }
}
