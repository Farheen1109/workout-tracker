document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
  
    loginForm.addEventListener('submit', async function(event) {
      event.preventDefault();
  
      const username = document.getElementById('loginUsername').value;
      const password = document.getElementById('loginPassword').value;
  
      try {
        const response = await fetch('/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          window.location.href = 'index1.html'; // Redirect on successful login
        } else {
          showMessage(data.message);
        }
      } catch (err) {
        console.error('Error during login:', err);
        showMessage('Error during login. Please try again later.');
      }
    });
  });
  
  function showMessage(message) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
    messageElement.classList.remove('hidden');
  }
  