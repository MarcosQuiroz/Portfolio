document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");
  
    tabs.forEach(tab => {
      tab.addEventListener("click", function () {
        const tabId = this.getAttribute("data-tab");
        const content = document.getElementById(`tab-content-${tabId}`);
  
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          document.querySelectorAll(".tab-content").forEach(tc => tc.style.display = "none");
          content.style.display = "block";
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
  
    setInterval(showNextImage, 3000);
  });
  