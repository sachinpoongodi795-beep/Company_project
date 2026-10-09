/**
 * APPLICATION BOOTSTRAPPER - NOVATECH ENTERPRISE SOLUTIONS
 */

import { 
  COMPANY_CONFIG, 
  TECH_STACK, 
  INDUSTRIES_DATA, 
  PROCESS_STEPS, 
  WHY_CHOOSE_US, 
  TEAM_DATA, 
  TESTIMONIALS_DATA 
} from "./config.js";

import { initNavbar } from "./components/navbar.js";
import { initServices } from "./components/services.js";
import { initPortfolio } from "./components/portfolio.js";
import { initCareers } from "./components/careers.js";
import { initContact } from "./components/contact.js";
import { initAdminPortal } from "./components/admin.js";
import { initAnimations } from "./animations.js";

// Industry SVG icons map
const INDUSTRY_ICONS = {
  "dollar-sign": `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`,
  "activity": `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
  "shopping-cart": `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>`,
  "settings": `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,
  "truck": `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>`,
  "book-open": `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
  "navigation": `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>`,
  "zap": `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`
};

// Tech logo SVGs
const TECH_ICONS = {
  react: `<svg width="28" height="28" viewBox="-11.5 -10.23174 23 20.46348"><circle cx="0" cy="0" r="2.05" fill="#61dafb"/><g stroke="#61dafb" stroke-width="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>`,
  nextjs: `<svg width="28" height="28" viewBox="0 0 180 180" fill="none"><circle cx="90" cy="90" r="90" fill="#000"/><path d="M149.508 157.438L69.147 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.137 149.508 157.438Z" fill="#fff"/><rect x="115" y="54" width="12" height="72" fill="#fff"/></svg>`,
  typescript: `<svg width="28" height="28" viewBox="0 0 256 256"><rect width="256" height="256" fill="#3178c6"/><path d="M150 162.8c5.4 8.7 13.9 14.2 24.2 14.2 11.2 0 18.7-5.8 18.7-14.7 0-9.8-8.2-13.6-21.7-19.3-19.4-8.1-32.3-17.5-32.3-37.4 0-19.9 15.6-35.3 39-35.3 15.6 0 27.8 5.7 36 17.5l-13.7 10.9c-4.9-7.2-11.8-10.7-21.9-10.7-10.3 0-16.7 5.4-16.7 12.9 0 8.4 6.7 12.2 20.2 17.9 20.5 8.7 34 18.2 34 39.1 0 21.6-16.9 36.6-42.3 36.6-20.1 0-35.1-7.8-43.1-22.3l19.6-10.3zm-85.3 49.2V91.6h55.2v17.4H93.1v103H64.7z" fill="#fff"/></svg>`,
  nodejs: `<svg width="28" height="28" viewBox="0 0 256 256"><path fill="#539e43" d="M128 0L242.4 66v124L128 256 13.6 190V66L128 0z"/><path fill="#fff" d="M128 178c-27.6 0-50-22.4-50-50s22.4-50 50-50 50 22.4 50 50-22.4 50-50 50z"/></svg>`,
  python: `<svg width="28" height="28" viewBox="0 0 256 255"><defs><linearGradient id="py1" x1="12.96%" y1="-12.35%" x2="79.91%" y2="87.7%"><stop offset="0%" stop-color="#387EB8"/><stop offset="100%" stop-color="#366994"/></linearGradient><linearGradient id="py2" x1="19.13%" y1="67.57%" x2="90.3%" y2="17.65%"><stop offset="0%" stop-color="#FFE052"/><stop offset="100%" stop-color="#FFC331"/></linearGradient></defs><path d="M126.9 0C60 0 64.2 29 64.2 29L64.3 59h63.8v9H39.8S0 63.8 0 128.7c0 65 34.8 62.7 34.8 62.7l20.8-.1v-29.2s-.9-34.8 34.2-34.8h63.5v-9.3s.4-28-26.4-28zm-33.3 17.5a9.1 9.1 0 1 1 0 18.2 9.1 9.1 0 0 1 0-18.2z" fill="url(#py1)"/><path d="M129.1 254.9c66.9 0 62.7-29 62.7-29l-.1-30h-63.8v-9h88.3s39.8 4.2 39.8-60.7c0-65-34.8-62.7-34.8-62.7l-20.8.1v29.2s.9 34.8-34.2 34.8H102.7v9.3s-.4 28 26.4 28zm33.3-17.5a9.1 9.1 0 1 1 0-18.2 9.1 9.1 0 0 1 0 18.2z" fill="url(#py2)"/></svg>`,
  postgresql: `<svg width="28" height="28" viewBox="0 0 256 256"><path fill="#336791" d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0z"/><path fill="#fff" d="M128 32c-35 0-63 24-71 57l38 12c4-14 17-24 33-24 19 0 35 16 35 35 0 7-2 13-6 18l33 21c7-11 11-25 11-39 0-44-36-80-73-80z"/></svg>`,
  aws: `<svg width="28" height="28" viewBox="0 0 256 154"><path fill="#FF9900" d="M128 153.3c-41 0-77.8-15.6-104.5-41.5-2.7-2.6-1.5-6.2 2-4.6 30.5 13.8 65.5 21.8 102.5 21.8 38 0 73.8-8.4 105.1-23 3.6-1.7 5.1 1.9 2.2 4.6-27.1 26.3-64.8 42.7-107.3 42.7z"/><path fill="#232F3E" d="M47.7 53.6c-4.4 0-7.8 1.1-10.1 3.2-2.3 2.1-3.5 5.2-3.5 9.3 0 8.3 4.8 12.8 14.5 12.8 3.8 0 7.3-.8 10.5-2.5V59c-3.1-3.6-6.9-5.4-11.4-5.4z"/></svg>`,
  docker: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#0db7ed"><path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186"/></svg>`,
  default: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0284C7" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`
};

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Subsystem Modules
  initNavbar();
  initServices();
  initPortfolio();
  initCareers();
  initContact();
  initAdminPortal();
  initAnimations();

  // 2. Render Tech Stack Matrix
  renderTechStack();

  // 3. Render Industries We Serve
  renderIndustries();

  // 4. Render Development Process
  renderProcess();

  // 5. Render Why Choose Us Pillars
  renderWhyChooseUs();

  // 6. Render Leadership Team
  renderTeam();

  // 7. Render Testimonials
  renderTestimonials();

  // 8. Wire Up Interactive Featured Service Tabs
  initFeaturedServiceSwitch();

  // 9. Wire Up About Us Interactive Values Tabs
  initAboutTabs();

  // 10. Wire Up Legal Modals (Privacy, Terms, Cookies)
  initLegalModals();

  // 11. Bind "Start a Project" and CTA Jump Buttons
  document.querySelectorAll(".js-jump-contact").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    });
  });

  // 12. Current year update
  const yearEl = document.getElementById("current-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// Render Tech Stack Categories & Filtering
function renderTechStack() {
  const container = document.getElementById("tech-stack-grid");
  const tabButtons = document.querySelectorAll(".tech-tab-btn");
  if (!container) return;

  let activeCategory = "frontend";

  const render = () => {
    const list = TECH_STACK[activeCategory] || TECH_STACK.frontend;
    container.innerHTML = list.map(item => {
      const iconSvg = TECH_ICONS[item.icon] || TECH_ICONS.default;
      return `
        <div class="tech-card reveal-on-scroll">
          <div class="tech-card__icon">${iconSvg}</div>
          <div class="tech-card__name">${item.name}</div>
          <div class="tech-card__tag">${item.category}</div>
          <span style="font-size: 0.68rem; color: var(--color-accent-sky); font-weight: 700; margin-top: 0.25rem; text-transform: uppercase;">
            ${item.level}
          </span>
        </div>
      `;
    }).join("");
  };

  render();

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("tab-btn--active"));
      btn.classList.add("tab-btn--active");
      activeCategory = btn.getAttribute("data-category") || "frontend";
      render();
    });
  });
}

