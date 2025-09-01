// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID ,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
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