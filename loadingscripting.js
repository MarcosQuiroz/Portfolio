document.addEventListener('DOMContentLoaded', function () {
    const spritesheet = document.querySelector('.character-spritesheet');
    const text = document.querySelector('p');
    const skipText = document.querySelector('.skip-text');

    const loadingDuration = 5000;

    function fadeOut() {
        spritesheet.style.opacity = 0;
        spritesheet.style.transform = 'translateX(500px)';

        text.style.opacity = 0;
        text.style.transform = 'translateX(500px)';

        setTimeout(function () {
            window.location.href = 'main.html'; 
        }, 1000); 
    }

    setTimeout(fadeOut, loadingDuration);

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
        return window.innerWidth <= 600;
    }

    if (isMobileDevice()) {
        skipText.textContent = "Touch HERE to skip";
    } else {
        skipText.textContent = "Press 'ESC' to skip";
    }

   const loadingScreen = document.querySelector('.loading-content');
  
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

});
