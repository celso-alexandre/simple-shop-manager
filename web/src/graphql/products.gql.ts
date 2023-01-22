import { gql } from '@apollo/client';

gql`
  query Products($where: ProductWhereInput, $orderBy: [ProductOrderByWithRelationInput!], $take: Int, $skip: Int) {
    products(where: $where, orderBy: $orderBy, take: $take, skip: $skip) {
      nodes {
        id
        name
        brandName
        isPostPaid
        costValue
        priceValue

        provider {
          id
          name
          email
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
