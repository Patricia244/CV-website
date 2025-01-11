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

const successMessage = document.getElementById("success-message");
function submitForm() {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const dateInput = document.getElementById("date");

  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };

  fetch("https://personal-website-y81r.onrender.com/new_visitor", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        setTimeout(() => {
          successMessage.innerHTML = "";
        }, 5000);
        successMessage.innerHTML = "Form submitted successfully!";
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
      } else {
        console.error("Form submission failed:", data.message);
      }
    })
    .catch((error) => {
      console.error("Error submitting form:", error);
    });
}

// document.addEventListener("DOMContentLoaded", function () {
//   document.getElementById("form").addEventListener("submit", function (event) {
//     event.preventDefault();
//     submitForm();
//   });
// });
document.addEventListener("DOMContentLoaded", () => {
  const descriptions = document.querySelectorAll(".time-line-description");
  const line = document.querySelector(".line");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("sticky");
        } else {
          entry.target.classList.remove("sticky");
        }
      });
    },
    {
      threshold: 0.5,
    }
  );
  descriptions.forEach((description) => observer.observe(description));
});

const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    620: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
