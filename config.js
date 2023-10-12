import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBTknmzbQckY3mrzzqDbeYfW9AC8flFG_Y",
  authDomain: "e-libary-7f7e5.firebaseapp.com",
  projectId: "e-libary-7f7e5",
  storageBucket: "e-libary-7f7e5.appspot.com",
  messagingSenderId: "158890386354",
  appId: "1:158890386354:web:3d6dc183c792fb12fa7aab"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
