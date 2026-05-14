"use client";

import { signOut } from "firebase/auth";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { RxExit } from "react-icons/rx";
import { toast } from "sonner";

import { auth } from "@/app/firebase/config";
import { useAuthFlowStore } from "@/store/authFlowStore";
import { useSidebar } from "@/store/sidebarStore";
import GeneralNav from "./GeneralNav";
import MenuNav from "./MenuNav";

export function Sidebar() {
  const { username, reset } = useAuthFlowStore();
  const { sidebarOpen, setSidebarOpen, toggleSidebar } = useSidebar();
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!sidebarOpen) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [sidebarOpen, setSidebarOpen]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      reset(); // clears email, username, isReturningUser from sessionStorage
      router.push("/auth/verify-email");
    } catch (error) {
      toast.error(
        "Logout failed" + (error instanceof Error ? `: ${error.message}` : "."),
      );
    }
  };

  const sharedProps = {
    sidebarOpen,

    toggleSidebar,
    displayName: username,
    handleLogout,
    sidebarRef,
  };

  return (
    <>
      <MobileSidebar {...sharedProps} />
      <DesktopSidebar {...sharedProps} />
    </>
  );
}

// ─── Shared prop type ────────────────────────────────────────────────────────

type SidebarPanelProps = {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  displayName: string;
  handleLogout: () => void;
  sidebarRef: React.RefObject<HTMLDivElement | null>;
};

// ─── Profile section (shared between mobile + desktop) ───────────────────────

const SidebarProfile = ({
  sidebarOpen,
  displayName,
}: {
  sidebarOpen: boolean;
  displayName: string;
}) => (
  <div className="p-0">
    <div className="w-full flex justify-center items-center border-b-2 px-8 py-3 border-neutral-700">
      <Image
        src="/assets/images/logo-dark.svg"
        alt="Logo"
        width={120}
        height={40}
        className="w-23 h-10 object-contain"
      />
    </div>
    <div
      className={`flex items-center gap-3 ${
        sidebarOpen ? "px-4" : "px-4 flex-col"
      }`}
    >
      <div className="p-2 rounded-full border border-alt-neutral/5 flex items-center justify-center">
        <div className="p-2 rounded-full border border-alt-neutral/20 flex items-center justify-center">
          <Image
            src="/assets/images/avatar-light.svg"
            alt="User Avatar"
            width={60}
            height={60}
            className="rounded-full object-cover"
          />
        </div>
      </div>
      <div className={"flex flex-col " + (sidebarOpen ? "" : "items-center")}>
        <span className="font-medium text-lg">{displayName}</span>
        <span className="text-sm text-neutral-400 underline cursor-pointer">
          View Profile
        </span>
      </div>
    </div>
  </div>
);

// ─── Logout button (shared between mobile + desktop) ─────────────────────────

const LogoutButton = ({
  sidebarOpen,
  handleLogout,
}: {
  sidebarOpen: boolean;
  handleLogout: () => void;
}) => (
  <div className="px-7 pt-8 pb-4">
    <div
      className={`flex items-center gap-3 p-1.5 w-full cursor-pointer text-white hover:text-red-500 ${
        sidebarOpen ? "" : "justify-center"
      }`}
      onClick={handleLogout}
    >
      <div
        className={`rounded-2xl size-12 p-3 flex items-center justify-center transition-all duration-300 ${
          sidebarOpen ? "bg-white/15" : ""
        }`}
      >
        <RxExit className="size-6" />
      </div>
      <span
        className={`font-medium transition-all duration-300 ${
          sidebarOpen ? "" : "hidden"
        }`}
      >
        Logout
      </span>
    </div>
  </div>
);

// ─── Desktop ─────────────────────────────────────────────────────────────────

const DesktopSidebar = ({
  sidebarOpen,
  toggleSidebar,
  displayName,
  handleLogout,
  sidebarRef,
}: SidebarPanelProps) => (
  <div className="relative hidden lg:block">
    <div className="flex items-center justify-center absolute rounded-full p-1 -right-4 top-25 bg-neutral-800! dark:bg-neutral-900! border border-alt-neutral/50 z-99 cursor-pointer">
      <ChevronRight
        className={`${
          sidebarOpen ? "rotate-180" : "rotate-0"
        } text-white transition-transform duration-300 ease-in-out cursor-pointer size-4`}
        onClick={toggleSidebar}
      />
    </div>

    <div
      className={`dashboard-sidebar relative text-white bg-neutral-800! dark:bg-neutral-900! rounded-r-3xl! h-full max-h-screen overflow-auto my-auto flex flex-col justify-between gap-8 transition-all duration-300 ease-in-out ${
        sidebarOpen ? "w-65" : "w-36"
      }`}
      ref={sidebarRef}
    >
      <SidebarProfile sidebarOpen={sidebarOpen} displayName={displayName} />
      <div className="px-7">
        <MenuNav />
      </div>
      <div className="px-7">
        <GeneralNav />
      </div>
      <LogoutButton sidebarOpen={sidebarOpen} handleLogout={handleLogout} />
    </div>
  </div>
);

// ─── Mobile ──────────────────────────────────────────────────────────────────

const MobileSidebar = ({
  sidebarOpen,
  displayName,
  handleLogout,
  sidebarRef,
}: SidebarPanelProps) => (
  <div className="absolute h-screen top-0 left-0 z-50 lg:hidden flex">
    <div
      className={`overlay bg-black/50 absolute inset-0 w-screen h-screen ${
        sidebarOpen ? "block" : "hidden"
      }`}
    />

    <div
      ref={sidebarRef}
      className={`dashboard-sidebar relative text-white bg-neutral-800! dark:bg-neutral-900! rounded-r-3xl! h-full max-h-screen overflow-auto my-auto flex flex-col justify-between gap-8 transition-all duration-300 ease-in-out ${
        sidebarOpen ? "w-65" : "w-0"
      }`}
    >
      <SidebarProfile sidebarOpen={sidebarOpen} displayName={displayName} />
      <div className="px-7">
        <MenuNav />
      </div>
      <div className="px-7">
        <GeneralNav />
      </div>
      <LogoutButton sidebarOpen={sidebarOpen} handleLogout={handleLogout} />
    </div>
  </div>
);
