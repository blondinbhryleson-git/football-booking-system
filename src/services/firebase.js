import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Paste your config here
const firebaseConfig = {
  apiKey: "AIzaSyDWiQxRqcvtrP8_Dk_qzhdKnQmuIvNrCjU",
  authDomain: "football-booking-system-fae41.firebaseapp.com",
  projectId: "football-booking-system-fae41",
  storageBucket: "football-booking-system-fae41.firebasestorage.app",
  messagingSenderId: "86676438451",
  appId: "1:86676438451:web:259b697c794c59d38f5fc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth and Firestore exports
export const auth = getAuth(app);
export const db = getFirestore(app);

