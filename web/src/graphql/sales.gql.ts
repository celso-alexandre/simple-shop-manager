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
  query Sale($where: SaleWhereUniqueInput!) {
    sale(where: $where) {
      id
      date
      totalValue
      totalCostValue
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
          totalCostValue
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

gql`
  query Sales($where: SaleWhereInput, $orderBy: [SaleOrderByWithRelationInput!], $take: Int, $skip: Int) {
    sales(where: $where, orderBy: $orderBy, take: $take, skip: $skip) {
      nodes {
        id
        date
        totalValue
        totalCostValue
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
