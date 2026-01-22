"use client";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Skeleton } from "@/components/ui/skeleton";
const locationCards = [
  {
    image: "qrcode",
    dark: "qrcode-dark",
    title: "Scan QR Code",
    description: "Scan the QR code to set your location quickly and easily.",
  },
  {
    image: "map-pin",
    dark: "",
    title: "Select Location Manually",
    description:
      "If you prefer to add your location manually, here is your option",
  },
];
export default function MobileLocation() {
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

  return <div className="w-full mt-3 h-full lg:hidden">{renderPage()}</div>;
}

const Page1 = ({ handleNext }: { handleNext: () => void }) => {
  return (
    <div className="flex-vertical-center gap-6">
      <h1 className="text-[22px] font-medium text-neutral-800 leading-7.5 tracking-[-0.5px] dark:text-white">
        Set your locations 📍
      </h1>

      <div className="flex-vertical-center w-full gap-6">
        {locationCards.map((card) => (
          <Suspense
            fallback={
              <Skeleton className="w-[400px] h-[212px]  rounded-lg bg-neutral-500" />
            }
          >
            <div
              key={card.title}
              className="card-shadow flex-vertical-center bg-white dark:bg-neutral-700 shadow-lg  rounded-2xl p-20 max-w-[400px] h-[212px] gap-5 cursor-pointer"
              onClick={handleNext}
            >
              <Image
                src={`/assets/images/${card.image}.svg`}
                width={100}
                height={100}
                alt={card.title}
                className={`size-17.5 ${card.dark ? "dark:hidden" : ""}`}
              />
              {card.dark && (
                <Image
                  src={`/assets/images/${card.dark}.svg`}
                  width={100}
                  height={100}
                  alt={card.title}
                  className="size-17.5 hidden dark:block"
                />
              )}

              <h2 className="text-neutral-900 dark:text-white leading-5.5 font-semibold text-center w-full">
                {card.title}
              </h2>
              <p className="text-neutral-600  dark:text-neutral-300 text-sm leading-6 font-medium  text-center">
                {card.description}
              </p>
            </div>
          </Suspense>
        ))}
      </div>
    </div>
  );
};

const Page2 = () => {
  return (
    <div className="flex-vertical-center sm:gap-20 sm:py-10">
      <div className="gap-8 flex-vertical-center h-[510px] sm:h-auto text-center justify-baseline">
        <Image
          src={`/assets/images/map-pin.svg`}
          width={100}
          height={100}
          alt="Map Pin"
          className="size-17.5"
        />
        <h1 className="text-[22px] font-medium text-neutral-800 leading-7.5 tracking-[-0.5px] font-heading">
          Share your location with us to order
        </h1>
        <p className="text-neutral-600 dark:text-neutral-150 text-body w-[327px] text-center">
          Please enter your location or allow access to your location to find
          all restaurants that are near you
        </p>
      </div>
      <div className="flex-vertical-center gap-4 w-full pt-8 text-center">
        <span className="text-primary-purple-2 dark:text-primary-purple-5 py-4 px-6 max-w-[327px] lg:max-w-[480px] w-full cursor-pointer hover:underline">
          Enter a new location
        </span>
        <div className="w-full flex justify-center">
          <Link
            href={"/locations/select"}
            className="cta bg-primary-purple-2 text-white rounded-2xl py-4 px-6 max-w-[327px] lg:max-w-[480px] w-full hover:scale-101 transition-transform duration-200 cursor-pointer"
          >
            Continue
          </Link>
        </div>{" "}
      </div>
    </div>
  );
};
