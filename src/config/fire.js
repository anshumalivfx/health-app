import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBoM9G8GMD1J-yDQaBYtlnZtR-3C2yxUt8",
  authDomain: "healthapp-90909.firebaseapp.com",
  databaseURL: "https://healthapp-90909-default-rtdb.firebaseio.com",
  projectId: "healthapp-90909",
  storageBucket: "healthapp-90909.appspot.com",
  messagingSenderId: "138028977332",
  appId: "1:138028977332:web:f561cafa75e8b1e8271be1",
  measurementId: "G-LXEBGPJL18",
};

const fire = firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
export const users = db.ref("users");
export default fire;
