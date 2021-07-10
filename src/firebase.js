import firebase from  "firebase"
import "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyAHgL7RMYIsWayukYE4t4m3eWbQWkLhKEY",
  authDomain: "post-ef723.firebaseapp.com",
  databaseURL: "https://post-ef723-default-rtdb.firebaseio.com",
  projectId: "post-ef723",
  storageBucket: "post-ef723.appspot.com",
  messagingSenderId: "599491148142",
  appId: "1:599491148142:web:d8b48b88abee1d0438697f"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

export default firebase;