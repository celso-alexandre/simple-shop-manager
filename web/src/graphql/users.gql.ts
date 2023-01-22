import { gql } from '@apollo/client';

gql`
  mutation CreateUser($data: UserCreateInput!) {
    createUser(data: $data) {
      id
    }
  }
`;

gql`
  mutation UpdateUser($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
    updateUser(data: $data, where: $where) {
      id
    }
  }
`;

gql`
  query Users($where: UserWhereInput, $orderBy: [UserOrderByWithRelationInput!], $take: Int, $skip: Int) {
    users(where: $where, orderBy: $orderBy, take: $take, skip: $skip) {
      nodes {
        id
        name
        email
        createdAt
        updatedAt
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
