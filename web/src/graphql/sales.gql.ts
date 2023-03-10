import { gql } from '@apollo/client';

gql`
  mutation CreateSale($data: SaleCreateInputCustom!) {
    createSale(data: $data) {
      id
    }
  }
`;

gql`
  mutation UpdateSale($data: SaleUpdateInputCustom!, $where: SaleWhereUniqueInput!) {
    updateSale(data: $data, where: $where) {
      id
    }
  }
`;

gql`
  mutation DeleteSale($where: SaleWhereUniqueInput!) {
    deleteSale(where: $where) {
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

gql`
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
