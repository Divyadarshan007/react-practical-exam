// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzGzl1vIvZi7_j0koRRdm3ecLUraZqh7I",
  authDomain: "react-app-ec2e9.firebaseapp.com",
  projectId: "react-app-ec2e9",
  storageBucket: "react-app-ec2e9.firebasestorage.app",
  messagingSenderId: "259830870928",
  appId: "1:259830870928:web:d963a7ea963d274a327915"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)