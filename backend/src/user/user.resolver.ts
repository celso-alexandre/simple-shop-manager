import { Resolver, Args, Query, Mutation } from '@nestjs/graphql';
import {
  CreateManyUserArgs,
  CreateOneUserArgs,
  DeleteManyUserArgs,
  DeleteOneUserArgs,
  FindManyUserArgs,
  FindUniqueUserArgs,
  UpdateOneUserArgs,
} from './dto';
import { User } from './dto';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly service: UserService) {}

  @Query(() => User, { name: 'user' })
  findUnique(@Args() args: FindUniqueUserArgs): Promise<User> {
    return this.service.findUnique(args);
  }

  @Query(() => [User], { name: 'users' })
  findMany(@Args() args: FindManyUserArgs): Promise<User[]> {
    return this.service.findMany(args);
  }

  @Mutation(() => User, { name: 'createUser' })
  createOne(@Args() args: CreateOneUserArgs): Promise<User> {
    return this.service.createOne(args);
  }

  @Mutation(() => Boolean, { name: 'createUsers' })
  createMany(@Args() args: CreateManyUserArgs): Promise<boolean> {
    return this.service.createMany(args);
  }

  @Mutation(() => User, { name: 'updateUser' })
  updateOne(@Args() args: UpdateOneUserArgs): Promise<User> {
    return this.service.updateOne(args);
  }

  @Mutation(() => User, { name: 'deleteUser' })
  deleteOne(@Args() args: DeleteOneUserArgs): Promise<User> {
    return this.service.deleteOne(args);
  }
}
