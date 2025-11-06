import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCI8uxIUFods_Dmc4vwleiOqruiPkMpj8",
  authDomain: "reahbites.firebaseapp.com",
  projectId: "reahbites",
  storageBucket: "reahbites.firebasestorage.app",
  messagingSenderId: "15345181849",
  appId: "1:15345181849:web:2e9d29bc5b866369a34408",
  measurementId: "G-TK19STJJ48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;

