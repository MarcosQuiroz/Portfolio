document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.container');
    const body = document.body;

    // Function to handle the fade-out effect and transition to the main page
    function fadeIn() {
        container.style.opacity = 1;
        body.style.scale = 1; // Apply the scale transformation
    }

    fadeIn();

    var linkButtons = document.querySelectorAll('.LinkButton');
  
    linkButtons.forEach(function (button) {
      button.addEventListener('touchstart', function () {
        button.classList.add('active'); // Add a class on touch
      });
  
      button.addEventListener('touchend', function () {
        button.classList.remove('active'); // Remove the class when touch ends
      });
    });
  });

  document.getElementById('resumeLink').addEventListener('click', function (event) {
    event.preventDefault();

    const isMobile = window.matchMedia('(max-width: 600px)').matches;

    if (isMobile) {
        const downloadLink = document.getElementById('mobileDownloadLink');
        downloadLink.click();
    } else {
        window.location.href = 'resume.html';
    }
});