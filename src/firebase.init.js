// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZsB_CDL8ctkzgvE-7_o_Kt1cQSB-zFFw",
  authDomain: "user-login-bc248.firebaseapp.com",
  projectId: "user-login-bc248",
  storageBucket: "user-login-bc248.appspot.com",
  messagingSenderId: "1085916717677",
  appId: "1:1085916717677:web:55e6ad44021b7ea5221564",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;