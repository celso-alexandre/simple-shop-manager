import { gql } from '@apollo/client';

gql`
  mutation CreateSale($data: SaleCreateInput!) {
    createSale(data: $data) {
      id
    }
  }
`;

gql`
  mutation UpdateSale($data: SaleUpdateInput!, $where: SaleWhereUniqueInput!) {
    updateSale(data: $data, where: $where) {
      id
    }
  }
`;

gql`
  query Sales($where: SaleWhereInput, $orderBy: [SaleOrderByWithRelationInput!], $take: Int, $skip: Int) {
    sales(where: $where, orderBy: $orderBy, take: $take, skip: $skip) {
      nodes {
        id
        date
        priceValue
        isPostPaid
        costValue
        createdAt
        updatedAt

        product {
          id
          name
          brandName
        }
        provider {
          id
          name
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
