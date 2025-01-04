import { gql } from '@apollo/client';

gql`
  query SaleAggregate($where: SaleWhereInputCustom) {
    totalSale: saleAggregate(where: $where) {
      totalCostValue
      netValue
      totalValue
      count(where: $where)
    }
  }
`;
