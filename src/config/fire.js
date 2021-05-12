import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAcNydgyl3F_GXD62WduMEvLA3M7yALsfg",
    authDomain: "projectx-f74d8.firebaseapp.com",
    projectId: "projectx-f74d8",
    storageBucket: "projectx-f74d8.appspot.com",
    messagingSenderId: "948995557923",
    appId: "1:948995557923:web:df37705bebb1f2f5fe3f96",
    measurementId: "G-X2V1BG716F"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;
