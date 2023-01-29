import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { compare as compareToHash } from 'bcrypt';
import { User } from '../user/dto';
import { Login } from './dto/models';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string) {
    console.log({ email, pass });
    if (!email) return null;
    const user = await this.usersService.findUnique({
      where: { email },
    });
    console.log('user', user);
    if (!user?.isActive) return null;
    const verified = await compareToHash(pass, user.password);
    if (!verified) return null;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = user;
    return result;
  }

  login(user: User): Login {
    const payload = {
      email: user.email,
      sub: user.id,
    };

    return {
      token: this.jwtService.sign(payload),
    };
  }
}
