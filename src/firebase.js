// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBH6-RNELQYVCwXKqiZCFbxRpaELdmX2HY",
  authDomain: "job-portal-b36b0.firebaseapp.com",
  projectId: "job-portal-b36b0",
  storageBucket: "job-portal-b36b0.firebasestorage.app",
  messagingSenderId: "1096421691993",
  appId: "1:1096421691993:web:f0b5205892f924ba211748"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);