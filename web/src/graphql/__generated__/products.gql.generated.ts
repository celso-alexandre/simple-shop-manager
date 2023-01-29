import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateProductMutationVariables = Types.Exact<{
  data: Types.ProductCreateInput;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct: { __typename?: 'Product', id: string } };

export type UpdateProductMutationVariables = Types.Exact<{
  data: Types.ProductUpdateInput;
  where: Types.ProductWhereUniqueInput;
}>;


export type UpdateProductMutation = { __typename?: 'Mutation', updateProduct: { __typename?: 'Product', id: string } };

export type ProductQueryVariables = Types.Exact<{
  where: Types.ProductWhereUniqueInput;
}>;


export type ProductQuery = { __typename?: 'Query', product: { __typename?: 'Product', id: string, name: string, brandName?: string | null, isPostPaid: boolean, costValue: number, costValueDecimal: number, priceValue: number, priceValueDecimal: number, netMarginValue: number, netMarginPercent: number, createdAt: any, updatedAt: any, providerId?: string | null, provider?: { __typename?: 'Provider', id: string, name: string, email?: string | null, whatsapp?: string | null } | null, blameUser?: { __typename?: 'User', id: string, name: string, email: string } | null } };

export type ProductsQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.ProductWhereInput>;
  orderBy?: Types.InputMaybe<Array<Types.ProductOrderByWithRelationInput> | Types.ProductOrderByWithRelationInput>;
  take?: Types.InputMaybe<Types.Scalars['Int']>;
  skip?: Types.InputMaybe<Types.Scalars['Int']>;
}>;


export type ProductsQuery = { __typename?: 'Query', products: { __typename?: 'ProductsOutput', nodes: Array<{ __typename?: 'Product', id: string, name: string, brandName?: string | null, isPostPaid: boolean, costValue: number, costValueDecimal: number, priceValue: number, priceValueDecimal: number, netMarginValue: number, netMarginPercent: number, createdAt: any, updatedAt: any, providerId?: string | null, provider?: { __typename?: 'Provider', id: string, name: string, email?: string | null, whatsapp?: string | null } | null, blameUser?: { __typename?: 'User', id: string, name: string, email: string } | null }>, pageInfo?: { __typename?: 'ProductPaginated', currentPage?: number | null, hasNextPage?: boolean | null, lastPage?: number | null, nextCursor?: number | null, total?: number | null } | null } };

export type ProductsSelectQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.ProductWhereInput>;
  orderBy?: Types.InputMaybe<Array<Types.ProductOrderByWithRelationInput> | Types.ProductOrderByWithRelationInput>;
  take?: Types.InputMaybe<Types.Scalars['Int']>;
  skip?: Types.InputMaybe<Types.Scalars['Int']>;
}>;


export type ProductsSelectQuery = { __typename?: 'Query', products: { __typename?: 'ProductsOutput', nodes: Array<{ __typename?: 'Product', value: string, label: string, label2?: string | null }>, pageInfo?: { __typename?: 'ProductPaginated', currentPage?: number | null, hasNextPage?: boolean | null, lastPage?: number | null, nextCursor?: number | null, total?: number | null } | null } };


export const CreateProductDocument = gql`
    mutation CreateProduct($data: ProductCreateInput!) {
  createProduct(data: $data) {
    id
  }
}
    `;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, options);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const UpdateProductDocument = gql`
    mutation UpdateProduct($data: ProductUpdateInput!, $where: ProductWhereUniqueInput!) {
  updateProduct(data: $data, where: $where) {
    id
  }
}
    `;
export type UpdateProductMutationFn = Apollo.MutationFunction<UpdateProductMutation, UpdateProductMutationVariables>;

/**
 * __useUpdateProductMutation__
 *
 * To run a mutation, you first call `useUpdateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductMutation, { data, loading, error }] = useUpdateProductMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateProductMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductMutation, UpdateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProductMutation, UpdateProductMutationVariables>(UpdateProductDocument, options);
      }
export type UpdateProductMutationHookResult = ReturnType<typeof useUpdateProductMutation>;
export type UpdateProductMutationResult = Apollo.MutationResult<UpdateProductMutation>;
export type UpdateProductMutationOptions = Apollo.BaseMutationOptions<UpdateProductMutation, UpdateProductMutationVariables>;
export const ProductDocument = gql`
    query Product($where: ProductWhereUniqueInput!) {
  product(where: $where) {
    id
    name
    brandName
    isPostPaid
    costValue
    costValueDecimal
    priceValue
    priceValueDecimal
    netMarginValue
    netMarginPercent
    createdAt
    updatedAt
    providerId
    provider {
      id
      name
      email
      whatsapp
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
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useProductQuery(baseOptions: Apollo.QueryHookOptions<ProductQuery, ProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
      }
export function useProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductQuery, ProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
        }
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>;
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>;
export type ProductQueryResult = Apollo.QueryResult<ProductQuery, ProductQueryVariables>;
export const ProductsDocument = gql`
    query Products($where: ProductWhereInput, $orderBy: [ProductOrderByWithRelationInput!], $take: Int, $skip: Int) {
  products(where: $where, orderBy: $orderBy, take: $take, skip: $skip) {
    nodes {
      id
      name
      brandName
      isPostPaid
      costValue
      costValueDecimal
      priceValue
      priceValueDecimal
      netMarginValue
      netMarginPercent
      createdAt
      updatedAt
      providerId
      provider {
        id
        name
        email
        whatsapp
      }
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
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useProductsQuery(baseOptions?: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;
export const ProductsSelectDocument = gql`
    query ProductsSelect($where: ProductWhereInput, $orderBy: [ProductOrderByWithRelationInput!], $take: Int, $skip: Int) {
  products(where: $where, orderBy: $orderBy, take: $take, skip: $skip) {
    nodes {
      value: id
      label: name
      label2: brandName
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
 * __useProductsSelectQuery__
 *
 * To run a query within a React component, call `useProductsSelectQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsSelectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsSelectQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useProductsSelectQuery(baseOptions?: Apollo.QueryHookOptions<ProductsSelectQuery, ProductsSelectQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsSelectQuery, ProductsSelectQueryVariables>(ProductsSelectDocument, options);
      }
export function useProductsSelectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsSelectQuery, ProductsSelectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsSelectQuery, ProductsSelectQueryVariables>(ProductsSelectDocument, options);
        }
export type ProductsSelectQueryHookResult = ReturnType<typeof useProductsSelectQuery>;
export type ProductsSelectLazyQueryHookResult = ReturnType<typeof useProductsSelectLazyQuery>;
export type ProductsSelectQueryResult = Apollo.QueryResult<ProductsSelectQuery, ProductsSelectQueryVariables>;