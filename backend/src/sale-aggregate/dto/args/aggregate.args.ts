import { ArgsType, Field, InputType } from '@nestjs/graphql';

@InputType()
class SaleWhereInputCustom {
  @Field(() => Date, { nullable: true })
  startDate?: Date | string;

  @Field(() => Date, { nullable: true })
  endDate?: Date | string;
}

@ArgsType()
export class SaleAggregateArgsCustom {
  @Field(() => SaleWhereInputCustom, { nullable: true })
  where?: SaleWhereInputCustom;
}
