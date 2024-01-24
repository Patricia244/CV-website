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

function toggleCard(cardId) {
  const card = document.getElementById(cardId);

  card.classList.toggle("flipped");
}
