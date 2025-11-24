// src/firebase/firebase.config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPuAzdizlAbkscipuuHtyz0px-1D4U1rs",
  authDomain: "greennest-17ccf.firebaseapp.com",
  projectId: "greennest-17ccf",
  storageBucket: "greennest-17ccf.firebasestorage.app",
  messagingSenderId: "406239517195",
  appId: "1:406239517195:web:b03d392c2f9ee393a8450e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
