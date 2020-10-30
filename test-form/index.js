// jshint esversion:6

const name = document.getElementById('clientName');
const password = document.getElementById('clientPassword');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');  // displays error messages

form.addEventListener('submit', (e) => {
  let messages = [];  // Holds error messages

  if (name.value === '' || name.value == null) {
    messages.push('Name is required!');
  }

  if (password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters!');
  }

  if (password.value.length >= 20) {
    messages.push('Password must be less than 20 characters!');
  }

  if (password.value === 'password') {
    messages.push('Password cannot be set to password!');
  }

  if (messages.length > 0) {
    e.preventDefault(); // Prevents form submission only if there are errors
    errorElement.innerText = messages.join(', ');
  }
});
