


/*

  //Initialize Firebase Authentication

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWDNTjrHPguqaLVN9k0HtNQlLq7XGRZ-8",
  authDomain: "matured-minds.firebaseapp.com",
  projectId: "matured-minds",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


//Handle the login form submission event:

const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Login user using Firebase Authentication
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Logged in user:", user);
      // Redirect to dashboard or profile page
    })
    .catch((error) => {
      console.error("Error logging in user:", error);
      // Display error message to user
    });
});



// ...After successful login, redirect the user to the profile page/dashboard:


auth.signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log("Logged in user:", user);
    // Redirect to profile page/dashboard
    window.location.href = "profile.html";
  })
  .catch((error) => {
    console.error("Error logging in user:", error);
    // Display error message to user
  });
*/



/*

// Import the functions needed from the SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// My web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWDNTjrHPguqaLVN9k0HtNQlLq7XGRZ-8",
  authDomain: "matured-minds.firebaseapp.com",
  projectId: "matured-minds",
  storageBucket: "matured-minds.firebasestorage.app",
  messagingSenderId: "434293988470",
  appId: "1:434293988470:web:8c0fd3ee7b76306b361357",
  measurementId: "G-CXEQYEWH17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Get the sign-in form
const loginForm = document.getElementById('login-form');

// Handle form submission
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get the form data
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Sign in user using Firebase Authentication
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Logged in user:", user);
      // Redirect to dashboard or profile page
      window.location.href = "profile.html"; // Replace with your desired redirect URL
    })
    .catch((error) => {
      console.error("Error logging in user:", error);
      // Display error message to user
      alert("Invalid email or password.");
    });
});
*/


// Import the functions needed from the SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWDNTjrHPguqaLVN9k0HtNQlLq7XGRZ-8",
  authDomain: "matured-minds.firebaseapp.com",
  projectId: "matured-minds",
  storageBucket: "matured-minds.firebasestorage.app",
  messagingSenderId: "434293988470",
  appId: "1:434293988470:web:8c0fd3ee7b76306b361357",
  measurementId: "G-CXEQYEWH17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Get the sign-in form
const loginForm = document.getElementById('login-form');

// Handle form submission
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get the form data
  const uname = document.getElementById('uname').value; // Get username
  const psw = document.getElementById('psw').value; // Get password

  // Check if the user entered an email or username
  if (uname.includes('@')) { // Check if uname contains '@' (likely an email)
    signInWithEmailAndPassword(auth, uname, psw) // Use uname as email
      .then((userCredential) => {
        // ... (Handle successful login)
      })
      .catch((error) => {
        // ... (Handle errors)
      });
  } else {
    // Assume uname is a username
    // You'll need to implement a way to look up the user by username
    // This might involve using Firestore or a custom authentication system
    // For this example, we'll just use email/password for simplicity
    signInWithEmailAndPassword(auth, uname, psw) // Use uname as email
      .then((userCredential) => {
        // ... (Handle successful login)
      })
      .catch((error) => {
        // ... (Handle errors)
      });
  }
});



