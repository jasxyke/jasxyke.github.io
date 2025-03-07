document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

document.querySelectorAll(".project-desc a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.stopPropagation();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".project").forEach((project) => {
    project.addEventListener("click", function (e) {
      e.stopPropagation();
      const screenshotContainer = this.nextElementSibling;
      if (
        screenshotContainer &&
        screenshotContainer.classList.contains("screenshot-container")
      ) {
        screenshotContainer.classList.toggle("active"); // Toggle visibility
      }
    });
  });

  // Close button functionality - Closes the correct parent screenshot-container
  document.querySelectorAll(".close-btn").forEach((closeBtn) => {
    closeBtn.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent triggering project click event
      this.closest(".screenshot-container").classList.remove("active");
    });
  });
});
