import { Resolver, Query, ResolveField } from '@nestjs/graphql';
import { FinancialMovementAggregateService } from './service';
import { AggregateFinancialMovement } from './dto';

@Resolver(() => {
  return AggregateFinancialMovement;
})
export class FinancialMovementAggregateResolver {
  constructor(private readonly service: FinancialMovementAggregateService) {}

  @Query(() => AggregateFinancialMovement, {
    name: 'financialMovementAggregate'
  })
  financialMovementAggregate() {
    return this.service.aggregate();
  }

  @ResolveField(() => Number, { name: 'count', nullable: true })
  count() {
    return this.service.count();
  }
}
