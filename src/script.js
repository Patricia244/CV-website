const toggleBtn = document.getElementsByClassName("toggle-btn")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const navItems = document.querySelectorAll(".nav-item");
toggleBtn.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

const currentPath = window.location.pathname;
const currentPage = currentPath.substring(currentPath.lastIndexOf("/") + 1);
navItems.forEach((item) => {
  const link = item.querySelector("a");
  if (link && link.getAttribute("href").endsWith(currentPage)) {
    item.classList.add("current");
  }
});

const successMessage = document.getElementById('success-message');
function submitForm() {

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const dateInput = document.getElementById('date');

  const formData = {
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value
  };

  fetch('https://personal-website-y81r.onrender.com/new_visitor', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(data => {

      if (data.success) {
      setTimeout(()=>{
 successMessage.innerHTML = 'Form submitted successfully!';
      })
         
          nameInput.value = '';
          emailInput.value = '';
          messageInput.value = '';
          dateInput.value='';
      } else {
          console.error('Form submission failed:', data.message);
      }
  })
  .catch(error => {
      console.error('Error submitting form:', error);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('form').addEventListener('submit', function (event) {
      event.preventDefault();
      submitForm();
  });
});

