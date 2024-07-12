import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-a208c.firebaseapp.com",
  projectId: "reactchat-a208c",
  storageBucket: "reactchat-a208c.appspot.com",
  messagingSenderId: "1028445429747",
  appId: "1:1028445429747:web:38359cd05c7035e76b7c86",
  measurementId: "G-QB4VZE1GS4"
};

const app = initializeApp(firebaseConfig);
export const auth =getAuth()
export const db =getFirestore()
export const storage =getStorage()