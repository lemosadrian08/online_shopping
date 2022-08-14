
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCT4H3Kl0DKMIx1qSHia58ittHcTkMuIsU",
  authDomain: "long-loop-346117.firebaseapp.com",
  projectId: "long-loop-346117",
  storageBucket: "long-loop-346117.appspot.com",
  messagingSenderId: "673816623290",
  appId: "1:673816623290:web:5b3eeebfd8070675b32a83"

};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)