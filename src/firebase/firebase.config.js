// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1C67SbLaLCaYw44HqpmjlXl_tdh_omYg",
  authDomain: "newswebapp-2c9fb.firebaseapp.com",
  projectId: "newswebapp-2c9fb",
  storageBucket: "newswebapp-2c9fb.appspot.com",
  messagingSenderId: "62096522582",
  appId: "1:62096522582:web:e1522c96759ae052916af7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;