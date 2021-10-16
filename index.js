const navbar = document.querySelector(".navbar");
const homebg = document.querySelector(".home-background");
const menu = document.querySelector(".navbar-menu");
const links = document.querySelector(".navbar-links");
const sections = document.querySelectorAll("section");
const config = {
  rootMargin: "0px",
  threshold: [0.6, 0.9],
};

function handleLlinks() {
  if (window.innerWidth <= 991) {
    links.classList.toggle("visible");
  }
}

menu.addEventListener("click", handleLlinks);
links.addEventListener("click", handleLlinks);

window.addEventListener("scroll", function () {
  window.scrollY > 100 && (navbar.style.background = `rgba(0,0,0,0.9)`);
  window.scrollY < 100 && (navbar.style.background = `transparent`);
});

let observer = new IntersectionObserver(function (entries, self) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      intersectionHandler(entry);
    }
  });
}, config);

sections.forEach((section) => {
  observer.observe(section);
});

function intersectionHandler(entry) {
  const id = entry.target.id;
  const currentlyActive = document.querySelector(".navbar-links  .active");
  const shouldBeActive = document.querySelector(
    ".navbar-links [data-ref=" + id + "]"
  );

  if (currentlyActive) {
    currentlyActive.classList.remove("active");
  }
  if (shouldBeActive) {
    shouldBeActive.classList.add("active");
  }
}

// window.addEventListener("mousemove", parallax);

// function parallax(e) {
//   elements.forEach((item) => {
//     const speed = item.getAttribute("data-speed");
//     console.log(speed);
//     const x = (window.innerWidth - e.pageX * speed) / 100;
//     const y = (window.innerHeight - e.pageY * speed) / 100;
//     item.style.transform = `translateX(${x}px) translateY(${y}px)`;
//   });
// }

ScrollReveal().reveal(".navbar", { delay: 250 });
ScrollReveal().reveal(".home-profile", { delay: 350 });
ScrollReveal().reveal(".title-primary", { delay: 350 });
ScrollReveal().reveal(".home-title", { delay: 450 });
ScrollReveal().reveal(".title-secondary", { delay: 550 });
ScrollReveal().reveal(".section-title", { delay: 250 });
ScrollReveal().reveal(".section-subtitle", { delay: 350 });
ScrollReveal().reveal(".about-description", { delay: 350 });
ScrollReveal().reveal(".about-summary", { delay: 450 });
ScrollReveal().reveal(".button--cta", { delay: 550 });
ScrollReveal().reveal(".skill-title", { delay: 450 });
ScrollReveal().reveal(".skill-item", { delay: 450 });
ScrollReveal().reveal(".blog-title", { delay: 450 });
ScrollReveal().reveal(".blog-item", { delay: 450 });
ScrollReveal().reveal(".services-item", { delay: 450 });
ScrollReveal().reveal(".portfolio-item", { delay: 450 });
ScrollReveal().reveal(".contact-item", { delay: 450 });
ScrollReveal().reveal(".footer", { delay: 450 });
