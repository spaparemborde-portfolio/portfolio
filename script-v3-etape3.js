
document.documentElement.classList.add("intro-active");

document.addEventListener("DOMContentLoaded", () => {
  const revealItems = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));

  const intro = document.querySelector(".intro-screen");
  if (intro) {
    const skip = document.createElement("button");
    skip.className = "intro-skip";
    skip.type = "button";
    skip.textContent = "Passer";
    intro.appendChild(skip);

    const closeIntro = () => {
      document.body.classList.add("intro-done");
      document.documentElement.classList.remove("intro-active");
    };

    skip.addEventListener("click", closeIntro);
    setTimeout(closeIntro, 3300);
  } else {
    document.documentElement.classList.remove("intro-active");
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const progressBar = document.querySelector(".reading-progress span");
  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? window.scrollY / max : 0;
    if (progressBar) progressBar.style.width = `${Math.min(100, Math.max(0, ratio * 100))}%`;
  };
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  const journeySteps = document.querySelectorAll(".journey-step");
  const journeyObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        journeySteps.forEach((step, index) => {
          setTimeout(() => step.classList.add("visible"), index * 120);
        });
        journeyObserver.disconnect();
      }
    });
  }, { threshold: 0.18 });

  const journey = document.querySelector(".action-journey");
  if (journey) journeyObserver.observe(journey);
});


document.addEventListener("DOMContentLoaded", () => {
  const filters = document.querySelectorAll(".proof-filter");
  const cards = document.querySelectorAll(".proof-card");
  filters.forEach((button) => {
    button.addEventListener("click", () => {
      filters.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      const filter = button.dataset.filter;
      cards.forEach((card) => {
        const categories = (card.dataset.category || "").split(" ");
        card.classList.toggle("is-hidden", !(filter === "all" || categories.includes(filter)));
      });
    });
  });
});
