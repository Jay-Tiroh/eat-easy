"use client";

import { auth } from "@/app/firebase/config";
import { createUserDocument } from "@/app/firebase/users";
import { AuthInput } from "@/components/auth/components/AuthInput";
import { SignUpFormValues, signUpSchema } from "@/schemas/authSchema";
import { useAuthFlowStore } from "@/store/authFlowStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { FirebaseError } from "firebase/app";
import { useRouter } from "next/navigation";
import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const CreateForm = () => {
  const router = useRouter();
  const { email: flowEmail, reset } = useAuthFlowStore();

  const [createUserWithEmailAndPassword, , createLoading, createError] =
    useCreateUserWithEmailAndPassword(auth);
  const [sendEmailVerification] = useSendEmailVerification(auth);

  const { control, handleSubmit } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      email: flowEmail, // pre-filled from the email step
      phone: "",
      password: "",
    },
  });

  React.useEffect(() => {
    if (createError) toast.error(`Sign-up error: ${createError.message}`);
  }, [createError]);

  const onSubmit = async (values: SignUpFormValues) => {
    try {
      const result = await createUserWithEmailAndPassword(
        values.email,
        values.password,
      );

      if (!result?.user) {
        toast.error("User creation failed.");
        return;
      }

      await createUserDocument({
        uid: result.user.uid,
        username: values.username,
        email: values.email,
        phone: values.phone,
      });

      await sendEmailVerification();

      reset();
      router.push("/locations");
    } catch (error: unknown) {
      toast.error(
        error instanceof FirebaseError
          ? error.message
          : "An unknown error occurred.",
      );
    }
  };

  return (
    <div className="gap-9 flex flex-col items-center h-full px-5 text-center">
      <div className="flex-vertical-center justify-start md:justify-center py-10 gap-10 w-full h-4/5">
        <div className="flex-vertical-center gap-4 max-w-120">
          <h1 className="font-heading font-medium text-[40px] tracking-[-0.5px] leading-12">
            Getting started! ✌️
          </h1>
          <p className="text-neutral-600 dark:text-neutral-150 text-body">
            Looks like you are new here! Create an account for a complete
            experience.
          </p>
        </div>

        <div className="form flex-vertical-center gap-10 w-full">
          <AuthInput<SignUpFormValues>
            name="username"
            control={control}
            type="text"
            placeholder="Username"
          />
          <AuthInput<SignUpFormValues>
            name="email"
            control={control}
            type="email"
            placeholder="Email"
          />
          <AuthInput<SignUpFormValues>
            name="phone"
            control={control}
            type="phone"
            placeholder="Phone number"
          />
          <AuthInput<SignUpFormValues>
            name="password"
            control={control}
            type="password"
            placeholder="Password"
          />
        </div>
      </div>

      <div className="flex-vertical-center w-full h-1/5 -mt-10">
        <div className="w-full flex justify-center">
          <button
            type="button"
            onClick={handleSubmit(onSubmit)}
            disabled={createLoading}
            className="cta bg-primary-purple-2 text-white rounded-2xl py-4 px-6 max-w-120 w-full cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {createLoading ? "Creating account..." : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateForm;
