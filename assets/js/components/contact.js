/**
 * CONTACT ENQUIRY ENGINE & VALIDATION COMPONENT
 */

import { AppState } from "../state.js";

export function initContact() {
  const form = document.getElementById("contact-form");
  const budgetPills = document.querySelectorAll(".budget-pill");
  const toastContainer = document.getElementById("toast-container");

  if (!form) return;

  // Handle budget pill selection
  budgetPills.forEach(pill => {
    pill.addEventListener("click", () => {
      budgetPills.forEach(p => p.classList.remove("is-selected"));
      pill.classList.add("is-selected");
      const radio = pill.querySelector("input[type='radio']");
      if (radio) radio.checked = true;
    });
  });

  // Validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

  const showToast = (message, type = "success") => {
    if (!toastContainer) return;
    const toast = document.createElement("div");
    toast.className = `toast toast--${type}`;
    toast.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        ${type === "success" 
          ? '<polyline points="20 6 9 17 4 12"></polyline>' 
          : '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>'}
      </svg>
      <span>${message}</span>
    `;
    toastContainer.appendChild(toast);
    setTimeout(() => toast.classList.add("is-active"), 20);
    setTimeout(() => {
      toast.classList.remove("is-active");
      setTimeout(() => toast.remove(), 300);
    }, 4500);
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("contact-name");
    const companyInput = document.getElementById("contact-company");
    const emailInput = document.getElementById("contact-email");
    const phoneInput = document.getElementById("contact-phone");
    const serviceInput = document.getElementById("contact-service");
    const messageInput = document.getElementById("contact-message");
    const submitBtn = document.getElementById("contact-submit-btn");

    let isValid = true;

    // Reset error states
    form.querySelectorAll(".form-control, .form-textarea").forEach(el => el.classList.remove("is-invalid"));
    form.querySelectorAll(".form-feedback").forEach(el => el.classList.remove("is-visible"));

    // Validate Name
    if (!nameInput.value.trim()) {
      markInvalid(nameInput, "name-feedback", "Full Name is required.");
      isValid = false;
    }

    // Validate Email
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
      markInvalid(emailInput, "email-feedback", "Please enter a valid business email address.");
      isValid = false;
    }

    // Validate Phone (optional but must be valid if entered)
    if (phoneInput.value.trim() && !phoneRegex.test(phoneInput.value.trim())) {
      markInvalid(phoneInput, "phone-feedback", "Please enter a valid phone number.");
      isValid = false;
    }

    // Validate Message
    if (!messageInput.value.trim() || messageInput.value.trim().length < 15) {
      markInvalid(messageInput, "message-feedback", "Please provide a brief description (at least 15 characters).");
      isValid = false;
    }

    if (!isValid) return;

    // Selected budget
    const selectedBudgetEl = form.querySelector("input[name='budget']:checked");
    const selectedBudget = selectedBudgetEl ? selectedBudgetEl.value : "Not Specified";

    // Set button loading state
    const originalBtnContent = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="animation: spin 1s linear infinite;">
        <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
        <path d="M12 2a10 10 0 0 1 10 10"></path>
      </svg>
      Encrypting & Submitting...
    `;

    // Simulate backend submission network delay
    await new Promise(res => setTimeout(res, 900));

    // Save into state
    const newEnquiry = AppState.addEnquiry({
      fullName: nameInput.value,
      companyName: companyInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
      service: serviceInput.value,
      budget: selectedBudget,
      message: messageInput.value
    });

    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnContent;

    // Show celebratory response
    showToast(`Thank you, ${newEnquiry.fullName}! Your inquiry (${newEnquiry.id}) was recorded. We will contact you shortly.`, "success");

    form.reset();
    budgetPills.forEach(p => p.classList.remove("is-selected"));
    budgetPills[0]?.classList.add("is-selected");

    // Replace form area with a nice success banner or scroll to top of form
    const formCard = document.getElementById("contact-card-body");
    if (formCard) {
      const originalHtml = formCard.innerHTML;
      formCard.innerHTML = `
        <div style="text-align: center; padding: 3rem 1.5rem;">
          <div style="width: 68px; height: 68px; border-radius: 50%; background: #ecfdf5; color: #10b981; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 1.5rem;">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <h3 style="font-size: 1.6rem; color: var(--color-primary-900); margin-bottom: 0.5rem;">Enquiry Successfully Logged!</h3>
          <p style="color: var(--color-text-muted); max-width: 440px; margin: 0 auto 1.5rem; line-height: 1.6;">
            Your project enquiry reference is <strong style="color: var(--color-primary-900); font-family: var(--font-mono);">${newEnquiry.id}</strong>. A Senior Solutions Architect will review your technical specifications and respond within 24 hours.
          </p>
          <div style="background: var(--color-bg-surface-subtle); padding: 1rem; border-radius: var(--radius-md); max-width: 400px; margin: 0 auto 1.75rem; text-align: left; font-size: 0.85rem; border: 1px solid var(--color-border-light);">
            <div><strong>Selected Service:</strong> ${newEnquiry.service}</div>
            <div><strong>Budget Tier:</strong> ${newEnquiry.budget}</div>
            <div><strong>Response Channel:</strong> ${newEnquiry.email}</div>
          </div>
          <button type="button" class="btn btn--secondary js-reset-contact-form">
            Submit Another Inquiry
          </button>
        </div>
      `;

      formCard.querySelector(".js-reset-contact-form")?.addEventListener("click", () => {
        formCard.innerHTML = originalHtml;
        initContact(); // Rebind handlers
      });
    }
  });

  function markInvalid(inputEl, feedbackId, message) {
    inputEl.classList.add("is-invalid");
    const feedbackEl = document.getElementById(feedbackId);
    if (feedbackEl) {
      feedbackEl.textContent = message;
      feedbackEl.classList.add("is-visible");
    }
  }
}
