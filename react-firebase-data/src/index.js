import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

var config = {
    apiKey: "AIzaSyDIbW6RuC4tRJ4SWv2V9qgMViT5E69mj5M",
    authDomain: "tasks-demo-687a9.firebaseapp.com",
    databaseURL: "https://tasks-demo-687a9.firebaseio.com",
    projectId: "tasks-demo-687a9",
    storageBucket: "tasks-demo-687a9.appspot.com",
    messagingSenderId: "73892129559"
};
firebase.initializeApp(config);

firebase.auth().signInAnonymously()
    .then(() => {
        ReactDOM.render(<App />, document.getElementById('root'));
        registerServiceWorker();
    })
    .catch(err => {
        alert(err.message);
    });