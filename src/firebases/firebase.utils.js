import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD_PptsWgm2HkTaEGpcLVa6UZy8BrzQW7o",
    authDomain: "clothing-club.firebaseapp.com",
    projectId: "clothing-club",
    storageBucket: "clothing-club.appspot.com",
    messagingSenderId: "133072920350",
    appId: "1:133072920350:web:7de04898d268d28759b30f",
    measurementId: "G-J7HM2J7GVW"
  };
 
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInwithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;