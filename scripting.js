document.addEventListener('DOMContentLoaded', function () {

  const bar = document.querySelector('.bar');

  function fadeIn() {
        bar.style.opacity = 1;
        bar.style.transform = 'translateX(500px)';
  }

    setTimeout(fadeIn, 0.3);


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