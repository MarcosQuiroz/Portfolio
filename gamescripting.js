document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll(".tab-content");
  
    tabs.forEach(tab => {
      tab.addEventListener("click", function () {
        const target = document.querySelector(`#tab-content-${this.dataset.tab}`);
        target.style.display = target.style.display === "block" ? "none" : "block";
      });
    });
  
    let currentIndex = 0;
    const images = document.querySelectorAll('.background-image');
  
    setInterval(() => {
      images[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.add('active');
    }, 3000);
  });
  