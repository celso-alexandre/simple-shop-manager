import { Directive, Field, ObjectType } from '@nestjs/graphql';
import { Product as GeneratedProduct } from '@Prisma/index';
import { ExceptionKeys } from '../../../common/errors.enum';

@ObjectType()
@Directive('@key(fields: "id")')
export class Product extends GeneratedProduct {
  @Field(() => {
    return ExceptionKeys;
  }, { nullable: true })
    errors?: keyof typeof ExceptionKeys;
}
