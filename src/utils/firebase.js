// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCy1mfr1ztsoV6_lIUldW_uWk5YLEGBG64",
  authDomain: "netflixgpt-a308e.firebaseapp.com",
  projectId: "netflixgpt-a308e",
  storageBucket: "netflixgpt-a308e.appspot.com",
  messagingSenderId: "782442079281",
  appId: "1:782442079281:web:f0c5381f2dcf1fbb46a110",
  measurementId: "G-4QS8MQMJYF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();