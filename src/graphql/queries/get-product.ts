import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
  query GetProduct($id: ID!) {
    product(id: $id) {
      id
      name
      description
      slug
      image {
        sourceUrl
      }
      productCategories {
        nodes {
          name
        }
      }
      # __typename
      ... on SimpleProduct {
        price
        regularPrice
        salePrice
        onSale
      }
      ... on VariableProduct {
        price
        regularPrice
        salePrice
        onSale
      }
      galleryImages {
        nodes {
          sourceUrl
        }
      }
    }
  }
`;
