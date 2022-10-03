// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFunctions } from "firebase/functions"
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAbr--aFrtWdmIzaB5dmbsPSglNL0ZXHGg",
  authDomain: "miurac-main.firebaseapp.com",
  databaseURL: "https://miurac-main-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "miurac-main",
  storageBucket: "miurac-main.appspot.com",
  messagingSenderId: "544998845212",
  appId: "1:544998845212:web:7bb76d20a8c75c0c0fe8d9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);
export const functions = getFunctions(app,"asia-south1")