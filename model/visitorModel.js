const mongoose = require("mongoose")

const visitorScheme = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true }

})

module.exports = mongoose.model('VisitorsModel',visitorScheme)