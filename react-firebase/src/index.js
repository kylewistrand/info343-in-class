import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import firebase from "firebase/app";
import "firebase/auth";

// Initialize Firebase
var config = {
    apiKey: "AIzaSyB4kjxvODf8T2pCg0bFu5IhIXKrec1OrII",
    authDomain: "info343-demo-be296.firebaseapp.com",
    databaseURL: "https://info343-demo-be296.firebaseio.com",
    projectId: "info343-demo-be296",
    storageBucket: "info343-demo-be296.appspot.com",
    messagingSenderId: "763676403230"
};

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

