import { gql } from '@apollo/client';

gql`
  mutation CreateProduct($data: ProductCreateInput!) {
    createProduct(data: $data) {
      id
    }
  }
`;

gql`
  mutation UpdateProduct($data: ProductUpdateInput!, $where: ProductWhereUniqueInput!) {
    updateProduct(data: $data, where: $where) {
      id
    }
  }
`;

gql`
  query Product($where: ProductWhereUniqueInput!) {
    product(where: $where) {
      id
      name
      brandName
      isPostPaid
      costValue
      costValueDecimal
      priceValue
      priceValueDecimal
      netMarginValue
      netMarginPercent
      qty
      controlsQty
      createdAt
      updatedAt

      providerId
      provider {
        id
        name
        email
        whatsapp
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
  query Products($where: ProductWhereInput, $orderBy: [ProductOrderByWithRelationInput!], $take: Int, $skip: Int) {
    products(where: $where, orderBy: $orderBy, take: $take, skip: $skip) {
      nodes {
        id
        name
        brandName
        isPostPaid
        costValue
        costValueDecimal
        priceValue
        priceValueDecimal
        netMarginValue
        netMarginPercent
        controlsQty
        qty
        createdAt
        updatedAt

        providerId
        provider {
          id
          name
          email
          whatsapp
        }
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
  query ProductsSelect(
    $where: ProductWhereInput
    $orderBy: [ProductOrderByWithRelationInput!]
    $take: Int
    $skip: Int
  ) {
    products(where: $where, orderBy: $orderBy, take: $take, skip: $skip) {
      nodes {
        value: id
        label: name
        label2: brandName
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
