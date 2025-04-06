// app/sign-up/page.tsx

"use client";

import { useState } from "react";
import { auth, db } from "@/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignUp = async () => {
    if (!username || !password) return;

    const fakeEmail = `${username}@feralcats.app`;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, fakeEmail, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        username,
        createdAt: serverTimestamp(),
      });

      router.push("/chat-page");
    } catch (error: any) {
      alert("Error signing up: " + error.message);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}
