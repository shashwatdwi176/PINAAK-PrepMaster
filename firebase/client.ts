// Import the functions you need from the SDKs you need
import { initializeApp , getApp , getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFsFmQP30cWSiM0NalclNIkvVHGbxD5-I",
  authDomain: "pinaak-prepmaster.firebaseapp.com",
  projectId: "pinaak-prepmaster",
  storageBucket: "pinaak-prepmaster.firebasestorage.app",
  messagingSenderId: "101360678222",
  appId: "1:101360678222:web:a865a1207c3c0e8241da1f",
  measurementId: "G-RYEHQCZH0V"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp()

export const auth = getAuth(app);
export const db = getFirestore(app)
