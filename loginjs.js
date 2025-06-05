// loginjs.js

const form = document.getElementById('loginForm');
const errorMsg = document.getElementById('errorMsg');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  // Verificamos que los campos no estén vacíos
  if (email === '' || password === '') {
    errorMsg.textContent = 'Por favor, completa todos los campos.';
    return;
  }

  // Verificamos si los datos coinciden
  if (email === 'eva@gmail.com' && password === '1234') {
    errorMsg.textContent = '';
    alert('Inicio de sesión exitoso');
    window.location.href = 'AR.html'; // sube un nivel para salir de la carpeta
  } else {
    errorMsg.textContent = 'Correo o contraseña incorrectos.';
  }


  
});

