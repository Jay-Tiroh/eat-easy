"use client";
import React, { useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
    <div className="flex-vertical-center px-5 py-5 w-full overflow-auto scroll-none ">
      {" "}
      <h2 className="font-heading text-heading3 font-medium md:text-[40px] tracking-[-0.5px] md:leading-12.5 text-center max-w-[663px] text-neutral-800 dark:text-white hidden">
        How are you feeling right now?
      </h2>
      <div className="flex items-center justify-between px-6 py-5 rounded-[20px] bg-white card-shadow h-23.5 w-full">
        <div className="flex w-full items-center">
          {tabs.map((tab) => (
            <span
              className={`${
                tab.name.toLowerCase() === selectedTab
                  ? "bg-yellow-1 text-white font-bold"
                  : "text-neutral-600 font-medium"
              } leading-5 text-center px-3.5 py-3 rounded-2xl flex-vertical-center w-full max-w-31 cursor-pointer`}
              onClick={() => setSelectedTab(tab.name.toLowerCase())}
            >
              {tab.name}
            </span>
          ))}
        </div>
        <div className="flex gap-4 items-center justify-end w-full">
          <div className="flex gap-3 items-center">
            <span className="font-medium text-sm leading-4.5 text-neutral-600">
              View mode
            </span>
            <div className="flex-horizontal-center p-1 rounded-[20px] border border-neutral-150">
              <div
                className={` text-neutral-400 rounded-2xl p-3 flex-horizontal-center cursor-pointer ${
                  viewMode === "list" ? "bg-neutral-500 text-white" : ""
                }`}
                onClick={() => setViewMode("list")}
              >
                <List className={`size-5`} />
              </div>
              <div
                className={` text-neutral-400 rounded-2xl p-3 flex-horizontal-center cursor-pointer ${
                  viewMode === "grid" ? "bg-neutral-500 text-white" : ""
                }`}
                onClick={() => setViewMode("grid")}
              >
                <LayoutGrid className="size-5" />
              </div>
            </div>
          </div>
          <hr className="border-neutral-150 border h-[21px]" />
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
