"use client";

import { useSidebar } from "@/contexts/SidebarContext";
import { RiMenu2Fill } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";

const MobileNav = () => {
  const isMobile = useMediaQuery({ maxWidth: 800 });
  const { sidebarOpen, setSidebarOpen } = useSidebar();

  const handleToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div
      className={`w-full justify-end py-5 px-10 items-center ${
        isMobile ? "flex" : "hidden"
      }`}
    >
      <RiMenu2Fill
        className="size-6 text-neutral-700 dark:text-white cursor-pointer"
        onClick={handleToggle}
      />
    </div>
  );
};

export default MobileNav;
