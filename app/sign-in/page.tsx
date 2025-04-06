// app/sign-in/page.tsx

"use client";

import { useState } from "react";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignIn = async () => {
    const fakeEmail = `${username}@feralcats.app`;

    try {
      await signInWithEmailAndPassword(auth, fakeEmail, password);
      router.push("/chat-page");
    } catch (error: any) {
      alert("Sign-in failed: " + error.message);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
}
