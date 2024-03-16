// Add any Javascript functionality here
// This example uses Javascript to add a click event listener to the navigation link
// You can expand on this to add more interactivity

const navLink = document.querySelector(".nav a");

// navLink.addEventListener('click', function(event)) {
//   event.preventDefault();
//   const targetSection = document.getElementById(this.getAttribute('href').slice(1));
//   targetSection.scroll}
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const accordionButton = item.querySelector(".accordion-button");
  accordionButton.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
