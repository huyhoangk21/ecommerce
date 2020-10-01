import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyAbKD93mMxXab7onWVQRU7ntRLg3PmCDXo',
  authDomain: 'ecommerce-36295.firebaseapp.com',
  databaseURL: 'https://ecommerce-36295.firebaseio.com',
  projectId: 'ecommerce-36295',
  storageBucket: 'ecommerce-36295.appspot.com',
  messagingSenderId: '595422674132',
  appId: '1:595422674132:web:1d4490e0a5c4245d184f41',
  measurementId: 'G-DTJ9MLNBZP',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth().signInWithPopup(provider);

export default firebase;
