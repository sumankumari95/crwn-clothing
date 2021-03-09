import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBv1L1_4YrDlM8jfGFLGUjCBl40LO4F8dw",
  authDomain: "crwn-db-1e9f6.firebaseapp.com",
  projectId: "crwn-db-1e9f6",
  storageBucket: "crwn-db-1e9f6.appspot.com",
  messagingSenderId: "970784468645",
  appId: "1:970784468645:web:78bbda9eb34c93cf39a74c",
  measurementId: "G-XZZ1YVP0SD",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
