import {
  Resolver,
  Args,
  Query,
  ResolveField,
  Parent,
  Mutation
} from '@nestjs/graphql';
import {
  CreateOneProviderOrderArgs,
  FindManyProviderOrderArgs,
  FindUniqueProviderOrderArgs,
  UpdateOneProviderOrderArgs
} from './dto';
import { ProviderOrder } from './dto';
import { ProviderOrdersOutput } from './dto/output';
import { ProviderOrderService } from './service';
import {
  FindManyProviderOrderItemArgs,
  ProviderOrderItemsOutput
} from '../provider-order-item/dto';

@Resolver(() => {
  return ProviderOrder;
})
export class ProviderOrderResolver {
  constructor(private readonly service: ProviderOrderService) {}

  @Query(
    () => {
      return ProviderOrder;
    },
    { name: 'providerOrder' }
  )
  findUnique(@Args() args: FindUniqueProviderOrderArgs) {
    return this.service.findUnique(args);
  }

  @Query(
    () => {
      return ProviderOrdersOutput;
    },
    { name: 'providerOrders' }
  )
  findMany(@Args() args: FindManyProviderOrderArgs) {
    return this.service.findMany(args);
  }

  @Mutation(() => ProviderOrder)
  createProviderOrder(@Args() args: CreateOneProviderOrderArgs) {
    return this.service.createOne(args);
  }

  @Mutation(() => ProviderOrder)
  updateProviderOrder(@Args() args: UpdateOneProviderOrderArgs) {
    return this.service.updateOne(args);
  }

  @Mutation(() => Boolean)
  deleteProviderOrder(@Args() args: FindUniqueProviderOrderArgs) {
    return this.service.deleteOne(args);
  }

  @ResolveField(() => ProviderOrderItemsOutput, { name: 'providerOrderItems' })
  forProviderOrderItems(
    @Parent() parent: ProviderOrder,
    @Args() args: FindManyProviderOrderItemArgs
  ) {
    return this.service.forProviderOrderItems(parent, args);
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
    { name: 'itemsValueDecimal' }
  )
  forItemsValueDecimal(@Parent() { itemsValue }: ProviderOrder) {
    return this.normalizeFloat(itemsValue / 100);
  }

  @ResolveField(() => Number, { name: 'totalValue' })
  forTotalValue(@Parent() { itemsValue, otherValue }: ProviderOrder) {
    return (itemsValue || 0) + (otherValue || 0);
  }

  @ResolveField(() => Number, { name: 'totalValueDecimal' })
  forTotalValueDecimal(@Parent() record: ProviderOrder) {
    return this.normalizeFloat(this.forTotalValue(record) / 100);
  }
}
