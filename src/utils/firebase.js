// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBT4a73Cq6oAEdINlhVNMWHXyvv-xx9xn8",
  authDomain: "netflixgpt-a5210.firebaseapp.com",
  projectId: "netflixgpt-a5210",
  storageBucket: "netflixgpt-a5210.appspot.com",
  messagingSenderId: "416585289378",
  appId: "1:416585289378:web:9d999f1e57337c69b191fb",
  measurementId: "G-SN259H5YPC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


//Whenever the Sign In/Sign Up needs auth then file will be imported from "firebase.js"
 export const auth = getAuth();