// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const API_KEY = process.env.REACT_APP_FIREBASE_KEY;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "pokedex-pokemon-43455.firebaseapp.com",
  projectId: "pokedex-pokemon-43455",
  storageBucket: "pokedex-pokemon-43455.appspot.com",
  messagingSenderId: "394721429154",
  appId: "1:394721429154:web:ea40e9fce0494dce68b9fb",
  measurementId: "G-64PS6K9B75",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
