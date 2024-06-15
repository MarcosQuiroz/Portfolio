document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");

  tabs.forEach(tab => {
    const tabContent = tab.querySelector(".tab-content");
    
    tabContent.style.display = "none";

    tab.addEventListener("click", function () {
      if (tabContent.style.display === "none") {
        closeAllTabs();
        tabContent.style.display = "block";
      } else {
        tabContent.style.display = "none";
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
