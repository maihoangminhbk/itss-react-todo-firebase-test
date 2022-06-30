import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD-HaUFR_8WXPglD1Ndnluyi-KY8g-i0RE",
  authDomain: "minhmai-firebase-sample.firebaseapp.com",
  projectId: "minhmai-firebase-sample",
  storageBucket: "minhmai-firebase-sample.appspot.com",
  messagingSenderId: "409849960937",
  appId: "1:409849960937:web:c57a5af59368857cbb1378"
};


firebase.initializeApp(firebaseConfig);