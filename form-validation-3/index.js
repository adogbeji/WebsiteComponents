'use strict';


const form = document.getElementById('form');
const yourName = document.getElementById('clientName');
const email = document.getElementById('clientEmail');
const password = document.getElementById('clientPassword');


form.addEventListener('submit', (e) => {
  checkInputs(e);  // Function that checks form inputs
});


function checkInputs(e) {
  // Get values from inputs
  const nameValue = yourName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();


  // Name
  if (nameValue === '') {
    e.preventDefault();  // Prevents Form Submission
    // Show error message + add error class
    setErrorFor(yourName, 'Name cannot be blank!');
  } else {
    // Add success class
    setSuccessFor(yourName);
  }
}