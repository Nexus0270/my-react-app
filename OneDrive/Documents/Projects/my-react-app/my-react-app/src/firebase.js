// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyDSrlflKS4mTpxQdyqzgmdbz96wcpxWUa4",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "my-react-app-63f41.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "my-react-app-63f41",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "my-react-app-63f41.firebasestorage.app",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "347351889216",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "1:347351889216:web:31d560129d39c5cb18b6a5",
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID || "G-4C89327RM0"
};

// Console logs to check if environment variables are loaded
console.log('Firebase Environment Variables Check:');
console.log('API Key:', process.env.REACT_APP_FIREBASE_API_KEY ? '✅ Loaded' : '❌ Not loaded');
console.log('Auth Domain:', process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ? '✅ Loaded' : '❌ Not loaded');
console.log('Project ID:', process.env.REACT_APP_FIREBASE_PROJECT_ID ? '✅ Loaded' : '❌ Not loaded');
console.log('Storage Bucket:', process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ? '✅ Loaded' : '❌ Not loaded');
console.log('Messaging Sender ID:', process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID ? '✅ Loaded' : '❌ Not loaded');
console.log('App ID:', process.env.REACT_APP_FIREBASE_APP_ID ? '✅ Loaded' : '❌ Not loaded');
console.log('Measurement ID:', process.env.REACT_APP_FIREBASE_MEASUREMENT_ID ? '✅ Loaded' : '❌ Not loaded');

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);