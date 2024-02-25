document.addEventListener('DOMContentLoaded', function () {
    const loadingContent = document.querySelector('.loading-content');

    // Set the duration of the loading time in milliseconds (e.g., 5000 for 5 seconds)
    const loadingDuration = 5000;

    // Set the number of steps for scaling (adjust as needed)
    const scaleSteps = 50;

    // Calculate the interval for each scaling step
    const scaleInterval = loadingDuration / scaleSteps;

    // Function to handle the fade-out effect and transition to the main page
    function fadeOut() {
        let currentScale = 1.0;
        const scaleIncrement = 0.02; // Adjust the increment as needed

        // Use setInterval to gradually increase the scale and change opacity
        const scaleIntervalId = setInterval(function () {
            currentScale += scaleIncrement;
            loadingContent.style.transform = `scale(${currentScale})`;
            loadingContent.style.opacity -= 1 / scaleSteps; // Decrease opacity
        }, scaleInterval);

        // Wait for the transition to complete before redirecting
        setTimeout(function () {
            window.location.href = 'main.html'; // Replace 'main.html' with your main page
        }, loadingDuration);
    }

    // Set a timeout to trigger the fade-out effect after the loading duration
    setTimeout(fadeOut, loadingDuration);

    // Allow users to skip the loading by pressing 'ESC'
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            fadeOut();
        }
    });

    document.addEventListener('touchstart', function () {
        if (isMobileDevice()) {
            fadeOut();
        }
    });

    function isMobileDevice() {
        return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    }

    const skipText = document.querySelector('.skip-text');

    if (isMobileDevice()) {
        skipText.textContent = "Touch anywhere";
    } else {
        skipText.textContent = "Press 'ESC' to skip";
    }
});
