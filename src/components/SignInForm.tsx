"use client";

import React from "react";
import { LuEyeOff, LuEye } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useAuthFlow } from "@/contexts/AuthFlowContext";

const SignInForm = () => {
  const router = useRouter();
  const { email, username, setEmail, setUsername } = useAuthFlow();

  const [signInWithEmailAndPassword, , , signInError] =
    useSignInWithEmailAndPassword(auth);

  const [showPassword, setShowPassword] = React.useState(false);
  const [password, setPassword] = React.useState("");

  const [displayEmail, setDisplayEmail] = React.useState<string>("");
  const [displayUsername, setDisplayUsername] = React.useState<string>("");

  React.useEffect(() => {
    const storedEmail = sessionStorage.getItem("authFlowEmail");
    const storedUsername = sessionStorage.getItem("authFlowUsername");

    if (!email && storedEmail) {
      setEmail(storedEmail);
      setDisplayEmail(storedEmail);
    }

    if (!username && storedUsername) {
      setUsername(storedUsername);
      setDisplayUsername(storedUsername);
    }
  }, []);
  React.useEffect(() => {
    if (email) {
      sessionStorage.setItem("authFlowEmail", email);
      setDisplayEmail(email);
    }

    if (username) {
      sessionStorage.setItem("authFlowUsername", username);
      setDisplayUsername(username);
    }
  }, [email, username]);

  const handleSignIn = async () => {
    const emailToUse = displayEmail || email;

    if (!emailToUse) {
      toast.error("Missing email. Please go back and re-enter your email.");
      return;
    }

    if (!password) {
      toast.error("Please enter your password.");
      return;
    }

    try {
      const result = await signInWithEmailAndPassword(emailToUse, password);

      if (!result?.user) {
        toast.error("Sign-in failed. Please try again.");
        return;
      }

      router.push("/locations");
    } catch (error: any) {
      if (error.code === "auth/wrong-password") {
        toast.error("Incorrect password.");
      } else if (error.code === "auth/user-not-found") {
        toast.error("Account does not exist.");
      } else {
        toast.error(error.message);
      }
    }
  };

  React.useEffect(() => {
    if (signInError) toast.error(`Sign-in error: ${signInError.message}`);
  }, [signInError]);

  return (
    <div className="gap-9 flex flex-col items-center h-full px-5 text-center">
      <div className="flex-vertical-center justify-start sm:justify-center py-10 gap-10 w-full h-4/5">
        <div className="flex-vertical-center gap-4 max-w-[480px]">
          <h1 className="font-heading font-medium text-[40px] tracking-[-0.5px] leading-12">
            Welcome back! ✌️
          </h1>
          <p className="text-neutral-600 dark:text-neutral-150 text-body">
            Sign in for a complete experience.
          </p>
        </div>

        <div className="form flex-vertical-center gap-10 w-full">
          {/* Username */}
          <div className="cta bg-white dark:bg-neutral-700 text-neutral-600 dark:text-neutral-200 border-neutral-150 dark:border-neutral-600 border rounded-2xl py-4 px-6 max-w-[480px] w-full">
            <input
              type="text"
              placeholder="Username"
              value={displayUsername}
              disabled
              className="outline-none w-full dark:text-neutral-400"
            />
          </div>

          {/* Email */}
          <div className="cta bg-white dark:bg-neutral-700 text-neutral-600 dark:text-neutral-200 border-neutral-150 dark:border-neutral-600 border rounded-2xl py-4 px-6 max-w-[480px] w-full">
            <input
              type="email"
              placeholder="Email"
              value={displayEmail}
              disabled
              className="outline-none w-full dark:text-neutral-400"
            />
          </div>

          {/* Password */}
          <div className="cta bg-white dark:bg-neutral-700 text-neutral-500 dark:text-neutral-200 border-neutral-150 dark:border-neutral-600 border rounded-2xl py-4 px-6 max-w-[480px] w-full flex justify-between items-center">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
        </div>
      </div>

      {/* Submit button */}
      <div className="flex-vertical-center w-full h-1/5 -mt-10">
        <div className="w-full flex justify-center" onClick={handleSignIn}>
          <div className="cta bg-primary-purple-2 text-white rounded-2xl py-4 px-6 max-w-[480px] w-full hover:scale-101 transition-transform duration-200 cursor-pointer">
            Next
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
