// lib/firebase.ts (for client-side Firebase SDK)

import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // ✅ Add Firebase Auth

// Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdJtphjCKbxXrlQGB22t_FFo3cVMNCTTk",
  authDomain: "feralcats2025.firebaseapp.com",
  projectId: "feralcats2025",
  storageBucket: "feralcats2025.firebasestorage.app",
  messagingSenderId: "57649880740",
  appId: "1:57649880740:web:6a11cbf04f36e1f2bb5031"
};

// Prevent re-initialization during hot reloads (Next.js dev)
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

// Firestore + Auth
const db = getFirestore(app);
const auth = getAuth(app); // ✅ Now you have access to auth methods

export { db, auth };
