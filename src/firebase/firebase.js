import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB5aqc17KkhhKzd-wXqx43-XEkxw_mHRmY",
  authDomain: "cervezagaleriareact.firebaseapp.com",
  projectId: "cervezagaleriareact",
  storageBucket: "cervezagaleriareact.appspot.com",
  messagingSenderId: "760750820087",
  appId: "1:760750820087:web:4cb9b69cf905ecfbee61f2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);