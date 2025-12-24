"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type AuthFlowContextType = {
  email: string;
  username: string;
  isReturningUser: boolean | null;
  setEmail: (v: string) => void;
  setUsername: (v: string) => void;
  setIsReturningUser: (v: boolean) => void;
  reset: () => void;
};

const AuthFlowContext = createContext<AuthFlowContextType | null>(null);

export function AuthFlowProvider({ children }: { children: ReactNode }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [isReturningUser, setIsReturningUser] = useState<boolean | null>(null);

  function reset() {
    setEmail("");
    setUsername("");
    setIsReturningUser(null);
  }

  return (
    <AuthFlowContext.Provider
      value={{
        email,
        username,
        isReturningUser,
        setEmail,
        setUsername,
        setIsReturningUser,
        reset,
      }}
    >
      {children}
    </AuthFlowContext.Provider>
  );
}

export function useAuthFlow() {
  const ctx = useContext(AuthFlowContext);
  if (!ctx) throw new Error("useAuthFlow must be used within AuthFlowProvider");
  return ctx;
}
