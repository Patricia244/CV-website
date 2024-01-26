const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/userInfoDb');

const connection = mongoose.connection;

connection.once('open', function() {
    console.log("Connection has been made");

    const Visitor = require('./models/visitorsModel'); 
    const newVisitor = new Visitor({
        name: 'John Doe',
        email: 'john@example.com',
        message:"hello silindile"
    });

    newVisitor.save()
        .then(() => {
            console.log('Data inserted successfully');
        })
        .catch(error => {
            console.error('Error inserting data:', error);
        });
}).on('error', function(error) {
    console.log('Connect Error: ', error);
});
