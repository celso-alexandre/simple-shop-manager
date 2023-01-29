import { SalePaidCost } from '../models';
import { PaginatedOutput } from '../../../common/paginated.output';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SalesOutput extends PaginatedOutput(SalePaidCost) {}
