import { UseGuards } from '@nestjs/common';
import {
  Resolver,
  Args,
  Query,
  Mutation,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { GqlAuthGuard } from '../auth/guard/gql-auth.guard';
import { FindManySaleItemArgs, SaleItemsOutput } from '../sale-item/dto';
import { User } from '../user/dto';
import {
  CreateOneSaleArgsCustom,
  DeleteOneSaleArgs,
  FindManySaleArgs,
  FindUniqueSaleArgs,
  UpdateOneSaleArgs,
} from './dto';
import { Sale } from './dto';
import { SalesOutput } from './dto/output';
import { SaleService } from './sale.service';

@Resolver(() => Sale)
@UseGuards(GqlAuthGuard)
export class SaleResolver {
  constructor(private readonly service: SaleService) {}

  @Query(() => Sale, { name: 'sale' })
  findUnique(@Args() args: FindUniqueSaleArgs) {
    return this.service.findUnique(args);
  }

  @Query(() => SalesOutput, { name: 'sales' })
  findMany(@Args() args: FindManySaleArgs) {
    return this.service.findMany(args);
  }

  @Mutation(() => Sale, { name: 'createSale' })
  createOne(@Args() args: CreateOneSaleArgsCustom) {
    return this.service.createOne(args);
  }

  // @Mutation(() => Boolean, { name: 'createSales' })
  // createMany(@Args() args: CreateManySaleArgs) {
  //   return this.service.createMany(args);
  // }

  @Mutation(() => Sale, { name: 'updateSale' })
  updateOne(@Args() args: UpdateOneSaleArgs) {
    return this.service.updateOne(args);
  }

  @Mutation(() => Sale, { name: 'deleteSale' })
  deleteOne(@Args() args: DeleteOneSaleArgs) {
    return this.service.deleteOne(args);
  }

  @ResolveField(() => User, { name: 'blameUser', nullable: true })
  forBlameUser(@Parent() parent: Sale) {
    return this.service.forBlameUser(parent);
  }

  private normalizeFloat(value: number) {
    if (typeof value !== 'number') return 0;
    if (!Number.isFinite(value)) return 0;
    return value || 0;
  }

  @ResolveField(() => SaleItemsOutput, { name: 'saleItems' })
  forSaleItems(@Parent() parent: Sale, @Args() args: FindManySaleItemArgs) {
    return this.service.forSaleItems(parent, args);
  }

  @ResolveField(() => Number, { name: 'totalCostValueDecimal' })
  forTotalCostValueDecimal(@Parent() { totalCostValue }: Sale) {
    return this.normalizeFloat(totalCostValue / 100);
  }

  @ResolveField(() => Number, { name: 'totalValueDecimal' })
  forTotalValueDecimal(@Parent() { totalValue }: Sale) {
    return this.normalizeFloat(totalValue / 100);
  }

  @ResolveField(() => Number, { name: 'netMarginValue' })
  forNetMarginValue(@Parent() { totalValue, totalCostValue }: Sale) {
    return this.normalizeFloat(totalValue - totalCostValue);
  }

  @ResolveField(() => Number, { name: 'netMarginPercent' })
  forNetMarginPercent(@Parent() { totalValue, totalCostValue }: Sale) {
    return this.normalizeFloat((totalValue - totalCostValue) / totalValue);
  }
}
