// Firebase Configuration
const firebaseConfig = {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: ''
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const firestore = firebase.firestore();


// Get the navigation buttons





// Get the navigation buttons
const prevButton = document.querySelector('.prev-button');
const pauseButton = document.querySelector('.pause-button');
const nextButton = document.querySelector('.next-button');


// Employee Slider
let currentProfile = 1;

function prevProfile() {
currentProfile--;
if (currentProfile < 1) {
currentProfile = 6; // changed to 6
}
updateProfile();
}

function nextProfile() {
currentProfile++;
if (currentProfile > 6) { // changed to 6
currentProfile = 1;
}
updateProfile();
}

function updateProfile() {
const profiles = document.querySelectorAll('.employee-profile');
profiles.forEach((profile) => {
profile.classList.remove('active');
});
const currentProfileElement = document.getElementById(profile-$,{currentProfile});
currentProfileElement.classList.add('active');
}

// Photo Upload
const photoUploadForm = document.getElementById('photo-upload-form');
const photoUploadButton = document.getElementById('photo-upload-button');
const photoUploadInput = document.getElementById('photo-upload');
const uploadStatus = document.getElementById('upload-status');

photoUploadButton.addEventListener('click', (e) => {
e.preventDefault();
const file = photoUploadInput.files[0];
const storageRef = firebase.storage().ref();
const uploadTask = storageRef.child('photos/' + file.name).put(file);

uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
    () => {
        // Upload in progress
        uploadStatus.textContent = 'Uploading photo...';
    },
    (error) => {
        // Upload failed
        uploadStatus.textContent = 'Error uploading photo: ' + error.message;
    },
     () => {
                // Upload successful
                uploadStatus.textContent = 'Photo uploaded successfully!';
                const downloadURL = uploadTask.snapshot.downloadURL;
                // Save photo URL to Cloud Firestore
                firebase.firestore().collection('photos').add({
                    url: downloadURL,
                });
            }
            
            );
            
            
            });
            
            // Navigation Menu
            function openNav() {
            document.getElementById("mySidenav").style.width = "250px";
            document.getElementById("main").style.marginLeft = "250px";
            document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
            }
            
            function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("main").style.marginLeft = "0";
            document.body.style.backgroundColor = "white";
            }
            
            // Dropdown Menu
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
            
            





           let slideIndex = 1;
            showSlides(slideIndex);
            
            function plusSlides(n) {
              showSlides(slideIndex += n);
            }
            
            function currentSlide(n) {
              showSlides(slideIndex = n);
            }
            
            function showSlides(n) {
              let i;
              let slides = document.getElementsByClassName("mySlides");
              let dots = document.getElementsByClassName("demo");
              let captionText = document.getElementById("caption");
              if (n > slides.length) {slideIndex = 1}
              if (n < 1) {slideIndex = slides.length}
              for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
              }
              for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
              }
              slides[slideIndex-1].style.display = "block";
              dots[slideIndex-1].className += " active";
              captionText.innerHTML = dots[slideIndex-1].alt;
            }           



