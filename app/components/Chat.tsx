/*"use client";

import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

type Message = {
  id: string;
  text: string;
  username: string;
  userId: string;
  timestamp?: any;
};

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    const q = query(collection(db, "messages"), orderBy("timestamp", "asc"));
    const unsubscribeMessages = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Message[];
      setMessages(msgs);
    });

    return () => {
      unsubscribeAuth();
      unsubscribeMessages();
    };
  }, []);

  const handleSend = async () => {
    if (!newMessage.trim() || !user) return;

    await addDoc(collection(db, "messages"), {
      text: newMessage,
      userId: user.uid,
      username: user.displayName || "Anonymous",
      timestamp: serverTimestamp(),
    });

    setNewMessage("");
  };

  if (!user) {
    return <div>Please log in to send messages.</div>;
  }

  return (
    <div style={{ padding: "1rem" }}>
      <div style={{ height: "300px", overflowY: "auto", border: "1px solid gray", padding: "1rem" }}>
        {messages.map((msg) => (
          <div key={msg.id}>
            <strong>{msg.username}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={newMessage}
          placeholder="Type a message"
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}
*/

"use client";

import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { useRouter } from "next/navigation";  // Import to navigate

type Message = {
  id: string;
  text: string;
  username: string;
  userId: string;
  timestamp?: any;
};

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [user, setUser] = useState<any>(null);
  const router = useRouter();  // Hook to navigate

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    const q = query(collection(db, "messages"), orderBy("timestamp", "asc"));
    const unsubscribeMessages = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Message[];
      setMessages(msgs);
    });

    return () => {
      unsubscribeAuth();
      unsubscribeMessages();
    };
  }, []);

  const handleSend = async () => {
    if (!newMessage.trim() || !user) return;

    await addDoc(collection(db, "messages"), {
      text: newMessage,
      userId: user.uid,
      username: user.displayName || "Anonymous",
      timestamp: serverTimestamp(),
    });

    setNewMessage("");
  };

  const handleSignOut = async () => {
    try {
      // Sign out from Firebase Authentication
      await signOut(auth);

      // Optionally clear any stored session data (localStorage, etc.)
      localStorage.removeItem("authToken");  // If used

      // Redirect to the home page after sign-out
      router.push("/");
    } catch (err) {
      console.error("Error signing out:", err);
    }
  };

  if (!user) {
    return <div>Please log in to send messages.</div>;
  }

  return (
    <div style={{ padding: "1rem" }}>
      <div style={{ height: "300px", overflowY: "auto", border: "1px solid gray", padding: "1rem" }}>
        {messages.map((msg) => (
          <div key={msg.id}>
            <strong>{msg.username}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={newMessage}
          placeholder="Type a message"
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSend}>Send</button>
      </div>

      {/* Sign-Out Button */}
      <button onClick={handleSignOut} style={{ marginTop: "1rem" }}>
        Sign Out
      </button>
    </div>
  );
}