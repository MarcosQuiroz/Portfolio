document.addEventListener("DOMContentLoaded", function () {
  const spritesheet = document.querySelector(".character-spritesheet");
  const text = document.querySelector("p");
  const skipText = document.querySelector(".skip-text");

  const loadingDuration = 60000;

  function resetStyles() {
    spritesheet.style.opacity = 1;
    spritesheet.style.transform = "translateX(0)";
    text.style.opacity = 1;
    text.style.transform = "translateX(0)";
  }

  function fadeOut() {
    spritesheet.style.opacity = 0;
    spritesheet.style.transform = "translateX(500px)";

    text.style.opacity = 0;
    text.style.transform = "translateX(500px)";

    setTimeout(function () {
      window.location.href = "main.html";
    }, 1000);

    setTimeout(function () {
      resetStyles();
    }, 1100);
  }

  setTimeout(fadeOut, loadingDuration);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      fadeOut();
    }
  });

  skipText.addEventListener("touchstart", function (event) {
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

  const loadingScreen = document.querySelector(".loading-content");

  const spriteWidth = 160;
  const animationSpeed = 50;
  const gravity = 2;
  const jumpStrength = -26;

  let currentFrame = 0;
  let totalFrames = 10;
  let verticalPosition = 0;
  let verticalVelocity = 0;
  let isGrounded = false;
  let origin = 0 - spriteWidth / 2;

   /*spritesheet.style.backgroundImage = `url('https://raw.githubusercontent.com/MarcosQuiroz/Portfolio/main/images/Player_Run.png')`;*/
  /*spritesheet.style.backgroundImage = `url('https://raw.githubusercontent.com/MarcosQuiroz/Portfolio/main/images/Player_Jump.png')`;*/
  spritesheet.style.backgroundImage = `url('images/Player_Run.png')`;
  spritesheet.style.transform = `translateY(${origin}px)`;

  function animateSpritesheet() {
    const position = -currentFrame * spriteWidth;
    spritesheet.style.backgroundPosition = `${position}px`;
    spritesheet.style.transform = `translateY(${verticalPosition}px)`;

    currentFrame = (currentFrame + 1) % totalFrames;

    verticalVelocity += gravity;
    verticalPosition += verticalVelocity;

    const playerGroundPosition = verticalPosition;

    if (playerGroundPosition > origin) {
      spritesheet.style.backgroundImage = `url('images/Player_Run.png')`;
      totalFrames = 10;
      verticalPosition = origin;
      verticalVelocity = 0;
      isGrounded = true;
    } else {
      isGrounded = false;
    }
  }

  function jump() {
    if (isGrounded) {
      verticalVelocity = jumpStrength;
      totalFrames = 6;
      currentFrame = 0
      spritesheet.style.backgroundImage = `url('images/Player_Jump.png')`;
    }
  }

  document.addEventListener("click", jump);
  document.addEventListener("touchstart", jump);

  const animationInterval = setInterval(animateSpritesheet, animationSpeed);

  const loadingText = document.querySelector(".loading-text");
  const centerY = window.innerHeight / 2;
  const textPosition = -centerY + 50; 
  loadingText.style.transform = `translateY(${textPosition}px)`;
  
  const dots = ["", ".", "..", "..."];
  let dotIndex = 0;
  
   setInterval(function () {
    loadingText.textContent = "Fake Loading" + dots[dotIndex];
    dotIndex = (dotIndex + 1) % dots.length;
  }, 500);

  setTimeout(function () {
    clearInterval(animationInterval);
    loadingScreen.style.display = "none";
  }, 60000);
});
