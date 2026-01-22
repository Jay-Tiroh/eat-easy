"use client";
import React, { useEffect } from "react";

import { LayoutGrid, List } from "lucide-react";
import { DishCard, Dish } from "./DishCard";
import { desserts, dishes, drinks } from "./Lists";

const Recommendations = () => {
  const [selectedTab, setSelectedTab] = React.useState("eat");
  const tabs = [
    { name: "Eat", active: true },
    { name: "Drink", active: false },
    { name: "Dessert", active: false },
  ];

  const [list, setList] = React.useState<Dish[]>(dishes);

  useEffect(() => {
    // Logic to fetch or update dishes based on selectedTab can be added here
    if (selectedTab === "eat") {
      // Fetch or filter eat dishes
      setList(dishes);
    } else if (selectedTab === "drink") {
      setList(drinks);
    } else {
      setList(desserts);
    }
  }, [selectedTab]);

  const [viewMode, setViewMode] = React.useState("list");
  return (
    <div className="flex-vertical-center items-start sm:items-center px-5 py-5 w-full overflow-auto scroll-none ">
      {" "}
      <h2 className="font-heading text-heading2 font-medium text-[22px] tracking-[-0.5px] leading-7.5  max-w-82 text-neutral-800 dark:text-white md:hidden sm:text-center ">
        We think you might enjoy these specially selected dishes
      </h2>
      {/* mobile selection bar */}
      <div className="flex items-center justify-between py-5 h-23.5 w-full max-w-md md:hidden">
        <div className="flex w-full max-w-66 items-center">
          {tabs.map((tab) => (
            <span
              key={tab.name}
              className={`${
                tab.name.toLowerCase() === selectedTab
                  ? "bg-yellow-1 text-white dark:text-neutral-800 font-bold"
                  : "text-neutral-600 dark:text-neutral-100 font-medium"
              } leading-5 text-center px-3.5 py-3 rounded-2xl flex-vertical-center w-full max-w-31 cursor-pointer`}
              onClick={() => setSelectedTab(tab.name.toLowerCase())}
            >
              {tab.name}
            </span>
          ))}
        </div>

        <hr className="border-neutral-150 dark:border-neutral-400 border h-[21px]" />

        <div className="flex-horizontal-center p-1 rounded-[20px] bg-white dark:bg-neutral-700 card-shadow">
          <div
            className={` text-neutral-400 dark:text-white rounded-2xl p-3 flex-horizontal-center cursor-pointer ${
              viewMode === "list" ? "block" : "hidden"
            }`}
            onClick={() => setViewMode("grid")}
          >
            <List className={`size-5`} />
          </div>
          <div
            className={` text-neutral-400 dark:text-white rounded-2xl p-3 flex-horizontal-center cursor-pointer ${
              viewMode === "grid" ? "block" : "hidden"
            }`}
            onClick={() => setViewMode("list")}
          >
            <LayoutGrid className="size-5" />
          </div>
        </div>
      </div>
      {/* desktop selection bar */}
      <div className="md:flex items-center justify-between px-6 py-5 rounded-[20px] bg-white dark:bg-neutral-700 card-shadow h-23.5 w-full hidden">
        <div className="flex w-full items-center">
          {tabs.map((tab) => (
            <span
              key={tab.name}
              className={`${
                tab.name.toLowerCase() === selectedTab
                  ? "bg-yellow-1 text-white dark:text-neutral-800 font-bold"
                  : "text-neutral-600 dark:text-neutral-100 font-medium"
              } leading-5 text-center px-3.5 py-3 rounded-2xl flex-vertical-center w-full max-w-31 cursor-pointer`}
              onClick={() => setSelectedTab(tab.name.toLowerCase())}
            >
              {tab.name}
            </span>
          ))}
        </div>
        <div className="flex gap-4 items-center justify-end w-full">
          <div className="flex gap-3 items-center">
            <span className="font-medium text-xs lg:text-sm leading-4.5 text-neutral-600 dark:text-neutral-200 truncate px-2 ">
              View mode
            </span>
            <div className="flex-horizontal-center p-1 rounded-[20px] border border-neutral-150 dark:bg-neutral-800 dark:border-none">
              <div
                className={`  rounded-2xl p-3 flex-horizontal-center cursor-pointer ${
                  viewMode === "list"
                    ? "bg-neutral-500 dark:bg-neutral-700 dark:text-neutral-200 text-white"
                    : "text-neutral-400 dark:text-neutral-500"
                }`}
                onClick={() => setViewMode("list")}
              >
                <List className={`size-5`} />
              </div>
              <div
                className={`  rounded-2xl p-3 flex-horizontal-center cursor-pointer ${
                  viewMode === "grid"
                    ? "bg-neutral-500 text-white dark:bg-neutral-700 dark:text-neutral-200 "
                    : "text-neutral-400 dark:text-neutral-500"
                }`}
                onClick={() => setViewMode("grid")}
              >
                <LayoutGrid className="size-5" />
              </div>
            </div>
          </div>
          <hr className="border-neutral-150 dark:border-neutral-400 border h-[21px]" />
          <div className="cta bg-primary-purple-2 text-nowrap text-white rounded-2xl py-4 px-6 max-w-54 w-full hover:scale-101 transition-transform duration-200 cursor-pointer font-semibold leading-5.5 text-center">
            Ask for new proposals
          </div>
        </div>
      </div>
      <div
        className={`grid place-items-center ${
          viewMode === "list"
            ? " md:grid-cols-2"
            : "sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
        } gap-8 w-full overflow-auto scroll-none py-8`}
      >
        {list.map((listItem, index) => (
          <DishCard key={index} dish={listItem} viewMode={viewMode} />
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
