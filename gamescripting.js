document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");

  tabs.forEach(tab => {
    tab.addEventListener("click", function () {
      const content = this.querySelector(".tab-content");

      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        tabs.forEach(t => t.querySelector(".tab-content").style.display = "none");
        content.style.display = "block";
      }
    });
  });
});
