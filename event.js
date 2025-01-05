

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
  



// Firebase Configuration
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
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

// User Authentication
const userNameElement = document.getElementById('user-name');
const signOutButton = document.getElementById('sign-out');

auth.onAuthStateChanged((user) => {
    if (user) {
        // User is signed in
        userNameElement.textContent = user.displayName || user.email;
        signOutButton.style.display = 'block';
        signOutButton.addEventListener('click', () => {
            auth.signOut().then(() => {
                // Sign-out successful.
                console.log('Signed out');
                userNameElement.textContent = '';
                signOutButton.style.display = 'none';
            }).catch((error) => {
                // An error happened.
                console.error('Error signing out:', error);
            });
        });
    } else {
        // User is signed out
        userNameElement.textContent = '';
        signOutButton.style.display = 'none';
    }
});

// Initialize FullCalendar
const calendarEl = document.getElementById('calendar');
const calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    initialDate: new Date(),
    navLinks: true,
    editable: true,
    dayMaxEvents: true,
    events: [] // Events will be fetched from database
});

// Fetch events from Firestore and add to calendar
db.collection('events').onSnapshot((snapshot) => {
    calendar.removeAllEvents(); // Clear existing events
    snapshot.forEach((doc) => {
        const eventData = doc.data();
        calendar.addEvent({
            title: eventData.title,
            start: eventData.start,
            end: eventData.end
        });
    });
});

// Initialize birthday countdown timer
const countdownTimerEl = document.getElementById('countdown-timer');
const birthdays = []; // Birthdays will be fetched from database

// Fetch birthdays from Firestore and add to countdown timer
db.collection('users').onSnapshot((snapshot) => {
    birthdays.length = 0; // Clear existing birthdays
    snapshot.forEach((doc) => {
        const userData = doc.data();
        if (userData.dob) {
            const dob = userData.dob.toDate();
            const year = dob.getFullYear();
            const month = dob.getMonth();
            const day = dob.getDate();
            const birthdayDate = new Date(year, month, day);
            birthdays.push({
                name: userData.firstName + ' ' + userData.lastName,
                date: birthdayDate
            });
        }
    });
    updateCountdownTimer();
});

function updateCountdownTimer() {
    const now = new Date();
    const nextBirthday = birthdays.find(birthday => birthday.date > now);
    if (nextBirthday) {
        const timeLeft = nextBirthday.date - now;
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        countdownTimerEl.innerHTML = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
        setTimeout(updateCountdownTimer, 1000);
    } else {
        countdownTimerEl.innerHTML = 'No upcoming birthdays';
    }
}

// Send birthday reminders and wishes (replace console.log with your actual code)
function sendBirthdayReminders() {
    const now = new Date();
    const upcomingBirthdays = birthdays.filter(birthday => {
        const birthdayDate = new Date(birthday.date);
        const oneWeekBefore = new Date(birthdayDate.getTime() - 7 * 24 * 60 * 60 * 1000);
        const oneDayBefore = new Date(birthdayDate.getTime() - 24 * 60 * 60 * 1000);
        return now >= oneWeekBefore && now < oneDayBefore;
    });
    upcomingBirthdays.forEach(birthday => {
        // Send reminder email or notification
        console.log(`Sending birthday reminder to ${birthday.name}`);
    });
}

function sendBirthdayWishes() {
    const now = new Date();
    const todayBirthdays = birthdays.filter(birthday => {
        const birthdayDate = new Date(birthday.date);
        return now.getMonth() === birthdayDate.getMonth() && now.getDate() === birthdayDate.getDate();
    });
    todayBirthdays.forEach(birthday => {
        // Send birthday wishes email or notification
        console.log(`Sending birthday wishes to ${birthday.name}`);
    });
}

// Call functions to send reminders and wishes
sendBirthdayReminders();
sendBirthdayWishes();

// Update countdown timer every second
setInterval(updateCountdownTimer, 1000);

// Render the calendar
calendar.render();


function sendBirthdayReminders() {
    const now = new Date();
    const upcomingBirthdays = birthdays.filter(birthday => {
        const birthdayDate = new Date(birthday.date);
        const oneWeekBefore = new Date(birthdayDate.getTime() - 7 * 24 * 60 * 60 * 1000);
        const oneDayBefore = new Date(birthdayDate.getTime() - 24 * 60 * 60 * 1000);
        return now >= oneWeekBefore && now < oneDayBefore;
    });
    const remindersDiv = document.getElementById('birthday-reminders');
    remindersDiv.innerHTML = ''; // Clear previous reminders
    upcomingBirthdays.forEach(birthday => {
        const reminder = document.createElement('p');
        reminder.textContent = `Reminder: ${birthday.name}'s birthday is coming up!`;
        remindersDiv.appendChild(reminder);
    });
}
