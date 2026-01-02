"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthFlow } from "@/contexts/AuthFlowContext";
import { checkEmailExists } from "@/lib/checkEmailExists";
import { fetchUsernameByEmail } from "@/lib/fetchUsernameByEmail";
import { toast } from "sonner";

const EmailVerification = () => {
  const router = useRouter();
  const { setEmail, setUsername, setIsReturningUser } = useAuthFlow();

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
      if (!isMounted.current) {
        setLoading(false);
        return;
      }

      setEmail(inputEmail);
      setIsReturningUser(exists);

      if (exists) {
        try {
          const username = await fetchUsernameByEmail(inputEmail);
          if (!isMounted.current) {
            setLoading(false);
            return;
          }
          setUsername(username);
        } catch (err) {
          console.warn("Failed to fetch username, proceeding anyway", err);
          // Continue even if username fetch fails
        }
        // Add a small delay to ensure state updates complete before navigation
        setTimeout(() => {
          router.push("/auth/sign-in");
        }, 100);
      } else {
        // Add a small delay to ensure state updates complete before navigation
        setTimeout(() => {
          router.push("/auth/create");
        }, 100);
      }
    } catch (error: any) {
      if (isMounted.current) {
        const errorMessage =
          error?.message || "Failed to check email. Please try again.";
        toast.error(errorMessage);
        setLoading(false);
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !loading) {
      handleSubmit();
    }
  };

  return (
    <div className="gap-9 flex-vertical-center h-full px-5 text-center">
      <div className="flex-vertical-center gap-4 max-w-[480px]">
        <h1 className="font-heading font-medium text-[40px] tracking-[-0.5px] leading-12">
          What’s your email? 📨
        </h1>
        <p className="text-neutral-600 dark:text-neutral-150 text-body">
          We need it to search for your account or create a new one.
        </p>
      </div>

      <div className="flex-vertical-center gap-4 w-full max-w-[480px] mx-auto">
        <div className="cta bg-white dark:bg-neutral-700 text-neutral-500 dark:text-neutral-200 border-neutral-150 dark:border-neutral-600 border rounded-2xl py-4 px-6 w-full hover:scale-101 transition-transform duration-200">
          <input
            type="email"
            placeholder="Email"
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
            onKeyDown={handleKeyPress}
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
