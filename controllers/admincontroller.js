// admincontroller.js
document.getElementById('adminLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const adminId = document.getElementById('adminId').value;
    const password = document.getElementById('password').value;

    // Send login request to server
    fetch('/api/admin/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ adminId, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = 'adminHomepage.html';
        } else {
            alert('Invalid credentials!');
        }
    })
    .catch(error => console.error('Error:', error));
});
