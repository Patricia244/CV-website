const mongoose = require("mongoose")

const adminScheme = new mongoose.Schema({
   userName: { type: String, required: true },
   password: { type: String, required: true }
})

module.exports = mongoose.model('AdminModel',adminScheme)