import { gql } from '@apollo/client';

gql`
  query FinancialMovementAggregate {
    financialMovementAggregate {
      value
      count
    }
  }
`;
