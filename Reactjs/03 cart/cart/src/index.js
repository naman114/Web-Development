import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG3s5Nvw41xj8_78ExWg1jGQAAT9dsoeA",
  authDomain: "cart-3d87a.firebaseapp.com",
  projectId: "cart-3d87a",
  storageBucket: "cart-3d87a.appspot.com",
  messagingSenderId: "799238198504",
  appId: "1:799238198504:web:7730d460feabef3ffde55d",
};

// Initialize Firebase
export const myFirebaseApp = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
