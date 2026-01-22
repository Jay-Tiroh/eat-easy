"use client";
import { ChevronDown, MapPin } from "lucide-react";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import PageInfo from "./PageInfo";

const NavBar = () => {
  return (
    <div className=" hidden lg:flex items-center w-full h-20 py-5 px-7.5 justify-between border-b border-neutral-150 dark:border-neutral-700 ">
      <PageInfo />
      <div className="flex items-center">
        <div className="location flex-horizontal-center gap-2 py-3 px-6 cursor-pointer">
          <MapPin className="size-5 text-primary-purple-3 dark:text-primary-purple-5" />
          <span className="text-primary-purple-3 dark:text-primary-purple-5 font-semibold text-sm leading-5.5">
            Gram Bistro
          </span>
          <ChevronDown className="size-4 text-primary-purple-3 dark:text-primary-purple-5" />
        </div>
        <div className="border h-[21px] dark:border-neutral-400  mx-3"></div>

        <div className="cart flex-horizontal-center gap-2 py-3 px-6 cursor-pointer">
          <FiShoppingCart className="size-5 text-primary-purple-3 dark:text-primary-purple-5 " />
          <span className="text-primary-purple-3 dark:text-primary-purple-5 font-semibold text-sm leading-5.5">
            My Order
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
