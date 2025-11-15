// -------------------------------------------------------------
// Utility: helper to select multiple elements
// -------------------------------------------------------------
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

// -------------------------------------------------------------
// Navigation: mobile toggle + close on link interaction
// -------------------------------------------------------------
const nav = document.getElementById("primary-nav");
const toggle = document.getElementById("nav-toggle");

const toggleNav = () => {
  nav.classList.toggle("open");
  const isOpen = nav.classList.contains("open");
  toggle.setAttribute("aria-expanded", isOpen);
};

toggle.addEventListener("click", toggleNav);
$$(".nav a").forEach((link) =>
  link.addEventListener("click", () => {
    if (nav.classList.contains("open")) {
      toggleNav();
    }
  })
);

// -------------------------------------------------------------
// Animation: fade elements in on scroll
// -------------------------------------------------------------
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

$$("[data-animate]").forEach((el) => observer.observe(el));

// -------------------------------------------------------------
// Footer: dynamic year
// -------------------------------------------------------------
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

