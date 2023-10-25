// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCQl9p9-kLLnd1fxBfxpX2HwWAER5aWV1g',
  authDomain: 'cf-leaderboards.firebaseapp.com',
  databaseURL: 'https://cf-leaderboards-default-rtdb.firebaseio.com',
  projectId: 'cf-leaderboards',
  storageBucket: 'cf-leaderboards.appspot.com',
  messagingSenderId: '993645498162',
  appId: '1:993645498162:web:d055d2581a68312df7912b',
  measurementId: 'G-KTNQ5RR90W'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const auth = getAuth(app)
