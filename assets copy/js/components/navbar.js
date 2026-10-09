/**
 * NAVBAR & MOBILE NAVIGATION COMPONENT
 */

export function initNavbar() {
  const navbar = document.querySelector(".navbar");
  const toggleBtn = document.querySelector(".navbar__toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  const backdrop = document.querySelector(".mobile-nav-backdrop");
  const closeBtn = document.querySelector(".mobile-nav__close");
  const navLinks = document.querySelectorAll(".navbar__link, .mobile-nav__link");

  // Sticky navbar with blur on scroll
  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar?.classList.add("is-scrolled");
    } else {
      navbar?.classList.remove("is-scrolled");
    }
    updateActiveLink();
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  // Mobile Drawer Toggle
  const openMobileMenu = () => {
    mobileNav?.classList.add("is-open");
    backdrop?.classList.add("is-open");
    document.body.style.overflow = "hidden";
    toggleBtn?.setAttribute("aria-expanded", "true");
  };

  const closeMobileMenu = () => {
    mobileNav?.classList.remove("is-open");
    backdrop?.classList.remove("is-open");
    document.body.style.overflow = "";
    toggleBtn?.setAttribute("aria-expanded", "false");
  };

  toggleBtn?.addEventListener("click", openMobileMenu);
  closeBtn?.addEventListener("click", closeMobileMenu);
  backdrop?.addEventListener("click", closeMobileMenu);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileNav?.classList.contains("is-open")) {
      closeMobileMenu();
    }
  });

  // Smooth scroll and active state on click
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        e.preventDefault();
        closeMobileMenu();

        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          const navHeight = 80;
          const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - navHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
          });
        }
      }
    });
  });

  // Active section indicator
  function updateActiveLink() {
    const sections = document.querySelectorAll("section[id]");
    const scrollY = window.pageYOffset + 120;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop;
      const sectionId = section.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        document.querySelectorAll(`.navbar__link[href="#${sectionId}"]`).forEach((l) => {
          l.classList.add("is-active");
        });
      } else {
        document.querySelectorAll(`.navbar__link[href="#${sectionId}"]`).forEach((l) => {
          l.classList.remove("is-active");
        });
      }
    });
  }
}
