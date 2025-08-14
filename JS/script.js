gsap.registerPlugin(ScrollTrigger);

// Select all card-package elements inside package-section
gsap.utils.toArray(".package-section .card-package").forEach((card, i) => {
  gsap.from(card, {
    y: 50,               // move from 50px down
    opacity: 0,          // start invisible
    duration: 0.8,       // animation speed
    ease: "power2.out",  // smooth easing
    delay: i * 0.2,      // stagger effect
    scrollTrigger: {
      trigger: ".package-section",
      start: "top 80%",  // when section enters viewport
      toggleActions: "play none none reverse"
    }
  });
});
gsap.from(".portfolio-heading", {
  y: 50,               // start 50px lower
  opacity: 0,          // invisible at first
  duration: 1,         // animation duration
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".portfolio-section",
    start: "top 80%",  // start animation when section enters viewport
    toggleActions: "play none none reverse"
  }
});