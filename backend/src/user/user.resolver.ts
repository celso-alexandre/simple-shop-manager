import { Resolver, Args, Query } from '@nestjs/graphql';
import { FindManyUserArgs, FindUniqueUserArgs, UsersOutput } from './dto';
import { User } from './dto';
import { UserService } from './user.service';

@Resolver(() => {
  return User;
})
export class UserResolver {
  constructor(private readonly service: UserService) {}

  @Query(
    () => {
      return User;
    },
    { name: 'user' }
  )
  findUnique(@Args() args: FindUniqueUserArgs) {
    return this.service.findUnique(args);
  }

  @Query(
    () => {
      return UsersOutput;
    },
    { name: 'users' }
  )
  findMany(@Args() args: FindManyUserArgs) {
    return this.service.findMany(args);
  }

  // @Mutation(
  //   () => {
  //     return User;
  //   },
  //   { name: 'createUser' }
  // )
  // createOne(@Args() args: CreateOneUserArgs) {
  //   return this.service.createOne(args);
  // }

  // @Mutation(
  //   () => {
  //     return Boolean;
  //   },
  //   { name: 'createUsers' }
  // )
  // createMany(@Args() args: CreateManyUserArgs) {
  //   return this.service.createMany(args);
  // }

  // @Mutation(
  //   () => {
  //     return User;
  //   },
  //   { name: 'updateUser' }
  // )
  // updateOne(@Args() args: UpdateOneUserArgs) {
  //   return this.service.updateOne(args);
  // }

  // @Mutation(
  //   () => {
  //     return User;
  //   },
  //   { name: 'deleteUser' }
  // )
  // deleteOne(@Args() args: DeleteOneUserArgs) {
  //   return this.service.deleteOne(args);
  // }
}
