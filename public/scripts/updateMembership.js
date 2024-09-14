document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('updateMembershipForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const membershipNumber = document.getElementById('membershipNumber').value;
        const startDate = document.getElementById('startDate').value;
        const endDate = document.getElementById('endDate').value;
        const membershipExtension = document.querySelector('input[name="membershipExtension"]:checked').value;
        const membershipRemoval = document.querySelector('input[name="membershipRemoval"]:checked')?.value;

        // Validate all fields
        if (!membershipNumber || !startDate || !endDate) {
            alert('All fields are required.');
            return;
        }

        if (!membershipExtension) {
            alert('Please select a membership extension option.');
            return;
        }

        // Handle form submission, e.g., send data to the server
        console.log({
            membershipNumber,
            startDate,
            endDate,
            membershipExtension,
            membershipRemoval
        });

        // For demonstration purposes, redirect or show success message
        alert('Membership updated successfully!');
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
