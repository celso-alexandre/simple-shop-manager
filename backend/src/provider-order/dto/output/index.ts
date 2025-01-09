import { ProviderOrder } from '../models';
import { PaginatedOutput } from '../../../common/paginated.output';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProviderOrdersOutput extends PaginatedOutput(ProviderOrder) {}
