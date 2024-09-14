// usercontroller.js
document.getElementById('userLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;

    // Send login request to server
    fetch('/api/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = 'userHomepage.html';
        } else {
            alert('Invalid credentials!');
        }
    })
    .catch(error => console.error('Error:', error));
});
