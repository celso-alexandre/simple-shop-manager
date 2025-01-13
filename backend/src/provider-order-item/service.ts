import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import type { FindManyProviderOrderItemArgs, ProviderOrderItem } from './dto';

@Injectable()
export class ProviderOrderItemService {
  constructor(private readonly prisma: PrismaService) {}

  findMany(args: FindManyProviderOrderItemArgs) {
    return this.prisma.findManyPaginated(this.prisma.providerOrderItem, args);
  }

  forProvider({ providerId: id }: ProviderOrderItem) {
    return this.prisma.provider.findUniqueOrThrow({ where: { id } });
  }

  forProduct({ productId: id }: ProviderOrderItem) {
    return this.prisma.product.findUniqueOrThrow({ where: { id } });
  }
}
