import { useQuery } from "@tanstack/react-query";

// hooks/useLocations.ts
export function useLocations() {
  return useQuery({
    queryKey: ["locations"],
    // queryFn: () => fetchLocations(), // your Firestore fetch
  });
}
