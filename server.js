const express = require('express')
const app = express()
const bodyParser = require("body-parser")
require("dotenv").config()
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);
const connection = mongoose.connection;

connection.once('open', function() {
console.log("connected to the database")
}).on('error', function(error) {
    console.log('Connect Error: ', error);
});


 app.use(express.json())
 app.use(bodyParser.urlencoded({extended:true}))
 const visitorsRoute  = require('./routes/visitors.js')
 app.use('/visitors',visitorsRoute)
app.listen(3000,()=>console.log("server started"))