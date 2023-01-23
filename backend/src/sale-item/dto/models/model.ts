import { Directive, ObjectType } from '@nestjs/graphql';
import { SaleItem as GeneratedSaleItem } from '@Prisma/index';

@ObjectType()
@Directive('@key(fields: "id")')
export class SaleItem extends GeneratedSaleItem {}
