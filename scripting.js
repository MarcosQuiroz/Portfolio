document.addEventListener('DOMContentLoaded', function () {

  // Function to handle the fade-out effect and transition to the main page
  function fadeInBar() {
      const bar = document.querySelector('.bar');
      bar.style.opacity = 1;
      bar.style.transform = 'translateX(0px)';
  }

  function fadeInlinksAndName() {
      const name = document.querySelector('.name');
      const links = document.querySelector('.linksBar');

      name.style.opacity = 1;
      links.style.opacity = 1;
  }

  fadeInlinksAndName();
  setTimeout(function() { fadeInBar(); }, 1000);  

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