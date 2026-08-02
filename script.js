
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach((item) => observer.observe(item));
});

window.addEventListener("load",()=>{setTimeout(()=>document.body.classList.add("intro-done"),2800);});
