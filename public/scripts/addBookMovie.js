document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('addBookMovieForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const itemType = document.querySelector('input[name="itemType"]:checked').value;
        const itemName = document.getElementById('itemName').value;
        const procurementDate = document.getElementById('procurementDate').value;
        const quantity = document.getElementById('quantity').value;

        // Validate all fields
        if (!itemName || !procurementDate || !quantity) {
            alert('All fields are required.');
            return;
        }

        // Handle form submission, e.g., send data to the server
        console.log({
            itemType,
            itemName,
            procurementDate,
            quantity
        });

        // For demonstration purposes, redirect or show success message
        alert('Book/Movie added successfully!');
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
