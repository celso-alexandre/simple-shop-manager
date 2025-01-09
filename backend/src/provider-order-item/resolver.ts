import {
  Resolver,
  Args,
  Query,
  ResolveField,
  Parent,
  Mutation
} from '@nestjs/graphql';
import { Product } from '../product/dto';
import { Provider } from '../provider/dto';
import {
  FindManyProviderOrderItemArgs,
  FindUniqueProviderOrderItemArgs,
  UpdateOneProviderOrderItemArgs
} from './dto';
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
      return ProviderOrderItem;
    },
    { name: 'providerOrderItem' }
  )
  findUnique(@Args() args: FindUniqueProviderOrderItemArgs) {
    return this.service.findUnique(args);
  }

  @Query(
    () => {
      return ProviderOrderItemsOutput;
    },
    { name: 'providerOrderItems' }
  )
  findMany(@Args() args: FindManyProviderOrderItemArgs) {
    return this.service.findMany(args);
  }

  @Mutation(() => ProviderOrderItem, { name: 'updateProviderOrderItem' })
  updateOne(@Args() args: UpdateOneProviderOrderItemArgs) {
    return this.service.updateOne(args);
  }

  @ResolveField(
    () => {
      return Provider;
    },
    { name: 'providerOrder', nullable: true }
  )
  forProviderOrder(@Parent() parent: ProviderOrderItem) {
    return this.service.forProviderOrder(parent);
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
