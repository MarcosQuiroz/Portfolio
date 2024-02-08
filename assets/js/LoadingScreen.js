  document.addEventListener("LoadingScreen", function () {
    var loadingOverlay = document.getElementById("loading-overlay");
    loadingOverlay.style.display = "flex";

    setTimeout(function () {
        loadingOverlay.style.display = "none";
    }, 3000);
  });