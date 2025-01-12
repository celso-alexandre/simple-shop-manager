import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { FindManyUserArgs, FindUniqueUserArgs } from './dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  findUnique(args: FindUniqueUserArgs) {
    return this.prisma.user.findUniqueOrThrow(args);
  }

  findMany(args: FindManyUserArgs) {
    return this.prisma.findManyPaginated(this.prisma.user, args);
  }

  // createOne(args: CreateOneUserArgs) {
  //   return this.prisma.user.create(args);
  // }

  // async createMany(args: CreateManyUserArgs) {
  //   await this.prisma.user.createMany(args);
  //   return true;
  // }

  // updateOne(args: UpdateOneUserArgs) {
  //   return this.prisma.user.update(args);
  // }

  // deleteOne(args: DeleteOneUserArgs) {
  //   return this.prisma.user.delete(args);
  // }
}
