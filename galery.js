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
