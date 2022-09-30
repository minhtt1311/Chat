import firebase from 'firebase/compat/app'
import 'firebase/compat/analytics';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAiJqMR8xOOegUFAbqbxqkXXDcU-CJGPfk",
  authDomain: "chat-app-d2a59.firebaseapp.com",
  projectId: "chat-app-d2a59",
  storageBucket: "chat-app-d2a59.appspot.com",
  messagingSenderId: "89525431090",
  appId: "1:89525431090:web:729fd04282ee94d5d6052b",
  measurementId: "G-50BDBB0BLE"
};


firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

if (window.location.hostname === 'localhost') {
  auth.useEmulator('http://localhost:9099');
  db.useEmulator('localhost', '8080');
}

export { db, auth };
export default firebase;
