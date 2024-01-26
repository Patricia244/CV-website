const express = require('express');

const Visitor = require('./test/models/visitorsModel'); 

const app = express();

app.use(express.json());

app.post('/submit-form', async (req, res) => {
    try {
    
        const { name, email } = req.body;
        const visitor = new Visitor({ name, email });

        await visitor.save();

        res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
        console.error('Error submitting form:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


// index.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('visitor-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        const formData = new FormData(form);

        // Send form data to backend server using Fetch API
        fetch('/submit-form', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                console.log('Form submitted successfully');
            
            } else {
                console.error('Error submitting form');
              
            }
        })
        .catch(error => {
            console.error('Error submitting form:', error);
          
        });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
