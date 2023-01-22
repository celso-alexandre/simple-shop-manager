import { Directive, ObjectType } from '@nestjs/graphql';
import { Sale as GeneratedSale } from '@Prisma/index';

@ObjectType()
@Directive('@key(fields: "id")')
export class Sale extends GeneratedSale {}
