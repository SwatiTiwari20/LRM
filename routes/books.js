const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// Add Book
router.post('/add', async (req, res) => {
    const newBook = new Book(req.body);
    try {
        await newBook.save();
        res.status(201).json(newBook);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Update Book
router.put('/update/:id', async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(book);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Fetch all books
router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
