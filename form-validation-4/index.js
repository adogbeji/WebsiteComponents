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
}