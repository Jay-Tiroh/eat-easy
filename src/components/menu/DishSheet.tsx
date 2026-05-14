"use client";
import PriceText from "@/components/PriceText";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ingredients,
  toppings as toppingsData,
} from "@/constants/data/ingredients";
import { Dish, Topping } from "@/constants/types";
import { Star } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const DishSheet = ({ dish }: { dish: Dish }) => {
  // Track quantity per topping name — 0 means unchecked
  const [toppingQuantities, setToppingQuantities] = useState<
    Record<string, number>
  >(() => Object.fromEntries(dish.toppings.map((name) => [name, 0])));

  // Resolve full topping objects (with price) from your data source
  const resolvedToppings: Topping[] = useMemo(
    () =>
      dish.toppings.map((name) => {
        const data = toppingsData.find((t) => t.name === name)!;
        return { ...data, quantity: toppingQuantities[name] };
      }),
    [dish.toppings, toppingQuantities],
  );

  // Total price = dish base price + sum of (topping.price * topping.quantity)
  const totalPrice = useMemo(() => {
    const toppingsTotal = resolvedToppings.reduce(
      (sum, t) => sum + t.price * t.quantity,
      0,
    );
    return dish.price + toppingsTotal;
  }, [resolvedToppings, dish.price]);

  const handleCheck = (name: string, checked: boolean) => {
    setToppingQuantities((prev) => ({
      ...prev,
      [name]: checked ? 1 : 0, // start at 1 when checked, reset to 0 when unchecked
    }));
  };

  const handleIncrement = (name: string) => {
    setToppingQuantities((prev) => ({
      ...prev,
      [name]: prev[name] + 1,
    }));
  };

  const handleDecrement = (name: string) => {
    setToppingQuantities((prev) => {
      const next = prev[name] - 1;
      return {
        ...prev,
        [name]: next <= 0 ? 0 : next, // uncheck if decremented to 0
      };
    });
  };

  return (
    <div className="w-full pt-5 overflow-auto scroll-none">
      {/* Header Image — unchanged */}
      <section className="relative">
        <Image
          src={`/assets/images/${dish.img}.webp`}
          alt={dish.name}
          width={272}
          height={272}
          className="size-68 absolute top-20 md:-top-5 right-1/2 translate-x-1/2"
        />
        <Image
          src={"/assets/images/shapes.svg"}
          alt="shapes"
          width={200}
          height={200}
          className="w-full -mt-20 md:mt-0"
        />
        <div className="rating-badge bg-neutral-0 rounded-[22.4px] px-3 py-2.5 justify-center items-center absolute top-25 md:top-5 md:left-5 right-5 flex gap-1 w-20.5">
          <Star className="w-4 h-4 text-yellow-1 fill-current" />
          <span className="text-lg font-semibold leading-5 text-neutral-500 dark:text-neutral-200">
            {dish.review.rating}
          </span>
        </div>
      </section>

      <section className="p-5 space-y-6 py-6">
        {/* Description */}
        <div className="description flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <h1 className="text-heading1">{dish.name}</h1>
            {/* Show dynamic total price */}
            <div className="flex gap-0.5 items-center">
              <span className="text-orange-3 font-bold text-xs leading-3.75">
                $
              </span>
              <span className="text-price">{totalPrice.toFixed(2)}</span>
            </div>
          </div>
          <p className="text-body1">{dish.description}</p>
        </div>

        {/* Content breakdown — unchanged */}
        <div className="flex items-center p-4 bg-white dark:bg-neutral-700 rounded-2xl shadow-sm card-shadow transition-shadow duration-300 w-full h-22.5 justify-evenly">
          {Object.entries(dish.content_breakdown).map(([key, value]) => (
            <div key={key} className="flex flex-col">
              <span className="text-subtitle1 dark:text-neutral-0">
                {value}
              </span>
              <span className="text-body1 text-neutral-500 dark:text-neutral-150">
                {key}
              </span>
            </div>
          ))}
        </div>

        {/* Ingredients — unchanged */}
        <div className="w-full flex flex-col gap-3">
          <h2 className="text-subtitle1 dark:text-neutral-200">Ingredients</h2>
          <div className="ingredients flex gap-4 items-center overflow-scroll scroll-none">
            {dish.ingredients.map((ingredientName) => {
              const ingredientData = ingredients.find(
                (i) => i.name === ingredientName,
              );
              return (
                <div
                  key={ingredientName}
                  className="ingredient nutrients flex items-center p-4 bg-white dark:bg-neutral-700 rounded-2xl shadow-sm card-shadow transition-shadow duration-300 min-w-25 max-w-25 justify-center h-22.5"
                >
                  <div className="flex flex-col items-center w-full">
                    <span className="text-subtitle1 dark:text-neutral-0">
                      {ingredientData?.img || "🍴"}
                    </span>
                    <span className="text-body1 text-neutral-500 dark:text-neutral-150 truncate w-full text-center">
                      {ingredientName}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Toppings — now iterated */}
        <div className="toppings w-full flex flex-col gap-3">
          <h2 className="text-subtitle1 dark:text-neutral-200">Add toppings</h2>
          <div className="flex flex-col gap-3">
            {resolvedToppings.map((topping) => {
              const isChecked = toppingQuantities[topping.name] > 0;

              return (
                <div
                  key={topping.name}
                  className="flex items-center justify-between bg-white dark:bg-neutral-700 rounded-2xl shadow-sm transition-shadow duration-300 w-full h-13 overflow-hidden"
                >
                  {/* Left: checkbox + name */}
                  <div className="flex items-center gap-4 p-4">
                    <Checkbox
                      className="dark:data-[state=checked]:bg-yellow-1 data-[state=checked]:bg-yellow-1 dark:data-[state=checked]:border-yellow-1 data-[state=checked]:border-yellow-1 dark:data-[state=checked]:text-neutral-700 data-[state=checked]:text-neutral-700 cursor-pointer"
                      checked={isChecked}
                      onCheckedChange={(val) =>
                        handleCheck(topping.name, !!val)
                      }
                    />
                    <span className="text-body1 text-neutral-500 dark:text-neutral-100">
                      {topping.name}
                    </span>
                  </div>

                  {/* Right: price + stepper (slides in when checked) */}
                  <div
                    className={`flex items-center gap-4 h-full w-44 ${
                      isChecked ? "translate-x-0" : "translate-x-1/2"
                    } transition-transform duration-150`}
                  >
                    <PriceText
                      price={
                        topping.price * (toppingQuantities[topping.name] || 1)
                      }
                      priceClass="text-base"
                      currencyClass="text-[10px]"
                      wrapperClass="gap-0 w-1/2 justify-end"
                    />
                    <div className="flex w-1/2 bg-neutral-900 h-full items-center justify-between p-4">
                      <FaMinus
                        className="text-neutral-100 cursor-pointer"
                        onClick={() => handleDecrement(topping.name)}
                      />
                      <span className="text-neutral-100 text-sm font-semibold">
                        {topping.quantity}
                      </span>
                      <FaPlus
                        className="text-neutral-100 cursor-pointer"
                        onClick={() => handleIncrement(topping.name)}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/*Recommended Sides*/}
        <div className="toppings w-full flex flex-col gap-3">
          <h2 className="text-subtitle1 dark:text-neutral-200">
            Recommended Sides
          </h2>
        </div>
      </section>
    </div>
  );
};

export default DishSheet;
