import {
  Resolver,
  Args,
  Query,
  Mutation,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Provider } from '../provider/dto';
import { User } from '../user/dto';
import {
  CreateManyProductArgs,
  CreateOneProductArgs,
  DeleteOneProductArgs,
  FindManyProductArgs,
  FindUniqueProductArgs,
  ProductsOutput,
  UpdateOneProductArgs,
} from './dto';
import { Product } from './dto';
import { ProductService } from './product.service';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly service: ProductService) {}

  @Query(() => Product, { name: 'product' })
  findUnique(@Args() args: FindUniqueProductArgs) {
    return this.service.findUnique(args);
  }

  @Query(() => ProductsOutput, { name: 'products' })
  findMany(@Args() args: FindManyProductArgs) {
    return this.service.findMany(args);
  }

  @Mutation(() => Product, { name: 'createProduct' })
  createOne(@Args() args: CreateOneProductArgs) {
    return this.service.createOne(args);
  }

  @Mutation(() => Boolean, { name: 'createProducts' })
  createMany(@Args() args: CreateManyProductArgs) {
    return this.service.createMany(args);
  }

  @Mutation(() => Product, { name: 'updateProduct' })
  updateOne(@Args() args: UpdateOneProductArgs) {
    return this.service.updateOne(args);
  }

  @Mutation(() => Product, { name: 'deleteProduct' })
  deleteOne(@Args() args: DeleteOneProductArgs) {
    return this.service.deleteOne(args);
  }

  @ResolveField(() => Number, { name: 'netMarginValue' })
  forNetMarginValue(@Parent() { priceValue, costValue }: Product) {
    return priceValue - costValue;
  }

  @ResolveField(() => Number, { name: 'netMarginPercent' })
  forNetMarginPercent(@Parent() { priceValue, costValue }: Product) {
    return (priceValue - costValue) / costValue;
  }

  @ResolveField(() => Number, { name: 'costValueDecimal' })
  forCostValueDecimal(@Parent() { costValue }: Product) {
    return costValue / 100;
  }

  @ResolveField(() => Number, { name: 'priceValueDecimal' })
  forPriceValueDecimal(@Parent() { priceValue }: Product) {
    return priceValue / 100;
  }

  @ResolveField(() => User, { name: 'blameUser', nullable: true })
  forBlameUser(@Parent() parent: Product) {
    return this.service.forBlameUser(parent);
  }

  @ResolveField(() => Provider, { name: 'provider', nullable: true })
  forProvider(@Parent() parent: Product) {
    return this.service.forProvider(parent);
  }
}
