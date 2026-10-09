/**
 * ANIMATIONS & SCROLL OBSERVERS
 */

export function initAnimations() {
  // 1. Scroll Reveal Observer
  const revealElements = document.querySelectorAll(".reveal-on-scroll");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.1,
      rootMargin: "0px 0px -40px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add("is-revealed"));
  }

  // 2. Animated Number Counters
  const counterElements = document.querySelectorAll(".js-counter");
  let countersAnimated = false;

  const animateCounters = () => {
    if (countersAnimated) return;
    countersAnimated = true;

    counterElements.forEach(counter => {
      const target = parseInt(counter.getAttribute("data-target"), 10) || 0;
      const duration = 1600;
      const stepTime = 25;
      const totalSteps = duration / stepTime;
      const increment = target / totalSteps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          counter.textContent = target;
          clearInterval(timer);
        } else {
          counter.textContent = Math.floor(current);
        }
      }, stepTime);
    });
  };

  const statsSection = document.querySelector(".stats-bar");
  if (statsSection && "IntersectionObserver" in window) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          statsObserver.disconnect();
        }
      });
    }, { threshold: 0.25 });

    statsObserver.observe(statsSection);
  } else {
    animateCounters();
  }
}
