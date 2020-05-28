import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

require('dotenv').config();

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'crown-db-94293.firebaseapp.com',
  databaseURL: 'https://crown-db-94293.firebaseio.com',
  projectId: 'crown-db-94293',
  storageBucket: 'crown-db-94293.appspot.com',
  messagingSenderId: '738729580349',
  appId: '1:738729580349:web:15a7f76fb7f0372ec0d754',
  measurementId: 'G-WD9N9RNH4J',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
