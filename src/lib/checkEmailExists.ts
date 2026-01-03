import { auth, db } from "@/app/firebase/config";
import { fetchSignInMethodsForEmail } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";

const TIMEOUT_MS = 8000; // 8 second timeout
const MAX_RETRIES = 2;
const RETRY_DELAY = 500; // 500ms delay between retries

function withTimeout<T>(promise: Promise<T>, timeoutMs: number): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) =>
      setTimeout(
        () =>
          reject(
            new Error(
              "Request timeout. Please check your connection and try again."
            )
          ),
        timeoutMs
      )
    ),
  ]);
}

async function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Ensure Firebase is initialized and ready
async function ensureFirebaseReady(): Promise<void> {
  // Wait for auth to be initialized
  if (!auth) {
    throw new Error("Firebase Auth is not initialized");
  }

  if (!db) {
    throw new Error("Firestore is not initialized");
  }

  // Give Firebase a moment to initialize if needed
  await new Promise((resolve) => setTimeout(resolve, 50));
}

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

    // Ensure Firebase is ready before making any requests
    await ensureFirebaseReady();

    let lastError: Error | null = null;

    // Retry logic for transient failures
    for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
      try {
        // Primary check via Firebase Auth sign-in methods with timeout
        let methods: string[] = [];
        try {
          methods = await withTimeout(
            fetchSignInMethodsForEmail(auth, normalizedEmail),
            TIMEOUT_MS
          );
        } catch (err: any) {
          // If auth check times out or fails, continue to Firestore check
          console.warn(
            `Auth check attempt ${attempt + 1} failed:`,
            err.message
          );
          methods = [];
        }

        if (methods && methods.length > 0) {
          return true;
        }

        // Fallback: check Firestore users collection for an existing doc
        // Handles cases where Auth provider lookup returns empty or email casing differs
        const candidates = Array.from(new Set([normalizedEmail, email]));
        for (const candidate of candidates) {
          const q = query(
            collection(db, "users"),
            where("email", "==", candidate)
          );
          try {
            const snapshot = await withTimeout(getDocs(q), TIMEOUT_MS);
            if (!snapshot.empty) {
              return true;
            }
          } catch (err: any) {
            console.warn(
              `Firestore check attempt ${attempt + 1} failed:`,
              err.message
            );
            // Continue to next candidate
          }
        }

        return false;
      } catch (error: any) {
        lastError = error;
        if (attempt < MAX_RETRIES) {
          // Wait before retrying with exponential backoff
          await delay(RETRY_DELAY * (attempt + 1));
        }
      }
    }

    throw lastError || new Error("Failed to check email.");
  } catch (error: any) {
    const code = error?.code ? ` (${error.code})` : "";
    const message = error?.message || "Failed to check email.";
    throw new Error(`${message}${code}`);
  }
}
