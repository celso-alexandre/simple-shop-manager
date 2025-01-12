import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateFinancialMovementMutationVariables = Types.Exact<{
  data: Types.FinancialMovementCreateInput;
}>;


export type CreateFinancialMovementMutation = { __typename?: 'Mutation', createFinancialMovement: { __typename?: 'FinancialMovement', id: string } };

export type UpdateFinancialMovementMutationVariables = Types.Exact<{
  data: Types.FinancialMovementUpdateInput;
  where: Types.FinancialMovementWhereUniqueInput;
}>;


export type UpdateFinancialMovementMutation = { __typename?: 'Mutation', updateFinancialMovement: { __typename?: 'FinancialMovement', id: string } };

export type DeleteFinancialMovementMutationVariables = Types.Exact<{
  where: Types.FinancialMovementWhereUniqueInput;
}>;


export type DeleteFinancialMovementMutation = { __typename?: 'Mutation', deleteFinancialMovement: boolean };

export type FinancialMovementQueryVariables = Types.Exact<{
  where: Types.FinancialMovementWhereUniqueInput;
}>;


export type FinancialMovementQuery = { __typename?: 'Query', financialMovement: { __typename?: 'FinancialMovement', id: string, date: any, type: Types.FinancialMovementType, value: number, valueDecimal: number, providerOrderId?: string | null, saleId?: string | null } };

export type FinancialMovementsQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.FinancialMovementWhereInput>;
  orderBy?: Types.InputMaybe<Array<Types.FinancialMovementOrderByWithRelationInput> | Types.FinancialMovementOrderByWithRelationInput>;
  take?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  skip?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type FinancialMovementsQuery = { __typename?: 'Query', financialMovements: { __typename?: 'FinancialMovementsOutput', nodes: Array<{ __typename?: 'FinancialMovement', id: string, date: any, type: Types.FinancialMovementType, value: number, valueDecimal: number, providerOrderId?: string | null, saleId?: string | null }>, pageInfo?: { __typename?: 'FinancialMovementPaginated', currentPage?: number | null, hasNextPage?: boolean | null, lastPage?: number | null, nextCursor?: number | null, total?: number | null } | null } };


export const CreateFinancialMovementDocument = gql`
    mutation CreateFinancialMovement($data: FinancialMovementCreateInput!) {
  createFinancialMovement(data: $data) {
    id
  }
}
    `;
export type CreateFinancialMovementMutationFn = Apollo.MutationFunction<CreateFinancialMovementMutation, CreateFinancialMovementMutationVariables>;

