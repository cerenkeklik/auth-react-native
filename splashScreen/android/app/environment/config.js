import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDZPBBMNmcWAmq-15xvAPcx8nhRD_B-9v8",
    authDomain: "splashscreen-fafe5.firebaseapp.com",
    projectId: "splashscreen-fafe5",
    storageBucket: "splashscreen-fafe5.appspot.com",
    messagingSenderId: "286998116807",
    appId: "1:286998116807:web:12ba0333508372afb4c1e2",
    measurementId: "G-1RJF2N2NTP"
  };
  if(!firebase.apps.length){
 firebase.initializeApp(firebaseConfig, "splash");
  }

  export const firebaseAuth =  firebase.initializeApp(firebaseConfig, '2').auth();