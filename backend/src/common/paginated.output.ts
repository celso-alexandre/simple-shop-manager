import { Type } from '@nestjs/common';
import { Field, ObjectType, Int } from '@nestjs/graphql';

export function PaginatedOutput<T extends Type>(classRef: T): any {
  @ObjectType(`${classRef.name}Paginated`, { isAbstract: true })
  abstract class PageInfo {
    @Field(() => Int, {
      nullable: true,
      description: 'Count for query results without skip, take and cursor',
    })
    total?: number;

    @Field(() => Int, { nullable: true, description: 'Number of current page' })
    currentPage?: number;

    @Field(() => Int, { nullable: true, description: 'Number of last page' })
    lastPage?: number;

    @Field(() => Boolean, {
      nullable: true,
      description:
        'Boolean to use on a cursor-based pagination. E.g: Mobile scroll',
    })
    hasNextPage?: number;

    @Field(() => Int, { nullable: true })
    nextCursor?: number;
  }

  @ObjectType({ isAbstract: true })
  abstract class Pagination {
    @Field(() => [classRef], {
      description: 'Grouped ObjectType for findManyrequests',
    })
    nodes: Array<T>;

    @Field(() => PageInfo, {
      nullable: true,
      description: 'Pagination info for findMany requests',
    })
    pageInfo?: PageInfo;
  }

  return Pagination;
}
