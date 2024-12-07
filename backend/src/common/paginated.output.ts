import { Type } from '@nestjs/common';
import { Field, ObjectType, Int } from '@nestjs/graphql';

export function PaginatedOutput<T extends Type>(classRef: T): any {
  @ObjectType(`${classRef.name}Paginated`, { isAbstract: true })
  abstract class PageInfo {
    @Field(
      () => {
        return Int;
      },
      {
        nullable: true,
        description: 'Count for query results without skip, take and cursor'
      }
    )
    total?: number;

    @Field(
      () => {
        return Int;
      },
      { nullable: true, description: 'Number of current page' }
    )
    currentPage?: number;

    @Field(
      () => {
        return Int;
      },
      { nullable: true, description: 'Number of last page' }
    )
    lastPage?: number;

    @Field(
      () => {
        return Boolean;
      },
      {
        nullable: true,
        description:
          'Boolean to use on a cursor-based pagination. E.g: Mobile scroll'
      }
    )
    hasNextPage?: number;

    @Field(
      () => {
        return Int;
      },
      { nullable: true }
    )
    nextCursor?: number;
  }

  @ObjectType({ isAbstract: true })
  abstract class Pagination {
    @Field(() => {
      return [classRef];
    })
    nodes: Array<T>;

    @Field(
      () => {
        return PageInfo;
      },
      {
        nullable: true,
        description: 'Pagination info for findMany requests'
      }
    )
    pageInfo?: PageInfo;
  }

  return Pagination;
}
