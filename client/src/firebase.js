// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_kEY,
  authDomain: "mern-estate-425c1.firebaseapp.com",
  projectId: "mern-estate-425c1",
  storageBucket: "mern-estate-425c1.appspot.com",
  messagingSenderId: "82356530956",
  appId: "1:82356530956:web:33682c58918d1c0ad96329"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);