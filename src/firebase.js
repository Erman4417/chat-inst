import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBtw_YigMR6qbDZqn8Z5Q7ZvOWEwrLGNUY",
  authDomain: "chat-app-d4618.firebaseapp.com",
  projectId: "chat-app-d4618",
  storageBucket: "chat-app-d4618.appspot.com",
  messagingSenderId: "381820641087",
  appId: "1:381820641087:web:4dc583cd95915ab7d23d8a",
  measurementId: "G-DMSNHQ7EVF"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export {auth,firebase}
