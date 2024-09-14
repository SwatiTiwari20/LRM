const express = require('express');
const router = express.Router();

// Simulated database for demonstration
const userCredentials = { id: 'user', password: 'user' };

// User login
router.post('/login', (req, res) => {
    const { userId, password } = req.body;
    if (userId === userCredentials.id && password === userCredentials.password) {
        // Authentication successful
        res.json({ success: true });
    } else {
        // Authentication failed
        res.json({ success: false });
    }
});

module.exports = router;
