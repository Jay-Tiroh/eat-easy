"use client";

import DesktopLocation from "@/components/location/DesktopLocation";
import MobileLocation from "@/components/location/MobileLocation";

const page = () => {
  return (
    <div className="h-full">
      <MobileLocation /> <DesktopLocation />
    </div>
  );
};

export default page;
