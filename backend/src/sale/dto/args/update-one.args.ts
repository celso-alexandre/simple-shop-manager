import { ArgsType, Field, InputType, PickType } from '@nestjs/graphql';
import {
  UpdateOneSaleArgs as GeneratedUpdateOneSaleArgs,
  SaleUpdateInput as GeneratedSaleUpdateInput,
  SaleItemUpdateManyWithoutSaleNestedInput as GeneratedSaleItemUpdateManyWithoutSaleNestedInput
} from '@Prisma/index';

@InputType()
export class SaleItemUpdateManyWithoutSaleNestedInputCustom extends PickType(
  GeneratedSaleItemUpdateManyWithoutSaleNestedInput,
  ['create', 'update', 'deleteMany']
) {}

@InputType()
export class SaleUpdateInputCustom extends GeneratedSaleUpdateInput {
  @Field(() => {
    return SaleItemUpdateManyWithoutSaleNestedInputCustom;
  })
  saleItems!: SaleItemUpdateManyWithoutSaleNestedInputCustom;
}

@ArgsType()
export class UpdateOneSaleArgs extends GeneratedUpdateOneSaleArgs {
  @Field(
    () => {
      return SaleUpdateInputCustom;
    },
    { nullable: false }
  )
  data!: SaleUpdateInputCustom;
}
