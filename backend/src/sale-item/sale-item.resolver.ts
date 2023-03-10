import { Resolver, Args, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Product } from '../product/dto';
import { Provider } from '../provider/dto';
import { User } from '../user/dto';
import { FindManySaleItemArgs, FindUniqueSaleItemArgs } from './dto';
import { SaleItem } from './dto';
import { SaleItemsOutput } from './dto/output';
import { SaleItemService } from './sale-item.service';

@Resolver(() => SaleItem)
export class SaleItemResolver {
  constructor(private readonly service: SaleItemService) {}

  @Query(() => SaleItem, { name: 'saleItem' })
  findUnique(@Args() args: FindUniqueSaleItemArgs) {
    return this.service.findUnique(args);
  }

  @Query(() => SaleItemsOutput, { name: 'saleItems' })
  findMany(@Args() args: FindManySaleItemArgs) {
    return this.service.findMany(args);
  }

  // @Mutation(() => SaleItem, { name: 'createSaleItem' })
  // createOne(@Args() args: CreateOneSaleItemArgs) {
  //   return this.service.createOne(args);
  // }

  // @Mutation(() => Boolean, { name: 'createSaleItems' })
  // createMany(@Args() args: CreateManySaleItemArgs) {
  //   return this.service.createMany(args);
  // }

  // @Mutation(() => SaleItem, { name: 'updateSaleItem' })
  // updateOne(@Args() args: UpdateOneSaleItemArgs) {
  //   return this.service.updateOne(args);
  // }

  // @Mutation(() => SaleItem, { name: 'deleteSaleItem' })
  // deleteOne(@Args() args: DeleteOneSaleItemArgs) {
  //   return this.service.deleteOne(args);
  // }

  @ResolveField(() => User, { name: 'blameUser', nullable: true })
  forBlameUser(@Parent() parent: SaleItem) {
    return this.service.forBlameUser(parent);
  }

  @ResolveField(() => Provider, { name: 'provider', nullable: true })
  forProvider(@Parent() parent: SaleItem) {
    return this.service.forProvider(parent);
  }

  @ResolveField(() => Product, { name: 'product' })
  forProduct(@Parent() parent: SaleItem) {
    return this.service.forProduct(parent);
  }

  private normalizeFloat(value: number) {
    if (typeof value !== 'number') return 0;
    if (!Number.isFinite(value)) return 0;
    return value || 0;
  }

  @ResolveField(() => Number, { name: 'totalCostValueDecimal' })
  forTotalCostValueDecimal(@Parent() { totalCostValue }: SaleItem) {
    return this.normalizeFloat(totalCostValue / 100);
  }

  @ResolveField(() => Number, { name: 'totalValueDecimal' })
  forTotalValueDecimal(@Parent() { totalValue }: SaleItem) {
    return this.normalizeFloat(totalValue / 100);
  }

  @ResolveField(() => Number, { name: 'netMarginValue' })
  forNetMarginValue(@Parent() { totalValue, totalCostValue }: SaleItem) {
    return this.normalizeFloat(totalValue - totalCostValue);
  }

  @ResolveField(() => Number, { name: 'netMarginPercent' })
  forNetMarginPercent(@Parent() { totalValue, totalCostValue }: SaleItem) {
    return this.normalizeFloat((totalValue - totalCostValue) / totalCostValue);
  }
}
