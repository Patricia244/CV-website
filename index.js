document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('visitor-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const formData = new FormData(form);

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
