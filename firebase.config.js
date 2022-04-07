// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCbOyT93zlsmstUTxMkCB-cgMX2a1TYgps",
    authDomain: "hire-4b874.firebaseapp.com",
    databaseURL: "https://hire-4b874-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "hire-4b874",
    storageBucket: "hire-4b874.appspot.com",
    messagingSenderId: "920405175348",
    appId: "1:920405175348:web:fd56e118e98ebc9a58ae61",
    measurementId: "G-MP0G21YM2Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export default database