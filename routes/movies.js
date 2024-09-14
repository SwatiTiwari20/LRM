const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

// Add Movie
router.post('/add', async (req, res) => {
    const newMovie = new Movie(req.body);
    try {
        await newMovie.save();
        res.status(201).json(newMovie);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Update Movie
router.put('/update/:id', async (req, res) => {
    try {
        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(movie);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Fetch all movies
router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
