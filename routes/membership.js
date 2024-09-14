const express = require('express');
const router = express.Router();
const Membership = require('../models/Membership');

// Add Membership
router.post('/add', async (req, res) => {
    const newMembership = new Membership(req.body);
    try {
        await newMembership.save();
        res.status(201).json(newMembership);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Update Membership
router.put('/update/:id', async (req, res) => {
    try {
        const membership = await Membership.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(membership);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Fetch all memberships
router.get('/', async (req, res) => {
    try {
        const memberships = await Membership.find();
        res.json(memberships);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
