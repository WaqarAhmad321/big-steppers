export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
};

export type Review = { id: number; author: string; rating: 5; comment: string };

export interface ProductDetails {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
  sizes: string[];
  colors: string[];
  features: string[];
  reviews: {
    id: number;
    author: string;
    rating: number;
    comment: string;
  }[];
  quantity: number;
}
