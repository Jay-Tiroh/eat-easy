"use client";

import { useSidebar } from "@/store/sidebarStore";
import { RiMenu2Fill } from "react-icons/ri";

const MobileNav = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <div
      className={`w-full justify-end py-2.5 px-10 items-center lg:hidden flex`}
    >
      <RiMenu2Fill
        className="size-6 text-neutral-700 dark:text-primary-purple-5 cursor-pointer"
        onClick={toggleSidebar}
      />
    </div>
  );
};

export default MobileNav;
