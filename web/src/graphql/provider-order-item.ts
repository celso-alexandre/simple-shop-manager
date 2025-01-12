import { gql } from '@apollo/client';

gql`
  mutation UpdateProviderOrderItem($data: ProviderOrderItemUpdateInput!, $where: ProviderOrderItemWhereUniqueInput!) {
    updateProviderOrderItem(data: $data, where: $where) {
      id
    }
  }
`;
