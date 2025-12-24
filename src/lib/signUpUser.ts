import { auth, db } from "@/app/firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

interface SignUpData {
  email: string;
  password: string;
  username: string;
  phone?: string;
}

export async function signUpUser({
  email,
  password,
  username,
  phone,
}: SignUpData) {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const uid = userCredential.user.uid;

  await setDoc(doc(db, "users", uid), {
    email,
    username,
    phone: phone || "",
    createdAt: new Date(),
  });

  return userCredential.user;
}
