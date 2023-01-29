import { Request, UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { User } from '../user/dto';
import { UserService } from '../user/user.service';
import { LoginArgs } from './dto/args/login.args';
import { Login } from './dto/models';
import { LocalAuthGuard } from './guard/local-auth.guard';

@Resolver(() => Login)
export class AuthResolver {
  constructor(private readonly service: UserService) {}

  @Query(() => User, { name: 'login' })
  @UseGuards(LocalAuthGuard)
  login(@Args() args: LoginArgs, @Request() req: any): Promise<User> {
    return req.user;
  }
}
