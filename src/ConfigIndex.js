import { initializeApp } from 'firebase/app';

import { getAuth,
     GoogleAuthProvider,
     signInWithRedirect ,
     getRedirectResult,
      onAuthStateChanged,
      signOut
    } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZjTFgc1jSatAWZkHCePTWGeqZWbTn9Ls",
  authDomain: "shopping-app-ec0c2.firebaseapp.com",
  projectId: "shopping-app-ec0c2",
  storageBucket: "shopping-app-ec0c2.appspot.com",
  messagingSenderId: "930853214000",
  appId: "1:930853214000:web:c63f56fc217f0cb0fe5af5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

// Initialize Firebase

export default app;
export {
    auth,
    provider,
   signInWithRedirect,
    getRedirectResult,
    onAuthStateChanged,
    signOut
}