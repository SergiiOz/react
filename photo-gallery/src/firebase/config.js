//connect firebase to app
import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCdYPvBieb3v17qlZ3mvsTJWuhCBYylEog',
  authDomain: 'photo-gallery-4b1b1.firebaseapp.com',
  databaseURL: 'https://photo-gallery-4b1b1.firebaseio.com',
  projectId: 'photo-gallery-4b1b1',
  storageBucket: 'photo-gallery-4b1b1.appspot.com',
  messagingSenderId: '364155136089',
  appId: '1:364155136089:web:8fb2424afe0c35f7ce6948',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//initialize two services
const projectStorage = firebase.storage(); //store for our images
const projectFirestore = firebase.firestore(); //database
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
