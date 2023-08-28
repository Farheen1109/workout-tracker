async function fetchUserLogins() {
    try {
      const response = await fetch('/dashboard');
      const data = await response.json();
  
      // Display user logins on the dashboard
      const loginList = document.getElementById('loginList');
      loginList.innerHTML = '';
      data.forEach((login) => {
        const loginTime = new Date(login.login_time).toLocaleString();
        const loginItem = document.createElement('div');
        loginItem.textContent = `${login.username} - ${loginTime}`;
        loginList.appendChild(loginItem);
      });
    } catch (err) {
      console.error('Error fetching user logins:', err);
    }
  }
  
  // Fetch user logins when the dashboard page loads
  fetchUserLogins();
  