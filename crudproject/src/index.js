import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'firebase/firestore'
import  firebase from 'firebase';



var firebaseConfig = {
  apiKey: "AIzaSyDUexpDw0NRiogySQWRr9EwQ8AfZX2gAF8",
  authDomain: "crudproject-63b1b.firebaseapp.com",
  projectId: "crudproject-63b1b",
  storageBucket: "crudproject-63b1b.appspot.com",
  messagingSenderId: "8447831943",
  appId: "1:8447831943:web:d3d6bfb331dfa02d77ed22",
  measurementId: "G-LNKS8D1KJ9"
};

firebase.initializeApp(firebaseConfig);



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
