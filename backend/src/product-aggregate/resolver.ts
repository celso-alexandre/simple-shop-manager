import { Resolver, Query, ResolveField } from '@nestjs/graphql';
import { ProductAggregateService } from './service';
import { AggregateProduct } from './dto';

@Resolver(() => {
  return AggregateProduct;
})
export class ProductAggregateResolver {
  constructor(private readonly service: ProductAggregateService) {}

  @Query(() => AggregateProduct, { name: 'productAggregate' })
  productAggregate() {
    return this.service.aggregate();
  }

  @ResolveField(() => Number, { name: 'count', nullable: true })
  count() {
    return this.service.count();
  }
}
