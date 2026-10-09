/**
 * PORTFOLIO & CASE STUDY MODAL COMPONENT
 */

import { PROJECTS_DATA } from "../config.js";

// Visual SVG illustrations tailored to each project type
const PROJECT_ILLUSTRATIONS = {
  fintech: `
    <svg width="100%" height="100%" viewBox="0 0 360 220" fill="none">
      <rect width="360" height="220" fill="#0A1128"/>
      <circle cx="180" cy="110" r="70" stroke="#0284C7" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.4"/>
      <circle cx="180" cy="110" r="45" fill="rgba(2,132,199,0.2)"/>
      <path d="M140 110 H220 M180 70 V150" stroke="#06B6D4" stroke-width="2"/>
      <rect x="70" y="80" width="80" height="50" rx="8" fill="#0F1C3F" stroke="#0284C7" stroke-width="1"/>
      <rect x="210" y="90" width="80" height="50" rx="8" fill="#0F1C3F" stroke="#38BDF8" stroke-width="1"/>
      <text x="78" y="110" fill="#FFFFFF" font-family="'JetBrains Mono', monospace" font-size="10">$140M/yr</text>
      <text x="218" y="120" fill="#34D399" font-family="'JetBrains Mono', monospace" font-size="10">Settled 1.4s</text>
    </svg>
  `,
  health: `
    <svg width="100%" height="100%" viewBox="0 0 360 220" fill="none">
      <rect width="360" height="220" fill="#081026"/>
      <rect x="90" y="50" width="180" height="120" rx="12" fill="#0F1C3F" stroke="#0EA5E9" stroke-width="1.5"/>
      <path d="M110 110 H140 L155 85 L170 135 L185 95 L200 110 H250" stroke="#38BDF8" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="170" cy="135" r="4" fill="#EF4444"/>
      <rect x="120" y="145" width="120" height="15" rx="4" fill="rgba(255,255,255,0.1)"/>
      <text x="135" y="156" fill="#38BDF8" font-family="'JetBrains Mono', monospace" font-size="9">HIPAA Encrypted</text>
    </svg>
  `,
  ecommerce: `
    <svg width="100%" height="100%" viewBox="0 0 360 220" fill="none">
      <rect width="360" height="220" fill="#0A1128"/>
      <rect x="80" y="45" width="200" height="130" rx="10" fill="#0F1C3F" stroke="#3B82F6" stroke-width="1.5"/>
      <rect x="100" y="65" width="60" height="70" rx="6" fill="#172A5A"/>
      <rect x="175" y="70" width="85" height="10" rx="4" fill="#38BDF8"/>
      <rect x="175" y="90" width="65" height="8" rx="4" fill="rgba(255,255,255,0.3)"/>
      <rect x="175" y="115" width="70" height="20" rx="6" fill="#0284C7"/>
      <text x="187" y="129" fill="#FFFFFF" font-family="sans-serif" font-size="9" font-weight="700">0.8s CDN</text>
    </svg>
  `,
  ai: `
    <svg width="100%" height="100%" viewBox="0 0 360 220" fill="none">
      <rect width="360" height="220" fill="#070C1E"/>
      <circle cx="180" cy="110" r="55" fill="rgba(129,140,248,0.15)" stroke="#818CF8" stroke-width="1.5"/>
      <circle cx="180" cy="110" r="28" fill="#172A5A" stroke="#A5B4FC" stroke-width="2"/>
      <circle cx="180" cy="110" r="10" fill="#818CF8"/>
      <path d="M120 70 L160 95 M240 70 L200 95 M120 150 L160 125 M240 150 L200 125" stroke="#38BDF8" stroke-width="1.5"/>
      <circle cx="120" cy="70" r="5" fill="#38BDF8"/>
      <circle cx="240" cy="70" r="5" fill="#38BDF8"/>
      <circle cx="120" cy="150" r="5" fill="#38BDF8"/>
      <circle cx="240" cy="150" r="5" fill="#38BDF8"/>
      <text x="135" y="195" fill="#C7D2FE" font-family="'JetBrains Mono', monospace" font-size="10">98.4% RAG Accuracy</text>
    </svg>
  `,
  mobile: `
    <svg width="100%" height="100%" viewBox="0 0 360 220" fill="none">
      <rect width="360" height="220" fill="#0A1128"/>
      <rect x="135" y="30" width="90" height="160" rx="14" fill="#0F1C3F" stroke="#06B6D4" stroke-width="2"/>
      <rect x="155" y="40" width="50" height="4" rx="2" fill="rgba(255,255,255,0.2)"/>
      <circle cx="180" cy="175" r="5" fill="rgba(255,255,255,0.3)"/>
      <rect x="145" y="55" width="70" height="45" rx="6" fill="#172A5A"/>
      <path d="M150 75 L165 65 L180 85 L205 60" stroke="#34D399" stroke-width="2"/>
      <rect x="145" y="110" width="70" height="8" rx="4" fill="#38BDF8"/>
      <rect x="145" y="125" width="50" height="6" rx="3" fill="rgba(255,255,255,0.3)"/>
      <text x="140" y="208" fill="#38BDF8" font-family="'JetBrains Mono', monospace" font-size="9">Offline-First Sync</text>
    </svg>
  `,
  iot: `
    <svg width="100%" height="100%" viewBox="0 0 360 220" fill="none">
      <rect width="360" height="220" fill="#090E22"/>
      <rect x="70" y="55" width="220" height="110" rx="10" fill="#0F1C3F" stroke="#0284C7" stroke-width="1.5"/>
      <path d="M90 130 Q 130 80, 170 120 T 250 90" fill="none" stroke="#38BDF8" stroke-width="2"/>
      <circle cx="170" cy="120" r="4" fill="#10B981"/>
      <circle cx="250" cy="90" r="4" fill="#38BDF8"/>
      <rect x="90" y="70" width="100" height="16" rx="4" fill="rgba(2,132,199,0.2)"/>
      <text x="96" y="82" fill="#38BDF8" font-family="'JetBrains Mono', monospace" font-size="9">80,000 evt/sec</text>
    </svg>
  `
};

