import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCAyeGQ_F0E3WPYa13GpYkyTrDhcJqQ8HE",
  authDomain: "achou-app-3a64f.firebaseapp.com",
  projectId: "achou-app-3a64f",
  storageBucket: "achou-app-3a64f.appspot.com",
  messagingSenderId: "1004196619502",
  appId: "1:1004196619502:web:74b2c48648e9c2b1a53fff"
};

const firebase = initializeApp(firebaseConfig);

export default firebase;