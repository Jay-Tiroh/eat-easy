"use client";

import { auth } from "@/app/firebase/config";
import { useAuthFlowStore } from "@/store/authFlowStore";
import { FirebaseError } from "firebase/app";
import { useRouter } from "next/navigation";
import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { toast } from "sonner";

const SignInForm = () => {
  const router = useRouter();
  const { email, username, reset } = useAuthFlowStore();

  const [signInWithEmailAndPassword, , , signInError] =
    useSignInWithEmailAndPassword(auth);

  const [showPassword, setShowPassword] = React.useState(false);
  const [password, setPassword] = React.useState("");

  React.useEffect(() => {
    if (signInError) toast.error(`Sign-in error: ${signInError.message}`);
  }, [signInError]);

  const handleSignIn = async () => {
    if (!email) {
      toast.error("Missing email. Please go back and re-enter your email.");
      return;
    }
    if (!password) {
      toast.error("Please enter your password.");
      return;
    }

    try {
      const result = await signInWithEmailAndPassword(email, password);

      if (!result?.user) {
        toast.error("Sign-in failed. Please try again.");
        return;
      }

      reset();
      router.push("/locations");
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        if (error.code === "auth/wrong-password") {
          toast.error("Incorrect password.");
        } else if (error.code === "auth/user-not-found") {
          toast.error("Account does not exist.");
        } else {
          toast.error(error.message);
        }
      }
    }
  };

  const baseClass =
    "cta bg-white dark:bg-neutral-700 text-neutral-600 dark:text-neutral-200 border-neutral-150 dark:border-neutral-600 border rounded-2xl py-4 px-6 max-w-120 w-full";

  const inputs = [
    {
      name: "username",
      type: "text",
      placeholder: "Username",
      value: username,
      disabled: true,
    },
    {
      name: "email",
      type: "email",
      placeholder: "Email",
      value: email,
      disabled: true,
    },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
      value: password,
      disabled: false,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setPassword(e.target.value),
    },
  ];

  const renderInput = (input: (typeof inputs)[number]) => {
    if (input.type === "password") {
      return (
        <div
          key={input.name}
          className={`${baseClass} flex justify-between items-center`}
        >
          <input
            type={showPassword ? "text" : "password"}
            placeholder={input.placeholder}
            value={input.value}
            onChange={input.onChange}
            className="outline-none w-full placeholder:text-neutral-500 dark:text-neutral-200 dark:placeholder:text-neutral-200"
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
      );
    }

    return (
      <div key={input.name} className={baseClass}>
        <input
          type={input.type}
          placeholder={input.placeholder}
          value={input.value}
          disabled={input.disabled}
          className={`outline-none w-full ${
            input.disabled ? "dark:text-neutral-400" : ""
          }`}
        />
      </div>
    );
  };

  return (
    <div className="gap-9 flex flex-col items-center h-full px-5 text-center">
      <div className="flex-vertical-center justify-start sm:justify-center py-10 gap-10 w-full h-4/5">
        <div className="flex-vertical-center gap-4 max-w-120">
          <h1 className="font-heading font-medium text-[40px] tracking-[-0.5px] leading-12">
            Welcome back! ✌️
          </h1>
          <p className="text-neutral-600 dark:text-neutral-150 text-body">
            Sign in for a complete experience.
          </p>
        </div>

        <div className="form flex-vertical-center gap-10 w-full">
          {inputs.map(renderInput)}
        </div>
      </div>

      <div className="flex-vertical-center w-full h-1/5 -mt-10">
        <div className="w-full flex justify-center" onClick={handleSignIn}>
          <div className="cta bg-primary-purple-2 text-white rounded-2xl py-4 px-6 max-w-120 w-full hover:scale-101 transition-transform duration-200 cursor-pointer">
            Next
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
