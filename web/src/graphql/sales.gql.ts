import { gql } from '@apollo/client';

gql`
  query Sales($where: SaleWhereInput, $orderBy: [SaleOrderByWithRelationInput!], $take: Int, $skip: Int) {
    sales(where: $where, orderBy: $orderBy, take: $take, skip: $skip) {
      nodes {
        id
        date
        priceValue
        isPostPaid
        costValue

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
