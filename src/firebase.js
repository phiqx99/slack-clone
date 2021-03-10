import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAYOj-WQHGd1T7e3b965RSDCYxC7EdiaEI",
    authDomain: "slack-clone-2d2cf.firebaseapp.com",
    projectId: "slack-clone-2d2cf",
    storageBucket: "slack-clone-2d2cf.appspot.com",
    messagingSenderId: "993589416021",
    appId: "1:993589416021:web:0880b077839f338fc844dc"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };