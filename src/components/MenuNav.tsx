"use client";
import React from "react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { IoMdBook } from "react-icons/io";
import { LuHistory, LuMapPin } from "react-icons/lu";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSidebar } from "@/contexts/SidebarContext";
import { link } from "fs";

type NavItem = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  link: string;
};

type CollapsibleNavGroup = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  children: {
    name: string;
    link: string;
  }[];
};

const collapsibleMenu = {
  name: "Food Menu",
  icon: IoMdBook,
  basePath: "/menu",
  link: "/menu",
  children: [
    { name: "Smart Assistant", link: "/menu/smart-assistant" },
    { name: "Full Menu", link: "/menu/full-menu" },
  ],
};

const navItems = [
  {
    name: "Order History",
    icon: LuHistory,
    link: "/order-history",
  },
  {
    name: "Locations",
    icon: LuMapPin,
    link: "/locations",
  },
];

const MenuNav = () => {
  const { sidebarOpen } = useSidebar();
  const pathname = usePathname();
  const isActive = (link: string) => pathname === link;

  const isGroupActive = (links: string[]) =>
    links.some((link) => pathname.startsWith(link));

  const groupActive = isGroupActive(
    collapsibleMenu.children.map((c) => c.link)
  );

  const [isOpen, setIsOpen] = React.useState(groupActive);

  React.useEffect(() => {
    if (!sidebarOpen && isOpen) {
      setIsOpen(false);
    }
  }, [sidebarOpen, isOpen]);

  React.useEffect(() => {
    if (groupActive) {
      setIsOpen(true);
    }
  }, [groupActive]);

  return (
    <div className="flex-vertical-center gap-4 w-full border-b border-neutral-700 pb-9">
      <h4
        className={`text-neutral-150 text-[13px] font-semibold px-1.5 w-full ${
          sidebarOpen ? "" : "text-center"
        }`}
      >
        MENU
      </h4>

      {/* Collapsible group */}
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
        <CollapsibleTrigger className="w-full">
          <div
            className={`flex items-center gap-3 p-1.5 w-full ${
              sidebarOpen ? "" : "justify-center"
            }`}
          >
            <div
              className={`rounded-2xl size-12 p-3 flex items-center justify-center ${
                groupActive || isActive(collapsibleMenu.link)
                  ? "bg-yellow-1"
                  : sidebarOpen
                  ? "bg-white/15"
                  : ""
              }`}
            >
              <collapsibleMenu.icon className="text-white size-6" />
            </div>

            <Link
              href={collapsibleMenu.link}
              className={`font-bold transition-all duration-300 ${
                sidebarOpen ? "" : "hidden"
              } ${
                isActive(collapsibleMenu.link) ? "text-yellow-1" : "text-white"
              }`}
            >
              {collapsibleMenu.name}
            </Link>
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent className="border-l-2 border-yellow-0 ml-5.5 pl-5.5 mt-4">
          <div className="flex-vertical-center gap-4">
            {collapsibleMenu.children.map((item) => {
              const active = isActive(item.link);

              return (
                <Link
                  key={item.link}
                  href={item.link}
                  className={`w-full p-1.5 text-sm transition-colors ${
                    active
                      ? "text-yellow-1 font-semibold"
                      : "text-neutral-200 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Normal links */}
      {navItems.map((item) => {
        const active = isActive(item.link);

        return (
          <Link
            key={item.link}
            href={item.link}
            className={`flex items-center gap-3 p-1.5 w-full ${
              sidebarOpen ? "" : "justify-center"
            }`}
          >
            <div
              className={`rounded-2xl size-12 p-3 flex items-center justify-center ${
                active ? "bg-yellow-1" : sidebarOpen ? "bg-white/15" : ""
              }`}
            >
              <item.icon className="text-white size-6" />
            </div>

            <span
              className={`font-medium transition-all duration-300 ${
                sidebarOpen ? "" : "hidden"
              } ${active ? "text-yellow-1" : "text-white"}`}
            >
              {item.name}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default MenuNav;
