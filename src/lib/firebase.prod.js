import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { seedDatabase } from "../seed";


const config ={

    apiKey: "AIzaSyAbJKjxLqOa5ooiqNC-V381TENz55WoktU",
    authDomain: "netflix-2620e.firebaseapp.com",
    projectId: "netflix-2620e",
    storageBucket: "netflix-2620e.appspot.com",
    messagingSenderId: "206255381544",
    appId: "1:206255381544:web:81bcb137220dd1f8a8291d"
}

const firebase = Firebase.initializeApp(config);

export  {firebase};