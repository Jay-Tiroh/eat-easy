// hooks/useEmailCheck.ts — your checkEmailExists function has retry logic,
// timeout logic, and two fallback checks. React Query caches the result

import { checkEmailExists } from "@/lib/checkEmailExists";
import { fetchUsernameByEmail } from "@/lib/fetchUsernameByEmail";
import { useQuery } from "@tanstack/react-query";

// so navigating back/forward doesn't re-run it.
export function useEmailCheck(email: string) {
  return useQuery({
    queryKey: ["email-check", email],
    queryFn: () => checkEmailExists(email),
    enabled: false, // manual trigger only
    staleTime: Infinity, // email existence doesn't change mid-flow
    retry: false, // your function already retries internally
  });
}

// hooks/useUsername.ts — fetches username after email check
export function useUsername(email: string) {
  return useQuery({
    queryKey: ["username", email],
    queryFn: () => fetchUsernameByEmail(email),
    enabled: false,
    staleTime: Infinity,
  });
}
