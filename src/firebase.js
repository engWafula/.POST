
import firebase from  "firebase"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyB45EKjojbI9YGCuu19yxim8uFTrkUN1to",
  authDomain: "stratcom-6c83d.firebaseapp.com",
  projectId: "stratcom-6c83d",
  storageBucket: "stratcom-6c83d.appspot.com",
  messagingSenderId: "897241581948",
  appId: "1:897241581948:web:e781c0c020abba12903cf9",
  measurementId: "G-MT854SCK85"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

export default firebase;