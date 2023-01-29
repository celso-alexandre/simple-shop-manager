import { UseGuards } from '@nestjs/common';
import { Resolver, Args, Query, Mutation } from '@nestjs/graphql';
import { GqlAuthGuard } from '../auth/guard/gql-auth.guard';
import {
  CreateOneUserArgs,
  FindManyUserArgs,
  FindUniqueUserArgs,
  UpdateOneUserArgs,
  UsersOutput,
} from './dto';
import { User } from './dto';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly service: UserService) {}

  @Mutation(() => User, { name: 'createUser' })
  createOne(@Args() args: CreateOneUserArgs) {
    return this.service.createOne(args);
  }

  @Query(() => User, { name: 'user' })
  @UseGuards(GqlAuthGuard)
  findUnique(@Args() args: FindUniqueUserArgs) {
    return this.service.findUnique(args);
  }

  @Query(() => UsersOutput, { name: 'users' })
  @UseGuards(GqlAuthGuard)
  findMany(@Args() args: FindManyUserArgs) {
    return this.service.findMany(args);
  }

  @Mutation(() => User, { name: 'updateUser' })
  @UseGuards(GqlAuthGuard)
  updateOne(@Args() args: UpdateOneUserArgs) {
    return this.service.updateOne(args);
  }
}
