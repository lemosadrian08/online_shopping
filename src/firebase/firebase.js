// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyCT4H3Kl0DKMIx1qSHia58ittHcTkMuIsU",
  authDomain: "long-loop-346117.firebaseapp.com",
  projectId: "long-loop-346117",
  storageBucket: "long-loop-346117.appspot.com",
  messagingSenderId: "673816623290",
  appId: "1:673816623290:web:5b3eeebfd8070675b32a83"

/*   apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId */
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)