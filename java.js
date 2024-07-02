document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('btnSubmit');
    submitButton.classList.remove('btn-primary');
    submitButton.classList.add('btn-primary-disabled');
    submitButton.disabled = true; // Deshabilita el botón al cargar el modal

    // Agrega un evento de clic al botón de iniciar sesión dentro del modal
    submitButton.addEventListener('click', function() {
        // Redirige al index principal
        window.location.href = 'index.html';
    });
});

function validateEmail() {
  const emailInput = document.getElementById('email');
  const emailValue = emailInput.value.trim();
  const errorMessage = document.getElementById('email-error-message');

  if (emailValue.includes('@')) {
    emailInput.classList.remove('is-invalid');
    errorMessage.classList.add('d-none');
  } else {
    emailInput.classList.add('is-invalid');
    errorMessage.classList.remove('d-none');
  }

  validateEmailAndPassword();
}

function validateEmailAndPassword() {
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('pass');
  const submitButton = document.getElementById('btnSubmit');

  const emailValid = emailInput.value.trim() !== '';
  const passwordValid = passwordInput.value.trim() !== '';

  if (emailValid && passwordValid) {
    submitButton.classList.remove('btn-primary-disabled');
    submitButton.classList.add('btn-primary');
    submitButton.disabled = false;
  } else {
    submitButton.classList.remove('btn-primary');
    submitButton.classList.add('btn-primary-disabled');
    submitButton.disabled = true;
  }
}
