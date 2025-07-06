// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMQJ6Rbn4J8f1BUJ1KcGELP4oUxhjUatM",
  authDomain: "coffee-store-app-59ed4.firebaseapp.com",
  projectId: "coffee-store-app-59ed4",
  storageBucket: "coffee-store-app-59ed4.firebasestorage.app",
  messagingSenderId: "388691544051",
  appId: "1:388691544051:web:64c0a6e7cf0e0e32947486"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);