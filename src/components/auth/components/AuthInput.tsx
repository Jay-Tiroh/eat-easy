"use client";

import React from "react";
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";
import { LuEye, LuEyeOff } from "react-icons/lu";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

type InputType = "text" | "email" | "password" | "phone";

interface AuthInputProps<T extends FieldValues> {
  name: FieldPath<T>;
  control: Control<T>;
  type?: InputType;
  placeholder?: string;
  label?: string;
}

const baseClass =
  "cta bg-white dark:bg-neutral-700 text-neutral-500 dark:text-neutral-200 border-neutral-150 dark:border-neutral-600 border rounded-2xl py-4 px-6 max-w-[480px] w-full";

const fieldClass =
  "outline-none w-full bg-transparent placeholder:text-neutral-500 dark:text-neutral-200 dark:placeholder:text-neutral-200";

const errorClass = "text-red-500 text-sm mt-1 max-w-[480px] w-full text-left";

export function AuthInput<T extends FieldValues>({
  name,
  control,
  type = "text",
  placeholder,
  label,
}: AuthInputProps<T>) {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div className="flex-vertical-center gap-1 w-full items-center">
          {label && (
            <label
              htmlFor={name}
              className="text-sm text-neutral-600 dark:text-neutral-300 max-w-[480px] w-full text-left"
            >
              {label}
            </label>
          )}

          {/* Phone input */}
          {type === "phone" && (
            <div className={baseClass}>
              <PhoneInput
                defaultCountry="NG"
                placeholder={placeholder}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                className="PhoneInput"
                inputClassName={fieldClass}
              />
            </div>
          )}

          {/* Password input */}
          {type === "password" && (
            <div className={`${baseClass} flex justify-between items-center`}>
              <input
                id={name}
                type={showPassword ? "text" : "password"}
                placeholder={placeholder}
                {...field}
                className={fieldClass}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="ml-2 text-neutral-500 dark:text-neutral-300 focus:outline-none"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <LuEye className="size-6" />
                ) : (
                  <LuEyeOff className="size-6" />
                )}
              </button>
            </div>
          )}

          {/* Text / Email inputs */}
          {(type === "text" || type === "email") && (
            <div className={baseClass}>
              <input
                id={name}
                type={type}
                placeholder={placeholder}
                {...field}
                className={fieldClass}
              />
            </div>
          )}

          {/* Error message */}
          {fieldState.error && (
            <p className={errorClass}>{fieldState.error.message}</p>
          )}
        </div>
      )}
    />
  );
}
