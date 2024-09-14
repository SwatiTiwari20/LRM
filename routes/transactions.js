const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

// Add Transaction
router.post('/add', async (req, res) => {
    const newTransaction = new Transaction(req.body);
    try {
        await newTransaction.save();
        res.status(201).json(newTransaction);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Fetch all transactions
router.get('/', async (req, res) => {
    try {
        const transactions = await Transaction.find();
        res.json(transactions);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
