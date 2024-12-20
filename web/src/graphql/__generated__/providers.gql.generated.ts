import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateProviderMutationVariables = Types.Exact<{
  data: Types.ProviderCreateInput;
}>;


export type CreateProviderMutation = { __typename?: 'Mutation', createProvider: { __typename?: 'Provider', id: string } };

export type UpdateProviderMutationVariables = Types.Exact<{
  data: Types.ProviderUpdateInput;
  where: Types.ProviderWhereUniqueInput;
}>;


export type UpdateProviderMutation = { __typename?: 'Mutation', updateProvider: { __typename?: 'Provider', id: string } };

export type ProviderQueryVariables = Types.Exact<{
  where: Types.ProviderWhereUniqueInput;
}>;


export type ProviderQuery = { __typename?: 'Query', provider: { __typename?: 'Provider', id: string, name: string, email?: string | null, whatsapp?: string | null, document?: string | null, createdAt: any, updatedAt: any, products: { __typename?: 'ProductsOutput', nodes: Array<{ __typename?: 'Product', id: string, name: string }> }, blameUser?: { __typename?: 'User', id: string, name: string, email: string } | null } };

export type ProvidersQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.ProviderWhereInput>;
  orderBy?: Types.InputMaybe<Array<Types.ProviderOrderByWithRelationInput> | Types.ProviderOrderByWithRelationInput>;
  take?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  skip?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type ProvidersQuery = { __typename?: 'Query', providers: { __typename?: 'ProvidersOutput', nodes: Array<{ __typename?: 'Provider', id: string, name: string, email?: string | null, whatsapp?: string | null, document?: string | null, createdAt: any, updatedAt: any, blameUser?: { __typename?: 'User', id: string, name: string, email: string } | null }>, pageInfo?: { __typename?: 'ProviderPaginated', currentPage?: number | null, hasNextPage?: boolean | null, lastPage?: number | null, nextCursor?: number | null, total?: number | null } | null } };

export type ProvidersSelectQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.ProviderWhereInput>;
  orderBy?: Types.InputMaybe<Array<Types.ProviderOrderByWithRelationInput> | Types.ProviderOrderByWithRelationInput>;
  take?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  skip?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type ProvidersSelectQuery = { __typename?: 'Query', providers: { __typename?: 'ProvidersOutput', nodes: Array<{ __typename?: 'Provider', value: string, label: string }>, pageInfo?: { __typename?: 'ProviderPaginated', currentPage?: number | null, hasNextPage?: boolean | null, lastPage?: number | null, nextCursor?: number | null, total?: number | null } | null } };


export const CreateProviderDocument = gql`
    mutation CreateProvider($data: ProviderCreateInput!) {
  createProvider(data: $data) {
    id
  }
}
    `;
export type CreateProviderMutationFn = Apollo.MutationFunction<CreateProviderMutation, CreateProviderMutationVariables>;

