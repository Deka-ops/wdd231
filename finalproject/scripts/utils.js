
export function formatYear() {
  const yearEl = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  if (yearEl) {
    yearEl.textContent = currentYear;
  }
}

export function setupHamburger() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }
}
