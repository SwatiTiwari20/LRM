const data = {
    memberships: [
        { membershipId: 'M001', name: 'Member One', contactNumber: '1234567890', contactAddress: 'Address A', aadhar: '1234 5678 9012', startDate: '2023-01-01', endDate: '2023-12-31', status: 'Active', amountPending: '$0' }
        // Add more membership entries here
    ],
    books: [
        { serialNo: 'B001', name: 'Book One', author: 'Author A', category: 'Science', status: 'Available', cost: '$20', procDate: '2023-01-01' }
        // Add more book entries here
    ],
    movies: [
        { serialNo: 'M001', name: 'Movie One', author: 'Director A', category: 'Action', status: 'Available', cost: '$15', procDate: '2023-02-01' }
        // Add more movie entries here
    ],
    users: [
        { userId: 'U001', userName: 'User One', userRole: 'User' }
        // Add more user entries here
    ]
};

function fetchTableData(type) {
    fetch(`http://localhost:3000/${type}`)
        .then(response => response.json())
        .then(data => {
            // Clear the existing content
            const container = document.getElementById('tableContainer');
            container.innerHTML = ''; 

            // Create and populate the table
            const table = document.createElement('table');
            const thead = document.createElement('thead');
            const tbody = document.createElement('tbody');

            let headers = [];
            if (type === 'memberships') {
                headers = ['Membership Id', 'Name of Member', 'Contact Number', 'Contact Address', 'Aadhar Card No', 'Start Date of Membership', 'End Date of Membership', 'Status', 'Amount Pending'];
            } else if (type === 'books') {
                headers = ['Serial No', 'Name of Book', 'Author Name', 'Category', 'Status', 'Cost', 'Procurement Date'];
            } else if (type === 'movies') {
                headers = ['Serial No', 'Name of Movie', 'Author Name', 'Category', 'Status', 'Cost', 'Procurement Date'];
            } else if (type === 'users') {
                headers = ['User ID', 'Name', 'Role'];
            }

            const trHead = document.createElement('tr');
            headers.forEach(header => {
                const th = document.createElement('th');
                th.textContent = header;
                trHead.appendChild(th);
            });
            thead.appendChild(trHead);

            data.forEach(item => {
                const tr = document.createElement('tr');
                headers.forEach(header => {
                    const td = document.createElement('td');
                    td.textContent = item[header.replace(/\s+/g, '').toLowerCase()] || '';
                    tr.appendChild(td);
                });
                tbody.appendChild(tr);
            });

            table.appendChild(thead);
            table.appendChild(tbody);
            container.appendChild(table);

            // Add Back button
            const backButton = document.createElement('button');
            backButton.textContent = 'Back';
            backButton.classList.add('back');
            backButton.onclick = () => {
                container.innerHTML = ''; 
                showMaintenanceMenu();
            };
            container.appendChild(backButton);
        })
        .catch(error => console.error('Error fetching data:', error));
}


function showMaintenanceMenu() {
    document.querySelector('.container').innerHTML = `
        <h1>Maintenance</h1>
        <button onclick="goHome()">Home</button>
        
        <div class="section">
            <h3>Membership: Add, Update</h3>
            <button onclick="showTable('memberships')">View Memberships</button>
            <form id="membershipForm">
                <h4>Add/Update Membership</h4>
                <label for="membershipId">Membership Id:</label>
                <input type="text" id="membershipId" required>
                <label for="memberName">Name:</label>
                <input type="text" id="memberName" required>
                <label for="contactNumber">Contact Number:</label>
                <input type="text" id="contactNumber" required>
                <label for="contactAddress">Contact Address:</label>
                <input type="text" id="contactAddress" required>
                <label for="aadhar">Aadhar Card No:</label>
                <input type="text" id="aadhar" required>
                <label for="startDate">Start Date:</label>
                <input type="date" id="startDate" required>
                <label for="endDate">End Date:</label>
                <input type="date" id="endDate" required>
                <label for="status">Status:</label>
                <select id="status" required>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select>
                <label for="amountPending">Amount Pending:</label>
                <input type="text" id="amountPending">
                <button type="button" onclick="submitMembership()">Submit</button>
            </form>
        </div>

        <div class="section">
            <h3>Books/Movies: Add, Update</h3>
            <button onclick="showTable('books')">View Books</button>
            <button onclick="showTable('movies')">View Movies</button>
            <form id="bookMovieForm">
                <h4>Add/Update Book/Movie</h4>
                <label for="serialNo">Serial No:</label>
                <input type="text" id="serialNo" required>
                <label for="name">Name:</label>
                <input type="text" id="name" required>
                <label for="author">Author/Director:</label>
                <input type="text" id="author" required>
                <label for="category">Category:</label>
                <input type="text" id="category" required>
                <label for="status">Status:</label>
                <select id="status" required>
                    <option value="Available">Available</option>
                    <option value="Checked Out">Checked Out</option>
                </select>
                <label for="cost">Cost:</label>
                <input type="text" id="cost" required>
                <label for="procDate">Procurement Date:</label>
                <input type="date" id="procDate" required>
                <button type="button" onclick="submitBookMovie()">Submit</button>
            </form>
        </div>

        <div class="section">
            <h3>User Management: Add, Update</h3>
            <button onclick="showTable('users')">View Users</button>
            <form id="userForm">
                <h4>Add/Update User</h4>
                <label for="userId">User ID:</label>
                <input type="text" id="userId" required>
                <label for="userName">Name:</label>
                <input type="text" id="userName" required>
                <label for="userRole">Role:</label>
                <select id="userRole" required>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                </select>
                <button type="button" onclick="submitUser()">Submit</button>
            </form>
        </div>

        <button class="logout" onclick="window.location.href='userLogin.html'">Log Out</button>
        <div id="tableContainer"></div>
    `;
}

function submitMembership() {
    const membership = {
        membershipId: document.getElementById('membershipId').value,
        name: document.getElementById('memberName').value,
        contactNumber: document.getElementById('contactNumber').value,
        contactAddress: document.getElementById('contactAddress').value,
        aadhar: document.getElementById('aadhar').value,
        startDate: document.getElementById('startDate').value,
        endDate: document.getElementById('endDate').value,
        status: document.getElementById('status').value,
        amountPending: document.getElementById('amountPending').value
    };

    fetch('http://localhost:3000/memberships', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(membership)
    })
    .then(response => response.text())
    .then(message => alert(message))
    .catch(error => console.error('Error submitting membership:', error));
}

function submitBookMovie() {
    const isBook = document.querySelector('#bookMovieForm button').textContent.includes('Book');
    const item = {
        serialNo: document.getElementById('serialNo').value,
        name: document.getElementById('name').value,
        author: document.getElementById('author').value,
        category: document.getElementById('category').value,
        status: document.getElementById('status').value,
        cost: document.getElementById('cost').value,
        procDate: document.getElementById('procDate').value
    };

    const url = isBook ? 'http://localhost:3000/books' : 'http://localhost:3000/movies';
    
    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
    })
    .then(response => response.text())
    .then(message => alert(message))
    .catch(error => console.error('Error submitting book/movie:', error));
}

function submitUser() {
    const user = {
        userId: document.getElementById('userId').value,
        userName: document.getElementById('userName').value,
        userRole: document.getElementById('userRole').value
    };

    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    })
    .then(response => response.text())
    .then(message => alert(message))
    .catch(error => console.error('Error submitting user:', error));
}


function goHome() {
    if (localStorage.getItem('userType') === 'admin') {
        window.location.href = 'adminHomepage.html';
    } else {
        window.location.href = 'userHomepage.html';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showMaintenanceMenu();
});
