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
  const totalFrames = 10;
  const animationSpeed = 50;

  let currentFrame = 0;
  let verticalPosition = 0;
  let verticalVelocity = 0;
  const gravity = 0.91;
  const jumpStrength = -12;

  let isGrounded = false;

  function animateSpritesheet() {
    const position = -currentFrame * spriteWidth;
    spritesheet.style.backgroundImage = `url('https://raw.githubusercontent.com/MarcosQuiroz/Portfolio/main/images/Player_Run.png')`;
      spritesheet.style.backgroundPosition = `${position}px`;
      spritesheet.style.transform = `translateY(${verticalPosition}px)`;

  currentFrame = (currentFrame + 1) % totalFrames;
    
  verticalVelocity += gravity;
  verticalPosition += verticalVelocity;
    
  const playerGroundPosition = verticalPosition ;
    
  if (playerGroundPosition > 0) {
      verticalPosition = 0;
      verticalVelocity = 0;
      isGrounded = true;
    }
    else
      {
        isGrounded = false;
      }
  }
  
  function jump() {
    if (isGrounded) {
      verticalVelocity = jumpStrength; 
    }}

    document.addEventListener('click', jump);
    document.addEventListener('touchstart', jump);

  const animationInterval = setInterval(animateSpritesheet, animationSpeed);

  setTimeout(function () {
    clearInterval(animationInterval);
    loadingScreen.style.display = 'none';
  }, 60000);
});
