import React from "react";

const EmailVerification = () => {
  return (
    <div className=" gap-9 flex-vertical-center h-full px-5 text-center">
      <div className="flex-vertical-center gap-4 max-w-[480px]">
        <h1 className="font-heading font-medium text-[40px] tracking-[-0.5px] leading-12">
          What’s your email? 📨
        </h1>{" "}
        <p className=" text-neutral-600 text-body">
          We need it to search after your account or create a new one.
        </p>
      </div>
      <div className="flex-vertical-center gap-10  w-full">
        <div className="cta bg-white text-neutral-500 border-neutral-150 border rounded-2xl py-4 px-6 max-w-[480px] w-full hover:scale-101 transition-transform duration-200">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="outline-none w-full"
          />
        </div>

        <div className="cta bg-primary-purple-2 text-white rounded-2xl py-4 px-6 max-w-[480px] w-full hover:scale-101 transition-transform duration-200 cursor-pointer">
          Next
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
