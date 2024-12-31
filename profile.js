treytrey





  // Initialize Firebase
const firebaseConfig = {
    apiKey: '<API_KEY>',
    authDomain: '<AUTH_DOMAIN>',
    projectId: '<PROJECT_ID>',
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Get the current user
  const auth = firebase.auth();
  const user = auth.currentUser;
  
  // Get the user's data from Firestore
  const db = firebase.firestore();
  const userId = user.uid;
  const userRef = db.collection('users').doc(userId);
  
  userRef.get()
    .then((doc) => {
      if (doc.exists) {
        const userData = doc.data();
        const usernameElement = document.getElementById('username');
        const emailElement = document.getElementById('email');
        const firstNameElement = document.getElementById('firstName');
        const lastNameElement = document.getElementById('lastName');
        const telephoneElement = document.getElementById('telephone');
        const dobElement = document.getElementById('dob');
  
        usernameElement.textContent = userData.username;
        emailElement.textContent = userData.email;
        firstNameElement.textContent = userData.firstName;
        lastNameElement.textContent = userData.lastName;
        telephoneElement.textContent = userData.telephone;
        dobElement.textContent = userData.dob;
      } else {
        console.log('No user data found');
      }
    })
    .catch((error) => {
      console.error('Error retrieving user data:', error);
    });
  
  