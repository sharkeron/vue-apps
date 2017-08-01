import firebase from 'firebase'

  const config = {
    apiKey: "AIzaSyCEU74U5NkpFilCZUiTI-OsZaDTD7jGFlw",
    authDomain: "turnout-81ec7.firebaseapp.com",
    databaseURL: "https://turnout-81ec7.firebaseio.com",
    projectId: "turnout-81ec7",
    storageBucket: "turnout-81ec7.appspot.com",
    messagingSenderId: "379590910812"
  };

export const firebaseApp = firebase.initializeApp(config)
export const eventsRef = firebaseApp.database().ref().child('events')
