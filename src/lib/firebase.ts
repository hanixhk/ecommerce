// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV4rgz2Zoy9-b_qk_IAVG7qrlheAEDJY4",
  authDomain: "ecommerce-blue-chi-14.firebaseapp.com",
  projectId: "ecommerce-blue-chi-14",
  storageBucket: "ecommerce-blue-chi-14.appspot.com",
  messagingSenderId: "104810135500",
  appId: "1:104810135500:web:d99c0a1f3e7fc8bdaea769"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();