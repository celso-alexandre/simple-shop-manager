import { gql } from '@apollo/client';

gql`
  mutation CreateFinancialMovement($data: FinancialMovementCreateInput!) {
    createFinancialMovement(data: $data) {
      id
    }
  }
`;

gql`
  mutation UpdateFinancialMovement($data: FinancialMovementUpdateInput!, $where: FinancialMovementWhereUniqueInput!) {
    updateFinancialMovement(data: $data, where: $where) {
      id
    }
  }
`;

gql`
  mutation DeleteFinancialMovement($where: FinancialMovementWhereUniqueInput!) {
    deleteFinancialMovement(where: $where)
  }
`;

gql`
  query FinancialMovement($where: FinancialMovementWhereUniqueInput!) {
    financialMovement(where: $where) {
      id
      date
      type
      description
      value
      valueDecimal
      providerOrderId
      saleId
    }
  }
`;

gql`
  query FinancialMovements($where: FinancialMovementWhereInput, $orderBy: [FinancialMovementOrderByWithRelationInput!], $take: Int, $skip: Int) {
    financialMovements(where: $where, orderBy: $orderBy, take: $take, skip: $skip) {
      nodes {
        id
        date
        type
        description
        value
        valueDecimal
        providerOrderId
        saleId
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
