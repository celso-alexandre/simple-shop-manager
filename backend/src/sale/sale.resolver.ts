import {
  Resolver,
  Args,
  Query,
  Mutation,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { FindManySaleItemArgs, SaleItemsOutput } from '../sale-item/dto';
import { User } from '../user/dto';
import {
  CreateOneSaleArgs,
  DeleteOneSaleArgs,
  FindManySaleArgs,
  FindUniqueSaleArgs,
  UpdateOneSaleArgs,
} from './dto';
import { Sale } from './dto';
import { SalesOutput } from './dto/output';
import { SaleService } from './sale.service';

@Resolver(() => Sale)
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
  createOne(@Args() args: CreateOneSaleArgs) {
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

  @ResolveField(() => SaleItemsOutput, { name: 'saleItems' })
  forSaleItems(@Parent() parent: Sale, @Args() args: FindManySaleItemArgs) {
    return this.service.forSaleItems(parent, args);
  }

  @ResolveField(() => Number, { name: 'netMarginValue' })
  forProfit(@Parent() { totalValue, totalCostValue }: Sale) {
    return totalValue - totalCostValue;
  }

  @ResolveField(() => Number, { name: 'netMarginPercent' })
  forProfitMargin(@Parent() { totalValue, totalCostValue }: Sale) {
    return (totalValue - totalCostValue) / totalValue;
  }
}
