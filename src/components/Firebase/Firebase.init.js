// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2a54DrsamII9fB2V3HdiV15a8v-PDT2w",
  authDomain: "learn-with-neasher.firebaseapp.com",
  projectId: "learn-with-neasher",
  storageBucket: "learn-with-neasher.appspot.com",
  messagingSenderId: "1002306550807",
  appId: "1:1002306550807:web:0ef1d3f1a97b9cc880b052"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;