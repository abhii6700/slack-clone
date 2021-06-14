import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBCk9J2GjvKr8y5a8o2BLe2ueJtpv1fFas",
    authDomain: "slack-clone-e570c.firebaseapp.com",
    projectId: "slack-clone-e570c",
    storageBucket: "slack-clone-e570c.appspot.com",
    messagingSenderId: "192568492482",
    appId: "1:192568492482:web:7d93a2da7a5841d85f165b",
    measurementId: "G-BZKQ052E94"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider, db }; 