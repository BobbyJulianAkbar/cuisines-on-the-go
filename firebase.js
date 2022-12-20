// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcYPhNUufUrBYLNXpYfGBfewBV6-NoDgM",
  authDomain: "cuisines-on-the-go-77cf1.firebaseapp.com",
  projectId: "cuisines-on-the-go-77cf1",
  storageBucket: "cuisines-on-the-go-77cf1.appspot.com",
  messagingSenderId: "772488592736",
  appId: "1:772488592736:web:d5b8ecd4ab4d7de8f23205",
  measurementId: "G-G153200Y7P"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app()
}
const auth = firebase.auth();

export { auth };