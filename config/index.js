import firebase from 'firebase';
require('dotenv').config()
const {API_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESAGGING_SENSER_ID,
    APP_ID,
    MEASUREMENT_ID} =process.env

const conn=firebase.initializeApp({
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESAGGING_SENSER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID
  });

export default conn
