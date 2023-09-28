// Importing necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAuth, signInAnonymously, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js';

// Your web app's Firebase configuration object
// const firebaseConfig = {
//   apiKey: "your-api-key",
//   authDomain: "your-auth-domain",
//   projectId: "your-project-id",
//   storageBucket: "your-storage-bucket",
//   messagingSenderId: "your-messaging-sender-id",
//   appId: "your-app-id",
// };

const firebaseConfig = {
    apiKey: "AIzaSyBYpXYRyIRdN8o0GyfVewSdUM2P3Q-tUb4",
    authDomain: "onlinetesting-42b6b.firebaseapp.com",
    databaseURL: "https://onlinetesting-42b6b-default-rtdb.firebaseio.com",
    projectId: "onlinetesting-42b6b",
    storageBucket: "onlinetesting-42b6b.appspot.com",
    messagingSenderId: "303642679764",
    appId: "1:303642679764:web:9ea15e68cbd228618dde41",
    measurementId: "G-V4TG46RRYG"
}

// Initialize Firebase with the config object
const app = initializeApp(firebaseConfig);

// Initialize Auth and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// This variable will hold the unique identifier for the current user/session
// let uid;

// Signs in the user anonymously and logs errors if any
// signInAnonymously(auth).catch((error) => {
 //  console.error(error.code);
  // console.error(error.message);
  // document.body.innerHTML = `
   //  <div id="mainDiv">
     //  <div class="jspsych-display-element">
     //   <h1>Oops</h1>
      //  Looks like there's a problem! Try hard refreshing your browser (Ctrl + F5).
       // <br><br>
       // Thank you!
     // </div>
   // </div>`;
// });

// Listening to the authentication state changes and assigning uid for authenticated users
// onAuthStateChanged(auth, (user) => {
 // if (user) uid = user.uid;
// });


// Exporting uid, auth, and db so that they can be used in other files
// export { uid, auth, db };


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./styles.css">
    <script src="https://www.gstatic.com/firebasejs/10.2.0/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/10.2.0/firebase-database-compat.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/toastify-js"></script>

</head>

<body>
    <div class="form card">
        <div class="card_header">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path fill="currentColor"
                    d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z">
                </path>
            </svg>
            <h1 class="form_heading">User Login</h1>
        </div>
        <div class="field">
            <label for="userid">User ID (Number)</label>
            <input class="input" name="userid" type="number" placeholder="Enter User ID" id="userid">
        </div>
        <div class="field">
            <button class="button" id="login">Login</button>
        </div>
    </div>
    <script src="./login.js"></script>
</body>

</html>
