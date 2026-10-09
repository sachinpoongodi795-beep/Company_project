/**
 * STATE MANAGEMENT & ENQUIRY PERSISTENCE ENGINE
 * Manages client leads, enquiry workflow states, and Admin CMS persistence.
 */

const STORAGE_KEY_ENQUIRIES = "novatech_enquiries_v1";
const STORAGE_KEY_APPLICATIONS = "novatech_job_applications_v1";
const STORAGE_KEY_ADMIN_AUTH = "novatech_admin_session";

// Seed realistic enterprise client enquiries so the Admin CMS has ready-to-test data
const SEED_ENQUIRIES = [
  {
    id: "ENQ-8902",
    createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
    fullName: "Alexander Wright",
    companyName: "Vanguard Global Logistics",
    email: "a.wright@vanguard-logistics.com",
    phone: "+1 (312) 555-0199",
    service: "Software Development",
    budget: "$50,000 – $100,000",
    timeline: "3–6 Months",
    message: "We need an enterprise fleet telematics dashboard to track 1,200 vehicles in real-time with automated dispatch route optimization and fuel telemetry integration.",
    status: "New", // New | Contacted | In Progress | Converted | Closed
    notes: "Priority enterprise lead. Needs SOC-2 documentation."
  },
  {
    id: "ENQ-8891",
    createdAt: new Date(Date.now() - 3600000 * 28).toISOString(),
    fullName: "Dr. Maya Patel",
    companyName: "Horizon Health Systems",
    email: "dr.patel@horizonhealth.org",
    phone: "+1 (415) 555-0144",
    service: "AI & Automation",
    budget: "$100,000+",
    timeline: "Immediate (< 3 Months)",
    message: "Looking for an automated medical record summarizer using private LLM deployment compliant with HIPAA standards for clinical patient triage.",
    status: "In Progress",
    notes: "Initial discovery call conducted with CTO. Technical scoping meeting booked for next Tuesday."
  },
  {
    id: "ENQ-8840",
    createdAt: new Date(Date.now() - 3600000 * 72).toISOString(),
    fullName: "Marcus Thorne",
    companyName: "Aura Commerce UK",
    email: "m.thorne@auraretail.co.uk",
    phone: "+44 20 7946 0912",
    service: "E-Commerce",
    budget: "$25,000 – $50,000",
    timeline: "3–6 Months",
    message: "Migrating legacy Magento store to Next.js Headless Shopify Plus setup with multi-currency EU checkout support.",
    status: "Contacted",
    notes: "Sent proposal deck and case study on headless commerce."
  }
];

class StateManager {
  constructor() {
    this.initStorage();
  }

  initStorage() {
    if (!localStorage.getItem(STORAGE_KEY_ENQUIRIES)) {
      localStorage.setItem(STORAGE_KEY_ENQUIRIES, JSON.stringify(SEED_ENQUIRIES));
    }
    if (!localStorage.getItem(STORAGE_KEY_APPLICATIONS)) {
      localStorage.setItem(STORAGE_KEY_APPLICATIONS, JSON.stringify([]));
    }
  }

  // --- ENQUIRIES API ---
  getEnquiries() {
    try {
      const data = localStorage.getItem(STORAGE_KEY_ENQUIRIES);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error("Failed to parse enquiries", e);
      return [];
    }
  }

  addEnquiry(formData) {
    const enquiries = this.getEnquiries();
    const newId = `ENQ-${Math.floor(1000 + Math.random() * 9000)}`;
    const newEntry = {
      id: newId,
      createdAt: new Date().toISOString(),
      fullName: formData.fullName?.trim() || "Anonymous",
      companyName: formData.companyName?.trim() || "Independent",
      email: formData.email?.trim(),
      phone: formData.phone?.trim() || "N/A",
      service: formData.service || "General Inquiry",
      budget: formData.budget || "Not Specified",
      timeline: formData.timeline || "Flexible",
      message: formData.message?.trim(),
      status: "New",
      notes: "Submitted via website contact form"
    };

    enquiries.unshift(newEntry);
    localStorage.setItem(STORAGE_KEY_ENQUIRIES, JSON.stringify(enquiries));
    window.dispatchEvent(new CustomEvent("novatech:enquiry-added", { detail: newEntry }));
    return newEntry;
  }

  updateEnquiryStatus(id, newStatus, notes) {
    const enquiries = this.getEnquiries();
    const index = enquiries.findIndex(e => e.id === id);
    if (index !== -1) {
      enquiries[index].status = newStatus;
      if (notes !== undefined) {
        enquiries[index].notes = notes;
      }
      enquiries[index].updatedAt = new Date().toISOString();
      localStorage.setItem(STORAGE_KEY_ENQUIRIES, JSON.stringify(enquiries));
      window.dispatchEvent(new CustomEvent("novatech:enquiries-updated", { detail: enquiries }));
      return enquiries[index];
    }
    return null;
  }

  deleteEnquiry(id) {
    let enquiries = this.getEnquiries();
    enquiries = enquiries.filter(e => e.id !== id);
    localStorage.setItem(STORAGE_KEY_ENQUIRIES, JSON.stringify(enquiries));
    window.dispatchEvent(new CustomEvent("novatech:enquiries-updated", { detail: enquiries }));
  }

  exportEnquiriesCSV() {
    const enquiries = this.getEnquiries();
    if (!enquiries.length) return "";

    const headers = ["ID", "Date", "Full Name", "Company", "Email", "Phone", "Service", "Budget", "Status", "Message"];
    const rows = enquiries.map(e => [
      `"${e.id}"`,
      `"${new Date(e.createdAt).toLocaleString()}"`,
      `"${(e.fullName || "").replace(/"/g, '""')}"`,
      `"${(e.companyName || "").replace(/"/g, '""')}"`,
      `"${e.email || ""}"`,
      `"${e.phone || ""}"`,
      `"${e.service || ""}"`,
      `"${e.budget || ""}"`,
      `"${e.status || ""}"`,
      `"${(e.message || "").replace(/"/g, '""').replace(/\n/g, ' ')}"`
    ]);

    return [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
  }

  // --- JOB APPLICATIONS API ---
  getApplications() {
    try {
      const data = localStorage.getItem(STORAGE_KEY_APPLICATIONS);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  addApplication(jobId, jobTitle, applicantData) {
    const applications = this.getApplications();
    const appEntry = {
      id: `APP-${Math.floor(1000 + Math.random() * 9000)}`,
      createdAt: new Date().toISOString(),
      jobId,
      jobTitle,
      fullName: applicantData.fullName,
      email: applicantData.email,
      phone: applicantData.phone,
      portfolioUrl: applicantData.portfolioUrl || "",
      notes: applicantData.coverNote || "",
      status: "Submitted"
    };
    applications.unshift(appEntry);
    localStorage.setItem(STORAGE_KEY_APPLICATIONS, JSON.stringify(applications));
    return appEntry;
  }

  // --- ADMIN AUTH (Client-side Session) ---
  isAdminAuthenticated() {
    return sessionStorage.getItem(STORAGE_KEY_ADMIN_AUTH) === "authenticated";
  }

  loginAdmin(passcode) {
    // Default demo master passcode
    if (passcode === "admin2026" || passcode === "novatech") {
      sessionStorage.setItem(STORAGE_KEY_ADMIN_AUTH, "authenticated");
      return true;
    }
    return false;
  }

  logoutAdmin() {
    sessionStorage.removeItem(STORAGE_KEY_ADMIN_AUTH);
  }
}

export const AppState = new StateManager();