// Render Industries We Serve
function renderIndustries() {
  const container = document.getElementById("industries-grid");
  if (!container) return;

  container.innerHTML = INDUSTRIES_DATA.map(ind => {
    const iconSvg = INDUSTRY_ICONS[ind.icon] || INDUSTRY_ICONS["activity"];
    return `
      <div class="card card--interactive reveal-on-scroll" style="display: flex; flex-direction: column;">
        <div style="width: 48px; height: 48px; border-radius: var(--radius-lg); background: rgba(2,132,199,0.08); color: var(--color-accent-sky); display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;">
          ${iconSvg}
        </div>
        <h3 style="font-size: 1.15rem; color: var(--color-primary-900); margin-bottom: 0.5rem;">${ind.title}</h3>
        <p style="font-size: 0.875rem; color: var(--color-text-muted); line-height: 1.6; margin-bottom: 1.25rem; flex-grow: 1;">
          ${ind.desc}
        </p>
        <div style="margin-top: auto; font-size: 0.75rem; font-weight: 700; color: var(--color-accent-sky); text-transform: uppercase; letter-spacing: 0.04em;">
          Enterprise Solutions Ready &rarr;
        </div>
      </div>
    `;
  }).join("");
}

// Render Development Process
function renderProcess() {
  const container = document.getElementById("process-grid");
  if (!container) return;

  container.innerHTML = PROCESS_STEPS.map(p => `
    <div class="process-card reveal-on-scroll">
      <div class="process-card__number">${p.step}</div>
      <div class="process-card__subtitle">${p.subtitle}</div>
      <h3 class="process-card__title">${p.title}</h3>
      <p class="process-card__desc">${p.desc}</p>
    </div>
  `).join("");
}

