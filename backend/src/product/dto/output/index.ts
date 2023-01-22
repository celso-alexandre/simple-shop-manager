import { Product } from '../models';
import { PaginatedOutput } from '../../../common/paginated.output';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProductsOutput extends PaginatedOutput(Product) {}
