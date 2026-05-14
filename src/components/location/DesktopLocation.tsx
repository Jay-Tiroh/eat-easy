'use  client";';
import { MapPin, Search } from "lucide-react";
import Image from "next/image";
import React from "react";
import Map from "./Map";
import Link from "next/link";
export default function DesktopLocation() {
  const [page, setPage] = React.useState(1);

  const handleNext = () => {
    setPage(page + 1);
    renderPage();
  };

  function renderPage() {
    switch (page) {
      case 1:
        return <Page1 handleNext={handleNext} />;
      case 2:
        return <Page2 />;

      default:
        return <Page1 handleNext={handleNext} />;
    }
  }
  return <div className="w-full h-full hidden lg:block">{renderPage()}</div>;
}

const Page1 = ({ handleNext }: { handleNext: () => void }) => {
  return (
    <div className="flex-vertical-center gap-10.5 h-full text-wrap">
      <div className="flex-vertical-center gap-4">
        <h1 className="font-heading font-medium text-neutral-800 dark:text-white leading-12.5 -tracking-[0.5px] text-center text-[40px]">
          Start the Smart Menu Experience
        </h1>
        <p className="font-medium text-neutral-600 dark:text-neutral-150 text-center leading-7 max-w-[656px]">
          Please enter your location or use your current location and enjoy the
          custom experience in any of your restaurants.
        </p>
      </div>

      <div
        className="card-shadow bg-white dark:bg-neutral-700 p-6 rounded-[20px] gap-5 flex-vertical-center w-11/12 max-w-[700px] h-[376px]
      "
      >
        <div className="input flex items-center w-full bg-transparent border border-neutral-150 dark:border-neutral-600 rounded-2xl px-4 py-3 gap-2.5 ">
          <input
            type="text"
            className="w-full outline-none text-neutral-500 placeholder:text-neutral-500 dark:text-neutral-200 dark:placeholder:text-neutral-200 font-semibold leading-4.5"
            placeholder="Search for streets, cities, districts..."
          />
          <Search
            className="size-5 text-alt-grey dark:text-neutral-300 hover:text-neutral-400 cursor-pointer transition-colors duration-150"
            onClick={handleNext}
          />
        </div>

        <Image
          src="/assets/images/map.svg"
          width={600}
          height={300}
          alt="Map"
          className="w-full dark:hidden"
        />
        <Image
          src="/assets/images/map-dark.svg"
          width={600}
          height={300}
          alt="Map"
          className="w-full hidden dark:block"
        />

        <div className="flex-horizontal-center gap-4 text-primary-purple-3 dark:text-primary-purple-5 ">
          <div
            className="flex-horizontal-center gap-2 cursor-pointer hover:underline"
            onClick={handleNext}
          >
            <MapPin className="size-5" /> <span>Use my current location</span>
          </div>
          <div className="border-neutral-200 dark:border-neutral-400 border w-4 h-0"></div>
          <div
            className="flex-horizontal-center gap-2 cursor-pointer hover:underline"
            onClick={handleNext}
          >
            <MapPin className="size-5" />
            <span>Set my location on map</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Page2 = () => {
  return (
    <div className="w-full h-full relative">
      <Map />
      <div
        className="card-shadow bg-white dark:bg-neutral-700 p-6 rounded-[20px] gap-5 flex-vertical-center w-11/12 max-w-[700px] h-[196px] absolute top-10 left-1/2 transform -translate-x-1/2
      "
      >
        <h2 className="text-neutral-800 text-heading2 dark:text-white font-medium tracking-[-0.5px] leading-8 text-center">
          Set your location 📍
        </h2>
        <div className="input flex items-center w-full bg-transparent border border-neutral-150 dark:border-neutral-600 rounded-2xl px-4 py-3 gap-2.5 ">
          <input
            type="text"
            className="w-full outline-none text-neutral-500 placeholder:text-neutral-500 dark:text-neutral-200 dark:placeholder:text-neutral-200 font-semibold leading-4.5"
            placeholder="Search for streets, cities, districts..."
          />
          <Link href="/locations/select">
            <Search className="size-5 text-alt-grey dark:text-neutral-300 hover:text-neutral-400 cursor-pointer transition-colors duration-150" />
          </Link>
        </div>

        <div className="flex-horizontal-center gap-4 text-primary-purple-3 dark:text-primary-purple-5 ">
          <div className="flex-horizontal-center gap-2 cursor-pointer hover:underline">
            <MapPin className="size-5" /> <span>Use my current location</span>
          </div>
          <div className="border-neutral-200 border w-4 h-0"></div>
          <div className="flex-horizontal-center gap-2 cursor-pointer hover:underline">
            <MapPin className="size-5" />
            <span>Set my location on map</span>
          </div>
        </div>
      </div>
    </div>
  );
};
