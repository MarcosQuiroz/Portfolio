document.addEventListener('DOMContentLoaded', function () {
    const loadingScreen = document.getElementById('.loading-content');
    const spritesheet = document.getElementById('.character-spritesheet');
  
    const spriteWidth = 80;
    const totalFrames = 10;
    const animationSpeed = 100;
  
    let currentFrame = 0;
  
    function updateSpritesheet() {
      const position = -currentFrame * spriteWidth;
      spritesheet.style.backgroundPosition = `${position}px 0`;
    }
  
    function animateSpritesheet() {
      currentFrame = (currentFrame + 1) % totalFrames;
      updateSpritesheet();
    }
  
    const animationInterval = setInterval(animateSpritesheet, animationSpeed);
  
    setTimeout(function () {
      clearInterval(animationInterval);
      loadingScreen.style.display = 'none';
    }, 60000);

    const skipText = document.querySelector('.skip-text');

    // Allow users to skip the loading by pressing 'ESC'
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            fadeOut();
        }
    });

    skipText.addEventListener('touchstart', function (event) {
        if (isMobileDevice()) {
            event.stopPropagation();
            fadeOut();
        }
    });

    function isMobileDevice() {
        // Assuming you have a proper check for mobile devices
        return window.innerWidth <= 600; // Adjust the threshold as needed
    }

    if (isMobileDevice()) {
        skipText.textContent = "Touch HERE to skip";
    } else {
        skipText.textContent = "Press 'ESC' to skip";
    }

});
