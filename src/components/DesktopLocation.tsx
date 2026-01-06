'use  client";';
import { MapPin, Search } from "lucide-react";
import Image from "next/image";
import React from "react";
import Map from "./Map";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
        return <Page2 handleNext={handleNext} />;
      case 3:
        return <Page3 />;
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

const Page2 = ({ handleNext }: { handleNext: () => void }) => {
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
          <Search
            className="size-5 text-alt-grey dark:text-neutral-300 hover:text-neutral-400 cursor-pointer transition-colors duration-150"
            onClick={handleNext}
          />
        </div>

        <div className="flex-horizontal-center gap-4 text-primary-purple-3 dark:text-primary-purple-5 ">
          <div
            className="flex-horizontal-center gap-2 cursor-pointer hover:underline"
            onClick={handleNext}
          >
            <MapPin className="size-5" /> <span>Use my current location</span>
          </div>
          <div className="border-neutral-200 border w-4 h-0"></div>
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

const Page3 = () => {
  const locations = [
    {
      name: "Gram Bistro",
      address: "790 8th Ave, New York",
      image: "gram-ill",
    },
    { name: "Bin 71", address: "792 8th Ave, New York", image: "bin-ill" },
    { name: "Sushi Bar", address: "794 8th Ave, New York", image: "sushi-ill" },
  ];

  return (
    <div className="flex-vertical-center  h-full py-10 gap-15 overflow-auto scroll-none">
      <div className="gap-15 flex-vertical-center  text-center justify-start">
        <div className="flex-vertical-center gap-4">
          <h1 className="font-heading font-medium text-neutral-800 dark:text-white leading-12.5 -tracking-[0.5px] text-center text-[40px] max-w-[634px]">
            Restaurants based on your selected location
          </h1>
          <p className=" text-neutral-600 dark:text-neutral-150 text-center text-body  max-w-[656px]">
            Please enter your location or use your current location and enjoy
            the custom experience in any of your restaurants.
          </p>
        </div>
        <RadioGroup defaultValue={"0"}>
          {locations.map((location, index) => (
            <div
              className="card-shadow flex justify-between items-center bg-white dark:bg-neutral-700 shadow-lg  rounded-2xl p-5 w-[480px] relative overflow-hidden"
              key={location.name}
            >
              <Image
                src={`/assets/images/${location.image}.svg`}
                alt={location.name}
                width={100}
                height={120}
                className="absolute top-0 left-0 h-full"
              />
              <Label
                htmlFor={String(index)}
                className="flex-vertical-center gap-3 w-full ml-25"
              >
                <h2 className="text-neutral-900 dark:text-white leading-5.5 font-semibold w-full text-start">
                  {location.name}
                </h2>
                <p className="text-neutral-500 dark:text-neutral-200 text-sm leading-6 font-medium text-start w-full">
                  {location.address}
                </p>
              </Label>
              <RadioGroupItem
                value={String(index)}
                id={String(index)}
                className="border-neutral-300
            data-[state=checked]:accent-sec-yellow-1!
            data-[state=checked]:border-sec-yellow-1!"
              />
            </div>
          ))}
        </RadioGroup>
      </div>
      <div className="w-full flex justify-center">
        <Link
          href="/menu"
          className="cta bg-primary-purple-2 text-white rounded-2xl py-4 px-6 max-w-[480px] lg:max-w-[480px] w-full hover:scale-101 transition-transform duration-200 cursor-pointer text-center"
        >
          Continue
        </Link>
      </div>{" "}
    </div>
  );
};
