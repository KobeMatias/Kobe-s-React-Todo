import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA3FUmabK74znB5iGUnU8HLImeM7XdgYOI",
  authDomain: "crud-app-66776.firebaseapp.com",
  projectId: "crud-app-66776",
  storageBucket: "crud-app-66776.appspot.com",
  messagingSenderId: "783427489895",
  appId: "1:783427489895:web:574f8f7cfad671d3de84c2",
  measurementId: "G-ZZ2JKE8Y03"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };