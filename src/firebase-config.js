// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9Ilb40O2dlZQR8xyzXVOYb3fsaRsXnNo",
  authDomain: "change-project-adbdb.firebaseapp.com",
  projectId: "change-project-adbdb",
  storageBucket: "change-project-adbdb.appspot.com",
  messagingSenderId: "912837231043",
  appId: "1:912837231043:web:724d53073973373543fd76",
  measurementId: "G-4FXWQXPNCY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);