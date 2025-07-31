// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWLV7Ar4FhtH2NWLvtu6oQAdE4Ew_P_jw",
  authDomain: "logging-app-6153b.firebaseapp.com",
  projectId: "logging-app-6153b",
  storageBucket: "logging-app-6153b.firebasestorage.app",
  messagingSenderId: "296926740587",
  appId: "1:296926740587:web:ff2cb5fffca7ced19cb12e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);