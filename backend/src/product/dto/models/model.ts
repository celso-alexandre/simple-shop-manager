import { Directive, ObjectType } from '@nestjs/graphql';
import { Product as GeneratedProduct } from '@Prisma/index';

@ObjectType()
@Directive('@key(fields: "id")')
export class Product extends GeneratedProduct {}
