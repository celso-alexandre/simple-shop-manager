import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateProviderOrderMutationVariables = Types.Exact<{
  data: Types.ProviderOrderCreateInput;
}>;


export type CreateProviderOrderMutation = { __typename?: 'Mutation', createProviderOrder: { __typename?: 'ProviderOrder', id: string } };

export type UpdateProviderOrderMutationVariables = Types.Exact<{
  data: Types.ProviderOrderUpdateInput;
  where: Types.ProviderOrderWhereUniqueInput;
}>;


export type UpdateProviderOrderMutation = { __typename?: 'Mutation', updateProviderOrder: { __typename?: 'ProviderOrder', id: string } };

export type DeleteProviderOrderMutationVariables = Types.Exact<{
  where: Types.ProviderOrderWhereUniqueInput;
}>;


export type DeleteProviderOrderMutation = { __typename?: 'Mutation', deleteProviderOrder: boolean };

export type ProviderOrderQueryVariables = Types.Exact<{
  where: Types.ProviderOrderWhereUniqueInput;
}>;


export type ProviderOrderQuery = { __typename?: 'Query', providerOrder: { __typename?: 'ProviderOrder', id: string, date: any, totalValue: number, totalValueDecimal: number, createdAt: any, updatedAt: any, providerOrderItems: { __typename?: 'ProviderOrderItemsOutput', nodes: Array<{ __typename?: 'ProviderOrderItem', id: string, quantity: number, totalValue: number, totalValueDecimal: number, productId: string, providerId: string, product: { __typename?: 'Product', id: string, name: string, brandName?: string | null }, provider?: { __typename?: 'Provider', id: string, name: string, whatsapp?: string | null } | null }> } } };

export type ProviderOrdersQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.ProviderOrderWhereInput>;
  orderBy?: Types.InputMaybe<Array<Types.ProviderOrderOrderByWithRelationInput> | Types.ProviderOrderOrderByWithRelationInput>;
  take?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  skip?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type ProviderOrdersQuery = { __typename?: 'Query', providerOrders: { __typename?: 'ProviderOrdersOutput', nodes: Array<{ __typename?: 'ProviderOrder', id: string, date: any, totalValue: number, totalValueDecimal: number, createdAt: any, updatedAt: any }>, pageInfo?: { __typename?: 'ProviderOrderPaginated', currentPage?: number | null, hasNextPage?: boolean | null, lastPage?: number | null, nextCursor?: number | null, total?: number | null } | null } };


export const CreateProviderOrderDocument = gql`
    mutation CreateProviderOrder($data: ProviderOrderCreateInput!) {
  createProviderOrder(data: $data) {
    id
  }
}
    `;
export type CreateProviderOrderMutationFn = Apollo.MutationFunction<CreateProviderOrderMutation, CreateProviderOrderMutationVariables>;

