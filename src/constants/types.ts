import { Dispatch, SetStateAction } from "react";

export type AuthInput = {
  name: string;
  type: string;
  placeholder: string;
  value: string | undefined;
  onChange: Dispatch<SetStateAction<string | undefined>>;
};

export interface Review {
  rating: number;
  number_of_reviews: number;
}

export interface ContentBreakdown {
  kcal: number;
  grams: number;
  proteins: string;
  carbs: string;
  fats: string;
}

export interface Dish {
  name: string;
  img: string;
  description: string;
  price: number;
  review: Review;
  content_breakdown: ContentBreakdown;
  ingredients: string[];
  toppings: string[];
  image?: string;
}

export interface Ingredient {
  name: string;
  img: string;
}

export interface Topping extends Ingredient {
  price: number;
  quantity: number;
}

export interface DishCardProps {
  dish: Dish;
  viewMode?: string;
  handleClick?: () => void;
}

export type OrderTopping = { name: string; quantity: number };

export type Order = {
  name: string;
  price: number;
  toppings: Topping[];
  quantity: number;
};
