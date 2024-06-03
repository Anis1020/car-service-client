// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmul9af1kip4c9okWbAFcUlK6rTQmi71U",
  authDomain: "car-service-328b8.firebaseapp.com",
  projectId: "car-service-328b8",
  storageBucket: "car-service-328b8.appspot.com",
  messagingSenderId: "581653818051",
  appId: "1:581653818051:web:e9703f40f499235b215076",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
