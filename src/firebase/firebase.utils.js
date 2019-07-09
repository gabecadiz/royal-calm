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

//function that takes user auth object then store in database;
//async api request
export const createUserProfileDocument = async (userAuth, additionalData) => {
  //if userAuth doesnt exist, no user logged in, exit function
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  //async get request
  const snapShot = await userRef.get();

  //if snapshot doesnt exist we will create data in that place for a new user
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName, email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error)
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//setup google authentication utlity

const provider = new firebase.auth.GoogleAuthProvider();
//trigger google pop up whenever we use google auth provider for auth and signin
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;