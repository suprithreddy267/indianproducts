import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

var config = {
    apiKey: "AIzaSyBiudFhFy3ytHRi3gH8YXQ0xLDpAaxNmjs",
    authDomain: "indianproducts-614a4.firebaseapp.com",
    databaseURL: "https://indianproducts-614a4.firebaseio.com",
    projectId: "indianproducts-614a4",
    storageBucket: "indianproducts-614a4.appspot.com",
    messagingSenderId: "285421869945",
    appId: "1:285421869945:web:5f8091c31071aa86b62da8",
    measurementId: "G-KXZWZ2ZKD5"
  };
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;