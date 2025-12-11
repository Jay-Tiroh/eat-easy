"use client";
import React from "react";
import { LuEyeOff } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { IoChevronDown } from "react-icons/io5";
import Link from "next/link";

const CreateForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className=" gap-9 flex-vertical-center min-h-screen px-5 text-center">
      <div className="flex-vertical-center gap-4 h-full max-w-[480px]">
        <h1 className="font-heading font-medium text-[40px] tracking-[-0.5px] leading-12">
          Getting started! ✌️
        </h1>{" "}
        <p className=" text-neutral-600 text-body">
          Look like you are new to us! Create an account for a complete
          experience.
        </p>
      </div>
      <div className="flex flex-col items-center gap-20 justify-between! h-full  w-full">
        <div className="form flex-vertical-center gap-5  w-full">
          <div className="cta bg-white text-neutral-500  border-neutral-150 border rounded-2xl py-4 px-6 max-w-[480px] w-full hover:scale-101 transition-transform duration-200">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="outline-none w-full placeholder:text-neutral-500"
            />
          </div>
          <div className="cta bg-white text-neutral-500  border-neutral-150 border rounded-2xl py-4 px-6 max-w-[480px] w-full hover:scale-101 transition-transform duration-200">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="outline-none w-full placeholder:text-neutral-500"
            />
          </div>
          <div className="cta bg-white text-neutral-500  border-neutral-150 border rounded-2xl py-4 px-6 max-w-[480px] w-full hover:scale-101 transition-transform duration-200 flex gap-3 items-center">
            <div className="flex items-center gap-1 px-2 border-r border-r-neutral-500 ">
              Nig
              <IoChevronDown className="size-4" />
            </div>
            <input
              type="phone"
              name="phone"
              id="phone"
              placeholder="Phone Number"
              className="outline-none w-full placeholder:text-neutral-500"
            />
          </div>
          <div className="cta bg-white text-neutral-500  border-neutral-150 border rounded-2xl py-4 px-6 max-w-[480px] w-full hover:scale-101 transition-transform duration-200 flex justify-between items-center">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="outline-none w-full placeholder:text-neutral-500"
            />
            {showPassword ? (
              <LuEye
                className="size-6 cursor-pointer"
                onClick={() => {
                  setShowPassword(false);
                }}
              />
            ) : (
              <LuEyeOff
                className="size-6 cursor-pointer"
                onClick={() => {
                  setShowPassword(true);
                }}
              />
            )}
          </div>
        </div>

        <Link href={"/auth/verify-code"} className="w-full flex justify-center">
          <div className="cta bg-primary-purple-2 text-white rounded-2xl py-4 px-6 max-w-[480px] w-full hover:scale-101 transition-transform duration-200 cursor-pointer">
            Next
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CreateForm;
