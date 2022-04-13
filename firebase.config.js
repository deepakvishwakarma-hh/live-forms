// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_ENV_VARIABLE_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_ENV_VARIABLE_AUTHDOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_ENV_VARIABLE_BASEURL,
    projectId: process.env.NEXT_PUBLIC_ENV_VARIABLE_PROJECTID,
    storageBucket: process.env.NEXT_PUBLIC_ENV_VARIABLE_STORAGEBUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_ENV_VARIABLE_SENDERID,
    appId: "1:920405175348:web:fd56e118e98ebc9a58ae61",
    measurementId: process.env.NEXT_PUBLIC_ENV_VARIABLE_MEASUREID
};

// console.log(process.env.NEXT_PUBLIC_ENV_VARIABLE_APIKEY)

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export default database

// for authentication with google
export const googleAuth = getAuth(app)
export const provider = new GoogleAuthProvider();