export function initPortfolio() {
  const container = document.getElementById("portfolio-grid");
  const tabButtons = document.querySelectorAll(".portfolio-tab-btn");
  const modal = document.getElementById("case-study-modal");
  const modalTitle = document.getElementById("case-study-title");
  const modalBody = document.getElementById("case-study-body");
  const modalClose = document.getElementById("case-study-close");

  if (!container) return;

  let currentCategory = "all";

  const renderProjects = () => {
    const filtered = currentCategory === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter(p => p.categoryKey.toLowerCase() === currentCategory.toLowerCase());

    container.innerHTML = filtered.map(project => {
      const illustration = PROJECT_ILLUSTRATIONS[project.imageType] || PROJECT_ILLUSTRATIONS.fintech;
      return `
        <div class="project-card reveal-on-scroll" data-id="${project.id}">
          <div class="project-card__thumb">
            <div class="project-card__thumb-graphic">
              ${illustration}
            </div>
            <span class="project-card__badge">${project.category}</span>
          </div>
          <div class="project-card__body">
            <div class="project-card__meta">${project.industry}</div>
            <h3 class="project-card__title">${project.title}</h3>
            <p class="project-card__desc">${project.shortDesc}</p>
            <div class="project-card__tags">
              ${project.technologies.slice(0, 4).map(t => `<span class="project-tag">${t}</span>`).join("")}
            </div>
            <div class="project-card__footer">
              <button type="button" class="btn btn--sm btn--secondary js-view-case-study" data-id="${project.id}">
                View Case Study
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join("");
  };

  renderProjects();

  // Tab switching
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("tab-btn--active"));
      btn.classList.add("tab-btn--active");
      currentCategory = btn.getAttribute("data-category") || "all";
      renderProjects();
    });
  });

  // Modal display logic
  container.addEventListener("click", (e) => {
    const btn = e.target.closest(".js-view-case-study");
    if (!btn) return;
    const projId = btn.getAttribute("data-id");
    const proj = PROJECTS_DATA.find(p => p.id === projId);
    if (proj) openCaseStudyModal(proj);
  });

  const openCaseStudyModal = (proj) => {
    if (!modal || !modalTitle || !modalBody) return;

    modalTitle.textContent = proj.title;
    modalBody.innerHTML = `
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1.5rem;">
        <span class="badge" style="background: var(--color-primary-900); color: #ffffff; padding: 0.25rem 0.75rem; border-radius: var(--radius-full); font-size: 0.75rem;">
          ${proj.category}
        </span>
        <span class="badge" style="background: rgba(2,132,199,0.1); color: var(--color-accent-sky); padding: 0.25rem 0.75rem; border-radius: var(--radius-full); font-size: 0.75rem; font-weight: 700;">
          ${proj.industry}
        </span>
      </div>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; background: var(--color-bg-surface-subtle); padding: 1.25rem; border-radius: var(--radius-lg); margin-bottom: 2rem; border: 1px solid var(--color-border-light);">
        ${proj.results.map(r => `
          <div style="text-align: center;">
            <div style="font-family: var(--font-heading); font-size: 1.75rem; font-weight: 800; color: var(--color-accent-sky); line-height: 1;">
              ${r.metric}
            </div>
            <div style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: 600; margin-top: 0.35rem;">
              ${r.label}
            </div>
          </div>
        `).join("")}
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 1.1rem; color: var(--color-primary-900); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
          <span style="color: #ef4444;">●</span> The Business Challenge
        </h4>
        <p style="font-size: 0.95rem; color: var(--color-text-main); line-height: 1.7;">${proj.challenge}</p>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 1.1rem; color: var(--color-primary-900); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
          <span style="color: #10b981;">●</span> The Technical Solution
        </h4>
        <p style="font-size: 0.95rem; color: var(--color-text-main); line-height: 1.7;">${proj.solution}</p>
      </div>

      <div style="margin-bottom: 2rem;">
        <h4 style="font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-text-subtle); margin-bottom: 0.75rem;">
          Architectural Technologies Used
        </h4>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
          ${proj.technologies.map(t => `
            <span style="background: var(--color-bg-surface); border: 1px solid var(--color-border-medium); padding: 0.3rem 0.8rem; border-radius: var(--radius-sm); font-size: 0.8rem; font-family: var(--font-mono); font-weight: 600; color: var(--color-primary-900);">
              ${t}
            </span>
          `).join("")}
        </div>
      </div>

      <div style="border-top: 1px solid var(--color-border-light); padding-top: 1.5rem; display: flex; justify-content: flex-end; gap: 1rem;">
        <button type="button" class="btn btn--secondary js-close-modal">Close</button>
        <button type="button" class="btn btn--primary js-inquire-project" data-project="${proj.title}">
          Build Something Similar
        </button>
      </div>
    `;

    modal.classList.add("is-open");
    document.body.style.overflow = "hidden";

    modalBody.querySelector(".js-inquire-project")?.addEventListener("click", () => {
      closeCaseStudyModal();
      const messageField = document.getElementById("contact-message");
      if (messageField) {
        messageField.value = `Hello Novatech team, I am interested in building a solution similar to your case study "${proj.title}".`;
      }
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    });

    modalBody.querySelector(".js-close-modal")?.addEventListener("click", closeCaseStudyModal);
  };

  const closeCaseStudyModal = () => {
    modal?.classList.remove("is-open");
    document.body.style.overflow = "";
  };

  modalClose?.addEventListener("click", closeCaseStudyModal);
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) closeCaseStudyModal();
  });
}
