import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCarFz5AR-Ejp7qUKegao5P66WAXqUwRZE",
    authDomain: "cube-26276.firebaseapp.com",
    projectId: "cube-26276",
    storageBucket: "cube-26276.appspot.com",
    messagingSenderId: "68186495667",
    appId: "1:68186495667:web:1e9a309d74d7ff0d64aec6",
    measurementId: "G-RMMK1G6W1S"
    // apiKey: "AIzaSyARJJXHHdbN_Lhy5oF7QP3aq9B5D9cg_WY",
    // authDomain: "cube-chatapp.firebaseapp.com",
    // projectId: "cube-chatapp",
    // storageBucket: "cube-chatapp.appspot.com",
    // messagingSenderId: "755485854264",
    // appId: "1:755485854264:web:3adad2d1cfde86c5c2b4cd",
    // measurementId: "G-ECEG47Z8LM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth , provider };
  export default db;