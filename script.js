document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navList = document.querySelector(".nav-list");
    const navbar = document.querySelector(".navbar");
  
    menuToggle.addEventListener("click", function () {
      navList.classList.toggle("show");
      navbar.classList.toggle("menu-open");
    });
  
    document.addEventListener("click", function (event) {
      if (!navbar.contains(event.target)) {
        navList.classList.remove("show");
        navbar.classList.remove("menu-open");
      }
    });
});
