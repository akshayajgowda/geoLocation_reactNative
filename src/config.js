import Firebase from 'firebase';

let config = {
    apiKey: "AIzaSyA-O22wxQMyAXoFo7LK4ZhLViUMeja7vSo",
    authDomain: "reactdemo1-d9a7a.firebaseapp.com",
    databaseURL: "https://reactdemo1-d9a7a.firebaseio.com",
    projectId: "reactdemo1-d9a7a",
    storageBucket: "reactdemo1-d9a7a.appspot.com",
    messagingSenderId: "1058178331865"
};
let app = Firebase.initializeApp(config);
export const db = app.database();