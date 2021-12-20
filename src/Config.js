
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyALiJ3Ah584FNz6xf30pTTjTH99nL1XneE",
    authDomain: "crud-501a3.firebaseapp.com",
    projectId: "crud-501a3",
    storageBucket: "crud-501a3.appspot.com",
    messagingSenderId: "403797847394",
    appId: "1:403797847394:web:345a44098ef9ee7899103b",
    //   measurementId: `${config.measurementId}`
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getFirestore(app);
export const auth = getAuth(app)
