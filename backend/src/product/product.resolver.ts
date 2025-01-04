import {
  Resolver,
  Args,
  Query,
  Mutation,
  ResolveField,
  Parent
} from '@nestjs/graphql';
import { Provider } from '../provider/dto';
import { User } from '../user/dto';
import {
  CreateOneProductArgs,
  DeleteOneProductArgs,
  FindManyProductArgs,
  FindUniqueProductArgs,
  ProductsOutput,
  UpdateOneProductArgs
} from './dto';
import { Product } from './dto';
import { ProductService } from './product.service';

@Resolver(() => {
  return Product;
})
export class ProductResolver {
  constructor(private readonly service: ProductService) {}

  @Query(
    () => {
      return Product;
    },
    { name: 'product' }
  )
  findUnique(@Args() args: FindUniqueProductArgs) {
    return this.service.findUnique(args);
  }

  @Query(
    () => {
      return ProductsOutput;
    },
    { name: 'products' }
  )
  findMany(@Args() args: FindManyProductArgs) {
    return this.service.findMany(args);
  }

  @Mutation(
    () => {
      return Product;
    },
    { name: 'createProduct' }
  )
  createOne(@Args() args: CreateOneProductArgs) {
    return this.service.createOne(args);
  }

  @Mutation(
    () => {
      return Product;
    },
    { name: 'updateProduct' }
  )
  updateOne(@Args() args: UpdateOneProductArgs) {
    return this.service.updateOne(args);
  }

  @Mutation(
    () => {
      return Product;
    },
    { name: 'deleteProduct' }
  )
  deleteOne(@Args() args: DeleteOneProductArgs) {
    return this.service.deleteOne(args);
  }

  @ResolveField(
    () => {
      return Number;
    },
    { name: 'netMarginValue' }
  )
  forNetMarginValue(@Parent() { priceValue, costValue }: Product) {
    return priceValue - costValue;
  }

  @ResolveField(
    () => {
      return Number;
    },
    { name: 'netMarginPercent' }
  )
  forNetMarginPercent(@Parent() { priceValue, costValue }: Product) {
    if (!costValue || !priceValue) {
      return 0;
    }
    return (priceValue - costValue) / costValue;
  }

  @ResolveField(
    () => {
      return Number;
    },
    { name: 'costValueDecimal' }
  )
  forCostValueDecimal(@Parent() { costValue }: Product) {
    return costValue / 100;
  }

  @ResolveField(
    () => {
      return Number;
    },
    { name: 'priceValueDecimal' }
  )
  forPriceValueDecimal(@Parent() { priceValue }: Product) {
    return priceValue / 100;
  }

  @ResolveField(
    () => {
      return User;
    },
    { name: 'blameUser', nullable: true }
  )
  forBlameUser(@Parent() parent: Product) {
    return this.service.forBlameUser(parent);
  }

  @ResolveField(
    () => {
      return Provider;
    },
    { name: 'provider', nullable: true }
  )
  forProvider(@Parent() parent: Product) {
    return this.service.forProvider(parent);
  }
}
