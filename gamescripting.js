document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");

  tabs.forEach(tab => {
    const tabTitle = tab.querySelector(".tab-title");
    const tabContent = tab.querySelector(".tab-content");

    tabTitle.addEventListener("click", function () {
      if (tabContent.classList.contains("active")) {
        tabContent.classList.remove("active");
      } else {
        tabs.forEach(t => t.querySelector(".tab-content").classList.remove("active"));
        tabContent.classList.add("active");
      }
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
