import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ProductAggregateQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type ProductAggregateQuery = { __typename?: 'Query', productAggregate: { __typename?: 'AggregateProduct', costValue: number, netValue: number, priceValue: number, count?: number | null, qty: number } };


export const ProductAggregateDocument = gql`
    query ProductAggregate {
  productAggregate {
    costValue
    netValue
    priceValue
    count
    qty
  }
}
    `;

/**
 * __useProductAggregateQuery__
 *
 * To run a query within a React component, call `useProductAggregateQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductAggregateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductAggregateQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductAggregateQuery(baseOptions?: Apollo.QueryHookOptions<ProductAggregateQuery, ProductAggregateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductAggregateQuery, ProductAggregateQueryVariables>(ProductAggregateDocument, options);
      }
export function useProductAggregateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductAggregateQuery, ProductAggregateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductAggregateQuery, ProductAggregateQueryVariables>(ProductAggregateDocument, options);
        }
export function useProductAggregateSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ProductAggregateQuery, ProductAggregateQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProductAggregateQuery, ProductAggregateQueryVariables>(ProductAggregateDocument, options);
        }
export type ProductAggregateQueryHookResult = ReturnType<typeof useProductAggregateQuery>;
export type ProductAggregateLazyQueryHookResult = ReturnType<typeof useProductAggregateLazyQuery>;
export type ProductAggregateSuspenseQueryHookResult = ReturnType<typeof useProductAggregateSuspenseQuery>;
export type ProductAggregateQueryResult = Apollo.QueryResult<ProductAggregateQuery, ProductAggregateQueryVariables>;