import {
  Resolver,
  Args,
  Query,
  Mutation,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { FindManyProductArgs, ProductsOutput } from '../product/dto';
import { User } from '../user/dto';
import {
  CreateManyProviderArgs,
  CreateOneProviderArgs,
  DeleteOneProviderArgs,
  FindManyProviderArgs,
  FindUniqueProviderArgs,
  ProvidersOutput,
  UpdateOneProviderArgs,
} from './dto';
import { Provider } from './dto';
import { ProviderService } from './provider.service';

@Resolver(() => Provider)
export class ProviderResolver {
  constructor(private readonly service: ProviderService) {}

  @Query(() => Provider, { name: 'provider' })
  findUnique(@Args() args: FindUniqueProviderArgs) {
    return this.service.findUnique(args);
  }

  @Query(() => ProvidersOutput, { name: 'providers' })
  findMany(@Args() args: FindManyProviderArgs) {
    return this.service.findMany(args);
  }

  @Mutation(() => Provider, { name: 'createProvider' })
  createOne(@Args() args: CreateOneProviderArgs) {
    return this.service.createOne(args);
  }

  @Mutation(() => Boolean, { name: 'createProviders' })
  createMany(@Args() args: CreateManyProviderArgs) {
    return this.service.createMany(args);
  }

  @Mutation(() => Provider, { name: 'updateProvider' })
  updateOne(@Args() args: UpdateOneProviderArgs) {
    return this.service.updateOne(args);
  }

  @Mutation(() => Provider, { name: 'deleteProvider' })
  deleteOne(@Args() args: DeleteOneProviderArgs) {
    return this.service.deleteOne(args);
  }

  @ResolveField(() => User, { name: 'blameUser', nullable: true })
  forBlameUser(@Parent() parent: Provider) {
    return this.service.forBlameUser(parent);
  }

  @ResolveField(() => ProductsOutput, { name: 'products' })
  forProducts(@Parent() parent: Provider, @Args() args: FindManyProductArgs) {
    return this.service.forProducts(parent, args);
  }
}
