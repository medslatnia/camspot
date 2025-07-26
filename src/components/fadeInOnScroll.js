export function animateOnScroll() {
  const imgs = document.querySelectorAll(".photoGrid img");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = "running";
        }
      });
    },
    { threshold: 0.2 }
  );

  imgs.forEach((img) => {
    img.style.animationPlayState = "paused"; // Prevent auto animation
    observer.observe(img);
  });
}
