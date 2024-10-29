// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDr9MDY8Je-ulOZV6tU0HjZybvWtQbU4-E",
  authDomain: "curso-react-83686.firebaseapp.com",
  projectId: "curso-react-83686",
  storageBucket: "curso-react-83686.appspot.com",
  messagingSenderId: "712934028057",
  appId: "1:712934028057:web:4f308fd122b2ce320d4b88"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)