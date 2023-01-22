import { Resolver, Args, Query, Mutation } from '@nestjs/graphql';
import {
  CreateManyProductArgs,
  CreateOneProductArgs,
  DeleteOneProductArgs,
  FindManyProductArgs,
  FindUniqueProductArgs,
  UpdateOneProductArgs,
} from './dto';
import { Product } from './dto';
import { ProductService } from './product.service';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly service: ProductService) {}

  @Query(() => Product, { name: 'product' })
  findUnique(@Args() args: FindUniqueProductArgs): Promise<Product> {
    return this.service.findUnique(args);
  }

  @Query(() => [Product], { name: 'products' })
  findMany(@Args() args: FindManyProductArgs): Promise<Product[]> {
    return this.service.findMany(args);
  }

  @Mutation(() => Product, { name: 'createProduct' })
  createOne(@Args() args: CreateOneProductArgs): Promise<Product> {
    return this.service.createOne(args);
  }

  @Mutation(() => Boolean, { name: 'createProducts' })
  createMany(@Args() args: CreateManyProductArgs): Promise<boolean> {
    return this.service.createMany(args);
  }

  @Mutation(() => Product, { name: 'updateProduct' })
  updateOne(@Args() args: UpdateOneProductArgs): Promise<Product> {
    return this.service.updateOne(args);
  }

  @Mutation(() => Product, { name: 'deleteProduct' })
  deleteOne(@Args() args: DeleteOneProductArgs): Promise<Product> {
    return this.service.deleteOne(args);
  }
}
