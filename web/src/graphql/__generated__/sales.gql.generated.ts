import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateSaleMutationVariables = Types.Exact<{
  data: Types.SaleCreateInput;
}>;


export type CreateSaleMutation = { __typename?: 'Mutation', createSale: { __typename?: 'Sale', id: string } };

export type UpdateSaleMutationVariables = Types.Exact<{
  data: Types.SaleUpdateInput;
  where: Types.SaleWhereUniqueInput;
}>;


export type UpdateSaleMutation = { __typename?: 'Mutation', updateSale: { __typename?: 'Sale', id: string } };

export type SaleQueryVariables = Types.Exact<{
  where: Types.SaleWhereUniqueInput;
}>;


export type SaleQuery = { __typename?: 'Query', sale: { __typename?: 'Sale', id: string, date: any, totalValue: number, totalValueDecimal: number, totalCostValue: number, totalCostValueDecimal: number, netMarginValue: number, netMarginPercent: number, createdAt: any, updatedAt: any, blameUser?: { __typename?: 'User', id: string, name: string, email: string } | null, saleItems: { __typename?: 'SaleItemsOutput', nodes: Array<{ __typename?: 'SaleItem', id: string, costIsPostPaid: boolean, quantity: number, totalValue: number, totalValueDecimal: number, totalCostValue: number, totalCostValueDecimal: number, netMarginValue: number, netMarginPercent: number, productId: string, providerId?: string | null, product: { __typename?: 'Product', id: string, name: string, brandName?: string | null }, provider?: { __typename?: 'Provider', id: string, name: string, whatsapp?: string | null } | null }> } } };

export type SalesQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.SaleWhereInput>;
  orderBy?: Types.InputMaybe<Array<Types.SaleOrderByWithRelationInput> | Types.SaleOrderByWithRelationInput>;
  take?: Types.InputMaybe<Types.Scalars['Int']>;
  skip?: Types.InputMaybe<Types.Scalars['Int']>;
}>;


export type SalesQuery = { __typename?: 'Query', sales: { __typename?: 'SalesOutput', nodes: Array<{ __typename?: 'Sale', id: string, date: any, totalValue: number, totalValueDecimal: number, totalCostValue: number, totalCostValueDecimal: number, netMarginValue: number, netMarginPercent: number, createdAt: any, updatedAt: any, blameUser?: { __typename?: 'User', id: string, name: string, email: string } | null }>, pageInfo?: { __typename?: 'SalePaginated', currentPage?: number | null, hasNextPage?: boolean | null, lastPage?: number | null, nextCursor?: number | null, total?: number | null } | null } };


export const CreateSaleDocument = gql`
    mutation CreateSale($data: SaleCreateInput!) {
  createSale(data: $data) {
    id
  }
}
    `;
export type CreateSaleMutationFn = Apollo.MutationFunction<CreateSaleMutation, CreateSaleMutationVariables>;

/**
 * __useCreateSaleMutation__
 *
 * To run a mutation, you first call `useCreateSaleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSaleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSaleMutation, { data, loading, error }] = useCreateSaleMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateSaleMutation(baseOptions?: Apollo.MutationHookOptions<CreateSaleMutation, CreateSaleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSaleMutation, CreateSaleMutationVariables>(CreateSaleDocument, options);
      }
export type CreateSaleMutationHookResult = ReturnType<typeof useCreateSaleMutation>;
export type CreateSaleMutationResult = Apollo.MutationResult<CreateSaleMutation>;
export type CreateSaleMutationOptions = Apollo.BaseMutationOptions<CreateSaleMutation, CreateSaleMutationVariables>;
export const UpdateSaleDocument = gql`
    mutation UpdateSale($data: SaleUpdateInput!, $where: SaleWhereUniqueInput!) {
  updateSale(data: $data, where: $where) {
    id
  }
}
    `;
export type UpdateSaleMutationFn = Apollo.MutationFunction<UpdateSaleMutation, UpdateSaleMutationVariables>;

/**
 * __useUpdateSaleMutation__
 *
 * To run a mutation, you first call `useUpdateSaleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSaleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSaleMutation, { data, loading, error }] = useUpdateSaleMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateSaleMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSaleMutation, UpdateSaleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSaleMutation, UpdateSaleMutationVariables>(UpdateSaleDocument, options);
      }
export type UpdateSaleMutationHookResult = ReturnType<typeof useUpdateSaleMutation>;
export type UpdateSaleMutationResult = Apollo.MutationResult<UpdateSaleMutation>;
export type UpdateSaleMutationOptions = Apollo.BaseMutationOptions<UpdateSaleMutation, UpdateSaleMutationVariables>;
export const SaleDocument = gql`
    query Sale($where: SaleWhereUniqueInput!) {
  sale(where: $where) {
    id
    date
    totalValue
    totalValueDecimal
    totalCostValue
    totalCostValueDecimal
    netMarginValue
    netMarginPercent
    createdAt
    updatedAt
    blameUser {
      id
      name
      email
    }
    saleItems {
      nodes {
        id
        costIsPostPaid
        quantity
        totalValue
        totalValueDecimal
        totalCostValue
        totalCostValueDecimal
        netMarginValue
        netMarginPercent
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
 * __useSaleQuery__
 *
 * To run a query within a React component, call `useSaleQuery` and pass it any options that fit your needs.
 * When your component renders, `useSaleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSaleQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useSaleQuery(baseOptions: Apollo.QueryHookOptions<SaleQuery, SaleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SaleQuery, SaleQueryVariables>(SaleDocument, options);
      }
export function useSaleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SaleQuery, SaleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SaleQuery, SaleQueryVariables>(SaleDocument, options);
        }
export type SaleQueryHookResult = ReturnType<typeof useSaleQuery>;
export type SaleLazyQueryHookResult = ReturnType<typeof useSaleLazyQuery>;
export type SaleQueryResult = Apollo.QueryResult<SaleQuery, SaleQueryVariables>;
export const SalesDocument = gql`
    query Sales($where: SaleWhereInput, $orderBy: [SaleOrderByWithRelationInput!], $take: Int, $skip: Int) {
  sales(where: $where, orderBy: $orderBy, take: $take, skip: $skip) {
    nodes {
      id
      date
      totalValue
      totalValueDecimal
      totalCostValue
      totalCostValueDecimal
      netMarginValue
      netMarginPercent
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
 * __useSalesQuery__
 *
 * To run a query within a React component, call `useSalesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSalesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSalesQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useSalesQuery(baseOptions?: Apollo.QueryHookOptions<SalesQuery, SalesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SalesQuery, SalesQueryVariables>(SalesDocument, options);
      }
export function useSalesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SalesQuery, SalesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SalesQuery, SalesQueryVariables>(SalesDocument, options);
        }
export type SalesQueryHookResult = ReturnType<typeof useSalesQuery>;
export type SalesLazyQueryHookResult = ReturnType<typeof useSalesLazyQuery>;
export type SalesQueryResult = Apollo.QueryResult<SalesQuery, SalesQueryVariables>;