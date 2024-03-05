document.addEventListener('DOMContentLoaded', function () {
    const spritesheet = document.querySelector('.character-spritesheet');
    const text = document.querySelector('p');
    const skipText = document.querySelector('.skip-text');
  
    const loadingDuration = 60000;

    function resetStyles() {
        spritesheet.style.opacity = 1;
        spritesheet.style.transform = 'translateX(0)';
        text.style.opacity = 1;
        text.style.transform = 'translateX(0)';
      }
  
    function fadeOut() {
      spritesheet.style.opacity = 0;
      spritesheet.style.transform = 'translateX(500px)';
  
      text.style.opacity = 0;
      text.style.transform = 'translateX(500px)';

      setTimeout(function () {
        window.location.href = 'main.html';
      }, 1000);
  
      setTimeout(function () {
        resetStyles();
      }, 1100);
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
    const spriteHeight = 80;
    const totalFrames = 10;
    const animationSpeed = 50;

    let currentFrame = 0;
    let verticalPosition = 0;
    let verticalVelocity = 0;
    const gravity = 1.0;
    const jumpStrength = -10.0; 

  function animateSpritesheet() {
    const position = -currentFrame * spriteWidth;
    spritesheet.style.backgroundImage = `url('images/Player_Run.png')`;
    spritesheet.style.backgroundPosition = `${position}px ${verticalPosition}px`;

    currentFrame = (currentFrame + 1) % totalFrames;

    verticalVelocity += gravity;
    verticalPosition += verticalVelocity;
    const groundLevel = 0 + spriteHeight / 2;

    if (verticalPosition > groundLevel) {
      verticalPosition = groundLevel;
      verticalVelocity = 0;
    }
  }

  function jump() {
    const groundLevel = 0 + spriteHeight / 2;
    if (verticalPosition === groundLevel) {
      verticalVelocity = jumpStrength; 
    }

    document.addEventListener('click', jump);
    document.addEventListener('touchstart', jump);
  
    const animationInterval = setInterval(animateSpritesheet, animationSpeed);
  
    setTimeout(function () {
      clearInterval(animationInterval);
      loadingScreen.style.display = 'none';
    }, 60000);
  });
  