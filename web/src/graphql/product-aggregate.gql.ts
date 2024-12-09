import { gql } from '@apollo/client';

gql`
  query ProductAggregate {
    productAggregate {
      costValue
      netValue
      priceValue
      count
      qty
    }
  }
`;
