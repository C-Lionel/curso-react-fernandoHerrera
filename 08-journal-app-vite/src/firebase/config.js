// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBKjgD9FTLDOcpv4EQwXMZ9hKWw1EtgqE",
  authDomain: "curso-react-a3a6f.firebaseapp.com",
  projectId: "curso-react-a3a6f",
  storageBucket: "curso-react-a3a6f.appspot.com",
  messagingSenderId: "274207547403",
  appId: "1:274207547403:web:eda98e5f0db90c35aae70e"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

// Authentication
export const FirebaseAuth = getAuth(FirebaseApp);

// Base de datos
export const FirebaseDB = getFirestore(FirebaseApp);
