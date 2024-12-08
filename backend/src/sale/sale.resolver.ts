import {
  Resolver,
  Args,
  Query,
  Mutation,
  ResolveField,
  Parent
} from '@nestjs/graphql';
import { FindManySaleItemArgs, SaleItemsOutput } from '../sale-item/dto';
import { User } from '../user/dto';
import {
  CreateOneSaleArgsCustom,
  DeleteOneSaleArgs,
  FindManySaleArgs,
  FindUniqueSaleArgs,
  UpdateOneSaleArgs
} from './dto';
import { Sale } from './dto';
import { SalesOutput } from './dto/output';
import { SaleService } from './sale.service';

@Resolver(() => {
  return Sale;
})
export class SaleResolver {
  constructor(private readonly service: SaleService) {}

  @Query(
    () => {
      return Sale;
    },
    { name: 'sale' }
  )
  findUnique(@Args() args: FindUniqueSaleArgs) {
    return this.service.findUnique(args);
  }

  @Query(
    () => {
      return SalesOutput;
    },
    { name: 'sales' }
  )
  findMany(@Args() args: FindManySaleArgs) {
    return this.service.findMany(args);
  }

  @Mutation(
    () => {
      return Sale;
    },
    { name: 'createSale', nullable: true }
  )
  createOne(@Args() args: CreateOneSaleArgsCustom) {
    return this.service.createOne(args);
  }

  // @Mutation(() => Boolean, { name: 'createSales' })
  // createMany(@Args() args: CreateManySaleArgs) {
  //   return this.service.createMany(args);
  // }

  @Mutation(
    () => {
      return Sale;
    },
    { name: 'updateSale', nullable: true }
  )
  updateOne(@Args() args: UpdateOneSaleArgs) {
    return this.service.updateOne(args);
  }

  @Mutation(
    () => {
      return Sale;
    },
    { name: 'deleteSale', nullable: true }
  )
  deleteOne(@Args() args: DeleteOneSaleArgs) {
    return this.service.deleteOne(args);
  }

  @ResolveField(
    () => {
      return User;
    },
    { name: 'blameUser', nullable: true }
  )
  forBlameUser(@Parent() parent: Sale) {
    return this.service.forBlameUser(parent);
  }

  private normalizeFloat(value: number) {
    if (typeof value !== 'number') return 0;
    if (!Number.isFinite(value)) return 0;
    return value || 0;
  }

  @ResolveField(
    () => {
      return SaleItemsOutput;
    },
    { name: 'saleItems' }
  )
  forSaleItems(@Parent() parent: Sale, @Args() args: FindManySaleItemArgs) {
    return this.service.forSaleItems(parent, args);
  }

  @ResolveField(
    () => {
      return Number;
    },
    { name: 'totalCostValueDecimal' }
  )
  forTotalCostValueDecimal(@Parent() { totalCostValue }: Sale) {
    return this.normalizeFloat(totalCostValue / 100);
  }

  @ResolveField(
    () => {
      return Number;
    },
    { name: 'totalValueDecimal' }
  )
  forTotalValueDecimal(@Parent() { totalValue }: Sale) {
    return this.normalizeFloat(totalValue / 100);
  }

  @ResolveField(
    () => {
      return Number;
    },
    { name: 'netMarginValue' }
  )
  forNetMarginValue(@Parent() { totalValue, totalCostValue }: Sale) {
    return this.normalizeFloat(totalValue - totalCostValue);
  }

  @ResolveField(
    () => {
      return Number;
    },
    { name: 'netMarginPercent' }
  )
  forNetMarginPercent(@Parent() { totalValue, totalCostValue }: Sale) {
    return this.normalizeFloat((totalValue - totalCostValue) / totalCostValue);
  }
}
