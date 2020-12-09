import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAi8INTBwu668fxvGbX1cMsAV7N6-l_Xa8",
    authDomain: "facebook-messenger-clone-40298.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-40298-default-rtdb.firebaseio.com",
    projectId: "facebook-messenger-clone-40298",
    storageBucket: "facebook-messenger-clone-40298.appspot.com",
    messagingSenderId: "704700559507",
    appId: "1:704700559507:web:42d8da18b806f6c0ab5d66",
    measurementId: "G-NDT67ZNC15"
  });

  const db = firebaseApp.firestore();

  export default db;