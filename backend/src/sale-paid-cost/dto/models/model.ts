import { Directive, ObjectType } from '@nestjs/graphql';
import { SalePaidCost as GeneratedSale } from '@Prisma/index';

@ObjectType()
@Directive('@key(fields: "id")')
export class SalePaidCost extends GeneratedSale {}
