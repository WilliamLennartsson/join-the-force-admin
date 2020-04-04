import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'




const app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore()
export const auth = app.auth()
