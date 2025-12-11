import React from "react";
import OtpInput from "./OTPInput";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const OTPForm = () => {
  return (
    <div className="  flex flex-col items-center h-full px-5 text-center">
      <div className="md:flex-vertical-center! v-flex-h-center gap-9 py-5 h-3/4 w-full">
        <Link
          href="/auth/create"
          className="text-primary-purple-2 py-4 px-6 flex justify-center items-center self-start gap-2  cursor-pointer hover:underline font-semibold bg-white shadow-sm rounded-2xl hover:scale-101 transition-transform duration-200 md:hidden"
        >
          <FaArrowLeft className="fill-primary-purple-2 size-4" />
        </Link>
        <div className="flex-vertical-center gap-4 max-w-[480px]">
          <h1 className="font-heading font-medium text-[40px] tracking-[-0.5px] leading-12">
            Verify Code ⚡️
          </h1>{" "}
          <p className=" text-neutral-600 text-body">
            We just sent a 4-digit verification code to robert.fox@gmail.com.
            Enter the code in the box below to continue.
          </p>
        </div>
        <div className="flex-vertical-center gap-10  w-full">
          <OtpInput length={4} />
          <div className="flex items-center justify-center text-center gap-2 text-neutral-500 font-semibold">
            <span className="">Didn’t receive a code?</span>
            <span className="text-yellow-500 cursor-pointer hover:underline">
              {" "}
              Resend Code
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-[480px] w-full h-1/4 flex justify-center items-center gap-4 ">
        <Link
          href="/auth/create"
          className="text-primary-purple-2 py-4 px-6 hidden md:flex justify-center items-center gap-2 w-1/3 cursor-pointer hover:underline font-semibold bg-white shadow-sm rounded-2xl hover:scale-101 transition-transform duration-200 "
        >
          <FaArrowLeft className="fill-primary-purple-2 size-4" />
          <span>Back</span>
        </Link>
        <div className="cta bg-primary-purple-2 text-white rounded-2xl py-4 px-6  w-full hover:scale-101 transition-transform duration-200 cursor-pointer">
          Next
        </div>
      </div>
    </div>
  );
};

export default OTPForm;