/**
 * __useCreateFinancialMovementMutation__
 *
 * To run a mutation, you first call `useCreateFinancialMovementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFinancialMovementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFinancialMovementMutation, { data, loading, error }] = useCreateFinancialMovementMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateFinancialMovementMutation(baseOptions?: Apollo.MutationHookOptions<CreateFinancialMovementMutation, CreateFinancialMovementMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateFinancialMovementMutation, CreateFinancialMovementMutationVariables>(CreateFinancialMovementDocument, options);
      }
export type CreateFinancialMovementMutationHookResult = ReturnType<typeof useCreateFinancialMovementMutation>;
export type CreateFinancialMovementMutationResult = Apollo.MutationResult<CreateFinancialMovementMutation>;
export type CreateFinancialMovementMutationOptions = Apollo.BaseMutationOptions<CreateFinancialMovementMutation, CreateFinancialMovementMutationVariables>;
export const UpdateFinancialMovementDocument = gql`
    mutation UpdateFinancialMovement($data: FinancialMovementUpdateInput!, $where: FinancialMovementWhereUniqueInput!) {
  updateFinancialMovement(data: $data, where: $where) {
    id
  }
}
    `;
export type UpdateFinancialMovementMutationFn = Apollo.MutationFunction<UpdateFinancialMovementMutation, UpdateFinancialMovementMutationVariables>;

/**
 * __useUpdateFinancialMovementMutation__
 *
 * To run a mutation, you first call `useUpdateFinancialMovementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFinancialMovementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFinancialMovementMutation, { data, loading, error }] = useUpdateFinancialMovementMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateFinancialMovementMutation(baseOptions?: Apollo.MutationHookOptions<UpdateFinancialMovementMutation, UpdateFinancialMovementMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateFinancialMovementMutation, UpdateFinancialMovementMutationVariables>(UpdateFinancialMovementDocument, options);
      }
export type UpdateFinancialMovementMutationHookResult = ReturnType<typeof useUpdateFinancialMovementMutation>;
export type UpdateFinancialMovementMutationResult = Apollo.MutationResult<UpdateFinancialMovementMutation>;
export type UpdateFinancialMovementMutationOptions = Apollo.BaseMutationOptions<UpdateFinancialMovementMutation, UpdateFinancialMovementMutationVariables>;
export const DeleteFinancialMovementDocument = gql`
    mutation DeleteFinancialMovement($where: FinancialMovementWhereUniqueInput!) {
  deleteFinancialMovement(where: $where)
}
    `;
export type DeleteFinancialMovementMutationFn = Apollo.MutationFunction<DeleteFinancialMovementMutation, DeleteFinancialMovementMutationVariables>;

/**
 * __useDeleteFinancialMovementMutation__
 *
 * To run a mutation, you first call `useDeleteFinancialMovementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFinancialMovementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFinancialMovementMutation, { data, loading, error }] = useDeleteFinancialMovementMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteFinancialMovementMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFinancialMovementMutation, DeleteFinancialMovementMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteFinancialMovementMutation, DeleteFinancialMovementMutationVariables>(DeleteFinancialMovementDocument, options);
      }
export type DeleteFinancialMovementMutationHookResult = ReturnType<typeof useDeleteFinancialMovementMutation>;
export type DeleteFinancialMovementMutationResult = Apollo.MutationResult<DeleteFinancialMovementMutation>;
export type DeleteFinancialMovementMutationOptions = Apollo.BaseMutationOptions<DeleteFinancialMovementMutation, DeleteFinancialMovementMutationVariables>;
export const FinancialMovementDocument = gql`
    query FinancialMovement($where: FinancialMovementWhereUniqueInput!) {
  financialMovement(where: $where) {
    id
    date
    type
    value
    valueDecimal
    providerOrderId
    saleId
  }
}
    `;

/**
 * __useFinancialMovementQuery__
 *
 * To run a query within a React component, call `useFinancialMovementQuery` and pass it any options that fit your needs.
 * When your component renders, `useFinancialMovementQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFinancialMovementQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFinancialMovementQuery(baseOptions: Apollo.QueryHookOptions<FinancialMovementQuery, FinancialMovementQueryVariables> & ({ variables: FinancialMovementQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FinancialMovementQuery, FinancialMovementQueryVariables>(FinancialMovementDocument, options);
      }
export function useFinancialMovementLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FinancialMovementQuery, FinancialMovementQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FinancialMovementQuery, FinancialMovementQueryVariables>(FinancialMovementDocument, options);
        }
export function useFinancialMovementSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FinancialMovementQuery, FinancialMovementQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FinancialMovementQuery, FinancialMovementQueryVariables>(FinancialMovementDocument, options);
        }
export type FinancialMovementQueryHookResult = ReturnType<typeof useFinancialMovementQuery>;
export type FinancialMovementLazyQueryHookResult = ReturnType<typeof useFinancialMovementLazyQuery>;
export type FinancialMovementSuspenseQueryHookResult = ReturnType<typeof useFinancialMovementSuspenseQuery>;
export type FinancialMovementQueryResult = Apollo.QueryResult<FinancialMovementQuery, FinancialMovementQueryVariables>;
export const FinancialMovementsDocument = gql`
    query FinancialMovements($where: FinancialMovementWhereInput, $orderBy: [FinancialMovementOrderByWithRelationInput!], $take: Int, $skip: Int) {
  financialMovements(where: $where, orderBy: $orderBy, take: $take, skip: $skip) {
    nodes {
      id
      date
      type
      value
      valueDecimal
      providerOrderId
      saleId
    }
    pageInfo {
      currentPage
      hasNextPage
      lastPage
      nextCursor
      total
    }
  }
}
    `;

/**
 * __useFinancialMovementsQuery__
 *
 * To run a query within a React component, call `useFinancialMovementsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFinancialMovementsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFinancialMovementsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useFinancialMovementsQuery(baseOptions?: Apollo.QueryHookOptions<FinancialMovementsQuery, FinancialMovementsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FinancialMovementsQuery, FinancialMovementsQueryVariables>(FinancialMovementsDocument, options);
      }
export function useFinancialMovementsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FinancialMovementsQuery, FinancialMovementsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FinancialMovementsQuery, FinancialMovementsQueryVariables>(FinancialMovementsDocument, options);
        }
export function useFinancialMovementsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FinancialMovementsQuery, FinancialMovementsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FinancialMovementsQuery, FinancialMovementsQueryVariables>(FinancialMovementsDocument, options);
        }
export type FinancialMovementsQueryHookResult = ReturnType<typeof useFinancialMovementsQuery>;
export type FinancialMovementsLazyQueryHookResult = ReturnType<typeof useFinancialMovementsLazyQuery>;
export type FinancialMovementsSuspenseQueryHookResult = ReturnType<typeof useFinancialMovementsSuspenseQuery>;
export type FinancialMovementsQueryResult = Apollo.QueryResult<FinancialMovementsQuery, FinancialMovementsQueryVariables>;