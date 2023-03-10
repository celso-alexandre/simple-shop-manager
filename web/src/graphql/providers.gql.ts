import { gql } from '@apollo/client';

gql`
  mutation CreateProvider($data: ProviderCreateInput!) {
    createProvider(data: $data) {
      id
    }
  }
`;

gql`
  mutation UpdateProvider($data: ProviderUpdateInput!, $where: ProviderWhereUniqueInput!) {
    updateProvider(data: $data, where: $where) {
      id
    }
  }
`;

gql`
  query Provider($where: ProviderWhereUniqueInput!) {
    provider(where: $where) {
      id
      name
      email
      whatsapp
      document
      createdAt
      updatedAt

      products {
        nodes {
          id
          name
        }
      }
      blameUser {
        id
        name
        email
      }
    }
  }
`;

gql`
  query Providers($where: ProviderWhereInput, $orderBy: [ProviderOrderByWithRelationInput!], $take: Int, $skip: Int) {
    providers(where: $where, orderBy: $orderBy, take: $take, skip: $skip) {
      nodes {
        id
        name
        email
        whatsapp
        document
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

gql`
  query ProvidersSelect(
    $where: ProviderWhereInput
    $orderBy: [ProviderOrderByWithRelationInput!]
    $take: Int
    $skip: Int
  ) {
    providers(where: $where, orderBy: $orderBy, take: $take, skip: $skip) {
      nodes {
        value: id
        label: name
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
