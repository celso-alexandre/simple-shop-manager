import { ArgsType, Field, InputType, PickType } from '@nestjs/graphql';
import {
  UpdateOneProviderOrderItemArgs as GeneratedUpdateOneProviderOrderItemArgs,
  ProviderOrderItemUpdateInput as GeneratedProviderOrderItemUpdateInput
} from '@Prisma/index';

@InputType()
export class CustomProviderOrderItemUpdateInput extends PickType(
  GeneratedProviderOrderItemUpdateInput,
  ['moveQty']
) {}

@ArgsType()
export class UpdateOneProviderOrderItemArgs extends GeneratedUpdateOneProviderOrderItemArgs {
  @Field(() => CustomProviderOrderItemUpdateInput, { nullable: false })
  data!: CustomProviderOrderItemUpdateInput;
}
