"use client";

import React from "react";
import { LuEyeOff, LuEye } from "react-icons/lu";

import { useRouter } from "next/navigation";

import { toast } from "sonner";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { createUserDocument } from "@/app/firebase/users";

import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const CreateForm = () => {
  const router = useRouter();

  const [user, authLoading, authError] = useAuthState(auth);
  const [
    createUserWithEmailAndPassword,
    createdUser,
    createLoading,
    createError,
  ] = useCreateUserWithEmailAndPassword(auth);

  const [sendEmailVerification] = useSendEmailVerification(auth);

  const [showPassword, setShowPassword] = React.useState(false);

  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string | undefined>(undefined);
  const [password, setPassword] = React.useState<string>("");

  const handleSignUp = async () => {
    if (!email || !password || !name || !phone) {
      toast.error("Please fill all fields.");
      return;
    }

    try {
      const result = await createUserWithEmailAndPassword(email, password);

      if (!result?.user) {
        toast.error("User creation failed.");
        return;
      }

      const uid = result.user.uid;

      await createUserDocument({
        uid,
        username: name,
        email,
        phone,
      });

      await sendEmailVerification();

      router.push("/auth/verify-email");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  if (authError) {
    toast.error(`Error checking auth state: ${authError.message}`);
  }

  if (createError) {
    toast.error(`Error creating user: ${createError.message}`);
  }

  return (
    <div className="gap-9 flex flex-col items-center h-full px-5 text-center">
      <div className="flex-vertical-center justify-start md:justify-center py-10 gap-10 w-full h-4/5">
        <div className="flex-vertical-center gap-4 max-w-[480px]">
          <h1 className="font-heading font-medium text-[40px] tracking-[-0.5px] leading-12">
            Getting started! ✌️
          </h1>
          <p className="text-neutral-600 dark:text-neutral-150 text-body">
            Look like you are new to us! Create an account for a complete
            experience.
          </p>
        </div>

        <div className="form flex-vertical-center gap-10 w-full">
          <div className="cta bg-white dark:bg-neutral-700 text-neutral-500 dark:text-neutral-200 border-neutral-150 dark:border-neutral-600 border rounded-2xl py-4 px-6 max-w-[480px] w-full">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="outline-none w-full bg-transparent placeholder:text-neutral-500 dark:text-neutral-200 dark:placeholder:text-neutral-200"
            />
          </div>

          <div className="cta bg-white dark:bg-neutral-700 text-neutral-500 dark:text-neutral-200 border-neutral-150 dark:border-neutral-600 border rounded-2xl py-4 px-6 max-w-[480px] w-full">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="outline-none w-full bg-transparent placeholder:text-neutral-500 dark:text-neutral-200 dark:placeholder:text-neutral-200"
            />
          </div>

          <div className="cta bg-white dark:bg-neutral-700 text-neutral-500 dark:text-neutral-200 border-neutral-150 dark:border-neutral-600 border rounded-2xl py-4 px-6 max-w-[480px] w-full">
            <PhoneInput
              defaultCountry="NG"
              placeholder="Phone number"
              value={phone}
              onChange={setPhone}
              className="PhoneInput"
              inputClassName="outline-none w-full bg-transparent placeholder:text-neutral-500 dark:text-neutral-200 dark:placeholder:text-neutral-200"
            />
          </div>

          <div className="cta bg-white dark:bg-neutral-700 text-neutral-500 dark:text-neutral-200 border-neutral-150 dark:border-neutral-600 border rounded-2xl py-4 px-6 max-w-[480px] w-full flex justify-between items-center">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="outline-none w-full bg-transparent placeholder:text-neutral-500 dark:text-neutral-200 dark:placeholder:text-neutral-200"
            />
            {showPassword ? (
              <LuEye
                className="size-6 cursor-pointer"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <LuEyeOff
                className="size-6 cursor-pointer"
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>
        </div>
      </div>

      <div className="flex-vertical-center w-full h-1/5 -mt-10">
        <div className="w-full flex justify-center" onClick={handleSignUp}>
          <div className="cta bg-primary-purple-2 text-white rounded-2xl py-4 px-6 max-w-[480px] w-full cursor-pointer">
            Next
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateForm;
