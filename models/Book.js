const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    authorName: {
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

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
