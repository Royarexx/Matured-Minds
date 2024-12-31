
// Get the gallery slideshow element
const gallerySlideshow = document.querySelector('.gallery-slideshow');

// Get the member pictures
const memberPictures = gallerySlideshow.querySelectorAll('img');

// Get the navigation buttons
const prevButton = document.querySelector('.prev-button');
const pauseButton = document.querySelector('.pause-button');
const nextButton = document.querySelector('.next-button');

// Get the captions
const caption = document.querySelector('#caption');

// Set the slideshow interval
const slideshowInterval = 5000; // 5 seconds

// Set the current picture index
let currentPictureIndex = 0;

// Set the slideshow paused state
let isSlideshowPaused = false;

// Function to update the slideshow
function updateSlideshow() {
    // Hide the current picture
    memberPictures[currentPictureIndex].style.opacity = 0;

    // Increment the current picture index
    currentPictureIndex++;

    // Check if we've reached the end of the pictures
    if (currentPictureIndex >= memberPictures.length) {
        currentPictureIndex = 0;
    }

    // Show the next picture
    memberPictures[currentPictureIndex].style.opacity = 1;

    // Update the caption
    caption.textContent = `Member ${currentPictureIndex + 1}`;
}
// Function to randomize the order of the member pictures
function randomizeMemberPictures() {
  for (let i = memberPictures.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [memberPictures[i], memberPictures[j]] = [memberPictures[j], memberPictures[i]];
  }
}





// Set the slideshow interval
setInterval(() => {
    if (!isSlideshowPaused) {
        updateSlideshow();
    }
}, slideshowInterval);


// Add event listeners to the navigation buttons
prevButton.addEventListener('click', () => {
    // Hide the current picture
    memberPictures[currentPictureIndex].style.opacity = 0;
    
    // Decrement the current picture index
    currentPictureIndex--;
    
    // Check if we've reached the beginning of the pictures
    if (currentPictureIndex < 0) {
        currentPictureIndex = memberPictures.length - 1;
    }
    
    // Show the previous picture
    memberPictures[currentPictureIndex].style.opacity = 1;
    
    // Update the caption
    caption.textContent = `Member ${currentPictureIndex + 1}`;
    
    });
    
    pauseButton.addEventListener('click', () => {
    // Toggle the slideshow paused state
    isSlideshowPaused = !isSlideshowPaused;
    
    // Update the pause button text
    pauseButton.textContent = isSlideshowPaused ? 'Play' : 'Pause';
    
    });
    
    nextButton.addEventListener('click', () => {
    // Update the slideshow
    updateSlideshow();
    });
    
    // Add event listener to the gallery slideshow
    gallerySlideshow.addEventListener('mouseover', () => {
    // Pause the slideshow on mouseover
    isSlideshowPaused = true;
    });
    
    gallerySlideshow.addEventListener('mouseout', () => {
    // Resume the slideshow on mouseout
    isSlideshowPaused = false;
    });
    
    // Initialize the slideshow
    updateSlideshow();


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
    const currentProfileElement = document.getElementById(`profile-${currentProfile}`);
    currentProfileElement.classList.add('active');
  }
  

  const photoUploadForm = document.getElementById('photo-upload-form');
const photoUploadButton = document.getElementById('photo-upload-button');
const photoUploadInput = document.getElementById('photo-upload');
const uploadStatus = document.getElementById('upload-status');

photoUploadButton.addEventListener('click', (e) => {
  e.preventDefault();
  const file = photoUploadInput.files[0];
  const formData = new FormData();
  formData.append('photo', file);

  fetch('/upload-photo', {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      uploadStatus.textContent = 'Photo uploaded successfully!';
    })
    .catch((error) => {
      uploadStatus.textContent = 'Error uploading photo: ' + error.message;
    });
});


//Server-side Code (Node.js and Express.js)


const express = require('express');
const app = express();
const multer = require('multer');

const upload = multer({ dest: './uploads/' });

app.post('/upload-photo', upload.single('photo'), (req, res) => {
  // Handle photo upload
  const photo = req.file;
  // Save photo to database or file system
  res.json({ message: 'Photo uploaded successfully!' });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});



function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
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
