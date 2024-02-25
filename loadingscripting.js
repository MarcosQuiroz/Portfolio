document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      window.location.href = 'main.html';
    }
  });
  
  setTimeout(function () {
    window.location.href = 'main.html';
  }, 5000);