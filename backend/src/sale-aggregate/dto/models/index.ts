import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AggregateSale {
  @Field(() => Int)
  totalValue: number;

  @Field(() => Int)
  totalCostValue: number;

  @Field(() => Int)
  netValue: number;
}
