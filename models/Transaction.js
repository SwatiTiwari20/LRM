const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    membershipId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Membership',
        required: true
    },
    itemType: {
        type: String,
        enum: ['Book', 'Movie'],
        required: true
    },
    itemId: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'itemType',
        required: true
    },
    issueDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    returnDate: {
        type: Date,
        default: null
    },
    status: {
        type: String,
        enum: ['Issued', 'Returned'],
        default: 'Issued'
    },
    fine: {
        type: Number,
        default: 0
    }
});

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;
