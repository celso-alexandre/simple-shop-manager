import {
  Resolver,
  Args,
  Query,
  Mutation,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Product } from '../product/dto';
import { Provider } from '../provider/dto';
import { User } from '../user/dto';
import {
  CreateManySaleArgs,
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

  @Mutation(() => Boolean, { name: 'createSales' })
  createMany(@Args() args: CreateManySaleArgs) {
    return this.service.createMany(args);
  }

  @Mutation(() => Sale, { name: 'updateSale' })
  updateOne(@Args() args: UpdateOneSaleArgs) {
    return this.service.updateOne(args);
  }

  @Mutation(() => Sale, { name: 'deleteSale' })
  deleteOne(@Args() args: DeleteOneSaleArgs) {
    return this.service.deleteOne(args);
  }

  @ResolveField(() => User, { name: 'blameUser' })
  forBlameUser(@Parent() parent: Sale) {
    return this.service.forBlameUser(parent);
  }

  @ResolveField(() => Provider, { name: 'provider' })
  forProvider(@Parent() parent: Sale) {
    return this.service.forProvider(parent);
  }

  @ResolveField(() => Product, { name: 'product' })
  forProduct(@Parent() parent: Sale) {
    return this.service.forProduct(parent);
  }
}
