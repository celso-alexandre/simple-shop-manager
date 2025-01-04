import { Resolver, Query, ResolveField, Args } from '@nestjs/graphql';
import { SaleAggregateService } from './service';
import { AggregateSale } from './dto';
import { SaleAggregateArgsCustom } from './dto/args';

@Resolver(() => {
  return AggregateSale;
})
export class SaleAggregateResolver {
  constructor(private readonly service: SaleAggregateService) {}

  @Query(() => AggregateSale, { name: 'saleAggregate' })
  saleAggregate(@Args() args: SaleAggregateArgsCustom) {
    return this.service.aggregate(args);
  }

  @ResolveField(() => Number, { name: 'count', nullable: true })
  count(@Args() args: SaleAggregateArgsCustom) {
    return this.service.count(args);
  }
}
