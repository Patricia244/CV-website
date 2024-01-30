document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('login-form').addEventListener('submit', function (event) {
        console.log("Form submitted");
        event.preventDefault();


        function fetchAndDisplayVisitors() {
            fetch('/login')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    // Process the JSON data
                    console.log(data);
                })
                .catch(error => {
                    console.error('Error fetching visitor data:', error);
                });

        }
        fetchAndDisplayVisitors()
    });
});



