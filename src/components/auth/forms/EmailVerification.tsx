"use client";

import { checkEmailExists } from "@/lib/checkEmailExists";
import { fetchUsernameByEmail } from "@/lib/fetchUsernameByEmail";
import { useAuthFlowStore } from "@/store/authFlowStore";
import { FirebaseError } from "firebase/app";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const EmailVerification = () => {
  const router = useRouter();
  const { setEmail, setUsername, setIsReturningUser } = useAuthFlowStore();

  const [inputEmail, setInputEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const handleSubmit = async () => {
    if (!inputEmail) {
      toast.error("Please enter your email.");
      return;
    }

    setLoading(true);

    try {
      const exists = await checkEmailExists(inputEmail);

      if (!isMounted.current) return;

      // All three are synchronous Zustand writes — no delay needed
      setEmail(inputEmail);
      setIsReturningUser(exists);

      if (exists) {
        try {
          const username = await fetchUsernameByEmail(inputEmail);
          if (isMounted.current) setUsername(username);
        } catch (err) {
          console.warn("Failed to fetch username, proceeding anyway", err);
        }
        router.push("/auth/sign-in");
      } else {
        router.push("/auth/create");
      }
    } catch (error: unknown) {
      if (isMounted.current) {
        toast.error(
          error instanceof FirebaseError
            ? error.message
            : "Failed to check email. Please try again.",
        );
        setLoading(false);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !loading) handleSubmit();
  };

  return (
    <div className="gap-9 flex-vertical-center h-full px-5 text-center">
      <div className="flex-vertical-center gap-4 max-w-120">
        <h1 className="font-heading font-medium text-[40px] tracking-[-0.5px] leading-12">
          What&apos;s your email? 📨
        </h1>
        <p className="text-neutral-600 dark:text-neutral-150 text-body">
          We need it to search for your account or create a new one.
        </p>
      </div>

      <div className="flex-vertical-center gap-4 w-full max-w-120 mx-auto">
        <div className="cta bg-white dark:bg-neutral-700 text-neutral-500 dark:text-neutral-200 border-neutral-150 dark:border-neutral-600 border rounded-2xl py-4 px-6 w-full hover:scale-101 transition-transform duration-200">
          <input
            type="email"
            placeholder="Email"
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
            onKeyDown={handleKeyDown}
            className="outline-none w-full placeholder:text-neutral-500 dark:text-neutral-200 dark:placeholder:text-neutral-200"
          />
        </div>

        <div
          className={`cta bg-primary-purple-2 text-white rounded-2xl py-4 px-6 w-full hover:scale-101 transition-transform duration-200 cursor-pointer ${
            loading ? "opacity-60 pointer-events-none" : ""
          }`}
          onClick={handleSubmit}
        >
          {loading ? "Checking..." : "Next"}
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
