import { gql } from "@apollo/client";
import { CART_ITEM_FIELDS } from "../fragments";
import client from "@/lib/apollo-client";

export const GET_CART = gql`
  query GetCart {
    cart {
      contents {
        nodes {
          key
          quantity
          total
          subtotal
          product {
            node {
              id
              databaseId
              name
              slug
              # price
              # regularPrice
              # salePrice
              onSale
              # stockStatus
              image {
                sourceUrl
                altText
              }
            }
          }
        }
      }
      subtotal
      subtotalTax
      total
      totalTax
      contentsTotal
      shippingTotal
      shippingTax
      availableShippingMethods {
        rates {
          id
          label
          cost
          methodId
        }
      }
      appliedCoupons {
        code
        discountAmount
      }
    }
  }
`;

export const ADD_TO_CART = gql`
  mutation AddToCart($productId: Int!, $quantity: Int!) {
    addToCart(input: { productId: $productId, quantity: $quantity  }) {
      cart {
        contents {
          nodes {
            key
            quantity
            total
            product {
              node {
                id
                name
                # price
                slug
                image {
                  sourceUrl
                }
              }
            }
          }
        }
        total
        # itemCount
      }
    }
  }
`;

export const UPDATE_CART = gql`
  mutation UpdateCart($key: String!, $quantity: Int!) {
    updateCart(input: { productId: $key, quantity: $quantity }) {
      cart {
        contents {
          nodes {
            key
            quantity
            total
            product {
              node {
                id
                name
                price
                slug
                image {
                  sourceUrl
                }
              }
            }
          }
        }
      }
      total
      # itemCount
    }
  }
  ${CART_ITEM_FIELDS}
`;

export const REMOVE_CART_ITEM = gql`
  mutation RemoveCartItem($key: String!) {
    removeCartItem(input: { key: $key }) {
      cart {
        contents {
          nodes {
  key
    quantity
    total
    product { node {
      id
      name
      price
      slug
      image {
        sourceUrl
      }
    } }
          }
        }
        total
        # itemCount
      }
    }
    ${CART_ITEM_FIELDS}
  }
`;

export const CLEAR_CART = gql`
  mutation ClearCart {
    clearCart {
      cart {
        contents {
          nodes {
  key
    quantity
    total
    product { node {
      id
      name
      price
      slug
      image {
        sourceUrl
      }
    } }
          }
        }
        total
        # itemCount
      }
    }
    ${CART_ITEM_FIELDS}
  }
`;

export const fetchCart = async () => {
  const { data } = await client.query({
    query: GET_CART,
  });

  return data.cart;
};
