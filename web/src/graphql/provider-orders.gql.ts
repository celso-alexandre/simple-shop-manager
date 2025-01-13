import { gql } from '@apollo/client';

gql`
  mutation CreateProviderOrder($data: ProviderOrderCreateInput!) {
    createProviderOrder(data: $data) {
      id
    }
  }
`;

gql`
  mutation UpdateProviderOrder($data: ProviderOrderUpdateInput!, $where: ProviderOrderWhereUniqueInput!) {
    updateProviderOrder(data: $data, where: $where) {
      id
    }
  }
`;

gql`
  mutation DeleteProviderOrder($where: ProviderOrderWhereUniqueInput!) {
    deleteProviderOrder(where: $where)
  }
`;

gql`
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
          moveQty
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

gql`
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
