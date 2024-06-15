document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab-title");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const tabContent = tab.nextElementSibling;
      const allTabContents = document.querySelectorAll(".tab-content");
      allTabContents.forEach((tc) => tc.classList.remove("active"));
      tabContent.classList.add("active");
    });
  });


  const images = document.querySelectorAll(".background-image");
  let currentIndex = 0;

  function showNextImage() {
    images[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add("active");
  }

  setInterval(showNextImage, 5000);
  showNextImage();
});
