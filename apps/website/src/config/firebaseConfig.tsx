// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { connectFunctionsEmulator, getFunctions } from 'firebase/functions';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAbr--aFrtWdmIzaB5dmbsPSglNL0ZXHGg',
  authDomain: 'miurac-main.firebaseapp.com',
  databaseURL:
    'https://miurac-main-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'miurac-main',
  storageBucket: 'miurac-main.appspot.com',
  messagingSenderId: '544998845212',
  appId: '1:544998845212:web:729e6d07960504050fe8d9',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
const functions = getFunctions(app, 'asia-south1');
// connectFunctionsEmulator(functions,'localhost',5001)
export { functions };
