import firebase from 'firebase/app';
//database
import 'firebase/firestore';
//auth
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC2rMyTYXgCDDUeXldrnVxBi7KQOe_otC0",
  authDomain: "royal-calm-db.firebaseapp.com",
  databaseURL: "https://royal-calm-db.firebaseio.com",
  projectId: "royal-calm-db",
  storageBucket: "",
  messagingSenderId: "483444585334",
  appId: "1:483444585334:web:0c5e2984f5428174"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//setup google authentication utlity

const provider = new firebase.auth.GoogleAuthProvider();
//trigger google pop up whenever we use google auth provider for auth and signin
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;