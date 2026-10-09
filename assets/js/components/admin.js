/**
 * ADMIN CMS & CRM LEAD MANAGEMENT PORTAL
 */

import { AppState } from "../state.js";

export function initAdminPortal() {
  const modal = document.getElementById("admin-modal");
  const modalBody = document.getElementById("admin-modal-body");
  const modalClose = document.getElementById("admin-modal-close");
  const triggers = document.querySelectorAll(".js-open-admin-portal");

  if (!modal || !modalBody) return;

  triggers.forEach(t => {
    t.addEventListener("click", (e) => {
      e.preventDefault();
      openPortal();
    });
  });

  const openPortal = () => {
    modal.classList.add("is-open");
    document.body.style.overflow = "hidden";
    renderView();
  };

  const closePortal = () => {
    modal.classList.remove("is-open");
    document.body.style.overflow = "";
  };

  modalClose?.addEventListener("click", closePortal);
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) closePortal();
  });

  function renderView() {
    if (!AppState.isAdminAuthenticated()) {
      renderLogin();
    } else {
      renderDashboard();
    }
  }

  function renderLogin() {
    modalBody.innerHTML = `
      <div class="admin-login-box">
        <div style="width: 52px; height: 52px; border-radius: var(--radius-lg); background: rgba(2,132,199,0.1); color: var(--color-accent-sky); display: inline-flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
        </div>
        <h3 style="font-size: 1.4rem; color: var(--color-primary-900); margin-bottom: 0.5rem;">Corporate Admin Portal</h3>
        <p style="color: var(--color-text-muted); font-size: 0.85rem; margin-bottom: 1.5rem;">
          Authenticate with administrative credentials to access live client enquiries, job applicants, and lead statuses.
        </p>

        <form id="admin-login-form">
          <div class="form-group" style="text-align: left;">
            <label class="form-label" for="admin-passcode">Master Access Passcode</label>
            <input type="password" id="admin-passcode" class="form-control" placeholder="Enter admin passcode" required autofocus>
            <div style="font-size: 0.75rem; color: var(--color-text-subtle); margin-top: 0.35rem;">
              (Demo passcode: <code style="font-family: var(--font-mono); color: var(--color-accent-sky); font-weight: 700;">admin2026</code>)
            </div>
          </div>

          <div id="admin-login-err" class="form-feedback" style="margin-bottom: 1rem;"></div>

          <button type="submit" class="btn btn--block btn--primary">
            Authenticate Session
          </button>
        </form>
      </div>
    `;

    const form = modalBody.querySelector("#admin-login-form");
    const errEl = modalBody.querySelector("#admin-login-err");

    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      const code = document.getElementById("admin-passcode")?.value.trim();
      if (AppState.loginAdmin(code)) {
        renderDashboard();
      } else {
        if (errEl) {
          errEl.textContent = "Invalid passcode. Please use 'admin2026'.";
          errEl.classList.add("is-visible");
        }
      }
    });
  }

  function renderDashboard() {
    let currentFilter = "All";
    let searchQuery = "";

    const drawContent = () => {
      const allEnquiries = AppState.getEnquiries();

      // Stats
      const totalCount = allEnquiries.length;
      const newCount = allEnquiries.filter(e => e.status === "New").length;
      const inProgressCount = allEnquiries.filter(e => e.status === "In Progress" || e.status === "Contacted").length;
      const convertedCount = allEnquiries.filter(e => e.status === "Converted").length;

      // Filtered records
      let filtered = allEnquiries;
      if (currentFilter !== "All") {
        filtered = filtered.filter(e => e.status === currentFilter);
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        filtered = filtered.filter(e => 
          (e.fullName && e.fullName.toLowerCase().includes(q)) ||
          (e.companyName && e.companyName.toLowerCase().includes(q)) ||
          (e.email && e.email.toLowerCase().includes(q)) ||
          (e.id && e.id.toLowerCase().includes(q)) ||
          (e.service && e.service.toLowerCase().includes(q))
        );
      }

      modalBody.innerHTML = `
        <div class="admin-stats-grid">
          <div class="admin-stat-card">
            <div class="admin-stat-card__val">${totalCount}</div>
            <div class="admin-stat-card__lbl">Total Inquiries</div>
          </div>
          <div class="admin-stat-card" style="border-left: 4px solid #3b82f6;">
            <div class="admin-stat-card__val" style="color: #2563eb;">${newCount}</div>
            <div class="admin-stat-card__lbl">New Leads</div>
          </div>
          <div class="admin-stat-card" style="border-left: 4px solid #10b981;">
            <div class="admin-stat-card__val" style="color: #10b981;">${inProgressCount}</div>
            <div class="admin-stat-card__lbl">Active Pipeline</div>
          </div>
          <div class="admin-stat-card" style="border-left: 4px solid #8b5cf6;">
            <div class="admin-stat-card__val" style="color: #7c3aed;">${convertedCount}</div>
            <div class="admin-stat-card__lbl">Converted Clients</div>
          </div>
        </div>

        <div class="admin-toolbar">
          <div class="admin-filter-group">
            <span style="font-size: 0.8rem; font-weight: 700; color: var(--color-text-subtle);">STATUS:</span>
            ${["All", "New", "Contacted", "In Progress", "Converted", "Closed"].map(status => `
              <button type="button" class="tab-btn ${currentFilter === status ? 'tab-btn--active' : ''} js-filter-status" data-status="${status}" style="padding: 0.35rem 0.8rem; font-size: 0.75rem;">
                ${status}
              </button>
            `).join("")}
          </div>

          <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
            <input type="text" id="admin-search-input" class="form-control" placeholder="Search by name, company, id..." value="${searchQuery}" style="width: 220px; padding: 0.45rem 0.75rem; font-size: 0.8rem;">
            <button type="button" class="btn btn--sm btn--secondary js-export-csv" title="Export to CSV">
              📥 Export CSV
            </button>
            <button type="button" class="btn btn--sm btn--secondary js-admin-logout" title="Log Out" style="color: #ef4444;">
              Logout
            </button>
          </div>
        </div>

        <div class="admin-table-container">
          <table class="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Client / Company</th>
                <th>Service Required</th>
                <th>Budget</th>
                <th>Date</th>
                <th>Status</th>
                <th style="text-align: right;">Action</th>
              </tr>
            </thead>
            <tbody>
              ${filtered.length === 0 ? `
                <tr>
                  <td colspan="7" style="text-align: center; padding: 2.5rem; color: var(--color-text-subtle);">
                    No enquiries match the current criteria.
                  </td>
                </tr>
              ` : filtered.map(item => `
                <tr data-id="${item.id}">
                  <td><code style="font-family: var(--font-mono); font-weight: 700; color: var(--color-accent-sky);">${item.id}</code></td>
                  <td>
                    <strong>${item.fullName}</strong>
                    <div style="font-size: 0.75rem; color: var(--color-text-subtle);">${item.companyName} &bull; ${item.email}</div>
                  </td>
                  <td><span class="badge" style="background: var(--color-bg-surface-subtle); font-size: 0.75rem; color: var(--color-text-main); font-weight: 600;">${item.service}</span></td>
                  <td><span style="font-family: var(--font-mono); font-size: 0.75rem;">${item.budget}</span></td>
                  <td style="font-size: 0.75rem; color: var(--color-text-subtle);">${new Date(item.createdAt).toLocaleDateString()}</td>
                  <td>
                    <select class="form-select js-change-status" data-id="${item.id}" style="padding: 0.25rem 0.5rem; font-size: 0.75rem; border-radius: var(--radius-sm); font-weight: 600;">
                      ${["New", "Contacted", "In Progress", "Converted", "Closed"].map(st => `
                        <option value="${st}" ${item.status === st ? 'selected' : ''}>${st}</option>
                      `).join("")}
                    </select>
                  </td>
                  <td style="text-align: right;">
                    <button type="button" class="btn btn--sm btn--secondary js-view-lead-detail" data-id="${item.id}">
                      Details
                    </button>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>

        <div id="lead-drawer-container"></div>
      `;

      // Search event
      const searchInput = modalBody.querySelector("#admin-search-input");
      searchInput?.addEventListener("input", (e) => {
        searchQuery = e.target.value;
        drawContent();
      });

      // Filter events
      modalBody.querySelectorAll(".js-filter-status").forEach(btn => {
        btn.addEventListener("click", () => {
          currentFilter = btn.getAttribute("data-status") || "All";
          drawContent();
        });
      });

      // Status change event
      modalBody.querySelectorAll(".js-change-status").forEach(sel => {
        sel.addEventListener("change", (e) => {
          const id = sel.getAttribute("data-id");
          const newStatus = e.target.value;
          AppState.updateEnquiryStatus(id, newStatus);
          drawContent();
        });
      });

      // View details event
      modalBody.querySelectorAll(".js-view-lead-detail").forEach(btn => {
        btn.addEventListener("click", () => {
          const id = btn.getAttribute("data-id");
          const enquiry = AppState.getEnquiries().find(e => e.id === id);
          if (enquiry) renderLeadDetail(enquiry);
        });
      });

      // Export CSV
      modalBody.querySelector(".js-export-csv")?.addEventListener("click", () => {
        const csvContent = AppState.exportEnquiriesCSV();
        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", `Novatech_Enquiries_${new Date().toISOString().slice(0,10)}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });

      // Logout
      modalBody.querySelector(".js-admin-logout")?.addEventListener("click", () => {
        AppState.logoutAdmin();
        renderView();
      });
    };

    function renderLeadDetail(enquiry) {
      const container = modalBody.querySelector("#lead-drawer-container");
      if (!container) return;

      container.innerHTML = `
        <div class="enquiry-detail-view">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; border-bottom: 1px solid var(--color-border-medium); padding-bottom: 0.75rem;">
            <h4 style="font-size: 1.1rem; color: var(--color-primary-900); margin: 0;">
              Lead File: ${enquiry.fullName} (${enquiry.id})
            </h4>
            <button type="button" class="btn btn--sm btn--secondary js-close-lead-detail">Close File</button>
          </div>

          <div class="enquiry-meta-grid">
            <div class="enquiry-meta-item">
              <label>Company</label>
              <span>${enquiry.companyName || 'Not specified'}</span>
            </div>
            <div class="enquiry-meta-item">
              <label>Email Address</label>
              <span><a href="mailto:${enquiry.email}">${enquiry.email}</a></span>
            </div>
            <div class="enquiry-meta-item">
              <label>Phone Number</label>
              <span>${enquiry.phone || 'N/A'}</span>
            </div>
            <div class="enquiry-meta-item">
              <label>Target Service</label>
              <span>${enquiry.service}</span>
            </div>
            <div class="enquiry-meta-item">
              <label>Budget Tier</label>
              <span>${enquiry.budget}</span>
            </div>
            <div class="enquiry-meta-item">
              <label>Logged At</label>
              <span>${new Date(enquiry.createdAt).toLocaleString()}</span>
            </div>
          </div>

          <div style="margin-bottom: 1.25rem;">
            <label style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--color-text-subtle); text-transform: uppercase; margin-bottom: 0.35rem;">
              Client Project Message
            </label>
            <div style="background: #ffffff; padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--color-border-light); font-size: 0.9rem; line-height: 1.6; color: var(--color-text-main);">
              ${enquiry.message}
            </div>
          </div>

          <div style="display: flex; gap: 0.75rem; align-items: center;">
            <a href="mailto:${enquiry.email}?subject=Novatech%20Solutions%20Follow-up%20(${enquiry.id})" class="btn btn--primary btn--sm">
              Reply via Email
            </a>
            <button type="button" class="btn btn--secondary btn--sm js-delete-lead" data-id="${enquiry.id}" style="color: var(--color-danger);">
              Delete Lead
            </button>
          </div>
        </div>
      `;

      container.querySelector(".js-close-lead-detail")?.addEventListener("click", () => {
        container.innerHTML = "";
      });

      container.querySelector(".js-delete-lead")?.addEventListener("click", () => {
        if (confirm(`Are you sure you want to delete lead ${enquiry.id}?`)) {
          AppState.deleteEnquiry(enquiry.id);
          drawContent();
        }
      });
    }

    drawContent();

    // Re-render when new inquiry arrives live
    window.addEventListener("novatech:enquiry-added", () => {
      drawContent();
    });
  }
}
