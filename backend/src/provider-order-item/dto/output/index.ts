import { ProviderOrderItem } from '../models';
import { PaginatedOutput } from '../../../common/paginated.output';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProviderOrderItemsOutput extends PaginatedOutput(
  ProviderOrderItem
) {}
