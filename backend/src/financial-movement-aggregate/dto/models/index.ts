import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AggregateFinancialMovement {
  @Field(() => Int)
  value: number;
}
