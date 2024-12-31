


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
