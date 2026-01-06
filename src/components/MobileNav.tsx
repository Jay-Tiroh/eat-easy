"use client";

import { useSidebar } from "@/contexts/SidebarContext";
import { RiMenu2Fill } from "react-icons/ri";

const MobileNav = () => {
  const { sidebarOpen, setSidebarOpen } = useSidebar();

  const handleToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div
      className={`w-full justify-end py-2.5 px-10 items-center lg:hidden flex`}
    >
      <RiMenu2Fill
        className="size-6 text-neutral-700 dark:text-primary-purple-5 cursor-pointer"
        onClick={handleToggle}
      />
    </div>
  );
};

export default MobileNav;
