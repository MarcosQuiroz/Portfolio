document.addEventListener("DOMContentLoaded", function () {
  const countdownText = document.querySelector(".countdown-text");
  const spritesheet = document.querySelector(".character-spritesheet");
  const loadingText = document.querySelector(".loading-text");
  const instructions = document.querySelector(".instructions");
  const skipText = document.querySelector(".skip-text");

  const loadingDuration = 60000;

  function fadeOut() {
    spritesheet.style.opacity = 0;
    spritesheet.style.transform = "translateX(500px)";
    countdownText.style.opacity = 0;
    countdownText.style.transform = "translateX(500px)";
    loadingText.style.opacity = 0;
    loadingText.style.transform = "translateX(500px)";
    instructions.style.opacity = 0;
    instructions.style.transform = "translateX(500px)";
    skipText.style.opacity = 0;
    skipText.style.transform = "translateX(500px)";

    obstacles.forEach((obstacle) => {
      obstacle.style.opacity = 0;
      obstacle.style.transform = "translateX(500px)";
    });

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
    instructions.textContent = "Touch Anywhere On The Screen To Jump";
  } else {
    skipText.textContent = "Press 'ESC' to skip";
    instructions.textContent = "Click Anywhere On The Screen To Jump";
  }

  const loadingScreen = document.querySelector(".loading-screen");

  const spriteWidth = 160;
  const animationSpeed = 50;
  const gravity = 2;
  const jumpStrength = -26;

  let currentFrame = 0;
  let totalFrames = 10;
  let verticalPosition = 0;
  let verticalVelocity = 0;
  let isGrounded = false;

  /*spritesheet.style.backgroundImage = `url('https://raw.githubusercontent.com/MarcosQuiroz/Portfolio/main/images/Player_Run.png')`;*/
  /*spritesheet.style.backgroundImage = `url('https://raw.githubusercontent.com/MarcosQuiroz/Portfolio/main/images/Player_Jump.png')`;*/
  spritesheet.style.backgroundImage = `url('images/Player_Run.png')`;

  function animateSpritesheet() {
    const position = -currentFrame * spriteWidth;
    spritesheet.style.backgroundPosition = `${position}px`;
    spritesheet.style.transform = `translateY(${verticalPosition}px)`;

    currentFrame = (currentFrame + 1) % totalFrames;

    verticalVelocity += gravity;
    verticalPosition += verticalVelocity;

    if (verticalPosition > -spriteWidth / 2) {
      spritesheet.style.backgroundImage = `url('images/Player_Run.png')`;
      totalFrames = 10;
      verticalPosition = -spriteWidth / 2;
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
      currentFrame = 0;
      spritesheet.style.backgroundImage = `url('images/Player_Jump.png')`;
    }
  }

  document.addEventListener("click", jump);
  document.addEventListener("touchstart", jump);

  setInterval(animateSpritesheet, animationSpeed);

  const dots = ["", ".", "..", "..."];
  let dotIndex = 0;

  setInterval(function () {
    loadingText.textContent = "Fake Loading" + dots[dotIndex];
    dotIndex = (dotIndex + 1) % dots.length;
  }, 500);

  const countdownDuration = loadingDuration / 1000;
  let countdownTimer = countdownDuration;

  function updateCountdown() {
    countdownText.textContent = countdownTimer;

    if (countdownTimer > 0) {
      countdownTimer--;
    }
  }

  let horizontalVelocity = -5;
  let obstacles;

  function createObstacles() {
    document.getElementById("gameObjectsContainer").innerHTML = '';

    const screenWidth = window.innerWidth;
    const obstacleCount = screenWidth < 600 ? 1 : 3;

    for (let i = 0; i < obstacleCount; i++) {
      const obstacle = document.createElement('div');
      obstacle.className = 'obstacle';
      obstacle.textContent = 'Test Obstacle';
      document.getElementById("gameObjectsContainer").appendChild(obstacle);
    }

    updateObstaclePositions();
  }

  function updateObstaclePositions() {
    obstacles = document.querySelectorAll(".obstacle");

    obstacles.forEach((obstacle, index) => {
      obstacle.style.left = (index * (window.innerWidth / obstacles.length)) + "px";
    });
  }

  function moveObstacle(obstacle) {
    let currentLeft = parseFloat(getComputedStyle(obstacle).left) || 0;
    let obstacleWidth = obstacle.offsetWidth;

    obstacle.style.left = currentLeft + horizontalVelocity + "px";

    if (currentLeft + obstacleWidth < 0) {
      obstacle.style.left = window.innerWidth - obstacleWidth + "px";
    }
  }

  function moveObstacles() {
    obstacles.forEach(obstacle => moveObstacle(obstacle));
    requestAnimationFrame(moveObstacles);
  }

  createObstacles();
  moveObstacles();

  window.addEventListener('resize', function() {
    createObstacles();
  });

  updateCountdown();
  setInterval(updateCountdown, 1000);

  function resetStyles() {
    spritesheet.style.opacity = 1;
    spritesheet.style.transform = "translateX(0)";
    countdownText.style.opacity = 1;
    countdownText.style.transform = "translateX(0)";
    loadingText.style.opacity = 1;
    loadingText.style.transform = "translateX(0)";
    instructions.style.opacity = 1;
    instructions.style.transform = "translateX(0)";
    skipText.style.opacity = 1;
    skipText.style.transform = "translateX(0)";

    obstacles.forEach((obstacle) => {
      obstacle.style.opacity = 1;
      obstacle.style.transform = "translateX(0)";
    });

    countdownTimer = countdownDuration;
  }

  setTimeout(function () {
    clearInterval(animateSpritesheet);
  }, loadingDuration);
});
