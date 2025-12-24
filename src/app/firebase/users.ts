import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./config";

type CreateUserParams = {
  uid: string;
  username: string;
  email: string;
  phone: string;
};

export async function createUserDocument({
  uid,
  username,
  email,
  phone,
}: CreateUserParams) {
  const userRef = doc(db, "users", uid);

  await setDoc(userRef, {
    username,
    email,
    phone,
    createdAt: serverTimestamp(),
  });
}
