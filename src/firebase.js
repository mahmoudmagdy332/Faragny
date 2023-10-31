import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyBcqJoGQV_dI-jvJLsLZy3iRR45s8pt3Ng",
    authDomain: "firist-app-875d8.firebaseapp.com",
    projectId: "firist-app-875d8",
    storageBucket: "firist-app-875d8.appspot.com",
    messagingSenderId: "1098529452489",
    appId: "1:1098529452489:web:a850ed983192985eb5b818",
    measurementId: "G-W1HQ6NBMG6"
  };
  const app=initializeApp(firebaseConfig);
  const auth=getAuth(app);
  
  export default auth;
