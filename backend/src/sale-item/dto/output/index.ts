import { SaleItem } from '../models';
import { PaginatedOutput } from '../../../common/paginated.output';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SaleItemsOutput extends PaginatedOutput(SaleItem) {}
