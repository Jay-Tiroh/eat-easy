// hooks/useAuthListener.ts
import { auth } from "@/app/firebase/config";
import { useAuthStore } from "@/store/authStore";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

export function useAuthListener() {
  const setUser = useAuthStore((s) => s.setUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); // null on sign out, User object on sign in
    });
    return unsubscribe; // cleanup on unmount
  }, [setUser]);
}
