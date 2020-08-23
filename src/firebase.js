import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/functions";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByb-oSQ6m9fBRmJigQV2io4QSu-6Spffg",
  authDomain: "paint-github.firebaseapp.com",
  databaseURL: "https://paint-github.firebaseio.com",
  projectId: "paint-github",
  storageBucket: "paint-github.appspot.com",
  messagingSenderId: "531338029002",
  appId: "1:531338029002:web:a4d6f5a308e9f06e3a9133",
  measurementId: "G-D9C9K0RB9Y",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
export const db = firebase.firestore();
