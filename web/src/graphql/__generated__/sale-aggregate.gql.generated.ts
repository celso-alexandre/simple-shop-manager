import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type SaleAggregateQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.SaleWhereInputCustom>;
}>;


export type SaleAggregateQuery = { __typename?: 'Query', totalSale: { __typename?: 'AggregateSale', totalCostValue: number, netValue: number, totalValue: number, count?: number | null } };


export const SaleAggregateDocument = gql`
    query SaleAggregate($where: SaleWhereInputCustom) {
  totalSale: saleAggregate(where: $where) {
    totalCostValue
    netValue
    totalValue
    count(where: $where)
  }
}
    `;

/**
 * __useSaleAggregateQuery__
 *
 * To run a query within a React component, call `useSaleAggregateQuery` and pass it any options that fit your needs.
 * When your component renders, `useSaleAggregateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSaleAggregateQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useSaleAggregateQuery(baseOptions?: Apollo.QueryHookOptions<SaleAggregateQuery, SaleAggregateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SaleAggregateQuery, SaleAggregateQueryVariables>(SaleAggregateDocument, options);
      }
export function useSaleAggregateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SaleAggregateQuery, SaleAggregateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SaleAggregateQuery, SaleAggregateQueryVariables>(SaleAggregateDocument, options);
        }
export function useSaleAggregateSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SaleAggregateQuery, SaleAggregateQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SaleAggregateQuery, SaleAggregateQueryVariables>(SaleAggregateDocument, options);
        }
export type SaleAggregateQueryHookResult = ReturnType<typeof useSaleAggregateQuery>;
export type SaleAggregateLazyQueryHookResult = ReturnType<typeof useSaleAggregateLazyQuery>;
export type SaleAggregateSuspenseQueryHookResult = ReturnType<typeof useSaleAggregateSuspenseQuery>;
export type SaleAggregateQueryResult = Apollo.QueryResult<SaleAggregateQuery, SaleAggregateQueryVariables>;