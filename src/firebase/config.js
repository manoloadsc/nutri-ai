import { initializeApp } from "firebase/app";
import { initializeFirestore, serverTimestamp } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Firebase config aqui embaixo
const firebaseConfig = {
  apiKey: "AIzaSyDDlZfoxZmeiwD6Mxwdaa-hhHswMdUguUg",
  authDomain: "nutri-ai-7a9a4.firebaseapp.com",
  projectId: "nutri-ai-7a9a4",
  storageBucket: "nutri-ai-7a9a4.appspot.com",
  messagingSenderId: "486630077615",
  appId: "1:486630077615:web:6f7ba97610cfa0748b905a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);

// Initialize services
const db = initializeFirestore(firebaseApp, {
  ignoreUndefinedProperties: true,
});
const storage = getStorage(firebaseApp);

// Timestamp
const timestamp = serverTimestamp();

export { db, storage, timestamp };