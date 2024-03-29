import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDgpTdXfNCztOST2fj6hULgecOxRFclHYg",
  authDomain: "e-rid-71ef8.firebaseapp.com",
  projectId: "e-rid-71ef8",
  storageBucket: "e-rid-71ef8.appspot.com",
  messagingSenderId: "748544812689",
  appId: "1:748544812689:web:6d513c57ae78bc4d57c130"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
