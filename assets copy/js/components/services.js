/**
 * SERVICES COMPONENT & SERVICE DETAIL MODAL
 */

import { SERVICES_DATA } from "../config.js";

// Helper SVG icons for services
const SERVICE_ICONS = {
  "code-square": `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
  "globe": `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
  "smartphone": `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>`,
  "palette": `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2z"></path></svg>`,
  "cloud": `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`,
  "cpu": `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`,
  "shopping-bag": `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>`,
  "git-merge": `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path></svg>`,
  "briefcase": `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`
};

export function initServices() {
  const servicesGrid = document.getElementById("services-grid");
  const modal = document.getElementById("service-modal");
  const modalTitle = document.getElementById("service-modal-title");
  const modalBody = document.getElementById("service-modal-body");
  const modalCloseBtn = document.getElementById("service-modal-close");

  if (!servicesGrid) return;

  // Render all 9 service cards
  servicesGrid.innerHTML = SERVICES_DATA.map((service) => {
    const iconSvg = SERVICE_ICONS[service.icon] || SERVICE_ICONS["code-square"];
    return `
      <div class="service-card reveal-on-scroll" data-service-id="${service.id}">
        <div class="service-card__icon">
          ${iconSvg}
        </div>
        <div class="service-card__tagline">${service.tagline}</div>
        <h3 class="service-card__title">${service.title}</h3>
        <p class="service-card__desc">${service.shortDesc}</p>
        <button type="button" class="service-card__link js-open-service-modal" data-id="${service.id}" aria-label="Learn more about ${service.title}">
          Learn More
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    `;
  }).join("");

  // Attach modal trigger listeners
  servicesGrid.addEventListener("click", (e) => {
    const btn = e.target.closest(".js-open-service-modal");
    if (!btn) return;
    const serviceId = btn.getAttribute("data-id");
    const service = SERVICES_DATA.find(s => s.id === serviceId);
    if (service) {
      openServiceModal(service);
    }
  });

  const openServiceModal = (service) => {
    if (!modal || !modalTitle || !modalBody) return;

    modalTitle.textContent = service.title;
    modalBody.innerHTML = `
      <div style="margin-bottom: 1.5rem;">
        <span class="badge" style="background: rgba(2,132,199,0.1); color: var(--color-accent-sky); font-weight: 700; padding: 0.3rem 0.8rem; border-radius: var(--radius-full); font-size: 0.75rem; text-transform: uppercase;">
          ${service.tagline}
        </span>
        <p style="font-size: 1.05rem; margin-top: 1rem; color: var(--color-text-main); line-height: 1.7;">
          ${service.fullDesc}
        </p>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 1rem; margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-primary-900);">
          Key Capabilities & Deliverables
        </h4>
        <ul class="checklist" style="margin: 0;">
          ${service.deliverables.map(item => `
            <li class="checklist__item">
              <span class="checklist__icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </span>
              <span style="color: var(--color-text-main); font-weight: 500;">${item}</span>
            </li>
          `).join("")}
        </ul>
      </div>

      <div style="margin-bottom: 2rem;">
        <h4 style="font-size: 1rem; margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-primary-900);">
          Primary Technologies
        </h4>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
          ${service.technologies.map(t => `
            <span style="background: var(--color-bg-surface-subtle); padding: 0.35rem 0.85rem; border-radius: var(--radius-md); font-family: var(--font-mono); font-size: 0.8rem; font-weight: 600; color: var(--color-primary-900); border: 1px solid var(--color-border-light);">
              ${t}
            </span>
          `).join("")}
        </div>
      </div>

      <div style="border-top: 1px solid var(--color-border-light); padding-top: 1.5rem; display: flex; justify-content: flex-end; gap: 1rem;">
        <button type="button" class="btn btn--secondary js-close-modal">Close</button>
        <button type="button" class="btn btn--primary js-consult-service" data-service="${service.title}">
          Discuss This Service
        </button>
      </div>
    `;

    modal.classList.add("is-open");
    document.body.style.overflow = "hidden";

    // Bind "Discuss This Service" button to jump to contact form and select this service
    modalBody.querySelector(".js-consult-service")?.addEventListener("click", () => {
      closeServiceModal();
      const serviceSelect = document.getElementById("contact-service");
      if (serviceSelect) {
        serviceSelect.value = service.title;
      }
      const contactSec = document.getElementById("contact");
      if (contactSec) {
        contactSec.scrollIntoView({ behavior: "smooth" });
      }
    });

    modalBody.querySelector(".js-close-modal")?.addEventListener("click", closeServiceModal);
  };

  const closeServiceModal = () => {
    modal?.classList.remove("is-open");
    document.body.style.overflow = "";
  };

  modalCloseBtn?.addEventListener("click", closeServiceModal);
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) closeServiceModal();
  });
}
