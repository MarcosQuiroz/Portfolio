document.addEventListener('DOMContentLoaded', function () {
    const image = document.querySelector('img');
    const text = document.querySelector('p');

    // Set the duration of the loading time in milliseconds (e.g., 5000 for 5 seconds)
    const loadingDuration = 5000;

    // Function to handle the fade-out effect and transition to the main page
    function fadeOut() {
        image.style.opacity = 0;
        image.style.transform = 'translateX(500px)';

        text.style.opacity = 0;
        text.style.transform = 'translateX(500px)';

        // Wait for the transition to complete before redirecting
        setTimeout(function () {
            window.location.href = 'main.html'; // Replace 'main.html' with your main page
        }, 1000); // Adjust the time according to your transition duration
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
        // Assuming you have a proper check for mobile devices
        return window.innerWidth <= 600; // Adjust the threshold as needed
    }

    const skipText = document.querySelector('.skip-text');

    if (isMobileDevice()) {
        skipText.textContent = "Touch anywhere";
    } else {
        skipText.textContent = "Press 'ESC' to skip";
    }
});
