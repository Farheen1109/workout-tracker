document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
  
    registerForm.addEventListener('submit', async function(event) {
      event.preventDefault();
  
      const username = document.getElementById('registerUsername').value;
      const password = document.getElementById('registerPassword').value;
  
      try {
        const response = await fetch('/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
  
        const data = await response.json();
        showMessage(data.message);
      } catch (err) {
        console.error('Error during registration:', err);
        showMessage('Error during registration. Please try again later.');
      }
    });
  });
  
  function showMessage(message) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
    messageElement.classList.remove('hidden');
  }
  