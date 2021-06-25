import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDYS_GdWrTKia23C8kMvn-5EGHYyKHCcZY",
  authDomain: "redux-notes.firebaseapp.com",
  projectId: "redux-notes",
  storageBucket: "redux-notes.appspot.com",
  messagingSenderId: "260264424517",
  appId: "1:260264424517:web:d0c6beeecb57b2176f1f2c",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
