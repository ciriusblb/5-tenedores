import firebase from 'firebase/app'

  const firebaseConfig = {
    apiKey: "AIzaSyCJLmc6RqyFh9gQarwMLUjHjRauIJ1Yvbk",
    authDomain: "tenedores-540ac.firebaseapp.com",
    databaseURL: "https://tenedores-540ac.firebaseio.com",
    projectId: "tenedores-540ac",
    storageBucket: "tenedores-540ac.appspot.com",
    messagingSenderId: "979711679235",
    appId: "1:979711679235:web:2a0efe806e9e16347c6736"
  };
export const firebaseApp = firebase.initializeApp(firebaseConfig)