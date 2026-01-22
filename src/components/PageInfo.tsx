import { usePathname } from "next/navigation";
import React from "react";

interface PageInfo {
  route: string;
  name: string;
  Desc: string; // Using your specific key 'Desc'
  hasBack: boolean;
}
const PageInfo = () => {
  const pageData: PageInfo[] = [
    {
      route: "/locations",
      name: "Locations",
      Desc: "Set Location",
      hasBack: false,
    },
    {
      route: "/menu",
      name: "Food Menu",
      Desc: "Browse Our Food Menu",
      hasBack: false,
    },
    {
      route: "/menu/smart-assistant",
      name: "Food Menu",
      Desc: "Virtual Assistant",
      hasBack: false,
    },
    {
      route: "/menu/smart-assistant/recommendations",
      name: "Virtual Assistant",
      Desc: "Our Smart Assistant Recommendations",
      hasBack: false,
    },
    {
      route: "/menu/full-menu",
      name: "Full Menu",
      Desc: "See All Our Dishes",
      hasBack: false,
    },
    {
      route: "/recommendations",
      name: "Virtual Assistant",
      Desc: "Our Smart Assistant Recommendations",
      hasBack: false,
    },
    {
      route: "/recommendations",
      name: "Virtual Assistant",
      Desc: "Our Smart Assistant Recommendations",
      hasBack: false,
    },
  ];

  const pathname = usePathname();

  const currentPage = pageData.find((page) => page.route === pathname);

  const title = currentPage?.name || "App";
  const description = currentPage?.Desc || "";
  const showBackButton = currentPage?.hasBack || false;
  return (
    <>
      <div className="page flex-vertical-center">
        <span className="font-semibold text-sm leading-5 text-neutral-500 dark:text-neutral-200 text-start w-full">
          {title}
        </span>
        <span className="text-neutral-800 text-heading2 dark:text-white">
          {description}
        </span>
      </div>
    </>
  );
};

export default PageInfo;
