import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCdJtphjCKbxXrlQGB22t_FFo3cVMNCTTk",
    authDomain: "feralcats2025.firebaseapp.com",
    projectId: "feralcats2025",
    storageBucket: "feralcats2025.firebasestorage.app",
    messagingSenderId: "57649880740",
    appId: "1:57649880740:web:6a11cbf04f36e1f2bb5031"
  };

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };