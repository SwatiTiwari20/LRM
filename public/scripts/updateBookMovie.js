document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('updateBookMovieForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const itemType = document.querySelector('input[name="itemType"]:checked').value;
        const itemName = document.getElementById('itemName').value;
        const serialNo = document.getElementById('serialNo').value;
        const status = document.getElementById('status').value;
        const procurementDate = document.getElementById('procurementDate').value;

        // Validate all fields
        if (!itemName || !serialNo || !status || !procurementDate) {
            alert('All fields are required.');
            return;
        }

        // Handle form submission, e.g., send data to the server
        console.log({
            itemType,
            itemName,
            serialNo,
            status,
            procurementDate
        });

        // For demonstration purposes, redirect or show success message
        alert('Book/Movie updated successfully!');
        goHome();
    });

    // Example function to populate the itemName dropdown (can be extended based on data source)
    function populateItemNames() {
        const itemNameSelect = document.getElementById('itemName');
        // Fetch item names from the server or predefined data
        // Example options (replace with actual data fetching logic)
        const options = [
            { value: 'book1', text: 'Book One' },
            { value: 'movie1', text: 'Movie One' }
        ];
        options.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option.value;
            opt.textContent = option.text;
            itemNameSelect.appendChild(opt);
        });
    }

    populateItemNames(); // Populate item names when the page loads
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