/**
 * __useCreateProviderMutation__
 *
 * To run a mutation, you first call `useCreateProviderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProviderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProviderMutation, { data, loading, error }] = useCreateProviderMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateProviderMutation(baseOptions?: Apollo.MutationHookOptions<CreateProviderMutation, CreateProviderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProviderMutation, CreateProviderMutationVariables>(CreateProviderDocument, options);
      }
export type CreateProviderMutationHookResult = ReturnType<typeof useCreateProviderMutation>;
export type CreateProviderMutationResult = Apollo.MutationResult<CreateProviderMutation>;
export type CreateProviderMutationOptions = Apollo.BaseMutationOptions<CreateProviderMutation, CreateProviderMutationVariables>;
export const UpdateProviderDocument = gql`
    mutation UpdateProvider($data: ProviderUpdateInput!, $where: ProviderWhereUniqueInput!) {
  updateProvider(data: $data, where: $where) {
    id
  }
}
    `;
export type UpdateProviderMutationFn = Apollo.MutationFunction<UpdateProviderMutation, UpdateProviderMutationVariables>;

/**
 * __useUpdateProviderMutation__
 *
 * To run a mutation, you first call `useUpdateProviderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProviderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProviderMutation, { data, loading, error }] = useUpdateProviderMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateProviderMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProviderMutation, UpdateProviderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProviderMutation, UpdateProviderMutationVariables>(UpdateProviderDocument, options);
      }
export type UpdateProviderMutationHookResult = ReturnType<typeof useUpdateProviderMutation>;
export type UpdateProviderMutationResult = Apollo.MutationResult<UpdateProviderMutation>;
export type UpdateProviderMutationOptions = Apollo.BaseMutationOptions<UpdateProviderMutation, UpdateProviderMutationVariables>;
export const ProviderDocument = gql`
    query Provider($where: ProviderWhereUniqueInput!) {
  provider(where: $where) {
    id
    name
    email
    whatsapp
    document
    createdAt
    updatedAt
    products {
      nodes {
        id
        name
      }
    }
    blameUser {
      id
      name
      email
    }
  }
}
    `;

/**
 * __useProviderQuery__
 *
 * To run a query within a React component, call `useProviderQuery` and pass it any options that fit your needs.
 * When your component renders, `useProviderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProviderQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useProviderQuery(baseOptions: Apollo.QueryHookOptions<ProviderQuery, ProviderQueryVariables> & ({ variables: ProviderQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProviderQuery, ProviderQueryVariables>(ProviderDocument, options);
      }
export function useProviderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProviderQuery, ProviderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProviderQuery, ProviderQueryVariables>(ProviderDocument, options);
        }
export function useProviderSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ProviderQuery, ProviderQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProviderQuery, ProviderQueryVariables>(ProviderDocument, options);
        }
export type ProviderQueryHookResult = ReturnType<typeof useProviderQuery>;
export type ProviderLazyQueryHookResult = ReturnType<typeof useProviderLazyQuery>;
export type ProviderSuspenseQueryHookResult = ReturnType<typeof useProviderSuspenseQuery>;
export type ProviderQueryResult = Apollo.QueryResult<ProviderQuery, ProviderQueryVariables>;
export const ProvidersDocument = gql`
    query Providers($where: ProviderWhereInput, $orderBy: [ProviderOrderByWithRelationInput!], $take: Int, $skip: Int) {
  providers(where: $where, orderBy: $orderBy, take: $take, skip: $skip) {
    nodes {
      id
      name
      email
      whatsapp
      document
      createdAt
      updatedAt
      blameUser {
        id
        name
        email
      }
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
 * __useProvidersQuery__
 *
 * To run a query within a React component, call `useProvidersQuery` and pass it any options that fit your needs.
 * When your component renders, `useProvidersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProvidersQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useProvidersQuery(baseOptions?: Apollo.QueryHookOptions<ProvidersQuery, ProvidersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProvidersQuery, ProvidersQueryVariables>(ProvidersDocument, options);
      }
export function useProvidersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProvidersQuery, ProvidersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProvidersQuery, ProvidersQueryVariables>(ProvidersDocument, options);
        }
export function useProvidersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ProvidersQuery, ProvidersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProvidersQuery, ProvidersQueryVariables>(ProvidersDocument, options);
        }
export type ProvidersQueryHookResult = ReturnType<typeof useProvidersQuery>;
export type ProvidersLazyQueryHookResult = ReturnType<typeof useProvidersLazyQuery>;
export type ProvidersSuspenseQueryHookResult = ReturnType<typeof useProvidersSuspenseQuery>;
export type ProvidersQueryResult = Apollo.QueryResult<ProvidersQuery, ProvidersQueryVariables>;
export const ProvidersSelectDocument = gql`
    query ProvidersSelect($where: ProviderWhereInput, $orderBy: [ProviderOrderByWithRelationInput!], $take: Int, $skip: Int) {
  providers(where: $where, orderBy: $orderBy, take: $take, skip: $skip) {
    nodes {
      value: id
      label: name
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
 * __useProvidersSelectQuery__
 *
 * To run a query within a React component, call `useProvidersSelectQuery` and pass it any options that fit your needs.
 * When your component renders, `useProvidersSelectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProvidersSelectQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useProvidersSelectQuery(baseOptions?: Apollo.QueryHookOptions<ProvidersSelectQuery, ProvidersSelectQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProvidersSelectQuery, ProvidersSelectQueryVariables>(ProvidersSelectDocument, options);
      }
export function useProvidersSelectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProvidersSelectQuery, ProvidersSelectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProvidersSelectQuery, ProvidersSelectQueryVariables>(ProvidersSelectDocument, options);
        }
export function useProvidersSelectSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ProvidersSelectQuery, ProvidersSelectQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProvidersSelectQuery, ProvidersSelectQueryVariables>(ProvidersSelectDocument, options);
        }
export type ProvidersSelectQueryHookResult = ReturnType<typeof useProvidersSelectQuery>;
export type ProvidersSelectLazyQueryHookResult = ReturnType<typeof useProvidersSelectLazyQuery>;
export type ProvidersSelectSuspenseQueryHookResult = ReturnType<typeof useProvidersSelectSuspenseQuery>;
export type ProvidersSelectQueryResult = Apollo.QueryResult<ProvidersSelectQuery, ProvidersSelectQueryVariables>;