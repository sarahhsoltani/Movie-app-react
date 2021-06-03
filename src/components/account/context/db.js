import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({

  databaseURL: "https://acount-3d2bb-default-rtdb.firebaseio.com/",

    apiKey: "AIzaSyBXj6i-6zNNIhHPg3fr2Sl5KU2J4_h7eLA",
    authDomain: "acount-3d2bb.firebaseapp.com",
    projectId: "acount-3d2bb",
    storageBucket: "acount-3d2bb.appspot.com",
    messagingSenderId: "259428551266",
    appId: "1:259428551266:web:ff8a721bf529ac5116df3b"
  
})



export const auth = app.auth()
export default app
