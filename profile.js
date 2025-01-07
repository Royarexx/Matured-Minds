// Initialize Firebase
const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '', // Add your storage bucket
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

// Get the current user
const user = auth.currentUser;

// Get the user's data from Firestore
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
      const profileImageElement = document.getElementById('profile-image');

      usernameElement.textContent = userData.username;
      emailElement.textContent = userData.email;
      firstNameElement.textContent = userData.firstName;
      lastNameElement.textContent = userData.lastName;
      telephoneElement.textContent = userData.telephone;
      dobElement.textContent = userData.dob;

      // Set the profile picture if available
      if (userData.profilePictureURL) {
        profileImageElement.src = userData.profilePictureURL;
      }
    } else {
      console.log('No user data found');
    }
  })
  .catch((error) => {
    console.error('Error retrieving user data:', error);
  });

// Handle profile picture upload
const uploadImageInput = document.getElementById('upload-image');
const profileImage = document.getElementById('profile-image');

uploadImageInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = (e) => {
    profileImage.src = e.target.result;
  };

  reader.readAsDataURL(file);

  // Upload the image to Firebase Storage
  const storageRef = storage.ref();
  const fileRef = storageRef.child(`profile-pictures/${userId}/${file.name}`);

  fileRef.put(file)
    .then((snapshot) => {
      // Get the download URL
      snapshot.ref.getDownloadURL()
        .then((downloadURL) => {
          // Update the user's profile picture URL in Firestore
          userRef.update({ profilePictureURL: downloadURL })
            .then(() => {
              console.log('Profile picture updated successfully');
            })
            .catch((error) => {
              console.error('Error updating profile picture:', error);
            });
        })
        .catch((error) => {
          console.error('Error getting download URL:', error);
        });
    })
    .catch((error) => {
      console.error('Error uploading profile picture:', error);
    });
});

// Handle Edit Profile button click
const editProfileButton = document.getElementById('edit-profile');

editProfileButton.addEventListener('click', () => {
  // Implement your edit profile functionality here
  // You can use a form to allow users to edit their information
  // and then update the Firestore document with the new data
});



//nav bar 
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "";
}


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
if (!e.target.matches('.dropbtn')) {
  var dropdowns = document.getElementsByClassName("dropdown-content");
  for (var d = 0; d < dropdowns.length; d++) {
    var openDropdown = dropdowns[d];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}
