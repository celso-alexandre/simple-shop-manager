import { Resolver, Args, Query, Mutation } from '@nestjs/graphql';
import {
  CreateManyUserArgs,
  CreateOneUserArgs,
  DeleteOneUserArgs,
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

  @Query(() => User, { name: 'user' })
  findUnique(@Args() args: FindUniqueUserArgs) {
    return this.service.findUnique(args);
  }

  @Query(() => UsersOutput, { name: 'users' })
  findMany(@Args() args: FindManyUserArgs) {
    return this.service.findMany(args);
  }

  @Mutation(() => User, { name: 'createUser' })
  createOne(@Args() args: CreateOneUserArgs) {
    return this.service.createOne(args);
  }

  @Mutation(() => Boolean, { name: 'createUsers' })
  createMany(@Args() args: CreateManyUserArgs) {
    return this.service.createMany(args);
  }

  @Mutation(() => User, { name: 'updateUser' })
  updateOne(@Args() args: UpdateOneUserArgs) {
    return this.service.updateOne(args);
  }

  @Mutation(() => User, { name: 'deleteUser' })
  deleteOne(@Args() args: DeleteOneUserArgs) {
    return this.service.deleteOne(args);
  }
}
