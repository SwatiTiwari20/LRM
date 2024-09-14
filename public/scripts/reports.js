const data = {
    books: [
        { serialNo: 'B001', name: 'Book One', author: 'Author A', category: 'Science', status: 'Available', cost: '$20', procDate: '2023-01-01' },
        { serialNo: 'B002', name: 'Book Two', author: 'Author B', category: 'Fiction', status: 'Checked Out', cost: '$25', procDate: '2023-02-01' }
        // Add more book entries here
    ],
    movies: [
        { serialNo: 'M001', name: 'Movie One', author: 'Director A', category: 'Action', status: 'Available', cost: '$15', procDate: '2023-02-01' },
        { serialNo: 'M002', name: 'Movie Two', author: 'Director B', category: 'Drama', status: 'Checked Out', cost: '$18', procDate: '2023-03-01' }
        // Add more movie entries here
    ],
    memberships: [
        { membershipId: 'M001', name: 'Member One', contactNumber: '1234567890', contactAddress: 'Address A', aadhar: '1234 5678 9012', startDate: '2023-01-01', endDate: '2023-12-31', status: 'Active', amountPending: '$0' },
        { membershipId: 'M002', name: 'Member Two', contactNumber: '0987654321', contactAddress: 'Address B', aadhar: '2109 8765 4321', startDate: '2023-06-01', endDate: '2024-05-31', status: 'Inactive', amountPending: '$10' }
        // Add more membership entries here
    ],
    activeIssues: [
        { serialNo: 'B001', name: 'Book One', membershipId: 'M001', issueDate: '2023-03-01', returnDate: '2023-03-15' },
        { serialNo: 'M001', name: 'Movie One', membershipId: 'M002', issueDate: '2023-03-05', returnDate: '2023-03-20' }
        // Add more active issues here
    ],
    overdueReturns: [
        { serialNo: 'B002', name: 'Book Two', membershipId: 'M002', issueDate: '2023-02-01', returnDate: '2023-02-15', fine: '$5' },
        { serialNo: 'M002', name: 'Movie Two', membershipId: 'M001', issueDate: '2023-01-20', returnDate: '2023-01-25', fine: '$3' }
        // Add more overdue returns here
    ],
    issueRequests: [
        { membershipId: 'M001', name: 'Book One', requestedDate: '2023-03-01', fulfilledDate: '2023-03-02' },
        { membershipId: 'M002', name: 'Movie Two', requestedDate: '2023-02-10', fulfilledDate: '2023-02-12' }
        // Add more issue requests here
    ]
};

function showTable(type) {
    const container = document.getElementById('tableContainer');
    container.innerHTML = ''; // Clear existing content

    const tableData = data[type];
    if (!tableData) return;

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // Define table headers based on the type of report
    let headers = [];
    if (type === 'books') {
        headers = ['Serial No', 'Name of Book', 'Author Name', 'Category', 'Status', 'Cost', 'Procurement Date'];
    } else if (type === 'movies') {
        headers = ['Serial No', 'Name of Movie', 'Author Name', 'Category', 'Status', 'Cost', 'Procurement Date'];
    } else if (type === 'memberships') {
        headers = ['Membership Id', 'Name of Member', 'Contact Number', 'Contact Address', 'Aadhar Card No', 'Start Date of Membership', 'End Date of Membership', 'Status', 'Amount Pending'];
    } else if (type === 'activeIssues') {
        headers = ['Serial No Book/Movie', 'Name of Book/Movie', 'Membership Id', 'Date of Issue', 'Date of Return'];
    } else if (type === 'overdueReturns') {
        headers = ['Serial No Book', 'Name of Book', 'Membership Id', 'Date of Issue', 'Date of Return', 'Fine Calculations'];
    } else if (type === 'issueRequests') {
        headers = ['Membership Id', 'Name of Book/Movie', 'Requested Date', 'Request Fulfilled Date'];
    }

    // Create table header row
    const trHead = document.createElement('tr');
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        trHead.appendChild(th);
    });
    thead.appendChild(trHead);

    // Create table body rows
    tableData.forEach(item => {
        const tr = document.createElement('tr');
        headers.forEach(header => {
            const td = document.createElement('td');
            // Map headers to data properties
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
        container.innerHTML = ''; // Clear table content
        showReportsMenu(); // Show reports menu
    };
    container.appendChild(backButton);
}

function showReportsMenu() {
    document.querySelector('.reports-container').innerHTML = `
        <h2>Reports</h2>
        <button onclick="goHome()">Back to Home</button>
        <h3>Available Reports</h3>
        <ul>
            <li><button onclick="showTable('books')">Master List of Books</button></li>
            <li><button onclick="showTable('movies')">Master List of Movies</button></li>
            <li><button onclick="showTable('memberships')">Master List of Memberships</button></li>
            <li><button onclick="showTable('activeIssues')">Active Issues</button></li>
            <li><button onclick="showTable('overdueReturns')">Overdue Returns</button></li>
            <li><button onclick="showTable('issueRequests')">Pending Issue Requests</button></li>
        </ul>
        <button class="logout" onclick="window.location.href='userLogin.html'">Log Out</button>
        <div id="tableContainer"></div>
    `;
}

function goHome() {
    if (localStorage.getItem('userType') === 'admin') {
        window.location.href = 'adminHomepage.html';
    } else {
        window.location.href = 'userHomepage.html';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showReportsMenu(); // Display the reports menu when the page loads
});
