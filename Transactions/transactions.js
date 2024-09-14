document.getElementById('checkBookForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const bookCode = document.getElementById('bookCode').value;
    const category = document.getElementById('category').value;

    if (!bookCode && !category) {
        document.getElementById('availabilityMessage').innerText = "Please fill in either the Book Code or Category.";
        return;
    }
    document.getElementById('availabilityMessage').innerText = "Book is available!";
});

document.getElementById('issueBookForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const bookName = document.getElementById('bookName').value;
    const issueDate = document.getElementById('issueDate').value;
    const returnDate = document.getElementById('returnDate').value;
    
    if (!bookName || !issueDate) {
        document.getElementById('issueMessage').innerText = "Please fill in all required fields.";
        return;
    }

    const issueDateObj = new Date(issueDate);
    const today = new Date();
    if (issueDateObj < today) {
        document.getElementById('issueMessage').innerText = "Issue date cannot be earlier than today.";
        return;
    }

    const maxReturnDate = new Date(issueDateObj);
    maxReturnDate.setDate(maxReturnDate.getDate() + 15);
    if (new Date(returnDate) > maxReturnDate) {
        document.getElementById('issueMessage').innerText = "Return date cannot be more than 15 days after the issue date.";
        return;
    }

    document.getElementById('issueMessage').innerText = "Book issued successfully!";
});

document.getElementById('returnBookForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const returnBookName = document.getElementById('returnBookName').value;
    const serialNo = document.getElementById('serialNo').value;

    if (!returnBookName || !serialNo) {
        document.getElementById('returnMessage').innerText = "Please fill in all required fields.";
        return;
    }

    document.getElementById('returnMessage').innerText = "Book returned successfully!";
});

document.getElementById('payFineForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const finePaid = document.getElementById('finePaid').checked;
    const fineAmount = parseFloat(document.getElementById('fineAmount').value || 0);

    if (fineAmount > 0 && !finePaid) {
        document.getElementById('fineMessage').innerText = "Please pay the fine to complete the transaction.";
        return;
    }

    document.getElementById('fineMessage').innerText = "Fine payment successful!";
});

function goHome() {
    // Redirects based on user type, this could be set in session or localStorage
    if (localStorage.getItem('userType') === 'admin') {
        window.location.href = 'adminHomepage.html';
    } else {
        window.location.href = 'userHomepage.html';
    }
}
