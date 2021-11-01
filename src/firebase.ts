// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDr7JcdSP8np7Vv1pnSKWeHwHxGLKs1Yw",
  authDomain: "clone-b9467.firebaseapp.com",
  projectId: "clone-b9467",
  storageBucket: "clone-b9467.appspot.com",
  messagingSenderId: "146011621954",
  appId: "1:146011621954:web:87b1bf295598718742fbdb",
  measurementId: "G-B8BKTZCQ8F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, auth, provider };
