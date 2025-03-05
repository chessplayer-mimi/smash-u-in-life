// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFwkjeLA8VjI1MFflpECFNz-hV6S8ZyPw",
  authDomain: "smash-u-in-life.firebaseapp.com",
  databaseURL: "https://smash-u-in-life-default-rtdb.firebaseio.com",
  projectId: "smash-u-in-life",
  storageBucket: "smash-u-in-life.firebasestorage.app",
  messagingSenderId: "601839091807",
  appId: "1:601839091807:web:e735bb69cfa15ba3369bea",
  measurementId: "G-NFHJEJB56Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);