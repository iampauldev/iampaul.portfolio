document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Fade-in effect on load
  document.body.classList.add("fade-in");

  // 🔹 Smooth page transitions
  document.querySelectorAll("a[href]").forEach(link => {
    const href = link.getAttribute("href");
    if (!href.startsWith("http") && !href.startsWith("#")) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        document.body.classList.remove("fade-in");
        document.body.style.opacity = 0;
        document.body.style.transform = "translateY(20px)";
        setTimeout(() => {
          window.location.href = href;
        }, 500);
      });
    }
  });

  // 🔹 Scroll-to-top button toggle
  const scrollBtn = document.getElementById("scrollTopBtn");
  if (scrollBtn) {
    window.addEventListener("scroll", () => {
      scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }


    // Burger menu toggle
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav-menu');
    burger.addEventListener('click', () => nav.classList.toggle('show'));

  // 🔹 About section toggle
  const aboutSection = document.getElementById("about");
  if (aboutSection) {
    const aboutContent = aboutSection.querySelector(".about-content");
    aboutSection.addEventListener("click", () => {
      aboutContent.classList.toggle("hidden");
    });
  }

  // 🔹 Skill search filter
  const searchInput = document.getElementById("skillSearchInput");
  const skillItems = document.querySelectorAll(".skill-item");

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase();
      skillItems.forEach(item => {
        const text = item.innerText.toLowerCase();
        item.style.display = text.includes(query) ? "block" : "none";
      });
    });
  }

  // 🔹 Initial scroll reveal trigger
  revealOnScroll();
});

// 🔹 Scroll reveal animation
function revealOnScroll() {
  document.querySelectorAll('.reveal').forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


// 🔹 Toggle skill card
function toggleSkill(skill) {
  const desc = skill.querySelector('.skill-description');
  if (desc) {
  desc.classList.toggle('show');
  }
}