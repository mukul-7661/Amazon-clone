import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsv9wCePWO06tvpjbYgIHhqPv6pUM-qno",
  authDomain: "clone-6076a.firebaseapp.com",
  projectId: "clone-6076a",
  storageBucket: "clone-6076a.appspot.com",
  messagingSenderId: "599173536173",
  appId: "1:599173536173:web:e0c556f14755d36dc16924",
  measurementId: "G-VXMHP7CGMS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
