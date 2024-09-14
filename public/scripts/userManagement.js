document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userManagementForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const userType = document.querySelector('input[name="userType"]:checked').value;
        const name = document.getElementById('name').value;
        const isActive = document.getElementById('status').checked;
        const isAdmin = document.getElementById('admin').checked;

        // Validate all fields
        if (!name) {
            alert('Name is required.');
            return;
        }

        // Handle form submission, e.g., send data to the server
        console.log({
            userType,
            name,
            status: isActive ? 'Active' : 'Inactive',
            admin: isAdmin ? 'Admin' : 'Not Admin'
        });

        // For demonstration purposes, redirect or show success message
        alert('User details updated successfully!');
        goHome();
    });
});

function cancel() {
    goHome();
}

function goHome() {
    const userType = localStorage.getItem('userType');
    if (userType === 'admin') {
        window.location.href = 'adminHomepage.html';
    } else {
        window.location.href = 'userHomepage.html';
    }
}

function logout() {
    // Clear any stored user information and redirect to login
    localStorage.removeItem('userType');
    window.location.href = 'userLogin.html';
}
