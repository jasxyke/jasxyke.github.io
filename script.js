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

//handle the screenshots
document.addEventListener("DOMContentLoaded", function () {
  const screenshots = document.querySelectorAll(".screenshots img");
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");

  // Add click event to each image
  screenshots.forEach((img) => {
    img.addEventListener("click", function () {
      modal.style.display = "flex"; // Show modal
      modalImage.src = this.src; // Set clicked image as modal content
    });
  });

  // Close modal when clicking the close button or outside the image
  document.getElementById("closeModal").addEventListener("click", closeModal);
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  function closeModal() {
    modal.style.display = "none";
  }
});
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
function openModal(imgElement) {
  modal.style.display = "flex"; // Show modal
  modalImage.src = imgElement.src; // Set clicked image as modal content
}

// Close modal when clicking outside the image
modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}
