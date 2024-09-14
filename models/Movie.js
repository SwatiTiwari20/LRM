const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    directorName: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Available', 'Issued'],
        default: 'Available'
    },
    cost: {
        type: Number,
        required: true
    },
    procurementDate: {
        type: Date,
        required: true
    },
    serialNo: {
        type: String,
        required: true,
        unique: true
    }
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