/**
 * __useCreateProviderOrderMutation__
 *
 * To run a mutation, you first call `useCreateProviderOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProviderOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProviderOrderMutation, { data, loading, error }] = useCreateProviderOrderMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateProviderOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateProviderOrderMutation, CreateProviderOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProviderOrderMutation, CreateProviderOrderMutationVariables>(CreateProviderOrderDocument, options);
      }
export type CreateProviderOrderMutationHookResult = ReturnType<typeof useCreateProviderOrderMutation>;
export type CreateProviderOrderMutationResult = Apollo.MutationResult<CreateProviderOrderMutation>;
export type CreateProviderOrderMutationOptions = Apollo.BaseMutationOptions<CreateProviderOrderMutation, CreateProviderOrderMutationVariables>;
export const UpdateProviderOrderDocument = gql`
    mutation UpdateProviderOrder($data: ProviderOrderUpdateInput!, $where: ProviderOrderWhereUniqueInput!) {
  updateProviderOrder(data: $data, where: $where) {
    id
  }
}
    `;
export type UpdateProviderOrderMutationFn = Apollo.MutationFunction<UpdateProviderOrderMutation, UpdateProviderOrderMutationVariables>;

/**
 * __useUpdateProviderOrderMutation__
 *
 * To run a mutation, you first call `useUpdateProviderOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProviderOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProviderOrderMutation, { data, loading, error }] = useUpdateProviderOrderMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateProviderOrderMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProviderOrderMutation, UpdateProviderOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProviderOrderMutation, UpdateProviderOrderMutationVariables>(UpdateProviderOrderDocument, options);
      }
export type UpdateProviderOrderMutationHookResult = ReturnType<typeof useUpdateProviderOrderMutation>;
export type UpdateProviderOrderMutationResult = Apollo.MutationResult<UpdateProviderOrderMutation>;
export type UpdateProviderOrderMutationOptions = Apollo.BaseMutationOptions<UpdateProviderOrderMutation, UpdateProviderOrderMutationVariables>;
export const DeleteProviderOrderDocument = gql`
    mutation DeleteProviderOrder($where: ProviderOrderWhereUniqueInput!) {
  deleteProviderOrder(where: $where)
}
    `;
export type DeleteProviderOrderMutationFn = Apollo.MutationFunction<DeleteProviderOrderMutation, DeleteProviderOrderMutationVariables>;

/**
 * __useDeleteProviderOrderMutation__
 *
 * To run a mutation, you first call `useDeleteProviderOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProviderOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProviderOrderMutation, { data, loading, error }] = useDeleteProviderOrderMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteProviderOrderMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProviderOrderMutation, DeleteProviderOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProviderOrderMutation, DeleteProviderOrderMutationVariables>(DeleteProviderOrderDocument, options);
      }
export type DeleteProviderOrderMutationHookResult = ReturnType<typeof useDeleteProviderOrderMutation>;
export type DeleteProviderOrderMutationResult = Apollo.MutationResult<DeleteProviderOrderMutation>;
export type DeleteProviderOrderMutationOptions = Apollo.BaseMutationOptions<DeleteProviderOrderMutation, DeleteProviderOrderMutationVariables>;
export const ProviderOrderDocument = gql`
    query ProviderOrder($where: ProviderOrderWhereUniqueInput!) {
  providerOrder(where: $where) {
    id
    date
    totalValue
    totalValueDecimal
    createdAt
    updatedAt
    providerOrderItems {
      nodes {
        id
        quantity
        totalValue
        totalValueDecimal
        productId
        product {
          id
          name
          brandName
        }
        providerId
        provider {
          id
          name
          whatsapp
        }
      }
    }
  }
}
    `;

/**
 * __useProviderOrderQuery__
 *
 * To run a query within a React component, call `useProviderOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useProviderOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProviderOrderQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useProviderOrderQuery(baseOptions: Apollo.QueryHookOptions<ProviderOrderQuery, ProviderOrderQueryVariables> & ({ variables: ProviderOrderQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProviderOrderQuery, ProviderOrderQueryVariables>(ProviderOrderDocument, options);
      }
export function useProviderOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProviderOrderQuery, ProviderOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProviderOrderQuery, ProviderOrderQueryVariables>(ProviderOrderDocument, options);
        }
export function useProviderOrderSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ProviderOrderQuery, ProviderOrderQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProviderOrderQuery, ProviderOrderQueryVariables>(ProviderOrderDocument, options);
        }
export type ProviderOrderQueryHookResult = ReturnType<typeof useProviderOrderQuery>;
export type ProviderOrderLazyQueryHookResult = ReturnType<typeof useProviderOrderLazyQuery>;
export type ProviderOrderSuspenseQueryHookResult = ReturnType<typeof useProviderOrderSuspenseQuery>;
export type ProviderOrderQueryResult = Apollo.QueryResult<ProviderOrderQuery, ProviderOrderQueryVariables>;
export const ProviderOrdersDocument = gql`
    query ProviderOrders($where: ProviderOrderWhereInput, $orderBy: [ProviderOrderOrderByWithRelationInput!], $take: Int, $skip: Int) {
  providerOrders(where: $where, orderBy: $orderBy, take: $take, skip: $skip) {
    nodes {
      id
      date
      totalValue
      totalValueDecimal
      createdAt
      updatedAt
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
 * __useProviderOrdersQuery__
 *
 * To run a query within a React component, call `useProviderOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useProviderOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProviderOrdersQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useProviderOrdersQuery(baseOptions?: Apollo.QueryHookOptions<ProviderOrdersQuery, ProviderOrdersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProviderOrdersQuery, ProviderOrdersQueryVariables>(ProviderOrdersDocument, options);
      }
export function useProviderOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProviderOrdersQuery, ProviderOrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProviderOrdersQuery, ProviderOrdersQueryVariables>(ProviderOrdersDocument, options);
        }
export function useProviderOrdersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ProviderOrdersQuery, ProviderOrdersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProviderOrdersQuery, ProviderOrdersQueryVariables>(ProviderOrdersDocument, options);
        }
export type ProviderOrdersQueryHookResult = ReturnType<typeof useProviderOrdersQuery>;
export type ProviderOrdersLazyQueryHookResult = ReturnType<typeof useProviderOrdersLazyQuery>;
export type ProviderOrdersSuspenseQueryHookResult = ReturnType<typeof useProviderOrdersSuspenseQuery>;
export type ProviderOrdersQueryResult = Apollo.QueryResult<ProviderOrdersQuery, ProviderOrdersQueryVariables>;