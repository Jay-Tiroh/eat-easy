import AuthIllustration from "@/components/AuthIllustration";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      {/* desktop */}
      <div className=" gap-10 hidden lg:flex-vertical-center h-full px-5 text-center">
        <div className="flex-vertical-center gap-4 max-w-[480px]">
          <h1 className="font-heading font-medium text-[40px] tracking-[-0.5px] leading-12">
            Let’s Get Started 😁
          </h1>{" "}
          <p className=" text-neutral-600 text-body">
            Sign up or login into to have a full digital experience in our
            restaurant
          </p>
        </div>
        <div className="flex-vertical-center gap-4 w-full">
          <Link href={"/auth"} className="w-full flex justify-center">
            <div className="cta bg-primary-purple-2 text-white rounded-2xl py-4 px-6 max-w-[480px] w-full hover:scale-101 transition-transform duration-200 cursor-pointer">
              Get Started
            </div>
          </Link>{" "}
          <Link
            href="/auth"
            className="text-primary-purple-2 py-4 px-6 max-w-[480px] w-full cursor-pointer hover:underline"
          >
            Sign up later
          </Link>
        </div>
      </div>

      {/* mobile screen */}
      <div className="bg-white lg:hidden flex-vertical-center h-full text-center py-10">
        <AuthIllustration />
        <div className="flex-vertical-center gap-4 w-full pt-8">
          <Link
            href="/signup"
            className="text-primary-purple-2 py-4 px-6 max-w-[327px] lg:max-w-[480px] w-full cursor-pointer hover:underline"
          >
            Sign up later
          </Link>
          <Link href={"/auth"} className="w-full flex justify-center">
            <div className="cta bg-primary-purple-2 text-white rounded-2xl py-4 px-6 max-w-[327px] lg:max-w-[480px] w-full hover:scale-101 transition-transform duration-200 cursor-pointer">
              Get Started
            </div>
          </Link>{" "}
        </div>
      </div>
    </>
  );
};

export default page;
