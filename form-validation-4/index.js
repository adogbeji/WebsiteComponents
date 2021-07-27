'use strict';


const form = document.getElementById('form');
const email = document.getElementById('clientEmail');
const password_1 = document.getElementById('clientPassword_1');
const password_2 = document.getElementById('clientPassword_2');



form.addEventListener('submit', (e) => {
    checkInputs(e);  // Function that checks form inputs
});

function checkInputs(e) {
    const emailValue = email.value.trim();
    const firstPasswordValue = password_1.value.trim();
    const secondPasswordValue = password_2.value.trim();


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


    // Password 1
    if (firstPasswordValue === '') {
      e.preventDefault();  // Prevents Form Submission
      // Show error message + add error class
      setErrorFor(password_1, 'Password cannot be blank!');
    } else if (password_1.value.length < 6) {
      e.preventDefault();  // Prevents Form Submission
      setErrorFor(password_1, 'Password must be at least 6 characters!');
    } else if (password_1.value.length >= 20) {
      e.preventDefault();  // Prevents Form Submission
      setErrorFor(password_1, 'Password must be less than 20 characters!');
    } else {
      // Add success class
      setSuccessFor(password_1);
    }


    // Password 2
    if (secondPasswordValue === '') {
      e.preventDefault();  // Prevents Form Submission
      // Show error message + add error class
      setErrorFor(password_2, 'Please confirm password!');
    } else if (firstPasswordValue !== secondPasswordValue) {
      e.preventDefault();  // Prevents Form Submission
      setErrorFor(password_2, 'Passwords do not match!');
    } else {
      // Add success class
      setSuccessFor(password_2);
    }
}