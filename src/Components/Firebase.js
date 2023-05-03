// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAnQpuqeU7ATN-mBvE1Ds-QUB5i63Ux79w",
  authDomain: "fir-auth-f69ef.firebaseapp.com",
  projectId: "fir-auth-f69ef",
  storageBucket: "fir-auth-f69ef.appspot.com",
  messagingSenderId: "747949751401",
  appId: "1:747949751401:web:1853b73614646ab811f6f8",
  measurementId: "G-1F99V16XRM"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app, auth};