// Render Why Choose Us Pillars
function renderWhyChooseUs() {
  const container = document.getElementById("why-choose-grid");
  if (!container) return;

  container.innerHTML = WHY_CHOOSE_US.map(w => `
    <div class="card reveal-on-scroll" style="display: flex; flex-direction: column;">
      <div style="width: 44px; height: 44px; border-radius: var(--radius-md); background: rgba(6,182,212,0.1); color: var(--color-accent-sky); display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </div>
      <h3 style="font-size: 1.1rem; color: var(--color-primary-900); margin-bottom: 0.4rem;">${w.title}</h3>
      <p style="font-size: 0.875rem; color: var(--color-text-muted); line-height: 1.6;">${w.desc}</p>
    </div>
  `).join("");
}

// Render Team Members
function renderTeam() {
  const container = document.getElementById("team-grid");
  if (!container) return;

  container.innerHTML = TEAM_DATA.map(member => `
    <div class="card reveal-on-scroll" style="text-align: center; display: flex; flex-direction: column; align-items: center;">
      <div style="width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg, #0f1c3f 0%, #0284c7 100%); color: #ffffff; display: flex; align-items: center; justify-content: center; font-size: 1.75rem; font-weight: 800; font-family: var(--font-heading); margin-bottom: 1rem; border: 3px solid #ffffff; box-shadow: var(--shadow-md);">
        ${member.name.split(" ").map(n => n[0]).join("")}
      </div>
      <h3 style="font-size: 1.2rem; color: var(--color-primary-900); margin-bottom: 0.2rem;">${member.name}</h3>
      <div style="font-size: 0.8rem; font-weight: 700; color: var(--color-accent-sky); margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.04em;">
        ${member.role}
      </div>
      <p style="font-size: 0.85rem; color: var(--color-text-muted); line-height: 1.5; margin-bottom: 1rem;">
        ${member.bio}
      </p>
      <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; justify-content: center; margin-top: auto;">
        ${member.expertise.map(tag => `
          <span style="font-size: 0.7rem; background: var(--color-bg-surface-subtle); color: var(--color-text-subtle); padding: 0.2rem 0.5rem; border-radius: var(--radius-sm); font-weight: 600;">
            ${tag}
          </span>
        `).join("")}
      </div>
    </div>
  `).join("");
}

// Render Testimonials
function renderTestimonials() {
  const container = document.getElementById("testimonials-grid");
  if (!container) return;

  container.innerHTML = TESTIMONIALS_DATA.map(t => `
    <div class="card reveal-on-scroll" style="display: flex; flex-direction: column; background: #ffffff;">
      <div style="display: flex; gap: 3px; color: #f59e0b; margin-bottom: 1rem;">
        ${[1, 2, 3, 4, 5].map(() => `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
        `).join("")}
      </div>
      <p style="font-size: 0.95rem; color: var(--color-text-main); font-style: italic; line-height: 1.7; margin-bottom: 1.5rem; flex-grow: 1;">
        "${t.quote}"
      </p>
      <div style="display: flex; align-items: center; gap: 0.75rem; border-top: 1px solid var(--color-border-light); padding-top: 1rem;">
        <div style="width: 42px; height: 42px; border-radius: 50%; background: var(--color-primary-900); color: #ffffff; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.9rem;">
          ${t.author.split(" ").map(n => n[0]).join("")}
        </div>
        <div>
          <div style="font-weight: 700; color: var(--color-primary-900); font-size: 0.9rem;">${t.author}</div>
          <div style="font-size: 0.75rem; color: var(--color-text-subtle);">${t.role}, ${t.company}</div>
        </div>
      </div>
    </div>
  `).join("");
}

