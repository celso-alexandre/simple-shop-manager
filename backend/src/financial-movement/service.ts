import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import type {
  CreateOneFinancialMovementArgs,
  FindManyFinancialMovementArgs,
  FindUniqueFinancialMovementArgs,
  UpdateOneFinancialMovementArgs
} from './dto';

@Injectable()
export class FinancialMovementService {
  constructor(private readonly prisma: PrismaService) {}

  findUnique(args: FindUniqueFinancialMovementArgs) {
    return this.prisma.financialMovement.findUniqueOrThrow(args);
  }

  findMany(args: FindManyFinancialMovementArgs) {
    return this.prisma.findManyPaginated(this.prisma.financialMovement, args);
  }

  createOne(args: CreateOneFinancialMovementArgs) {
    return this.prisma.financialMovement.create(args);
  }

  updateOne(args: UpdateOneFinancialMovementArgs) {
    return this.prisma.financialMovement.update(args);
  }

  async deleteOne(args: FindUniqueFinancialMovementArgs) {
    await this.prisma.financialMovement.delete(args);
    return true;
  }
}
