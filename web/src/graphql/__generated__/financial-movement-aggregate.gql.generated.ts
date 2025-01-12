import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type FinancialMovementAggregateQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type FinancialMovementAggregateQuery = { __typename?: 'Query', financialMovementAggregate: { __typename?: 'AggregateFinancialMovement', value: number, count?: number | null } };


export const FinancialMovementAggregateDocument = gql`
    query FinancialMovementAggregate {
  financialMovementAggregate {
    value
    count
  }
}
    `;

/**
 * __useFinancialMovementAggregateQuery__
 *
 * To run a query within a React component, call `useFinancialMovementAggregateQuery` and pass it any options that fit your needs.
 * When your component renders, `useFinancialMovementAggregateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFinancialMovementAggregateQuery({
 *   variables: {
 *   },
 * });
 */
export function useFinancialMovementAggregateQuery(baseOptions?: Apollo.QueryHookOptions<FinancialMovementAggregateQuery, FinancialMovementAggregateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FinancialMovementAggregateQuery, FinancialMovementAggregateQueryVariables>(FinancialMovementAggregateDocument, options);
      }
export function useFinancialMovementAggregateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FinancialMovementAggregateQuery, FinancialMovementAggregateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FinancialMovementAggregateQuery, FinancialMovementAggregateQueryVariables>(FinancialMovementAggregateDocument, options);
        }
export function useFinancialMovementAggregateSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FinancialMovementAggregateQuery, FinancialMovementAggregateQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FinancialMovementAggregateQuery, FinancialMovementAggregateQueryVariables>(FinancialMovementAggregateDocument, options);
        }
export type FinancialMovementAggregateQueryHookResult = ReturnType<typeof useFinancialMovementAggregateQuery>;
export type FinancialMovementAggregateLazyQueryHookResult = ReturnType<typeof useFinancialMovementAggregateLazyQuery>;
export type FinancialMovementAggregateSuspenseQueryHookResult = ReturnType<typeof useFinancialMovementAggregateSuspenseQuery>;
export type FinancialMovementAggregateQueryResult = Apollo.QueryResult<FinancialMovementAggregateQuery, FinancialMovementAggregateQueryVariables>;