const mongoose = require('mongoose');

const visitorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true }
});

// Create model from schema
const Visitor = mongoose.model('Visitor', visitorSchema);

module.exports = Visitor;
