


// Get elements
const countdownTimer = document.getElementById('countdown-timer');
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const christmasAlertGreetings = document.getElementById('christmas-alert-greetings');
const christmasMessage = document.getElementById('christmas-message');
const newYearAlertGreetings = document.getElementById('new-year-alert-greetings');
const newYearMessage = document.getElementById('new-year-message');
const memberNameElement = document.getElementById('member-name');
const prayerfulWordsElement = document.getElementById('prayerful-words');

// Set dates
const christmasDate = new Date('December 25, 2024 00:00:00');
const newYearDate = new Date('January 1, 2025 00:00:00');

// Get member's name from local storage
const memberName = localStorage.getItem('memberName') || 'DalyaCoast';

// Display member's name and prayerful words
memberNameElement.innerHTML = memberName;
prayerfulWordsElement.innerHTML = 'May God bless you and your family this holiday season!';


function updateCountdownTimer() {
  const currentTime = new Date();
  const timeDifference = christmasDate.getTime() - currentTime.getTime();

  if (timeDifference > 0) {
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    daysElement.textContent = `Days: ${days}`;
    hoursElement.textContent = `Hours: ${hours}`;
    minutesElement.textContent = `Minutes: ${minutes}`;
    secondsElement.textContent = `Seconds: ${seconds}`;
  } else {
    daysElement.textContent = 'Days: 0';
    hoursElement.textContent = 'Hours: 0';
    minutesElement.textContent = 'Minutes: 0';
    secondsElement.textContent = 'Seconds: 0';
  }
}

setInterval(updateCountdownTimer, 1000);


// Check if Christmas has arrived
if (christmasDate.getTime() - new Date().getTime() <= 0) {
  christmasAlertGreetings.style.display = 'block';
  christmasMessage.innerHTML = `Merry Christmas, ${memberName}! You're amazing!!!`;
  setTimeout(() => {
    christmasAlertGreetings.style.display = 'none';
  }, 5000);
}

// Update the New Year countdown timer every second
function updateNewYearCountdownTimer() {
  const currentTime = new Date();
  const timeDifference = newYearDate.getTime() - currentTime.getTime();

  if (timeDifference > 0) {
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Update the New Year countdown display
    newYearMessage.innerHTML = `Time left until New Year: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  } else {
    newYearMessage.innerHTML = 'Happy New Year!';
  }
}

setInterval(updateNewYearCountdownTimer, 1000);

// Add notification pop-up function
function showNotification(title, message) {
  if ('Notification' in window) {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        const notification = new Notification(title, { body: message });
        setTimeout(() => {
          notification.close();
        }, 5000);
      } else if (permission === 'denied') {
        console.log('Notification permission denied.');
      }
    });
  }
}


//nav bar 
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "gold";
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


function updateCountdownTimer() {
  const currentTime = new Date();
  let timeDifference;

  timeDifference = newYearDate.getTime() - currentTime.getTime();

  if (timeDifference > 0) {
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    daysElement.textContent = `Days: ${days}`;
    hoursElement.textContent = `Hours: ${hours}`;
    minutesElement.textContent = `Minutes: ${minutes}`;
    secondsElement.textContent = `Seconds: ${seconds}`;
  } else {
    daysElement.textContent = 'Days: 0';
    hoursElement.textContent = 'Hours: 0';
    minutesElement.textContent = 'Minutes: 0';
    secondsElement.textContent = 'Seconds: 0';

    newYearAlertGreetings.style.display = 'block';
    newYearMessage.innerHTML = `Happy New Year, ${memberName}!`;
    setTimeout(() => {
      newYearAlertGreetings.style.display = 'hidden';
    }, 5000); // hide after 5 seconds
  }
}

setInterval(updateCountdownTimer, 1000); 


// autocomplete country form
function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

/*An array containing all the country names in the world:*/
var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("myInput"), countries);



// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDWDNTjrHPguqaLVN9k0HtNQlLq7XGRZ-8',
  authDomain: 'matured-minds.firebaseapp.com',
  projectId: 'matured-minds',
};

firebase.initializeApp(firebaseConfig);

// Get the sign-up form
const signUpForm = document.getElementById('sign-up-form');

// Handle form submission
signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get the form data
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('psw-repeat').value;
  const firstName = document.getElementById('fname').value;
  const lastName = document.getElementById('lname').value;
  const telephone = document.getElementById('telephone').value;
  const dob = document.getElementById('dob').value;

  // Validate the form data
  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  // Create a new user
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Get the user ID
      const userId = userCredential.user.uid;

      // Create a new user document
      firebase.firestore().collection('users').doc(userId).set({
        username,
        email,
        firstName,
        lastName,
        telephone,
        dob,
      })
        .then(() => {
          console.log('User registered successfully');
          alert('User registered successfully');
        })
        .catch((error) => {
          console.error('Error registering user:', error);
          alert('Error registering user');
        });
    })
    .catch((error) => {
      console.error('Error creating user:', error);
      alert('Error creating user');
    });
});

