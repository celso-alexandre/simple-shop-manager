import { gql } from '@apollo/client';

gql`
  query Providers($where: ProviderWhereInput, $orderBy: [ProviderOrderByWithRelationInput!], $take: Int, $skip: Int) {
    providers(where: $where, orderBy: $orderBy, take: $take, skip: $skip) {
      nodes {
        id
        name
        email
        whatsapp
        document

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
