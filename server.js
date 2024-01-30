require("dotenv").config()
const express = require('express')
const app = express()
const path = require("path")
const cors = require("cors");
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);
const connection = mongoose.connection;

connection.once('open', function () {
    console.log("connected to the database")
}).on('error', function (error) {
    console.log('Connect Error: ', error);
});

app.use(cors());
//app.use(cors({ origin: 'https://strong-nasturtium-61fa5a.netlify.app' }))

app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use('/src', express.static(path.join(__dirname, 'src')))

const visitorsRoute = require('./routes/visitorsRoute.js')
app.use('', visitorsRoute)
app.get("/new_visitor", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

const adminRoute = require('./routes/adminRoutes.js')
app.use('', adminRoute)
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "admin.html"));
});

app.listen(process.env.PORT, () => console.log(`server listening on http://localhost:${process.env.PORT}/new_visitor`))