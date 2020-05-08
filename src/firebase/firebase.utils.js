import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyApIFrYsygyw2iItMNnkmFgBG4J0oY1FIM",
    authDomain: "crwn-db-89373.firebaseapp.com",
    databaseURL: "https://crwn-db-89373.firebaseio.com",
    projectId: "crwn-db-89373",
    storageBucket: "crwn-db-89373.appspot.com",
    messagingSenderId: "1089772620942",
    appId: "1:1089772620942:web:975d26c5899021f0a0cddf",
    measurementId: "G-XWB60B67RY"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;