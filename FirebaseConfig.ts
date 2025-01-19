    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    import { getAuth } from "@react-native-firebase/auth";
    import {getFirestore} from '@react-native-firebase/firestore'

    // Your web app's Firebase configuration
    const firebaseConfig = {
    apiKey: "AIzaSyCIkdOJ-3mEbYX88HRabukvLLu8S9MKAUc",
    authDomain: "reactnatve-signup-login.firebaseapp.com",
    projectId: "reactnatve-signup-login",
    storageBucket: "reactnatve-signup-login.firebasestorage.app",
    messagingSenderId: "155021005427",
    appId: "1:155021005427:web:501e0a11f4b72150fe9006"
    };

    // Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getAuth(FIREBASE_APP);