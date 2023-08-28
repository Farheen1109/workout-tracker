async function register() {
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
    showMessage('registration completed');
  }
}


  // ... Other functions ...

async function login() {
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

    // If login is successful, redirect to the "index.html" page
    if (response.ok) {
      window.location.href = 'index1.html';
    } else {
      // If login fails, show the login message on the current page
      showMessage(data.message);
    }
  } catch (err) {
    console.error('Error during login:', err);
    showMessage('Error during login. Please try again later.');
  }
}

  // ... Existing code ...

// ... Existing code ...

  
function showMessage(message) {
  const messageElement = document.getElementById('message');
  messageElement.textContent = message;
  messageElement.classList.remove('hidden');
}
  