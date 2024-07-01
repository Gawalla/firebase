// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8Y9MgwoJFWFpdTSu0Y1C3GjXI7rZ36RU",
  authDomain: "fir-basics-4994b.firebaseapp.com",
  projectId: "fir-basics-4994b",
  storageBucket: "fir-basics-4994b.appspot.com",
  messagingSenderId: "289306096393",
  appId: "1:289306096393:web:69b53642028ae5e6d119d8",
  measurementId: "G-JBZPQFFMK2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);