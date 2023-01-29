import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import {
  CreateOneUserArgs,
  FindManyUserArgs,
  FindUniqueUserArgs,
  UpdateOneUserArgs,
} from './dto';
import { genSalt, hash as genHash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  private async hashPassword(pass: string) {
    if (pass?.length < 4)
      throw new BadRequestException('Password requirements not met');

    const salt = await genSalt(10);
    return genHash(pass, salt);
  }

  findUnique(args: FindUniqueUserArgs, throwOnNotFound = true) {
    if (throwOnNotFound) return this.prisma.user.findUniqueOrThrow(args);
    return this.prisma.user.findUnique(args);
  }

  findMany(args: FindManyUserArgs) {
    return this.prisma.findManyPaginated(this.prisma.user, args);
  }

  async createOne(args: CreateOneUserArgs) {
    args.data.password = await this.hashPassword(args.data.password);
    return this.prisma.user.create(args);
  }

  updateOne(args: UpdateOneUserArgs) {
    args.data.password = undefined;
    return this.prisma.user.update(args);
  }
}
