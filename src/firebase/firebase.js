// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyCT4H3Kl0DKMIx1qSHia58ittHcTkMuIsU",
  authDomain: "long-loop-346117.firebaseapp.com",
  projectId: "long-loop-346117",
  storageBucket: "long-loop-346117.appspot.com",
  messagingSenderId: "673816623290",
  appId: "1:673816623290:web:5b3eeebfd8070675b32a83"

  /* apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket:process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId */
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)