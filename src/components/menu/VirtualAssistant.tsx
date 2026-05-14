"use client";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

export default function VirtualAssistant() {
  const [page, setPage] = React.useState(1);

  const handleNext = () => {
    setPage(page + 1);
    renderPage();
  };

  function renderPage() {
    switch (page) {
      case 1:
        return <Step1 handleNext={handleNext} />;
      case 2:
        return <Step2 handleNext={handleNext} />;
      case 3:
        return <Step3 />;
      default:
        return <Step1 handleNext={handleNext} />;
    }
  }
  return renderPage();
}

const Step1 = ({ handleNext }: { handleNext: () => void }) => {
  return (
    <div className="flex-vertical-center justify-start h-full w-full gap-15 overflow-auto scroll-none pb-10">
      <Image
        src="/assets/images/virtual-ill.svg"
        alt="Virtual Assistant Coming Soon"
        width={400}
        height={400}
        className="size-[366px]"
      />
      <div className="flex-vertical-center gap-4">
        <h2 className="font-heading text-heading3 font-medium md:text-[40px] tracking-[-0.5px] md:leading-12.5 text-center max-w-[663px] text-neutral-800 dark:text-white">
          Hello! 👋 <br />
          I’m your virtual assistant.
        </h2>
        <p className="text-body text-neutral-600 dark:text-neutral-150 max-w-[900px] text-center">
          In order to find the best suited choices for you, please answer the
          next few questions.
        </p>
      </div>
      <div className="flex-vertical-center gap-4 w-full text-center p-5 ">
        <div className="w-full flex justify-center">
          <div
            className="cta bg-primary-purple-2 text-white rounded-2xl py-4 px-6 max-w-[480px] w-full hover:scale-101 transition-transform duration-200 cursor-pointer "
            onClick={handleNext}
          >
            Great, let’s start
          </div>
        </div>{" "}
        <Link
          href={"/menu/full-menu"}
          className="text-primary-purple-2 dark:text-primary-purple-5 py-4 px-6 max-w-[480px] w-full cursor-pointer hover:underline"
        >
          Take me to the menu
        </Link>
      </div>
    </div>
  );
};

const Step2 = ({ handleNext }: { handleNext: () => void }) => {
  return (
    <div className="flex-vertical-center justify-start h-full w-full gap-15 overflow-auto scroll-none py-10">
      <div className="flex-vertical-center gap-4 ">
        <h2 className="font-heading text-heading3 font-medium md:text-[40px] tracking-[-0.5px] md:leading-12.5 text-center max-w-[663px] text-neutral-800 dark:text-white px-5">
          It seems like we already know <br className="lg:hidden" />
          each other 🤝
        </h2>
        <p className="text-body text-neutral-600 max-w-[550px] px-5 text-center dark:text-neutral-150 ">
          You can use the recommendations configured during your last visit to
          our restaurant or you can have new ones.
        </p>
      </div>

      <div className="flex-vertical-center w-full gap-6 p-5">
        <div className="card-shadow w-full h-21.5 max-w-[480px] flex items-center justify-between p-5 rounded-2xl  bg-white dark:bg-neutral-700">
          <span className="text-heading4 text-neutral-900 dark:text-white">
            New recommendation
          </span>
          <ArrowRight className="size-5 text-yellow-1 m-6.5" />
        </div>

        <div className="flex-vertical-center w-full">
          <div className="card-shadow bg-white dark:bg-neutral-700 w-full h-21.5 max-w-[480px] flex items-center justify-between p-5 rounded-2xl">
            <div className="flex flex-col gap-3">
              <span className="text-heading4 text-neutral-900 dark:text-white">
                Your last recommendation
              </span>
              <div className="text-body text-neutral-500 dark:text-neutral-300 flex items-center gap-1.5">
                <MdOutlineCalendarMonth className="size-[19px] text-orange-1 dark:text-orange-5" />{" "}
                <span>16/02/2023</span>
              </div>
            </div>
            <ArrowRight className="size-5 text-yellow-1 m-6.5" />
          </div>
        </div>
      </div>
      <div className="flex-horizontal-center p-5 w-full">
        <div
          className="cta bg-primary-purple-2 text-white rounded-2xl py-4 px-6 max-w-[480px] w-full hover:scale-101 transition-transform duration-200 cursor-pointer text-center"
          onClick={handleNext}
        >
          Next
        </div>
      </div>
    </div>
  );
};

const Step3 = () => {
  const [options, setOptions] = useState([
    { text: "🥵 Thirsty", selected: false },
    { text: "😋 Hungry", selected: false },
    { text: "🥱 Tired", selected: false },
    { text: "😤 Angry", selected: false },
    { text: "🤒 Sick", selected: false },
    { text: "⚡ Energized", selected: false },
    { text: "🤔 Other", selected: false },
  ]);
  return (
    <div className="flex-vertical-center justify-start h-full w-full gap-15 overflow-auto scroll-none pb-10">
      <div className="flex-vertical-center w-full gap-15 h-[659px]">
        <div className="flex-vertical-center gap-4">
          <h2 className="font-heading text-heading3 font-medium md:text-[40px] tracking-[-0.5px] md:leading-12.5 text-center max-w-[663px] text-neutral-800 dark:text-white">
            How are you feeling right now?
          </h2>
          <p className="text-body text-neutral-600 max-w-[900px] text-center dark:text-neutral-150 ">
            Select all that applies:
          </p>
        </div>
        <div className="flex-horizontal-center gap-6 max-w-[523px] w-full flex-wrap">
          {options.map((option) => (
            <div
              key={option.text}
              className={`flex-horizontal-center p-4.5 rounded-2xl  card-shadow cursor-pointer transition-all duration-150 text-nowrap ${
                option.selected
                  ? "text-white bg-yellow-1 dark:text-neutral-800"
                  : "text-neutral-500 bg-white dark:text-neutral-150 dark:border dark:border-neutral-700 dark:bg-neutral-800"
              } `}
              onClick={() => {
                setOptions((prevOptions) =>
                  prevOptions.map((item) =>
                    item.text === option.text
                      ? { ...item, selected: !item.selected }
                      : item
                  )
                );
              }}
            >
              {option.text}
            </div>
          ))}
        </div>
      </div>
      <div className="flex-vertical-center gap-4 w-full text-center ">
        <div className="w-full flex justify-center px-5">
          <Link
            href={"/menu/smart-assistant/recommendations"}
            className="cta bg-primary-purple-2 text-white rounded-2xl py-4 px-6 max-w-[480px] w-full hover:scale-101 transition-transform duration-200 cursor-pointer "
          >
            Continue
          </Link>
        </div>{" "}
        <Link
          href={"/menu/full-menu"}
          className="text-primary-purple-2 dark:text-primary-purple-5 py-4 px-6 max-w-[480px] w-full cursor-pointer hover:underline"
        >
          Take me to the menu
        </Link>
      </div>
    </div>
  );
};
