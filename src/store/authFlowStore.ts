import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AuthFlowState {
  email: string;
  username: string;
  isReturningUser: boolean;
  setEmail: (email: string) => void;
  setUsername: (username: string) => void;
  setIsReturningUser: (value: boolean) => void;
  reset: () => void;
}

export const useAuthFlowStore = create<AuthFlowState>()(
  persist(
    (set) => ({
      email: "",
      username: "",
      isReturningUser: false,
      setEmail: (email) => set({ email }),
      setUsername: (username) => set({ username }),
      setIsReturningUser: (isReturningUser) => set({ isReturningUser }),
      reset: () => set({ email: "", username: "", isReturningUser: false }),
    }),
    {
      name: "auth-flow",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
