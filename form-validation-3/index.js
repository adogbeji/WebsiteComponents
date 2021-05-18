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


  // Email
  if (emailValue === '') {
    e.preventDefault();  // Prevents Form Submission
    // Show error message + add error class
    setErrorFor(email, 'Email cannot be blank!');
  } else if (!validateEmail(emailValue)) {
    e.preventDefault();  // Prevents Form Submission
    setErrorFor(email, 'Email is not valid!');
  } else {
    // Add success class
    setSuccessFor(email);
  }


  // Password 
  if (passwordValue === '') {
    e.preventDefault();  // Prevents Form Submission
    // Show error message + add error class
    setErrorFor(password, 'Password cannot be blank!');
  } else if (password.value.length < 6) {
    e.preventDefault();  // Prevents Form Submission
    setErrorFor(password, 'Password must be at least 6 characters!');
  } else if (password.value.length >= 20) {
    e.preventDefault();  // Prevents Form Submission
    setErrorFor(password, 'Password must be less than 20 characters!');
  } else {
    // Add success class
    setSuccessFor(password);
  }
}