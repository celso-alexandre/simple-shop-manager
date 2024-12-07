import { BadRequestException, Injectable } from '@nestjs/common';
import { buildNestException } from '../common/build-nest-exception';
import { ExceptionKeys } from '../common/errors.enum';
import { PrismaService } from '../common/prisma.service';
import type {
  DeleteOneSalePaidCostArgs,
  FindManySalePaidCostArgs,
  FindUniqueSalePaidCostArgs
} from './dto';
import { CreateOneSalePaidCostArgs } from './dto/args/create-one.args';
import { UpdateOneSalePaidCostArgs } from './dto/args/update-one.args';

@Injectable()
export class SalePaidCostService {
  constructor(private readonly prisma: PrismaService) {}

  findUnique(args: FindUniqueSalePaidCostArgs) {
    return this.prisma.salePaidCost.findUniqueOrThrow(args);
  }

  findMany(args: FindManySalePaidCostArgs) {
    return this.prisma.findManyPaginated(this.prisma.salePaidCost, args);
  }

  createOne(args: CreateOneSalePaidCostArgs) {
    return this.prisma.$transaction(async (prisma) => {
      const salePaidCost = await prisma.salePaidCost.create(args);
      await prisma.saleItem.updateMany({
        where: {
          sale: { date: { lte: args.data.endDate } },
          salePaidCostId: null,
          totalCostValue: { gt: 0 }
        },
        data: {
          salePaidCostId: salePaidCost.id,
          saleCostIsSelected: true,
          saleCostIsPaid: false
        }
      });
      return salePaidCost;
    });
  }

  deleteOne(args: DeleteOneSalePaidCostArgs) {
    return this.prisma.$transaction(async (prisma) => {
      const salePaidCost = await prisma.salePaidCost.delete(args);
      await prisma.saleItem.updateMany({
        where: {
          salePaidCostId: salePaidCost.id
        },
        data: {
          salePaidCostId: null,
          saleCostIsSelected: false,
          saleCostIsPaid: false
        }
      });
      return salePaidCost;
    });
  }

  confirmOne(args: UpdateOneSalePaidCostArgs) {
    return this.prisma.$transaction(async (prisma) => {
      const salePaidCost = await prisma.salePaidCost.update(args);

      await prisma.saleItem.updateMany({
        where: {
          salePaidCostId: salePaidCost.id,
          costIsPostPaid: false,
          saleCostIsSelected: true
        },
        data: {
          saleCostIsPaid: false
        }
      });
      const agg = await prisma.saleItem.aggregate({
        where: { salePaidCostId: salePaidCost.id },
        _sum: { totalCostValue: true }
      });
      if (!agg._sum.totalCostValue)
        throw buildNestException<typeof ExceptionKeys>(
          'SalePaidCost_zero_paidValue_badRequest',
          BadRequestException
        );

      return prisma.salePaidCost.update({
        where: { id: salePaidCost.id },
        data: { paidValue: agg._sum.totalCostValue ?? 0 }
      });
    });
  }
}
