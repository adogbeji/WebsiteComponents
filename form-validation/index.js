// jshint esversion:6

const form = document.getElementById('form');
const userName = document.getElementById('clientUsername');
const email = document.getElementById('clientEmail');
const password_1 = document.getElementById('clientPassword1');
const password_2 = document.getElementById('clientPassword2');

form.addEventListener('submit', (e) => {
  e.preventDefault();  // Prevents Form Submission

  checkInputs();  // Function that checks form inputs
});

function checkInputs() {
  // Get values from inputs
  const userNameValue = userName.value.trim();  // trim() method removes whitespace from both sides of the string
  const emailValue = email.value.trim();
  const firstPasswordValue = password_1.value.trim();
  const secondPasswordValue = password_2.value.trim();

  if (userNameValue === '') {
    // Show error message + add error class
    setErrorFor(userName, 'Username cannot be blank!');
  } else {
    // Add success class
    setSuccessFor(userName);
  }
}

function setErrorFor(input, message) {
  const formGroup = input.parentElement;  // Div with class '.form-group'
  const smallTag = document.querySelector('.error-message');

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

  // Add success class
  formGroup.className = 'form-group success';
  setTimeout(removeClass, 2500);  // Removes success class after 2.5s

  function removeClass() {
    formGroup.className = 'form-group';
  }
}
