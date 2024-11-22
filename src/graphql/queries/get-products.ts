import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query GetProducts($first: Int!) {
    products(first: $first) {
      nodes {
        id
        name  
        slug
        description
        image {
          sourceUrl
        }
        productCategories {
          nodes {
            name
          }
        }
        __typename 
        ... on SimpleProduct {
          price
        }
      }
    }
  }
`;
