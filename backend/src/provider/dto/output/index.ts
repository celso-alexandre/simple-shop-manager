import { Provider } from '../models';
import { PaginatedOutput } from '../../../common/paginated.output';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProvidersOutput extends PaginatedOutput(Provider) {}
