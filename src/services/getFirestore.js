import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBhZiw8bmNaPf61Mikp3RrxfDSMAnQP4Yg",
    authDomain: "clipandgo-58f33.firebaseapp.com",
    projectId: "clipandgo-58f33",
    storageBucket: "clipandgo-58f33.appspot.com",
    messagingSenderId: "947227533776",
    appId: "1:947227533776:web:986febf84e184d79c899d5"
  };

  const app = firebase.initializeApp(firebaseConfig)
  
  export function getFirestore()
  
  {return firebase.firestore(app)}