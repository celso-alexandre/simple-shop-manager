import {
  Resolver,
  Args,
  Query,
  ResolveField,
  Parent,
  Mutation
} from '@nestjs/graphql';
import {
  CreateOneFinancialMovementArgs,
  FindManyFinancialMovementArgs,
  FindUniqueFinancialMovementArgs,
  UpdateOneFinancialMovementArgs
} from './dto';
import { FinancialMovement } from './dto';
import { FinancialMovementsOutput } from './dto/output';
import { FinancialMovementService } from './service';

@Resolver(() => {
  return FinancialMovement;
})
export class FinancialMovementResolver {
  constructor(private readonly service: FinancialMovementService) {}

  @Query(
    () => {
      return FinancialMovement;
    },
    { name: 'financialMovement' }
  )
  findUnique(@Args() args: FindUniqueFinancialMovementArgs) {
    return this.service.findUnique(args);
  }

  @Query(
    () => {
      return FinancialMovementsOutput;
    },
    { name: 'financialMovements' }
  )
  findMany(@Args() args: FindManyFinancialMovementArgs) {
    return this.service.findMany(args);
  }

  @Mutation(() => FinancialMovement)
  createFinancialMovement(@Args() args: CreateOneFinancialMovementArgs) {
    return this.service.createOne(args);
  }

  @Mutation(() => FinancialMovement)
  updateFinancialMovement(@Args() args: UpdateOneFinancialMovementArgs) {
    return this.service.updateOne(args);
  }

  @Mutation(() => Boolean)
  deleteFinancialMovement(@Args() args: FindUniqueFinancialMovementArgs) {
    return this.service.deleteOne(args);
  }

  private normalizeFloat(value: number) {
    if (typeof value !== 'number') return 0;
    if (!Number.isFinite(value)) return 0;
    return value || 0;
  }

  @ResolveField(() => Number, { name: 'valueDecimal' })
  forTotalValueDecimal(@Parent() { value }: FinancialMovement) {
    return this.normalizeFloat(value / 100);
  }

  @ResolveField(() => String)
  description(
    @Parent() { description, saleId, providerOrderId }: FinancialMovement
  ) {
    if (description) return description;
    if (saleId) return 'Venda';
    if (providerOrderId) return 'Compra';
    return '';
  }
}
