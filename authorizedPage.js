// Check if the user is logged in
let isLoggedIn = false;

document.getElementById('downloadButton').addEventListener('click', function() {
  if (!isLoggedIn) {
    // Show unauthorized warning popup
    alert('You are not authorized to download. Please log in to continue.');
    
    // Show the login modal after 1 second
    setTimeout(function() {
      document.getElementById('loginModal').style.display = 'block';
    }, 1000);
  } else {
    // Redirect to https://www.pup.edu.ph/ after downloading the file
    window.location.href = 'https://www.pup.edu.ph/';
  }
});




// Close the modal when the close button is clicked
document.getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('loginModal').style.display = 'none';
  });
  
  // Close the modal when the user clicks outside of it
  window.onclick = function(event) {
    if (event.target == document.getElementById('loginModal')) {
      document.getElementById('loginModal').style.display = 'none';
    }
  }
  
  // Handle form submission (login)
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // For now, allow any input username and password
    if (username && password) {
      alert('Login successful! You can now download the file.');
      isLoggedIn = true;
      document.getElementById('loginModal').style.display = 'none';
      // Redirect to download file
      // window.location.href = 'path_to_download_file';

        


    } else {
      alert('Please enter a username and password.');
    }
  });


  document.getElementById('backButton').addEventListener('click', function() {
    window.location.href = 'index.html';
  });