document.addEventListener("DOMContentLoaded", () => {
  const heroLogo = document.querySelector(".hero-logo");
  const navbarLogo = document.querySelector(".navbar-logo");

  if (!heroLogo || !navbarLogo) return;

  const shrinkThreshold = 150; // Start animation after this scroll Y

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    if (scrollY > shrinkThreshold) {
      // Get bounding rectangles
      const heroRect = heroLogo.getBoundingClientRect();
      const navRect = navbarLogo.getBoundingClientRect();

      // Compute absolute positions by adding scroll offset
      const heroX = heroRect.left + heroLogo.offsetWidth / 2;
      const heroY = heroRect.top + window.scrollY + heroLogo.offsetHeight / 2;

      const navX = navRect.left + navbarLogo.offsetWidth / 2;
      const navY = navRect.top + window.scrollY + navbarLogo.offsetHeight / 2;

      // Calculate movement delta (center-to-center)
      const deltaX = navX - heroX;
      const deltaY = navY - heroY;

      // Apply transform
      heroLogo.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(0.5)`;
      heroLogo.style.opacity = "0";
      heroLogo.style.transition = "transform 0.6s ease, opacity 0.6s ease";
      heroLogo.style.pointerEvents = "none";
    } else {
      // Reset on scroll-up
      heroLogo.style.transform = "translate(0, 0) scale(1)";
      heroLogo.style.opacity = "1";
      heroLogo.style.transition = "transform 0.6s ease, opacity 0.6s ease";
      heroLogo.style.pointerEvents = "auto";
    }
  });
});
