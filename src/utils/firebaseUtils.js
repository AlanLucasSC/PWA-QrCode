import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAf2JprBIZJW97Ef6mVwQGWgWLlzymJBLc",
    authDomain: "plusevent-d204d.firebaseapp.com",
    databaseURL: "https://plusevent-d204d.firebaseio.com",
    projectId: "plusevent-d204d",
    storageBucket: "",
    messagingSenderId: "631436429012"
};

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();