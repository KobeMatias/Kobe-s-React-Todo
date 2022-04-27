// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3FUmabK74znB5iGUnU8HLImeM7XdgYOI",
  authDomain: "crud-app-66776.firebaseapp.com",
  projectId: "crud-app-66776",
  storageBucket: "crud-app-66776.appspot.com",
  messagingSenderId: "783427489895",
  appId: "1:783427489895:web:574f8f7cfad671d3de84c2",
  measurementId: "G-ZZ2JKE8Y03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);