"use client";
import DesktopLocation from "@/components/DesktopLocation";
import MobileLocation from "@/components/MobileLocation";
import React from "react";
import { useMediaQuery } from "react-responsive";

const page = () => {
  const isMobile = useMediaQuery({ maxWidth: 1032 });

  return (
    <div className="h-full">
      {isMobile ? <MobileLocation /> : <DesktopLocation />}
    </div>
  );
};

export default page;
