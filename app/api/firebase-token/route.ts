/*import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { getAuth } from "firebase-admin/auth";
import { initializeApp, cert, getApps } from "firebase-admin/app";

// Initialize Firebase Admin SDK once
if (!getApps().length) {
  initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
  });
}

export async function GET() {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const firebaseToken = await getAuth().createCustomToken(userId);
  return NextResponse.json({ token: firebaseToken });
}
*/

// api/firebase-token.ts

import { auth } from "@clerk/nextjs/server";  // Clerk authentication
import { NextResponse } from "next/server";
import { getAuth } from "firebase-admin/auth";
import { initializeApp, cert, getApps } from "firebase-admin/app";

// Initialize Firebase Admin SDK if not already initialized
if (!getApps().length) {
  initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
  });
}

export async function GET() {
  const { userId } = await auth();  // Clerk user ID
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Create Firebase custom token for the Clerk user
  const firebaseToken = await getAuth().createCustomToken(userId);

  // Return the Firebase custom token to the client
  return NextResponse.json({ token: firebaseToken });
}
