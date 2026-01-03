"use client";
// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Validate that all required env vars are present to avoid invalid API key errors at build/runtime
const missing = Object.entries({
  NEXT_PUBLIC_FIREBASE_API_KEY: firebaseConfig.apiKey,
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: firebaseConfig.authDomain,
  NEXT_PUBLIC_FIREBASE_PROJECT_ID: firebaseConfig.projectId,
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: firebaseConfig.storageBucket,
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: firebaseConfig.messagingSenderId,
  NEXT_PUBLIC_FIREBASE_APP_ID: firebaseConfig.appId,
}).filter(([, value]) => !value || value === "undefined");

if (missing.length) {
  const keys = missing.map(([key]) => key).join(", ");
  throw new Error(`Missing Firebase env vars: ${keys}`);
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const db = getFirestore(app);

// Ensure persistence is disabled for client-side usage
auth.setPersistence = auth.setPersistence || (() => Promise.resolve());

export { app, auth, db };
