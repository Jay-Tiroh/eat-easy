import React from "react";
import { Star, Plus } from "lucide-react"; // Assuming you use lucide-react or similar for icons
import Image from "next/image";

// 1. Define the Types based on your JSON structure
interface Review {
  rating: number;
  number_of_reviews: number;
}

interface ContentBreakdown {
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
  image?: string; // Optional image prop
}

interface DishCardProps {
  dish: Dish;
  viewMode?: string;
}

export function DishCard({ dish, viewMode }: DishCardProps) {
  return viewMode === "list" ? (
    <ListCard dish={dish} />
  ) : (
    <GridCard dish={dish} />
  );
}

const ListCard = ({ dish }: DishCardProps) => {
  return (
    <div className="flex items-center p-4 bg-white rounded-2xl shadow-sm card-shadow hover:shadow-md transition-shadow duration-300 w-full max-w-md h-33">
      {/* Image Container */}
      <div className="relative w-25 h-25 shrink-0 mr-4">
        <div className="w-full h-full rounded-full overflow-hidden border-2 border-gray-50">
          <Image
            // Placeholder image if none provided
            src={`/assets/images/${dish.img}.png`}
            alt={dish.name}
            className="w-full h-full object-cover "
            width={96}
            height={96}
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="flex-1 min-w-0 h-full">
        <div className="flex flex-col gap-5 h-full">
          <div className="flex flex-col">
            <h3 className="text-neutral-800 text-subtitle1 truncate">
              {dish.name}
            </h3>
            {/* Rating Row */}
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-1 fill-current" />
              <span className=" text-sm font-semibold leading-5 text-neutral-500">
                {dish.review.rating}
              </span>
              <span className=" text-sm font-semibold leading-5  text-neutral-300">
                ({dish.review.number_of_reviews} reviews)
              </span>
            </div>
          </div>
          {/* Price */}
          <div className=" flex gap-0.5 items-center">
            <span className="text-orange-3 font-bold text-xs leading-[15px]">
              $
            </span>{" "}
            <span className="text-orange-1 font-extrabold text-lg leading-5">
              {dish.price.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <button
        className="ml-4 shrink-0 w-10 h-10 flex items-center justify-center bg-orange-5 rounded-xl hover:bg-orange-100 active:bg-orange-200 transition-colors group cursor-pointer"
        aria-label="Add to cart"
      >
        <Plus className="w-6 h-6 text-orange-1 group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
};

const GridCard = ({ dish }: DishCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm card-shadow hover:shadow-md transition-shadow duration-300 w-full max-w-76">
      {/* Image Container with Floating Rating */}
      <div className="relative w-32 h-32 mb-6 shrink-0">
        {/* Main Image */}
        <div className="w-full h-full rounded-full overflow-hidden shadow-sm">
          <Image
            src={`/assets/images/${dish.img}.png`}
            alt={dish.name}
            className="w-full h-full object-cover"
            width={128}
            height={128}
          />
        </div>

        {/* Floating Rating Badge */}
        <div className="absolute top-1 right-0 translate-x-1 translate-y-1 bg-white rounded-full px-2 py-1 flex items-center gap-1 shadow-sm border border-gray-50">
          <Star className="w-3 h-3 text-yellow-1 fill-current" />
          <span className="text-xs font-bold text-neutral-800">
            {dish.review.rating.toFixed(1)}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-col items-center gap-2 w-full">
        {/* Title */}
        <h3 className="text-neutral-800 text-lg font-bold text-center truncate w-full px-2">
          {dish.name}
        </h3>

        <div className="flex">
          {/* Price */}
          <div className="flex gap-0.5 items-center">
            <span className="text-orange-3 font-bold text-sm leading-[15px]">
              $
            </span>
            <span className="text-orange-1 font-extrabold text-xl leading-6">
              {dish.price.toFixed(2)}
            </span>
          </div>
          {/* Action Button */}
          <button
            className="ml-4 shrink-0 w-10 h-10 flex items-center justify-center bg-orange-5 rounded-xl hover:bg-orange-100 active:bg-orange-200 transition-colors group cursor-pointer"
            aria-label="Add to cart"
          >
            <Plus className="size-5 text-orange-1 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
