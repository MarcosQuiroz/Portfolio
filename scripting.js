document.addEventListener('DOMContentLoaded', function () {
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
  
    const isMobile = window.innerWidth <= 600;
  
    if (isMobile) {
      const downloadLink = document.getElementById('mobileDownloadLink');
      downloadLink.click();
    } else {
      window.location.href = 'resume.html';
    }
  });
