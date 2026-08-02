
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
