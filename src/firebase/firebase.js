import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

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
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
