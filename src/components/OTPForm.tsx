import React from "react";
import OtpInput from "./OTPInput";

const OTPForm = () => {
  return (
    <div className=" gap-9 flex-vertical-center h-full px-5 text-center">
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
      <div className="cta bg-primary-purple-2 text-white rounded-2xl py-4 px-6 max-w-[480px] w-full hover:scale-101 transition-transform duration-200 cursor-pointer">
        Next
      </div>
    </div>
  );
};

export default OTPForm;
