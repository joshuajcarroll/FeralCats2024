'use client'; // ✅ This makes it a client component

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import styles from "./Chat.module.css";

interface Message {
  id?: string;
  text: string;
  username: string;
  userId: string;
  timestamp?: any;
}

export default function Chat() {
  const { user, isSignedIn } = useUser();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Message),
        }))
      );
    });

    return () => unsubscribe();
  }, []);

  const sendMessage = async () => {
    if (!input.trim() || !user) return;

    await addDoc(collection(db, "messages"), {
      text: input,
      username: user.fullName || "Anonymous",
      userId: user.id,
      timestamp: serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className={styles.chatContainer}>
      {!isSignedIn ? (
        <p>Please sign in to chat.</p>
      ) : (
        <>
          <div className={styles.messages}>
            {messages.map((msg) => (
              <p key={msg.id} className={styles.message}>
                <span className={styles.username}>{msg.username}:</span>{" "}
                {msg.text}
              </p>
            ))}
          </div>
          <div className={styles.inputRow}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </>
      )}
    </div>
  );
}
