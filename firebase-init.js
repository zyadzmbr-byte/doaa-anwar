// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDY7kswQfCwDtSF2EMxfwcy71QI3ATwUC4",
  authDomain: "doaa-d207c.firebaseapp.com",
  projectId: "doaa-d207c",
  storageBucket: "doaa-d207c.firebasestorage.app",
  messagingSenderId: "721892359473",
  appId: "1:721892359473:web:721a5b495592d589e1c410"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
