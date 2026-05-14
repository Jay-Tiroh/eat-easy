// hooks/useAuth.ts
import { auth } from "@/app/firebase/config";
import { checkEmailExists } from "@/lib/checkEmailExists";
import { fetchUsernameByEmail } from "@/lib/fetchUsernameByEmail";
import { signUpUser } from "@/lib/signUpUser";
import { useMutation, useQuery } from "@tanstack/react-query";
import { signInWithEmailAndPassword } from "firebase/auth";

// Check if email exists (used on step 1 of your auth flow)
export function useCheckEmail(email: string) {
  return useQuery({
    queryKey: ["email-check", email],
    queryFn: () => checkEmailExists(email),
    enabled: false, // only runs when you call refetch()
    retry: false, // your function already has retry logic inside
  });
}

// Fetch username by email (after email check passes)
export function useUsername(email: string) {
  return useQuery({
    queryKey: ["username", email],
    queryFn: () => fetchUsernameByEmail(email),
    enabled: false,
  });
}

// Sign up mutation
export function useSignUp() {
  return useMutation({
    mutationFn: signUpUser,
    // No need to invalidate — onAuthStateChanged handles state update
  });
}

// Sign in mutation
export function useSignIn() {
  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      signInWithEmailAndPassword(auth, email, password),
  });
}
