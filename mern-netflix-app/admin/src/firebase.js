import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCppmA2LQbMUUhCNcwlJ3Gk15L3gljAQO8",
  authDomain: "react-netflix-clone-40d83.firebaseapp.com",
  projectId: "react-netflix-clone-40d83",
  storageBucket: "react-netflix-clone-40d83.appspot.com",
  messagingSenderId: "1070077560785",
  appId: "1:1070077560785:web:7a2710b6deed0dab9ac2f0",
  measurementId: "G-2RZZJQ61KT"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
