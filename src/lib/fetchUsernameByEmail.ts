import { db } from "@/app/firebase/config";
import { collection, query, where, getDocs } from "firebase/firestore";

export async function fetchUsernameByEmail(email: string): Promise<string> {
  const q = query(collection(db, "users"), where("email", "==", email));
  const snapshot = await getDocs(q);

  if (snapshot.empty) throw new Error("User not found");

  const doc = snapshot.docs[0].data();
  return doc.username || "";
}
