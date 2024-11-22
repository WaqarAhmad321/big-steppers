import { gql } from "@apollo/client";

export const CART_ITEM_FIELDS = gql`
  fragment CART_ITEM_FIELDS on CartItem {
    key
    quantity
    total
    product {
      id
      name
      price
      slug
      image {
        sourceUrl
      }
    }
  }
`;
