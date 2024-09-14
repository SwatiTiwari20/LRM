const express = require('express');
const router = express.Router();

// Simulated database for demonstration
const adminCredentials = { id: 'adm', password: 'adm' };

// Admin login
router.post('/login', (req, res) => {
    const { adminId, password } = req.body;
    if (adminId === adminCredentials.id && password === adminCredentials.password) {
        // Authentication successful
        res.json({ success: true });
    } else {
        // Authentication failed
        res.json({ success: false });
    }
});

module.exports = router;
