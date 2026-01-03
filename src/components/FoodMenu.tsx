import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuClock7 } from "react-icons/lu";

const FoodMenu = () => {
  const options = [
    {
      image: "bulb",
      title: "Choose Virtual Assistant",
      description:
        "Simplify your decisions through our Smart Menu Assistant who will help you.",
      description2: "Let our Virtual Assistant simplify your choices.",
      link: "/menu/smart-assistant",
    },
    {
      image: "book",
      title: "Go to the menu",
      description:
        "If you already know what to order, this is the best choice.",
      description2: "Know what you want? Choose this option.",
      link: "/menu/full-menu",
    },
  ];
  return (
    <div className="h-full w-full v-flex-h-center lg:grid lg:grid-cols-2  p-10.5  gap-6 lg:gap-8 overflow-auto lg:place-items-center ">
      <div className="col-span-2 h-[270px] bg-neutral-900 dark:bg-neutral-150 rounded-[28.67px] hidden lg:flex flex-col justify-center w-full p-22.5 relative overflow-hidden">
        <div className="flex flex-col gap-6 max-w-[463px] z-10">
          <h1 className="text-white dark:text-neutral-800 flex flex-col font-heading text-[32px] leading-11.5 tracking-[-0.5px]">
            <span className=" ">Welcome to</span>
            <span className="font-bold">Gram Bistro Restaurant 📍</span>
          </h1>
          <div className="flex gap-6 text-neutral-400 dark:text-neutral-600 text-body">
            <div className="flex gap-2 items-center">
              <MapPin className="size-6 text-sec-yellow-1" />
              <span>790 8th Ave, New York</span>
            </div>
            <div className="flex gap-2 items-center">
              <LuClock7 className="size-6 text-orange-1" />
              <span>Mon - Sun: 12AM - 10 PM</span>
            </div>
          </div>
        </div>
        <Image
          src={"/assets/images/gram-big-ill.svg"}
          alt="Gram Bistro Illustration"
          width={463}
          height={270}
          className="absolute -right-20 xl:right-22.5 top-0 lg:h-full opacity-90 xl:opacity-100 dark:hidden"
        />
        <Image
          src={"/assets/images/gram-big-ill-dark.svg"}
          alt="Gram Bistro Illustration"
          width={463}
          height={270}
          className="absolute -right-20 xl:right-22.5 top-0 lg:h-full opacity-90 xl:opacity-100 hidden dark:block"
        />
      </div>

      <div className="row-span-2 lg:flex flex-col justify-center hidden ">
        <h2 className="flex flex-col text-heading1 text-neutral-800 dark:text-white">
          <span>Find Your Flavor:</span>{" "}
          <span>Two Options to Browse Our Menu</span>
        </h2>{" "}
        <p className="text-subtitle1 text-neutral-600 max-w-[488px] dark:neutral-150">
          We've got you covered! Whether you're feeling adventurous or know
          exactly what you want, we offer two ways to browse our menu that cater
          to your mood.
        </p>
      </div>
      <h1 className="font-heading font-medium leading-7.5 tracking-[-0.5px] text-[22px] text-neutral-800 dark:text-white lg:hidden w-full text-center">
        Let’s find the perfect dish for you
      </h1>
      {options.map((option) => (
        <div
          key={option.title}
          className="p-6 card-shadow bg-white dark:bg-neutral-700 rounded-2xl flex flex-col gap-5 max-h-[236px]  hover:shadow-2xl hover:scale-[1.01] transition-all duration-200 w-full max-w-[500px]"
        >
          <Image
            src={`/assets/images/${option.image}.svg`}
            alt={option.title}
            width={100}
            height={100}
            className="size-17.5"
          />
          <div className="flex justify-between items-end">
            <div className="flex flex-col gap-3">
              <h3 className="text-heading3 text-neutral-800 dark:text-white">
                {option.title}
              </h3>
              <p className="text-body text-neutral-500  max-w-[422px] dark:text-neutral-300 md:block hidden">
                {option.description}
              </p>
              <p className="text-body text-neutral-500    dark:text-neutral-300 md:hidden max-w-60">
                {option.description2}
              </p>
            </div>
            <Link
              href={option.link}
              className="dark:bg-orange-1 bg-orange-5 size-11.5 flex-horizontal-center rounded-[12px]"
            >
              <ArrowRight className="dark:text-white text-orange-1 size-5" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodMenu;
