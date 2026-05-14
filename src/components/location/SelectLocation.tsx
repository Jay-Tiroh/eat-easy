import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";
import Link from "next/link";
const SelectLocation = () => {
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
    <div className="h-full w-full flex-vertical-center">
      {/* Desktop */}
      <div className="flex-vertical-center  h-full py-10 gap-15 overflow-auto scroll-none hidden md:flex">
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
      {/* Mobile */}
      <div className="flex-vertical-center justify-between h-full py-10 md:hidden">
        <div className="gap-3.5 flex-vertical-center  text-center justify-start">
          <h1 className="text-[22px] font-medium text-neutral-800 leading-7.5 tracking-[-0.5px] font-heading">
            Share your location with us to order
          </h1>
          <p className="text-neutral-600 dark:text-neutral-150 text-body w-[327px] text-center">
            Please enter your location or allow access to your location to find
            all restaurants that are near you
          </p>
          <RadioGroup defaultValue={"0"}>
            {locations.map((location, index) => (
              <div
                className="card-shadow dark:bg-neutral-700 flex justify-between items-center bg-white shadow-lg  rounded-2xl p-5 w-[327px] "
                key={location.name}
              >
                <Label
                  htmlFor={String(index)}
                  className="flex-vertical-center gap-3 w-full"
                >
                  <h2 className="text-neutral-900 dark:text-white leading-5.5 font-semibold w-full text-start">
                    {location.name}
                  </h2>
                  <p className="text-neutral-500 dark:text-neutral-300 text-sm leading-6 font-medium text-start w-full">
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
            href={"/menu"}
            className="cta bg-primary-purple-2 text-white rounded-2xl py-4 px-6 max-w-[327px] lg:max-w-[480px] w-full hover:scale-101 transition-transform duration-200 cursor-pointer text-center"
          >
            Continue
          </Link>
        </div>{" "}
      </div>
    </div>
  );
};

export default SelectLocation;
