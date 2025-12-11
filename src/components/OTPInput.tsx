"use client";
import { useRef } from "react";

type OtpInputProps = {
  length?: number;
  onChange?: (otp: string) => void;
};

export default function OtpInput({ length = 4, onChange }: OtpInputProps) {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleInput = (index: number, e: React.FormEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;

    if (!/^\d?$/.test(value)) return; // Only digits allowed

    if (value && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    if (onChange) {
      const otp = inputsRef.current.map((input) => input?.value || "").join("");
      onChange(otp);
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (
      e.key === "Backspace" &&
      !inputsRef.current[index]?.value &&
      index > 0
    ) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div style={{ display: "flex", gap: "12px" }}>
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          type="text"
          maxLength={1}
          inputMode="numeric"
          ref={(el) => {
            inputsRef.current[i] = el;
          }}
          onInput={(e) => handleInput(i, e)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          className="otp-input size-14 text-center text-xl outline-none focus:border-neutral-600 transition bg-white text-neutral-500 border-neutral-150 border-2 rounded-2xl py-4 px-4"
        />
      ))}
    </div>
  );
}
