import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import type {
  FindManySalePaidCostArgs,
  FindUniqueSalePaidCostArgs,
} from './dto';

@Injectable()
export class SalePaidCostService {
  constructor(private readonly prisma: PrismaService) {}

  findUnique(args: FindUniqueSalePaidCostArgs) {
    return this.prisma.salePaidCost.findUniqueOrThrow(args);
  }

  findMany(args: FindManySalePaidCostArgs) {
    return this.prisma.findManyPaginated(this.prisma.salePaidCost, args);
  }
}
