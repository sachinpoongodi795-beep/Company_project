/**
 * CAREERS COMPONENT & JOB APPLICATION MODAL
 */

import { CAREERS_DATA } from "../config.js";
import { AppState } from "../state.js";

export function initCareers() {
  const container = document.getElementById("careers-grid");
  const modal = document.getElementById("job-modal");
  const modalTitle = document.getElementById("job-modal-title");
  const modalBody = document.getElementById("job-modal-body");
  const modalClose = document.getElementById("job-modal-close");

  if (!container) return;

  container.innerHTML = CAREERS_DATA.map(job => `
    <div class="card reveal-on-scroll" style="display: flex; flex-direction: column; height: 100%;">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem; margin-bottom: 0.75rem;">
        <span class="badge" style="background: rgba(2,132,199,0.1); color: var(--color-accent-sky); font-size: 0.75rem; font-weight: 700; padding: 0.25rem 0.65rem; border-radius: var(--radius-full); text-transform: uppercase;">
          ${job.department}
        </span>
        <span style="font-size: 0.75rem; color: var(--color-text-subtle); font-weight: 600;">
          ${job.type}
        </span>
      </div>

      <h3 style="font-size: 1.2rem; color: var(--color-primary-900); margin-bottom: 0.5rem;">${job.title}</h3>
      
      <div style="font-size: 0.8rem; color: var(--color-text-muted); display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; flex-wrap: wrap;">
        <span>📍 ${job.location}</span>
        <span>💼 ${job.experience}</span>
      </div>

      <p style="font-size: 0.875rem; color: var(--color-text-muted); line-height: 1.6; margin-bottom: 1.25rem; flex-grow: 1;">
        ${job.desc}
      </p>

      <div style="background: var(--color-bg-surface-subtle); padding: 0.75rem 1rem; border-radius: var(--radius-md); font-size: 0.8rem; font-weight: 700; color: var(--color-primary-900); margin-bottom: 1.25rem;">
        💰 ${job.salary}
      </div>

      <div style="display: flex; gap: 0.75rem;">
        <button type="button" class="btn btn--block btn--primary js-apply-job" data-id="${job.id}">
          Apply for Role
        </button>
      </div>
    </div>
  `).join("");

  // Modal open
  container.addEventListener("click", (e) => {
    const btn = e.target.closest(".js-apply-job");
    if (!btn) return;
    const jobId = btn.getAttribute("data-id");
    const job = CAREERS_DATA.find(j => j.id === jobId);
    if (job) openApplicationModal(job);
  });

  const openApplicationModal = (job) => {
    if (!modal || !modalTitle || !modalBody) return;

    modalTitle.textContent = `Apply for: ${job.title}`;
    modalBody.innerHTML = `
      <div style="margin-bottom: 1.5rem; background: var(--color-bg-surface-subtle); padding: 1rem; border-radius: var(--radius-md);">
        <div style="font-size: 0.85rem; color: var(--color-primary-900); font-weight: 600;">
          Department: ${job.department} &nbsp;|&nbsp; Location: ${job.location}
        </div>
      </div>

      <form id="job-apply-form" novalidate>
        <div class="form-group">
          <label class="form-label" for="app-name">Full Name *</label>
          <input type="text" id="app-name" class="form-control" placeholder="e.g. Maya Lin" required>
        </div>

        <div class="form-group">
          <label class="form-label" for="app-email">Email Address *</label>
          <input type="email" id="app-email" class="form-control" placeholder="maya@example.com" required>
        </div>

        <div class="form-group">
          <label class="form-label" for="app-phone">Phone Number *</label>
          <input type="tel" id="app-phone" class="form-control" placeholder="+1 (555) 000-0000" required>
        </div>

        <div class="form-group">
          <label class="form-label" for="app-portfolio">LinkedIn / GitHub / Portfolio URL</label>
          <input type="url" id="app-portfolio" class="form-control" placeholder="https://linkedin.com/in/username">
        </div>

        <div class="form-group">
          <label class="form-label" for="app-note">Brief Introduction & Experience</label>
          <textarea id="app-note" class="form-textarea" placeholder="Tell us about relevant systems you built..."></textarea>
        </div>

        <div id="app-error-msg" class="form-feedback" style="margin-bottom: 1rem;"></div>

        <div style="display: flex; justify-content: flex-end; gap: 1rem; border-top: 1px solid var(--color-border-light); padding-top: 1.25rem;">
          <button type="button" class="btn btn--secondary js-close-modal">Cancel</button>
          <button type="submit" class="btn btn--primary">Submit Application</button>
        </div>
      </form>
    `;

    modal.classList.add("is-open");
    document.body.style.overflow = "hidden";

    const form = modalBody.querySelector("#job-apply-form");
    const errorMsg = modalBody.querySelector("#app-error-msg");

    form?.addEventListener("submit", (ev) => {
      ev.preventDefault();
      const name = document.getElementById("app-name")?.value.trim();
      const email = document.getElementById("app-email")?.value.trim();
      const phone = document.getElementById("app-phone")?.value.trim();
      const portfolio = document.getElementById("app-portfolio")?.value.trim();
      const note = document.getElementById("app-note")?.value.trim();

      if (!name || !email || !phone) {
        if (errorMsg) {
          errorMsg.textContent = "Please fill in all required fields (Name, Email, and Phone).";
          errorMsg.classList.add("is-visible");
        }
        return;
      }

      AppState.addApplication(job.id, job.title, {
        fullName: name,
        email,
        phone,
        portfolioUrl: portfolio,
        coverNote: note
      });

      modalBody.innerHTML = `
        <div style="text-align: center; padding: 2rem 1rem;">
          <div style="width: 56px; height: 56px; border-radius: 50%; background: #ecfdf5; color: #10b981; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <h3 style="font-size: 1.5rem; color: var(--color-primary-900); margin-bottom: 0.5rem;">Application Received!</h3>
          <p style="color: var(--color-text-muted); max-width: 460px; margin: 0 auto 1.5rem;">
            Thank you, <strong>${name}</strong>. Our talent acquisition team has received your application for <strong>${job.title}</strong> and will follow up within 2 business days.
          </p>
          <button type="button" class="btn btn--primary js-close-modal">Done</button>
        </div>
      `;

      modalBody.querySelector(".js-close-modal")?.addEventListener("click", closeApplicationModal);
    });

    modalBody.querySelector(".js-close-modal")?.addEventListener("click", closeApplicationModal);
  };

  const closeApplicationModal = () => {
    modal?.classList.remove("is-open");
    document.body.style.overflow = "";
  };

  modalClose?.addEventListener("click", closeApplicationModal);
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) closeApplicationModal();
  });
}
