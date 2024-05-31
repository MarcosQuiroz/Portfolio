document.addEventListener("DOMContentLoaded", function () {
/*  function fadeInMainVideo() {
    const main_video = document.querySelector(".main-video");
    main_video.style.opacity = 1;
  }

  function fadeInBar() {
    const bar = document.querySelector(".bar");
    bar.style.opacity = 1;
    bar.style.transform = "translateX(0px)";
  }*/

  function fadeInlinksAndNameBar() {
    const topbar = document.querySelector(".topbar");
    topbar.style.opacity = 1;
  }

  const mainVideo = document.querySelector(".main-video");
  
  setTimeout(() => {
    mainVideo.style.height = "75%";
  }, 3000);
  setTimeout(function () {
    fadeInlinksAndNameBar();
  }, 3000);
  setTimeout(function () {
    fadeInMainVideo();
  }, 1000);
  setTimeout(function () {
    fadeInBar();
  }, 2000);

  var linkButtons = document.querySelectorAll(".LinkButton");

  linkButtons.forEach(function (button) {
    button.addEventListener("touchstart", function () {
      button.classList.add("active"); // Add a class on touch
    });

    button.addEventListener("touchend", function () {
      button.classList.remove("active"); // Remove the class when touch ends
    });
  });
});

document
  .getElementById("resumeLink")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const isMobile = window.matchMedia("(max-width: 600px)").matches;

    if (isMobile) {
      const downloadLink = document.getElementById("mobileDownloadLink");
      downloadLink.click();
    } else {
      window.location.href = "resume.html";
    }

    window.addEventListener("popstate", function () {
      location.reload();
    });
  });

const portfolioItems = document.querySelectorAll(".portfolio-item");

portfolioItems.forEach((item) => {
  const images = item.querySelectorAll(".portfolio-image img");
  let currentIndex = 0;

  function showNextImage() {
    images[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add("active");
  }

  images[currentIndex].classList.add("active"); // Initially show the first image
  setInterval(showNextImage, 3000); // Change image every 1 second
});

portfolioItems.forEach((item) => {
  item.addEventListener("mouseenter", function () {
    item.style.transform = "scale(1.02)"; // Increase size on hover
    item.style.borderColor = "#e31e67"; // Change frame color
  });

  item.addEventListener("mouseleave", function () {
    item.style.transform = "scale(1)"; // Revert size
    item.style.borderColor = "#9ea1a5"; // Revert frame color
  });
});
