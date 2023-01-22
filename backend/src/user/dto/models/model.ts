import { Directive, ObjectType } from '@nestjs/graphql';
import { User as GeneratedUser } from '@Prisma/index';

@ObjectType()
@Directive('@key(fields: "id")')
export class User extends GeneratedUser {}
