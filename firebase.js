// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "twitter-nextjs-6f101.firebaseapp.com",
  projectId: "twitter-nextjs-6f101",
  storageBucket: "twitter-nextjs-6f101.appspot.com",
  messagingSenderId: "49855302380",
  appId: "1:49855302380:web:36707afb063d4450faf3c9"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp (firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export {app, db, storage}