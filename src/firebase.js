import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJjScbvycepsMuqtMC3cXN77e56GrGsQo",
  authDomain: "dr-chandra-heals-website.firebaseapp.com",
  projectId: "dr-chandra-heals-website",
  storageBucket: "dr-chandra-heals-website.firebasestorage.app",
  messagingSenderId: "344038983871",
  appId: "1:344038983871:web:d6d9658ee0cd088d699e0a",
  measurementId: "G-2GMB4KXH7E"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db }; 