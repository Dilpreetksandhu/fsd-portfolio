document.addEventListener("DOMContentLoaded", () => {

    /* ======================
       TYPEWRITER EFFECT
    ====================== */
    const element = document.getElementById("typewriter");
  
    if (element) {
      const text = "My Projects";
      const speed = 120;
      const eraseSpeed = 70;
      const delay = 1200;
  
      let index = 0;
      let isDeleting = false;
  
      function typeEffect() {
        if (!isDeleting) {
          element.textContent = text.slice(0, index++);
          if (index > text.length) {
            setTimeout(() => (isDeleting = true), delay);
          }
        } else {
          element.textContent = text.slice(0, index--);
          if (index === 0) {
            isDeleting = false;
          }
        }
        setTimeout(typeEffect, isDeleting ? eraseSpeed : speed);
      }
  
      typeEffect();
    }
  
    /* ======================
       DARK / LIGHT TOGGLE
    ====================== */
    const toggleBtn = document.getElementById("theme-toggle");
  
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("light");
        toggleBtn.textContent =
          document.body.classList.contains("light") ? "🌙" : "☀️";
      });
    }
  
    /* ======================
       KNOW MORE PULL-DOWN
    ====================== */
    const toggle = document.querySelector(".know-more-toggle");
    const extraCards = document.querySelector(".extra-cards");
  
    if (toggle && extraCards) {
      toggle.addEventListener("click", () => {
        extraCards.classList.toggle("show");
        toggle.classList.toggle("rotate");
  
        toggle.querySelector("span").textContent =
          extraCards.classList.contains("show")
            ? "Show Less"
            : "See More";
      });
    }
  
    /* ======================
       ACTIVE NAV LINK (FIXED)
    ====================== */
    const navLinks = document.querySelectorAll(".nav-link");
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
  
    navLinks.forEach(link => {
      const linkPage = link.getAttribute("href");
  
      if (linkPage === currentPage) {
        link.classList.add("active");
      }
    });
  
  });

  const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});