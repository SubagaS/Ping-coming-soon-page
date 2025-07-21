const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const emptyError = document.querySelector('.empty-error');
const invalidEmailError = document.querySelector('.invalid-email-error');
const successMessage = document.querySelector('.success-message');

function showMessage(e) {
  e.preventDefault();
  if (emailInput.value === '') {
    emptyError.classList.remove('hidden');
    emailInput.classList.add('invalid');
  } else if (!emailInput.checkValidity()) {
    invalidEmailError.classList.remove('hidden');
    emptyError.classList.add('hidden');
    emailInput.classList.add('invalid');
  } else {
    successMessage.classList.remove('hidden');
    emptyError.classList.add('hidden');
    invalidEmailError.classList.add('hidden');
    emailInput.classList.add('valid');
  }
}

form.addEventListener('submit', showMessage);
