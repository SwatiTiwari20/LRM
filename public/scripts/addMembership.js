document.getElementById('membershipForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for validation

    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const contactName = document.getElementById('contactName').value;
    const contactAddress = document.getElementById('contactAddress').value;
    const aadhar = document.getElementById('aadhar').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const duration = document.querySelector('input[name="duration"]:checked').value;

    // Validate form fields
    if (!firstName || !lastName || !contactName || !contactAddress || !aadhar || !startDate || !endDate) {
        alert('Please fill in all required fields.');
        return;
    }

    // Add logic to handle form data, such as sending it to the server
    console.log({
        firstName,
        lastName,
        contactName,
        contactAddress,
        aadhar,
        startDate,
        endDate,
        duration
    });

    // Redirect or show success message
    alert('Membership added successfully!');
    window.location.href = 'maintenance.html'; // Redirect after successful addition
});

document.getElementById('cancelBtn').addEventListener('click', function() {
    window.location.href = 'maintenance.html'; // Redirect to the maintenance page
});
