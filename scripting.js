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
    // Prevent the default behavior (opening the link)
    event.preventDefault();
  
    // Open a download window for mobile devices
    if (window.innerWidth <= 600) {
      // Replace 'your_resume_file.pdf' with the actual file path
      window.open('your_resume_file.pdf', '_blank');
    } else {
      // For PC, open the resume.html page
      window.location.href = 'resume.html';
    }
  });