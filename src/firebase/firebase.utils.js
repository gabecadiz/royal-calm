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

//function that takes user auth object then store in database;
//async api request
export const createUserProfileDocument = async (userAuth, additionalData) => {
  //if userAuth doesnt exist, no user logged in, exit function
  if (!userAuth) return;
  //document reference of the potential user object
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  //async get request, get the document snapshot object from the document reference
  const snapShot = await userRef.get();

  //if snapshot doesnt exist we will create data in that place for a new user
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    //.set creates the user with the information
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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    console.log(newDocRef);
    batch.set(newDocRef, obj);
  })

  return await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {})
}

//mimicking fetching users from a database as using firebase is slightly different
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject)
  })
}



export const auth = firebase.auth();
export const firestore = firebase.firestore();

//setup google authentication utlity

export const googleProvider = new firebase.auth.GoogleAuthProvider();
//trigger google pop up whenever we use google auth provider for auth and signin
googleProvider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
