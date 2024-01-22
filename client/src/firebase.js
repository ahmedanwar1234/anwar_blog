// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "anwarblog-e2fcb.firebaseapp.com",
  projectId: "anwarblog-e2fcb",
  storageBucket: "anwarblog-e2fcb.appspot.com",
  messagingSenderId: "526414509878",
  appId: "1:526414509878:web:50878dff1821650d0ea597"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

