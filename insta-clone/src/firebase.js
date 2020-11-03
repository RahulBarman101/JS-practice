import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCcgQiNFXTODUkPzb9RQMfOQXPPaablZHA",
    authDomain: "insta-clone-7277d.firebaseapp.com",
    databaseURL: "https://insta-clone-7277d.firebaseio.com",
    projectId: "insta-clone-7277d",
    storageBucket: "insta-clone-7277d.appspot.com",
    messagingSenderId: "583422224898",
    appId: "1:583422224898:web:176f9b68674f0920f8951b",
    measurementId: "G-HQFVLF3WJH"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
