// src/services/auth.js
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export const loginAdmin = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Login error:", error.message);
    return null;
  }
};
