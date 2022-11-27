// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBivIQdcofui2U737IiWcB5FDr6pCpMC-w",
  authDomain: "slack-clone-b35ee.firebaseapp.com",
  projectId: "slack-clone-b35ee",
  storageBucket: "slack-clone-b35ee.appspot.com",
  messagingSenderId: "1081118349235",
  appId: "1:1081118349235:web:810503e7af0b605d67ddc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {db, auth , provider}