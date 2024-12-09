import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AggregateProduct {
  @Field(() => Int)
  priceValue: number;

  @Field(() => Int)
  costValue: number;

  @Field(() => Int)
  netValue: number;

  @Field(() => Int)
  qty: number;
}
