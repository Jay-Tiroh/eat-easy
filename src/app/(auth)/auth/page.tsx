import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const page = () => {
  return (
    <div className=" gap-10 flex-vertical-center h-full px-5 text-center">
      <div className="flex-vertical-center gap-4 max-w-[480px]">
        <h1 className="font-heading font-medium text-[40px] tracking-[-0.5px] leading-12">
          Let’s Get Started 😁
        </h1>{" "}
        <p className=" text-neutral-600 dark:text-neutral-150 text-body">
          Sign up or login into to have a full digital experience in our
          restaurant
        </p>
      </div>
      <div className="flex-vertical-center gap-4 w-full">
        <Link
          href={"/auth/verify-email"}
          className="w-full max-w-[480px] flex justify-center"
        >
          <div className="cta bg-primary-purple-2 text-white rounded-2xl py-4 px-6 max-w-[480px] w-full hover:scale-101 transition-transform duration-200 cursor-pointer">
            Get Started
          </div>{" "}
        </Link>
        <div className="separator relative flex items-center justify-center max-w-[480px] w-full my-4">
          <div className="line border-neutral-400 border w-full"></div>
          <span className=" text-neutral-400 absolute p-1 bg-[#f7f7f7] dark:bg-bg">
            OR
          </span>
        </div>
        <div className="cta bg-white text-neutral-500 border border-primary-purple-3 dark:bg-transparent dark:text-primary-purple-5 rounded-2xl py-4 px-6 max-w-[480px] w-full hover:scale-101 transition-transform duration-200 cursor-pointer flex items-center justify-center gap-3">
          <FaFacebook className="size-6 fill-blue-500" />
          Continue with Facebook
        </div>
        <div className="cta bg-white text-neutral-500 border border-primary-purple-3 dark:bg-transparent dark:text-primary-purple-5 rounded-2xl py-4 px-6 max-w-[480px] w-full hover:scale-101 transition-transform duration-200 cursor-pointer flex items-center justify-center gap-3">
          <FcGoogle className="size-6" /> Continue with Gmail
        </div>
      </div>
      <Link
        href="/signup"
        className="text-primary-purple-2 dark:text-primary-purple-5 py-4 px-6 max-w-[480px] w-full cursor-pointer hover:underline font-semibold mt-10"
      >
        Sign up later
      </Link>
    </div>
  );
};

export default page;
