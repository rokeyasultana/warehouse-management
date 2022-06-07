// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArKD5osW6-DsvYrsblwJ_jK7VEqiljEkE",
  authDomain: "warehouse-management-49251.firebaseapp.com",
  projectId: "warehouse-management-49251",
  storageBucket: "warehouse-management-49251.appspot.com",
  messagingSenderId: "813137787576",
  appId: "1:813137787576:web:04855bc50eb65eaa1ed24d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;