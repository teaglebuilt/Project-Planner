import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyC3fQhWKhI6DFbfGOJ0y1vWsOwOrQv7DA8",
    authDomain: "project-planner-cccf1.firebaseapp.com",
    databaseURL: "https://project-planner-cccf1.firebaseio.com",
    projectId: "project-planner-cccf1",
    storageBucket: "project-planner-cccf1.appspot.com",
    messagingSenderId: "889841577289"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;