// Interactive Featured Services Switcher (Software Dev vs Cloud vs AI)
function initFeaturedServiceSwitch() {
  const tabBtns = document.querySelectorAll(".featured-tab-btn");
  const showcaseTitle = document.getElementById("featured-title");
  const showcaseDesc = document.getElementById("featured-desc");
  const showcaseFeatures = document.getElementById("featured-features");
  const showcaseTech = document.getElementById("featured-tech");
  const showcaseActionBtn = document.getElementById("featured-cta-btn");

  const FEATURED_DATA = {
    software: {
      title: "Custom Enterprise Software Development",
      desc: "Build scalable software products tailored to your intricate business workflows, with high throughput and strict data isolation.",
      features: [
        "Scalable modular architecture & microservices",
        "Encrypted REST & GraphQL API endpoints",
        "Automated CI/CD testing with 90%+ code coverage",
        "High-concurrency database integration",
        "Enterprise single sign-on (SSO) & RBAC security"
      ],
      tech: ["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "Docker"],
      serviceName: "Software Development"
    },
    cloud: {
      title: "Enterprise Cloud Migration & Scalability",
      desc: "Elastic multi-region infrastructure architectures on AWS and Azure built with Infrastructure as Code for zero unplanned downtime.",
      features: [
        "Zero-downtime database and asset migration",
        "Kubernetes container orchestration & autoscaling",
        "Infrastructure as Code (Terraform / CloudFormation)",
        "Disaster recovery and real-time replication",
        "Cloud cost optimization audits (saving 30-40% on AWS/Azure)"
      ],
      tech: ["AWS", "Microsoft Azure", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
      serviceName: "Cloud Solutions"
    },
    ai: {
      title: "Enterprise AI & Intelligent Process Automation",
      desc: "Deploy private LLM copilots, automated document intelligence, and predictive analytics that reduce operational cycle times by up to 80%.",
      features: [
        "Private on-premise or VPC LLM deployment",
        "Retrieval-Augmented Generation (RAG) over company knowledge",
        "Intelligent document parsing & automated OCR extraction",
        "Continuous human-in-the-loop audit verification",
        "Real-time event anomaly detection pipelines"
      ],
      tech: ["Python", "PyTorch", "OpenAI API", "LangChain", "Vector DBs", "FastAPI"],
      serviceName: "AI & Automation"
    }
  };

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("tab-btn--active"));
      btn.classList.add("tab-btn--active");

      const key = btn.getAttribute("data-featured") || "software";
      const data = FEATURED_DATA[key];
      if (!data) return;

      if (showcaseTitle) showcaseTitle.textContent = data.title;
      if (showcaseDesc) showcaseDesc.textContent = data.desc;
      if (showcaseFeatures) {
        showcaseFeatures.innerHTML = data.features.map(f => `
          <li class="checklist__item">
            <span class="checklist__icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </span>
            <span>${f}</span>
          </li>
        `).join("");
      }
      if (showcaseTech) {
        showcaseTech.innerHTML = data.tech.map(t => `
          <span style="background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.15); padding: 0.35rem 0.8rem; border-radius: var(--radius-sm); font-size: 0.8rem; font-family: var(--font-mono); color: #ffffff;">
            ${t}
          </span>
        `).join("");
      }

      if (showcaseActionBtn) {
        showcaseActionBtn.onclick = () => {
          const serviceSelect = document.getElementById("contact-service");
          if (serviceSelect) serviceSelect.value = data.serviceName;
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        };
      }
    });
  });
}

