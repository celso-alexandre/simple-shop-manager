import { FinancialMovement } from '../models';
import { PaginatedOutput } from '../../../common/paginated.output';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class FinancialMovementsOutput extends PaginatedOutput(
  FinancialMovement
) {}
