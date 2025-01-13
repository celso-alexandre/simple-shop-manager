import { Resolver, Args, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Product } from '../product/dto';
import { Provider } from '../provider/dto';
import { FindManyProviderOrderItemArgs } from './dto';
import { ProviderOrderItem } from './dto';
import { ProviderOrderItemsOutput } from './dto/output';
import { ProviderOrderItemService } from './service';

@Resolver(() => {
  return ProviderOrderItem;
})
export class ProviderOrderItemResolver {
  constructor(private readonly service: ProviderOrderItemService) {}

  @Query(
    () => {
      return ProviderOrderItemsOutput;
    },
    { name: 'providerOrderItems' }
  )
  findMany(@Args() args: FindManyProviderOrderItemArgs) {
    return this.service.findMany(args);
  }

  @ResolveField(
    () => {
      return Provider;
    },
    { name: 'provider', nullable: true }
  )
  forProvider(@Parent() parent: ProviderOrderItem) {
    return this.service.forProvider(parent);
  }

  @ResolveField(
    () => {
      return Product;
    },
    { name: 'product' }
  )
  forProduct(@Parent() parent: ProviderOrderItem) {
    return this.service.forProduct(parent);
  }

  private normalizeFloat(value: number) {
    if (typeof value !== 'number') return 0;
    if (!Number.isFinite(value)) return 0;
    return value || 0;
  }

  @ResolveField(
    () => {
      return Number;
    },
    { name: 'totalValueDecimal' }
  )
  forTotalValueDecimal(@Parent() { totalValue }: ProviderOrderItem) {
    return this.normalizeFloat(totalValue / 100);
  }
}
