const functions = require('firebase-functions');
const admin = require('firebase-admin');
const validator = require('validator'); // Install the validator library

admin.initializeApp();

exports.signUp = functions.https.onCall((data, context) => {
  const username = data.username;
  const email = data.email;
  const password = data.password;
  const firstName = data.firstName;
  const lastName = data.lastName;
  const telephone = data.telephone;
  const dob = data.dob;

  // Validate data
  if (!username || !email || !password || !firstName || !lastName || !telephone || !dob) {
    return { error: 'Missing required fields' };
  }
  if (!validator.isEmail(email)) {
    return { error: 'Invalid email address.' };
  }
  if (!validator.isStrongPassword(password, { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 })) {
    return { error: 'Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one symbol.' };
  }

  // Create a new user
  return admin.auth().createUser({
    email: email,
    password: password,
    displayName: username, // Ensure displayName matches username
  })
  .then(userRecord => {
    // Store user data in Firestore
    return admin.firestore().collection('users').doc(userRecord.uid).set({
      username: username,
      firstName: firstName,
      lastName: lastName,
      telephone: telephone,
      dob: dob,
      displayName: username, // Store displayName in Firestore
    });
  })
  .then(() => {
    return { success: true };
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      return { error: 'Email address already exists.' };
    } else if (error.code === 'auth/weak-password') {
      return { error: 'Password is too weak.' };
    } else {
      return { error: error.message };
    }
  });
});

