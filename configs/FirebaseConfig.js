// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuQKiDP7XA52mH0qV1dr1uMRpnhx2vMv4",
  authDomain: "ai-travel-planner-app-d5aba.firebaseapp.com",
  projectId: "ai-travel-planner-app-d5aba",
  storageBucket: "ai-travel-planner-app-d5aba.appspot.com",
  messagingSenderId: "984767105678",
  appId: "1:984767105678:web:081aeed26787bbad4797df",
  measurementId: "G-JHC3QBTGBQ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
