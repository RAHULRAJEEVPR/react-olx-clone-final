import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQw2q_FbbwWXoM1G5_mz7Fx7pr9Xwds4Y",
  authDomain: "fir-8cee1.firebaseapp.com",
  projectId: "fir-8cee1",
  storageBucket: "fir-8cee1.appspot.com",
  messagingSenderId: "528069059497",
  appId: "1:528069059497:web:7dc2020087bce0c5571ab8",
  measurementId: "G-DHZRZ35Z9L",
};

export default firebase.initializeApp(firebaseConfig);
