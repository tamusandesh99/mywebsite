// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5eZf91lgyZR7LStOp9Y_CQlS_RB8pKDI",
  authDomain: "react-web-blog.firebaseapp.com",
  projectId: "react-web-blog",
  storageBucket: "react-web-blog.appspot.com",
  messagingSenderId: "1059208656849",
  appId: "1:1059208656849:web:03f84344d38edb23d052f0",
  measurementId: "G-T2RERM6XV0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);