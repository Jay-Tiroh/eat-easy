import { auth, db } from "@/app/firebase/config";
import { fetchSignInMethodsForEmail } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";

export async function checkEmailExists(email: string): Promise<boolean> {
  try {
    const normalizedEmail = email.trim().toLowerCase();
    if (!normalizedEmail) {
      throw new Error("Email is required.");
    }
    const basicEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!basicEmailRegex.test(normalizedEmail)) {
      throw new Error("Invalid email format.");
    }

    // Primary check via Firebase Auth sign-in methods
    const methods = await fetchSignInMethodsForEmail(auth, normalizedEmail);
    if (methods && methods.length > 0) {
      return true;
    }

    // Fallback: check Firestore users collection for an existing doc
    // Handles cases where Auth provider lookup returns empty or email casing differs
    const candidates = Array.from(new Set([normalizedEmail, email]));
    for (const candidate of candidates) {
      const q = query(collection(db, "users"), where("email", "==", candidate));
      const snapshot = await getDocs(q);
      if (!snapshot.empty) {
        return true;
      }
    }

    return false;
  } catch (error: any) {
    const code = error?.code ? ` (${error.code})` : "";
    const message = error?.message || "Failed to check email.";
    throw new Error(`${message}${code}`);
  }
}