// About Us Tab Switcher (Mission, Vision, Values, Story)
function initAboutTabs() {
  const tabs = document.querySelectorAll(".about-tab-btn");
  const contentEl = document.getElementById("about-tab-content");

  const ABOUT_CONTENT = {
    story: {
      title: "Engineered for Technical Authority & Real Results",
      text: "Novatech was founded by senior systems architects who saw that modern enterprises struggled with agency bloat, fragile legacy codebases, and missed delivery deadlines. We operate as an elite engineering force, combining technical mastery with transparent collaboration to build resilient digital systems."
    },
    mission: {
      title: "Our Mission: Transforming Ideas Into High-Performance Software",
      text: "To engineer scalable, secure, and intuitive digital solutions that solve real business problems, drive sustainable profitability, and give our clients an unbeatable competitive advantage in their respective industries."
    },
    vision: {
      title: "Our Vision: The Gold Standard in Enterprise Engineering",
      text: "To become the world's most trusted software architecture and digital transformation partner for forward-looking enterprises and high-growth ventures."
    },
    values: {
      title: "Our Core Pillars of Excellence",
      text: "<strong>Innovation:</strong> Continuously pioneering modern architectures.<br><strong>Quality:</strong> Zero compromises on code standards, automated testing, and security.<br><strong>Transparency:</strong> Complete visibility into sprints, code repos, and budgets.<br><strong>Customer Success:</strong> We measure our engineering by your bottom-line impact."
    }
  };

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("tab-btn--active"));
      tab.classList.add("tab-btn--active");

      const key = tab.getAttribute("data-tab") || "story";
      const item = ABOUT_CONTENT[key];
      if (item && contentEl) {
        contentEl.innerHTML = `
          <h4 style="font-size: 1.25rem; color: var(--color-primary-900); margin-bottom: 0.75rem;">${item.title}</h4>
          <p style="font-size: 1rem; color: var(--color-text-muted); line-height: 1.7;">${item.text}</p>
        `;
      }
    });
  });
}

// Legal Modals for Privacy, Terms, Cookies
function initLegalModals() {
  const modal = document.getElementById("legal-modal");
  const modalTitle = document.getElementById("legal-modal-title");
  const modalBody = document.getElementById("legal-modal-body");
  const modalClose = document.getElementById("legal-modal-close");

  const LEGAL_DOCS = {
    privacy: {
      title: "Privacy Policy",
      content: `
        <p>Last Updated: 2026. Novatech Solutions is committed to safeguarding client confidentiality and data security.</p>
        <p><strong>1. Information Collection:</strong> We only collect contact information, company names, and technical requirements submitted through our direct inquiry forms.</p>
        <p><strong>2. Use of Data:</strong> Data submitted is solely utilized to evaluate project feasibility and communicate regarding enterprise software engagements.</p>
        <p><strong>3. Zero Third-Party Sharing:</strong> We never sell, rent, or trade client information to external third parties or advertisers.</p>
      `
    },
    terms: {
      title: "Terms & Conditions",
      content: `
        <p>Welcome to Novatech Solutions. By accessing this website, you acknowledge adherence to standard commercial engagement guidelines.</p>
        <p><strong>1. Intellectual Property:</strong> All website graphics, code samples, and architectural demonstrations are property of Novatech Digital Solutions Inc.</p>
        <p><strong>2. Client Ownership:</strong> In active client engagements, all bespoke software deliverables and repository code are 100% owned by the client upon project completion.</p>
      `
    },
    cookies: {
      title: "Cookie Policy",
      content: `
        <p>Novatech Solutions uses essential session storage and local cookies strictly for interface preferences and form state persistence.</p>
        <p>We do not operate invasive cross-site tracking cookies. You may clear your local browser storage at any time.</p>
      `
    }
  };

  document.querySelectorAll(".js-open-legal").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const docKey = link.getAttribute("data-doc") || "privacy";
      const doc = LEGAL_DOCS[docKey];
      if (doc && modal && modalTitle && modalBody) {
        modalTitle.textContent = doc.title;
        modalBody.innerHTML = doc.content + `
          <div style="border-top: 1px solid var(--color-border-light); padding-top: 1.25rem; margin-top: 1.5rem; text-align: right;">
            <button type="button" class="btn btn--primary js-close-legal">I Understand</button>
          </div>
        `;
        modal.classList.add("is-open");
        document.body.style.overflow = "hidden";

        modalBody.querySelector(".js-close-legal")?.addEventListener("click", () => {
          modal.classList.remove("is-open");
          document.body.style.overflow = "";
        });
      }
    });
  });

  modalClose?.addEventListener("click", () => {
    modal?.classList.remove("is-open");
    document.body.style.overflow = "";
  });

  modal?.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("is-open");
      document.body.style.overflow = "";
    }
  });
}
