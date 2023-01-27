import { ArgsType, Field, InputType, PickType } from '@nestjs/graphql';
import {
  CreateOneSaleArgs as GeneratedCreateOneSaleArgs,
  SaleCreateInput as GeneratedSaleCreateInput,
  SaleItemCreateNestedManyWithoutSaleInput as GeneratedSaleItemCreateNestedManyWithoutSaleInput,
} from '@Prisma/index';

@InputType()
export class SaleItemCreateNestedManyWithoutSaleInputCustom extends PickType(
  GeneratedSaleItemCreateNestedManyWithoutSaleInput,
  ['create'],
) {}

@InputType()
export class SaleCreateInputCustom extends GeneratedSaleCreateInput {
  @Field(() => SaleItemCreateNestedManyWithoutSaleInputCustom)
  saleItems!: SaleItemCreateNestedManyWithoutSaleInputCustom;
}

@ArgsType()
export class CreateOneSaleArgsCustom extends GeneratedCreateOneSaleArgs {
  @Field(() => SaleCreateInputCustom, { nullable: false })
  data!: SaleCreateInputCustom;
}
