const langToggle = document.getElementById("langToggle");
const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");
const yearEl = document.getElementById("year");

if (langToggle) {
  langToggle.addEventListener("click", () => {
    const target = langToggle.dataset.langLink;
    if (target) {
      window.location.href = target;
    }
  });
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    siteNav.classList.toggle("open");
  });
}

document.querySelectorAll("#siteNav a").forEach((link) => {
  link.addEventListener("click", () => {
    if (siteNav) {
      siteNav.classList.remove("open");
    }
  });
});

if (yearEl) {
  yearEl.textContent = new Date().getFullYear().toString();
}

function initRevealAnimations() {
  const revealTargets = document.querySelectorAll(
    ".section, .card, .hero h1, .hero .lead, .hero .hero-actions"
  );
  if (!revealTargets.length) return;

  revealTargets.forEach((el) => el.classList.add("reveal"));

  if (!("IntersectionObserver" in window)) {
    revealTargets.forEach((el) => el.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in-view");
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -5% 0px" }
  );

  revealTargets.forEach((el) => observer.observe(el));
}

initRevealAnimations();
