const mongoose = require('mongoose');

const membershipSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    contactAddress: {
        type: String,
        required: true
    },
    aadharCardNo: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    membershipType: {
        type: String,
        enum: ['Six Months', 'One Year', 'Two Years'],
        default: 'Six Months',
        required: true
    },
    status: {
        type: String,
        enum: ['Active', 'Inactive'],
        default: 'Active'
    },
    amountPending: {
        type: Number,
        default: 0
    }
});

const Membership = mongoose.model('Membership', membershipSchema);
module.exports = Membership;
