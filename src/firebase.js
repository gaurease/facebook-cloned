import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAwC2tqR9gSNCWnKiqtazm_O8b1op-ssZQ",
    authDomain: "facebook-clone-78be5.firebaseapp.com",
    projectId: "facebook-clone-78be5",
    storageBucket: "facebook-clone-78be5.appspot.com",
    messagingSenderId: "955436472504",
    appId: "1:955436472504:web:af5721856d4e4249947c4d",
    measurementId: "G-0JC5QVYMSM"
  };

  const app=firebase.initializeApp(firebaseConfig)
  const db=app.firestore()
  const auth=app.auth()
  const provider=new firebase.auth.GoogleAuthProvider()
 
  export{auth,provider}
  export default db