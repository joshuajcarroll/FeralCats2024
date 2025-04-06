/*'use client'; // ✅ This makes it a client component

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase"; // Adjust the import path as necessary
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
*/

"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp
} from "firebase/firestore";
import styles from "./Chat.module.css";

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
  const [username, setUsername] = useState("Anonymous");

  // Listen for new messages in Firestore
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Message[];
      setMessages(msgs);
    });
    return () => unsubscribe();
  }, []);

  const handleSend = async () => {
    if (!newMessage.trim()) return;

    // Send new message to Firestore
    await addDoc(collection(db, "messages"), {
      text: newMessage,
      userId: "anonymous", // Use a placeholder userId
      username: username || "Anonymous", // Default to "Anonymous" if no username
      timestamp: serverTimestamp()
    });

    setNewMessage("");
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messages}>
        {messages.map((msg) => (
          <div key={msg.id} className={styles.message}>
            <strong>{msg.username}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className={styles.inputArea}>
        <input
          type="text"
          placeholder="Type your message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className={styles.input}
        />
        <button onClick={handleSend} className={styles.button}>
          Send
        </button>
      </div>
    </div>
  );
}
