// jshint esversion:6

const form = document.getElementById('form');
const yourName = document.getElementById('clientName');
const email = document.getElementById('clientEmail');
const password_1 = document.getElementById('clientPassword1');
const password_2 = document.getElementById('clientPassword2');

form.addEventListener('submit', (e) => {
  checkInputs(e);  // Function that checks form inputs
});

function checkInputs(e) {
  // Get values from inputs
  const nameValue = yourName.value.trim();
  const emailValue = email.value.trim();
  const firstPasswordValue = password_1.value.trim();
  const secondPasswordValue = password_2.value.trim();


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

function setErrorFor(input, message) {
  const formGroup = input.parentElement;  // Div with class '.form-group'
  const smallTag = formGroup.querySelector('.error-message');

  // Add error message inside small tag
  smallTag.style.display = 'inline-block';  // Allows block-element behaviour but remains inline
  smallTag.innerText = message;
  setTimeout(removeMessage, 2500);  // Removes error message after 2.5s

  // Add error class
  formGroup.className = 'form-group error';
  setTimeout(removeClass, 2500);  // Removes error class after 2.5s

  function removeMessage() {
    smallTag.style.display = 'none';  // Hides small tag & removes it from DOM
    smallTag.innerText = '';  // Removes error message text
  }

  function removeClass() {
    formGroup.className = 'form-group';
  }
}

function setSuccessFor(input) {
  const formGroup = input.parentElement;  // Div with class '.form-group'

  formGroup.className = 'form-group success';
  setTimeout(removeClass, 2500);  // Removes success class after 2.5s

  function removeClass() {
   formGroup.className = 'form-group';
 }
}


// Special Function to validate email - returns true or false
function validateEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
