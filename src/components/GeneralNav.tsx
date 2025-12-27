"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuInfo } from "react-icons/lu";
import { IoRibbonOutline } from "react-icons/io5";
import { useSidebar } from "@/contexts/SidebarContext";

export const navItems = [
  {
    name: "My Rewards",
    icon: IoRibbonOutline,
    link: "/rewards",
  },
  {
    name: "Help",
    icon: LuInfo,
    link: "/help",
  },
];

const GeneralNav = () => {
  const { sidebarOpen } = useSidebar();
  const pathname = usePathname();

  const isActive = (link: string) => pathname === link;

  const activeTab =
    "rounded-2xl flex items-center justify-center bg-yellow-1 size-12 p-3";

  const normalTab = `rounded-2xl flex items-center justify-center ${
    sidebarOpen ? "bg-white/15" : ""
  } size-12 p-3`;

  const activeText = `text-yellow-1 ${
    sidebarOpen ? "" : "hidden"
  } font-bold transition-all duration-300`;

  const normalText = `text-white ${
    sidebarOpen ? "" : "hidden"
  } font-medium transition-all duration-300`;

  return (
    <div className="flex-vertical-center gap-4 w-full">
      <h4
        className={`text-neutral-150 text-[13px] font-semibold px-1.5 w-full ${
          sidebarOpen ? "" : "text-center"
        }`}
      >
        GENERAL
      </h4>

      {navItems.map((item) => {
        const active = isActive(item.link);
        const Icon = item.icon;

        return (
          <Link
            key={item.link}
            href={item.link}
            className={`flex items-center gap-3 p-1.5 w-full ${
              sidebarOpen ? "" : "justify-center"
            }`}
          >
            <div className={active ? activeTab : normalTab}>
              <Icon className="text-white size-6" />
            </div>

            <span className={active ? activeText : normalText}>
              {item.name}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default GeneralNav;
