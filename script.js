const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const accordionButton = item.querySelector(".accordion-button");
  accordionButton.addEventListener("click", () => {
    const currentActiveItem = document.querySelector(".accordion-item.active");

    // If another item is already open, close it
    if (currentActiveItem && currentActiveItem !== item) {
      currentActiveItem.classList.remove("active");
    }

    item.classList.toggle("active");
  });
});
