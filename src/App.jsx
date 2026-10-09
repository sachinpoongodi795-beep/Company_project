import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";

/* ─── Company Info ─── */
const COMPANY_INFO = {
  name: "SM Groups Solution",
  tagline: "Behind a Thing",
  foundedYear: 2018,
  email: "contact@smgroups.com",
  phone: "09486783278",
  location: "IInd Floor, OM Shiva Towers, 259-B, Advaitha Ashram Rd, Fairlands, Salem, Tamil Nadu 636004",
  address: "IInd Floor, OM Shiva Towers, 259-B, Advaitha Ashram Rd, Fairlands, Salem, Tamil Nadu 636004",
  hours: "Mon – Sat: 9:30 AM – 6:30 PM IST",
  shortDesc: "Enterprise IT solutions, cloud architectures, AI automation, and custom software engineering built for global companies."
};

/* ─── Stats Bar Data ─── */
const STATS = [
  { value: 100, suffix: "+", label: "Projects Delivered", desc: "Across 6 global continents" },
  { value: 1, suffix: " Year", label: "Free Hosting", desc: "Included with every new project" },
  { value: 24, suffix: "/7", label: "Customer Support", desc: "Round-the-clock technical assistance" },
  { value: 4.9, suffix: "/5", label: "Client Satisfaction", desc: "Audited post-launch SLA reviews", rating: 5 },
];

/* ─── Service Cards ─── */
const SERVICE_CARDS = [
  {
    id: "software-dev",
    title: "Software Development",
    tagline: "High-Performance Custom Engineering",
    shortDesc: "Custom web and software applications built for bespoke enterprise business requirements and high throughput.",
    fullDesc: "We design and build resilient, maintainable software systems tailored to your operational workflows. Clean architecture, domain-driven design, and automated test pipelines.",
    deliverables: ["Custom Enterprise Web Applications", "Microservices & Distributed Systems", "Legacy Codebase Modernization", "Automated CI/CD & Unit Test Suites", "Role-Based Access Control & SOC-2 Compliance"],
    technologies: ["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "Docker"]
  },
  {
    id: "web-dev",
    title: "Web Development",
    tagline: "Scalable Modern Web Portals",
    shortDesc: "Modern, lightning-fast responsive websites, client dashboards, and web applications that convert visitors.",
    fullDesc: "Crafting exceptional web applications using modern web standards, headless CMS solutions, and high-conversion UI architectures with 99+ Lighthouse scores.",
    deliverables: ["Single Page & Server-Rendered Applications", "Customer Self-Service Portals", "Progressive Web Apps (PWA)", "High-Traffic Marketing Engines", "Core Web Vitals & Speed Optimization"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GraphQL", "Vercel"]
  },
  {
    id: "mobile-dev",
    title: "Mobile App Development",
    tagline: "Native & Cross-Platform Mobility",
    shortDesc: "Native iOS, Android, and cross-platform mobile applications engineered for smooth user engagement.",
    fullDesc: "End-to-end mobile development from concept to App Store and Google Play deployment. Fluid, offline-capable mobile experiences with biometric security.",
    deliverables: ["iOS (Swift) & Android (Kotlin) Engineering", "Cross-Platform Apps (React Native & Flutter)", "Offline Sync & Local Database Architecture", "App Store & Play Store Publishing & Compliance", "Biometric Security & Mobile Payments"],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"]
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    tagline: "User-Centered Digital Experience",
    shortDesc: "User-focused interface and experience design backed by cognitive research, design systems, and rapid prototyping.",
    fullDesc: "Transforming complex business logic into intuitive, visually breathtaking digital interfaces that accelerate development and elevate brand prestige.",
    deliverables: ["UX Research, Journey Mapping & Personas", "Interactive High-Fidelity Wireframes", "Comprehensive Enterprise Design Systems", "Accessibility (WCAG 2.1 AA) Compliance", "Usability Testing & Conversion Optimization"],
    technologies: ["Figma", "Design Systems", "Prototyping", "WCAG 2.1 AA", "Storybook"]
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    tagline: "Reliable, Elastic Cloud Infrastructure",
    shortDesc: "Cloud infrastructure, serverless deployment, container orchestration, and multi-region scalability.",
    fullDesc: "Certified cloud architects helping companies migrate, automate, and optimize their infrastructure on AWS and Azure with Infrastructure as Code.",
    deliverables: ["Cloud Migration & Modernization", "Kubernetes & Docker Orchestration", "Serverless Microservices Architecture", "Disaster Recovery & High Availability", "Cost Optimization & Cloud Governance"],
    technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "GitHub Actions"]
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    tagline: "Intelligent Workflows & Machine Learning",
    shortDesc: "AI-powered applications, business process automation, LLM integrations, and predictive analytics pipelines.",
    fullDesc: "Harnessing the power of modern machine learning and generative AI to automate routine tasks, extract intelligence, and deploy conversational copilot systems.",
    deliverables: ["Custom LLM & Agentic Workflows", "Retrieval-Augmented Generation (RAG) Systems", "Document AI & Intelligent Data Extraction", "Predictive Analytics & Forecasting Models", "Robotic Process Automation (RPA)"],
    technologies: ["Python", "PyTorch", "OpenAI API", "LangChain", "Vector DBs", "FastAPI"]
  },
  {
    id: "ecommerce",
    title: "E-Commerce Solutions",
    tagline: "High-Volume Commerce Engines",
    shortDesc: "Scalable online stores, headless commerce architectures, and global multi-currency checkout platforms.",
    fullDesc: "Enterprise e-commerce platforms designed for lightning-fast catalog navigation, flawless checkouts, inventory synchronization, and ERP integrations.",
    deliverables: ["Headless E-Commerce Frontends", "Shopify Plus & Custom Checkout Integrations", "ERP & Warehouse Inventory Synchronization", "Global Payment Gateway Orchestration", "Personalized Recommendation Engines"],
    technologies: ["Shopify Plus", "Next.js", "Stripe", "GraphQL", "PostgreSQL", "Redis"]
  },
  {
    id: "api-integration",
    title: "API & System Integration",
    tagline: "Seamless Data & Platform Interoperability",
    shortDesc: "Connect disparate business systems, legacy mainframes, and modern SaaS services with secure REST and GraphQL APIs.",
    fullDesc: "Eliminate data silos with robust enterprise middleware, event-driven message buses, and authenticated API gateways operating with microsecond latency.",
    deliverables: ["RESTful & GraphQL API Architecture", "Event-Driven Architecture (Kafka / RabbitMQ)", "CRM, ERP & Payment Gateway Connectors", "API Security, Rate Limiting & Developer Portals", "Real-time Webhook Systems"],
    technologies: ["Node.js", "Go", "Apache Kafka", "GraphQL", "Redis", "Swagger/OpenAPI"]
  },
  {
    id: "it-consulting",
    title: "IT Consulting & Advisory",
    tagline: "Strategic Technology Roadmaps",
    shortDesc: "Strategic guidance to align your IT investments with your core business objectives.",
    fullDesc: "We provide executive-level IT advisory services, conducting thorough audits of existing architectures and charting modernization roadmaps that maximize ROI.",
    deliverables: ["Technology Stack Audits & Roadmaps", "Digital Transformation Strategy", "M&A Technical Due Diligence", "Compliance & Risk Assessments", "Vendor Selection & Procurement"],
    technologies: ["Enterprise Architecture", "TOGAF", "ITIL", "Agile", "Cloud Economics"]
  }
];

const SERVICES = SERVICE_CARDS;

const INDUSTRIES = [
  { id: 'fintech', title: 'Banking & FinTech', desc: 'Secure transaction systems and core banking.' },
  { id: 'healthtech', title: 'Healthcare', desc: 'Telemedicine and HIPAA compliant platforms.' },
  { id: 'ecommerce', title: 'E-Commerce', desc: 'High-conversion retail engines.' },
  { id: 'logistics', title: 'Logistics', desc: 'Supply chain tracking.' }
];

const TECH_CATEGORIES = {
  frontend: [
    { name: 'React', category: 'Frontend', level: 95 },
    { name: 'Vue', category: 'Frontend', level: 85 },
    { name: 'Next.js', category: 'Frontend', level: 90 }
  ],
  backend: [
    { name: 'Node.js', category: 'Backend', level: 90 },
    { name: 'Python', category: 'Backend', level: 85 },
    { name: 'Go', category: 'Backend', level: 80 }
  ],
  database: [
    { name: 'PostgreSQL', category: 'Database', level: 90 },
    { name: 'MongoDB', category: 'Database', level: 85 },
    { name: 'Redis', category: 'Database', level: 80 }
  ],
  cloud: [
    { name: 'AWS', category: 'Cloud', level: 90 },
    { name: 'Azure', category: 'Cloud', level: 85 },
    { name: 'GCP', category: 'Cloud', level: 80 }
  ],
  ai: [
    { name: 'OpenAI', category: 'AI', level: 90 },
    { name: 'TensorFlow', category: 'AI', level: 80 }
  ]
};

const PROJECTS = [
  {
    id: 'apex-pay',
    category: 'fintech',
    categoryKey: 'fintech',
    industry: 'FinTech',
    title: 'ApexPay Remittance Gateway',
    shortDesc: 'A secure international remittance gateway.',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    results: ['Processed $1B+', 'Zero downtime'],
    challenge: 'High latency in international transfers.',
    solution: 'Engineered an event-driven microservices architecture.',
    link: 'https://sritechengg.in/'
  },
  {
    id: 'omnicare',
    category: 'healthtech',
    categoryKey: 'healthtech',
    industry: 'HealthTech',
    title: 'OmniCare Telehealth Portal',
    shortDesc: 'HIPAA compliant telehealth platform.',
    technologies: ['Next.js', 'Python', 'AWS'],
    results: ['10k+ daily active users', '100% compliance'],
    challenge: 'Scaling video consultations securely.',
    solution: 'Built on top of WebRTC and AWS Kinesis.'
  }
];

const FEATURED_PROJECTS = [
  {
    title: 'Sri Tech Rocket Stove',
    image: '/assets/images/sritech-rocket-dark.png',
    tags: ['Eco & Sustainable', 'Website Development'],
    desc: 'An eco-friendly, modern e-commerce platform for high-efficiency biomass rocket stoves.',
    link: 'https://sritechengg.in/'
  },
  {
    title: 'TNSkill Learning Platform',
    image: '/assets/images/tnskill-website.png',
    tags: ['IoT', 'Embedded', 'PCB', 'MCU', 'Sensors'],
    desc: 'Empowering Students. Building a Better Tomorrow.',
    link: 'https://smtnskill.thesmgroups.com/'
  },
  {
    title: 'MBK Technologies',
    image: '/assets/images/mbk-carrierz.png',
    tags: ['IT Consulting', 'Software Engineering'],
    desc: 'A futuristic digital showcase for enterprise IT consulting, software engineering, and modern technology solutions.',
    link: 'https://mbktechnologies.info/'
  }
];

const SERVICES_CARDS = [
  {
    icon: '⚡',
    title: 'Static Content',
    bullets: [
      'Lightning-fast websites.',
      'No complex databases needed.',
      'Instant page loading speeds.',
      'Maximum security from hackers.'
    ]
  },
  {
    icon: '⚙️',
    title: 'Dynamic Apps',
    bullets: [
      'Interactive web platforms.',
      'Secure login and data management.',
      'Custom dashboards and portals.',
      'Real-time information updates.'
    ]
  },
  {
    icon: '🧩',
    title: 'n8n Automation',
    bullets: [
      'Connect software tools easily.',
      'Automate repetitive workflows.',
      'Eliminate manual data entry.',
      'Streamline business operations.'
    ]
  },
  {
    icon: '📈',
    title: 'Free SEO',
    bullets: [
      'Built-in search engine setup.',
      'Get discovered online easily.',
      'Higher rankings on Google.',
      'Increase organic website visitors.'
    ]
  }
];

const PROCESS_STEPS = [
  { step: '01', subtitle: 'Discovery', title: 'Requirement Analysis', desc: 'We dive deep into your business needs.' },
  { step: '02', subtitle: 'Design', title: 'Architecture & UI', desc: 'Crafting the blueprint and visual identity.' },
  { step: '03', subtitle: 'Development', title: 'Agile Engineering', desc: 'Building the solution iteratively.' },
  { step: '04', subtitle: 'Deployment', title: 'Launch & Scale', desc: 'Seamless deployment and monitoring.' }
];

const WHY_CHOOSE_US = [
  { title: 'Enterprise Expertise', desc: 'Decades of combined experience in enterprise systems.' },
  { title: 'Security First', desc: 'Security is baked into every layer of our applications.' },
  { title: 'Scalable Architectures', desc: 'We build systems that grow with your business.' },
  { title: 'Dedicated Support', desc: '24/7 monitoring and maintenance SLAs.' }
];

const TEAM = [
  { name: 'Sarah Jenkins', role: 'Chief Technology Officer', bio: 'Former VP of Engineering at TechCorp.', expertise: 'Cloud Architecture, Distributed Systems' },
  { name: 'Marcus Chen', role: 'Head of Engineering', bio: 'Expert in high-throughput systems.', expertise: 'Node.js, Go, Kubernetes' },
  { name: 'Elena Rodriguez', role: 'Lead Product Designer', bio: 'Award-winning UX designer.', expertise: 'Design Systems, User Research' }
];

const TESTIMONIALS = [
  { quote: 'SM Groups Solution completely transformed our digital infrastructure. Their expertise helped us scale effortlessly and securely without downtime.', author: 'Rajesh Kumar', role: 'CTO', company: 'FinCorp India' },
  { quote: 'An incredibly talented engineering team. Their dedication to quality and timely delivery exceeded all our expectations.', author: 'Priya Sharma', role: 'VP Engineering', company: 'HealthPlus' },
  { quote: 'Partnering with them was the best decision. Their innovative AI solutions boosted our operational efficiency by over 300% within a year.', author: 'Arun Patel', role: 'CEO', company: 'GlobalTech Solutions' },
  { quote: 'Their approach to our migration was flawless. The attention to detail and proactive problem-solving saved us months of work.', author: 'Sarah Jenkins', role: 'VP Operations', company: 'Logistics Pro' },
  { quote: 'We saw immediate ROI after they revamped our backend architecture. Highly recommend their engineering squad.', author: 'David Chen', role: 'Head of Engineering', company: 'Retail Hub' },
  { quote: 'A truly world-class technology partner. They seamlessly integrated with our internal team and delivered ahead of schedule.', author: 'Amina Rossi', role: 'Director of IT', company: 'EduGlobal' }
];

const CAREERS = [
  { id: 'senior-fullstack', department: 'Engineering', type: 'Full-Time', title: 'Senior Full-Stack Engineer', location: 'Remote / San Francisco', experience: '5+ years', desc: 'Lead development of enterprise applications.', salary: '$140k - $180k' },
  { id: 'cloud-architect', department: 'Infrastructure', type: 'Full-Time', title: 'Cloud Solutions Architect', location: 'Remote', experience: '7+ years', desc: 'Design scalable AWS/Azure architectures.', salary: '$160k - $200k' }
];

const SEED_LEADS = [];

export default function App() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [adminOpen, setAdminOpen] = React.useState(false);
  const [adminAuth, setAdminAuth] = React.useState(false);
  const [adminPasscode, setAdminPasscode] = React.useState('');
  const [adminPassError, setAdminPassError] = React.useState('');
  
  const [enquiries, setEnquiries] = React.useState(() => {
    try {
       const stored = localStorage.getItem('smgroups_leads');
       return stored ? JSON.parse(stored) : SEED_LEADS;
    } catch(e) { return SEED_LEADS; }
  });
  
  const [adminFilter, setAdminFilter] = React.useState('all');
  const [adminSearch, setAdminSearch] = React.useState('');
  const [adminDetailLead, setAdminDetailLead] = React.useState(null);

  const [contactForm, setContactForm] = React.useState({ fullName: '', company: '', email: '', phone: '', service: 'Software Development', budget: 'Under $25,000', message: '' });
  const [contactErrors, setContactErrors] = React.useState({});
  const [contactSubmitting, setContactSubmitting] = React.useState(false);
  const [contactSubmitted, setContactSubmitted] = React.useState(false);
  const [lastSubmittedId, setLastSubmittedId] = React.useState('');
  const [selectedService, setSelectedService] = React.useState(null);
  const [selectedProject, setSelectedProject] = React.useState(null);
  const [selectedJob, setSelectedJob] = React.useState(null);
  const [legalModal, setLegalModal] = React.useState(null);
  const [featuredTab, setFeaturedTab] = React.useState('all');
  const [techCategory, setTechCategory] = React.useState('frontend');
  const [portfolioFilter, setPortfolioFilter] = React.useState('all');

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };


  const handleContactSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!contactForm.fullName) errs.fullName = 'Name is required';
    if (!contactForm.email) errs.email = 'Email is required';
    if (!contactForm.message) errs.message = 'Message is required';
    setContactErrors(errs);
    if (Object.keys(errs).length > 0) return;
    
    setContactSubmitting(true);
    setTimeout(() => {
      const newLead = { ...contactForm, id: 'LD-' + Date.now().toString().slice(-6), date: new Date().toISOString() };
      const newEnquiries = [newLead, ...enquiries];
      setEnquiries(newEnquiries);
      localStorage.setItem('smgroups_leads', JSON.stringify(newEnquiries));
      setContactSubmitting(false);
      setContactSubmitted(true);
      setLastSubmittedId(newLead.id);
    }, 1500);
  };




































































































































































































































































































































































































































































































  const filteredProjects = portfolioFilter === 'all' ? PROJECTS : PROJECTS.filter(p => p.categoryKey === portfolioFilter || p.category === portfolioFilter);

  return (
    <div className="react-app-root">


      {/* HEADER / NAVIGATION (EMENDO STYLE) */}
      <header className={`header-emendo ${scrolled ? "header-emendo--scrolled" : ""}`}>
        <div className="emendo-container" style={{ width: "100%", padding: "0 2rem" }}>
          <a href="#home" className="emendo-logo">
            <img
              src="/assets/images/logo-optime.png"
              alt="Optime IT Solutions"
              style={{ width: "200px", height: "auto", objectFit: "contain", display: "block" }}
            />
          </a>

          <div style={{ display: "flex", alignItems: "center", gap: "2rem", marginLeft: "auto" }}>
            <nav className="emendo-nav">
              {/* Capabilities Dropdown */}
              <div className="emendo-nav__item">
                <button type="button" className="emendo-nav__link">
                  Capabilities
                  <svg className="emendo-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </button>
                <div className="emendo-dropdown">
                  <a href="#services" className="emendo-dropdown__link" onClick={() => scrollTo("services")}>Custom Software Development <span>&rarr;</span></a>
                  <a href="#services" className="emendo-dropdown__link" onClick={() => scrollTo("services")}>Web & SaaS Engineering <span>&rarr;</span></a>
                  <a href="#services" className="emendo-dropdown__link" onClick={() => scrollTo("services")}>Mobile App Engineering <span>&rarr;</span></a>
                  <a href="#tech" className="emendo-dropdown__link" onClick={() => scrollTo("tech")}>Cloud Infrastructure & DevOps <span>&rarr;</span></a>
                  <a href="#tech" className="emendo-dropdown__link" onClick={() => scrollTo("tech")}>AI & Automated Workflows <span>&rarr;</span></a>
                </div>
              </div>

              {/* Our Work Dropdown */}
              <div className="emendo-nav__item">
                <button type="button" className="emendo-nav__link">
                  Our Work
                  <svg className="emendo-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </button>
                <div className="emendo-dropdown">
                  <a href="#projects" className="emendo-dropdown__link" onClick={() => scrollTo("projects")}>Case Studies & Deployments <span>&rarr;</span></a>
                  <a href="#projects" className="emendo-dropdown__link" onClick={() => scrollTo("projects")}>ApexPay Remittance Gateway <span>&rarr;</span></a>
                  <a href="#projects" className="emendo-dropdown__link" onClick={() => scrollTo("projects")}>OmniCare Telehealth Portal <span>&rarr;</span></a>
                  <a href="#projects" className="emendo-dropdown__link" onClick={() => scrollTo("projects")}>Veloce Headless Commerce <span>&rarr;</span></a>
                </div>
              </div>

              {/* About SM Groups Dropdown */}
              <div className="emendo-nav__item">
                <button type="button" className="emendo-nav__link">
                  About SM Groups
                  <svg className="emendo-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </button>
                <div className="emendo-dropdown">
                  <a href="#about" className="emendo-dropdown__link" onClick={() => scrollTo("about")}>Our Story & Engineering Vision <span>&rarr;</span></a>
                  <a href="#about" className="emendo-dropdown__link" onClick={() => scrollTo("about")}>Technology Leadership Team <span>&rarr;</span></a>
                  <a href="#about" className="emendo-dropdown__link" onClick={() => scrollTo("about")}>Security & SOC-2 Compliance <span>&rarr;</span></a>
                </div>
              </div>

              {/* Impact & Sustainability Dropdown */}
              <div className="emendo-nav__item">
                <button type="button" className="emendo-nav__link">
                  Impact & Industries
                  <svg className="emendo-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </button>
                <div className="emendo-dropdown">
                  <a href="#industries" className="emendo-dropdown__link" onClick={() => scrollTo("industries")}>Banking & FinTech <span>&rarr;</span></a>
                  <a href="#industries" className="emendo-dropdown__link" onClick={() => scrollTo("industries")}>Healthcare & Telemedicine <span>&rarr;</span></a>
                  <a href="#industries" className="emendo-dropdown__link" onClick={() => scrollTo("industries")}>Retail & E-Commerce <span>&rarr;</span></a>
                  <a href="#industries" className="emendo-dropdown__link" onClick={() => scrollTo("industries")}>Logistics & Supply Chain <span>&rarr;</span></a>
                </div>
              </div>

              {/* Join Us / Careers Dropdown */}
              <div className="emendo-nav__item">
                <button type="button" className="emendo-nav__link">
                  Join Us
                  <svg className="emendo-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </button>
                <div className="emendo-dropdown">
                  <a href="#careers" className="emendo-dropdown__link" onClick={() => scrollTo("careers")}>Careers & Open Squad Roles <span>🔥</span></a>
                  <a href="#careers" className="emendo-dropdown__link" onClick={() => scrollTo("careers")}>Engineering Culture <span>&rarr;</span></a>
                </div>
              </div>
            </nav>

            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <a href="#contact" className="emendo-pill-btn" onClick={() => scrollTo("contact")}>
                Contact Us
              </a>

              <button
                className="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                style={{ color: "#0f172a" }}
              >
                <span></span><span></span><span></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section 
        id="home" 
        className="hero-emendo"
        style={{
          backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.4), rgba(15, 23, 42, 0.4)), url('/globe_hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "8rem 0",
          display: "flex",
          alignItems: "center",
          minHeight: "80vh"
        }}
      >
        <div className="container" style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <h1 className="hero-emendo__title" style={{ fontSize: "3rem", fontWeight: 700, letterSpacing: "-0.01em", lineHeight: "1.2", marginBottom: "1.25rem", color: "#ffffff", maxWidth: "800px" }}>
            Empowering Enterprises with Cutting-Edge IT Solutions
          </h1>

          <p className="hero-emendo__subtitle" style={{ fontSize: "1.1rem", maxWidth: "650px", lineHeight: "1.6", color: "rgba(255, 255, 255, 0.8)", marginBottom: "2.25rem" }}>
            We engineer robust software architectures, modern digital platforms, and secure cloud infrastructures that accelerate innovation and drive measurable business growth.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
            <a href="#featured-projects" className="btn" onClick={() => scrollTo("featured-projects")} style={{ color: "#ffffff", backgroundColor: "#3b82f6", borderRadius: "6px", padding: "1rem 2rem", fontWeight: "600", textDecoration: "none", border: "none", boxShadow: "0 4px 14px rgba(59, 130, 246, 0.4)" }}>
              Explore Our Projects &rarr;
            </a>
            <a href="#contact" className="btn" onClick={() => scrollTo("contact")} style={{ color: "#0f172a", backgroundColor: "#ffffff", borderRadius: "6px", padding: "1rem 2rem", fontWeight: "600", textDecoration: "none", border: "none", boxShadow: "0 4px 14px rgba(255, 255, 255, 0.2)" }}>
              Book a Session
            </a>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="stats-bar">
        <div className="container">
          <div className="stats-bar__grid">
            {STATS.map((s, idx) => (
              <div className="stat-item" key={idx}>
                <div className="stat-item__value">
                  {s.value}<span>{s.suffix}</span>
                </div>
                {s.rating && (
                  <div style={{ color: "#f59e0b", fontSize: "1.3rem", marginTop: "-0.25rem", marginBottom: "0.25rem", letterSpacing: "2px" }}>
                    {"★".repeat(s.rating)}
                  </div>
                )}
                <div className="stat-item__label">{s.label}</div>
                <div className="stat-item__desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUB COMPANIES */}
      <section className="section section--sm" style={{ background: "#ffffff", borderBottom: "1px solid var(--color-border-light)", padding: "5rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "3px", background: "linear-gradient(90deg, var(--color-primary-900), var(--color-accent-cyan))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "4rem" }}>
            OUR SUBSIDIARY COMPANIES
          </div>
          {(() => {
            const subs = [
              { img: "/assets/images/sm-groups-logo.jpg", alt: "SM Groups", desc: "The parent conglomerate driving growth and innovation across multiple industries." },
              { img: "/assets/images/logo-mbk.png", alt: "MBK Technology", desc: "Empowering careers through advanced tech education and skill development." },
              { img: "/assets/images/logo-sritech.png", alt: "Sritech Engineering", desc: "Delivering robust engineering, infrastructure, and technical solutions." },
              { img: "/assets/images/logo-venthulir.png", alt: "Venthulir", desc: "Promoting sustainable organic agriculture and eco-friendly products." },
              { img: "/assets/images/logo-webcity.png", alt: "WebCity Digital", desc: "Creative digital marketing and cutting-edge web development agency." },
              { img: "/assets/images/logo-pavech.png", alt: "PAVECH", desc: "Innovative smart technology solutions driving intelligence everywhere." }
            ];
            const renderCards = (keyPrefix) => subs.map((sub, i) => (
              <div key={keyPrefix + i} className="subsidiary-card">
                <img src={sub.img} alt={sub.alt} />
                <span>{sub.desc}</span>
              </div>
            ));
            return (
              <div className="subsidiary-marquee-wrapper">
                <div className="subsidiary-marquee-track">
                  {renderCards('first-')}
                  {renderCards('second-')}
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* CORE CAPABILITIES / SERVICES SECTION */}
      <section className="section" style={{ background: "#f8fafc" }}>
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
            {SERVICES_CARDS.map((card, idx) => (
              <div key={idx} style={{ background: "#ffffff", padding: "2rem", borderRadius: "12px", border: "1px solid var(--color-border-light)", boxShadow: "var(--shadow-sm)", display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: "2rem", marginBottom: "1.25rem" }}>{card.icon}</div>
                <h3 style={{ fontSize: "1.25rem", color: "var(--color-primary-900)", marginBottom: "1.25rem", fontWeight: 700 }}>{card.title}</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", flexGrow: 1 }}>
                  {card.bullets.map((bullet, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "2px" }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span style={{ fontSize: "0.85rem", color: "var(--color-text-main)", lineHeight: 1.4 }}>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS SECTION */}
      <section id="featured-projects" className="section" style={{ background: "linear-gradient(to bottom, #ffffff, #e0f2fe)" }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title" style={{ textTransform: 'uppercase', letterSpacing: '1px' }}>Featured Projects</h2>
          </div>
          
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
            {FEATURED_PROJECTS.map((project, idx) => (
              <div 
                className="card" 
                key={idx} 
                style={{ display: "flex", flexDirection: "column", padding: 0, overflow: 'hidden', cursor: 'pointer', transition: 'box-shadow 0.3s ease, transform 0.3s ease', borderRadius: '12px', border: '1px solid var(--color-border-light)', background: '#fff' }}
                onClick={() => { if (project.link !== '#') window.open(project.link, '_blank', 'noopener,noreferrer'); }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}
              >
                <div style={{ width: '100%', aspectRatio: '16/9', backgroundColor: idx === 0 ? '#0b0602' : (idx === 1 ? '#fdf5f6' : 'transparent'), borderBottom: '1px solid var(--color-border-light)', overflow: 'hidden' }}>
                  <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: idx === 2 ? 'cover' : 'contain', objectPosition: 'center' }} />
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ display: "flex", gap: "0.4rem", flexWrap: "nowrap", overflowX: "auto", marginBottom: "1rem", paddingBottom: "0.2rem", scrollbarWidth: "none" }}>
                    {project.tags.map((tag, i) => (
                      <span key={i} style={{ whiteSpace: "nowrap", fontSize: "0.7rem", background: "rgba(59, 130, 246, 0.1)", color: "#3b82f6", padding: "0.25rem 0.6rem", borderRadius: "100px", fontWeight: "600" }}>{tag}</span>
                    ))}
                  </div>
                  <h3 style={{ fontSize: "1.4rem", color: "var(--color-primary-900)", marginBottom: "0.75rem", fontWeight: 800 }}>{project.title}</h3>
                  <p style={{ fontSize: "0.95rem", color: "var(--color-text-main)", lineHeight: 1.6, marginBottom: "1.5rem" }}>{project.desc}</p>
                  <div style={{ color: "#2563eb", fontWeight: "600", fontSize: "0.9rem", display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    View Project <span>&rarr;</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
        {/* SERVICES (ALL 9 SERVICES) */}
        <section id="services" className="section section--subtle">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Comprehensive Services</span>
              <h2 className="section-title">End-to-End Enterprise Technology Solutions</h2>
              <p className="section-subtitle">
                From bespoke software development to cloud migration and autonomous AI pipelines, explore our 9 core technical capabilities.
              </p>
            </div>

            <div className="grid grid-3">
              {SERVICES.map(service => {
                const serviceImages = {
                  "software-dev": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
                  "web-dev": "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=600&q=80",
                  "mobile-dev": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80",
                  "ui-ux": "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80",
                  "cloud-solutions": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
                  "ai-automation": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80",
                  "ecommerce": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80",
                  "api-integration": "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=600&q=80",
                  "legacy-modernization": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
                };
                const imgUrl = serviceImages[service.id] || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80";

                return (
                <div className="service-card" key={service.id} style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                  <img src={imgUrl} alt={service.title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                  <div style={{ padding: "2rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                    <div className="service-card__icon" style={{ marginTop: "-3.5rem", position: "relative", border: "4px solid #ffffff", zIndex: 10, background: "var(--color-primary-900)" }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                    </div>
                    <div className="service-card__tagline">{service.tagline}</div>
                    <h3 className="service-card__title">{service.title}</h3>
                    <p className="service-card__desc" style={{ flexGrow: 1 }}>{service.shortDesc}</p>
                    <button
                      type="button"
                      className="service-card__link"
                      onClick={() => setSelectedService(service)}
                    >
                      Learn More
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </button>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </section>



        {/* STATIC & DYNAMIC SOFTWARE */}
        <section className="section" style={{ background: "var(--color-bg-surface-subtle)" }}>
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Software Solutions</span>
              <h2 className="section-title">Static & Dynamic Web Architecture</h2>
              <p className="section-subtitle">
                Whether you need lightning-fast static sites for marketing or complex, data-driven dynamic applications, we deliver robust solutions.
              </p>
            </div>

            <div className="grid" style={{ gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
              <div className="card">
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>⚡</div>
                <h3 style={{ fontSize: "1.25rem", color: "var(--color-primary-900)", marginBottom: "0.5rem" }}>Static Content</h3>
                <p style={{ color: "var(--color-text-main)", fontSize: "0.9rem", lineHeight: 1.5, marginBottom: "1rem" }}>
                  Lightning-fast websites that provide information securely without complex databases.
                </p>
                <ul className="checklist" style={{ margin: 0, padding: 0 }}>
                  <li className="checklist__item" style={{ marginBottom: "0.5rem", alignItems: "flex-start" }}>
                    <span className="checklist__icon" style={{ marginTop: "3px" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                    <span style={{ fontSize: "0.9rem", color: "var(--color-text-main)", lineHeight: 1.4 }}>Instant page loading speeds.</span>
                  </li>
                  <li className="checklist__item" style={{ marginBottom: 0, alignItems: "flex-start" }}>
                    <span className="checklist__icon" style={{ marginTop: "3px" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                    <span style={{ fontSize: "0.9rem", color: "var(--color-text-main)", lineHeight: 1.4 }}>Maximum security from hackers.</span>
                  </li>
                </ul>
              </div>
              <div className="card">
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>⚙️</div>
                <h3 style={{ fontSize: "1.25rem", color: "var(--color-primary-900)", marginBottom: "0.5rem" }}>Dynamic Apps</h3>
                <p style={{ color: "var(--color-text-main)", fontSize: "0.9rem", lineHeight: 1.5, marginBottom: "1rem" }}>
                  Interactive web platforms where users can log in, manage data, and perform tasks.
                </p>
                <ul className="checklist" style={{ margin: 0, padding: 0 }}>
                  <li className="checklist__item" style={{ marginBottom: "0.5rem", alignItems: "flex-start" }}>
                    <span className="checklist__icon" style={{ marginTop: "3px" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                    <span style={{ fontSize: "0.9rem", color: "var(--color-text-main)", lineHeight: 1.4 }}>Custom dashboards and portals.</span>
                  </li>
                  <li className="checklist__item" style={{ marginBottom: 0, alignItems: "flex-start" }}>
                    <span className="checklist__icon" style={{ marginTop: "3px" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                    <span style={{ fontSize: "0.9rem", color: "var(--color-text-main)", lineHeight: 1.4 }}>Real-time information updates.</span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>🧩</div>
                <h3 style={{ fontSize: "1.25rem", color: "var(--color-primary-900)", marginBottom: "0.5rem" }}>n8n Automation</h3>
                <p style={{ color: "var(--color-text-main)", fontSize: "0.9rem", lineHeight: 1.5, marginBottom: "1rem" }}>
                  Connect different software tools together to make them work automatically.
                </p>
                <ul className="checklist" style={{ margin: 0, padding: 0 }}>
                  <li className="checklist__item" style={{ marginBottom: "0.5rem", alignItems: "flex-start" }}>
                    <span className="checklist__icon" style={{ marginTop: "3px" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                    <span style={{ fontSize: "0.9rem", color: "var(--color-text-main)", lineHeight: 1.4 }}>Eliminate manual data entry.</span>
                  </li>
                  <li className="checklist__item" style={{ marginBottom: 0, alignItems: "flex-start" }}>
                    <span className="checklist__icon" style={{ marginTop: "3px" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                    <span style={{ fontSize: "0.9rem", color: "var(--color-text-main)", lineHeight: 1.4 }}>Streamline business operations.</span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>📈</div>
                <h3 style={{ fontSize: "1.25rem", color: "var(--color-primary-900)", marginBottom: "0.5rem" }}>Free SEO</h3>
                <p style={{ color: "var(--color-text-main)", fontSize: "0.9rem", lineHeight: 1.5, marginBottom: "1rem" }}>
                  Built-in search engine setup to help your business get discovered online.
                </p>
                <ul className="checklist" style={{ margin: 0, padding: 0 }}>
                  <li className="checklist__item" style={{ marginBottom: "0.5rem", alignItems: "flex-start" }}>
                    <span className="checklist__icon" style={{ marginTop: "3px" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                    <span style={{ fontSize: "0.9rem", color: "var(--color-text-main)", lineHeight: 1.4 }}>Higher rankings on Google.</span>
                  </li>
                  <li className="checklist__item" style={{ marginBottom: 0, alignItems: "flex-start" }}>
                    <span className="checklist__icon" style={{ marginTop: "3px" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                    <span style={{ fontSize: "0.9rem", color: "var(--color-text-main)", lineHeight: 1.4 }}>Increase organic website visitors.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
      </section>




        {/* WHY CHOOSE US */}
        <section className="section section--subtle">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Our Competitive Edge</span>
              <h2 className="section-title">Why Enterprises Choose SM Groups Solution</h2>
              <p className="section-subtitle">
                We operate with engineering rigor, zero vendor lock-in, and full intellectual property ownership for our partners.
              </p>
            </div>

            <div className="grid grid-4">
              {WHY_CHOOSE_US.map((w, idx) => (
                <div className="card" key={idx} style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ width: 44, height: 44, borderRadius: "var(--radius-md)", background: "rgba(6,182,212,0.1)", color: "var(--color-accent-sky)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <h3 style={{ fontSize: "1.1rem", color: "var(--color-primary-900)", marginBottom: "0.4rem" }}>{w.title}</h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", lineHeight: 1.6 }}>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section className="section" style={{ background: "#ffffff" }}>
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Leadership & Engineering</span>
              <h2 className="section-title">Meet Our Technology Leadership</h2>
              <p className="section-subtitle">
                Senior architects and engineering directors guiding client roadmaps from inception through enterprise scale.
              </p>
            </div>

            <div className="grid grid-4">
              {TEAM.map((m, idx) => (
                <div className="card" key={idx} style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ width: 80, height: 80, borderRadius: "50%", background: "linear-gradient(135deg, #0f1c3f 0%, #0284c7 100%)", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.75rem", fontWeight: 800, fontFamily: "var(--font-heading)", marginBottom: "1rem", border: "3px solid #ffffff", boxShadow: "var(--shadow-md)" }}>
                    {m.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <h3 style={{ fontSize: "1.2rem", color: "var(--color-primary-900)", marginBottom: "0.2rem" }}>{m.name}</h3>
                  <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--color-accent-sky)", marginBottom: "0.75rem", textTransform: "uppercase" }}>{m.role}</div>
                  <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", lineHeight: 1.5, marginBottom: "1rem" }}>{m.bio}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", justifyContent: "center", marginTop: "auto" }}>
                    {m.expertise.split(',').map((tag, i) => (
                      <span key={i} style={{ fontSize: "0.7rem", background: "var(--color-bg-surface-subtle)", color: "var(--color-text-subtle)", padding: "0.2rem 0.5rem", borderRadius: "var(--radius-sm)", fontWeight: 600 }}>{tag.trim()}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section section--subtle">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Client Feedback</span>
              <h2 className="section-title">What Our Enterprise Partners Say</h2>
              <p className="section-subtitle">
                Hear directly from technology executives and product leaders who scaled their digital products with SM Groups Solution.
              </p>
            </div>

            <div className="grid grid-3">
              {TESTIMONIALS.map((t, idx) => (
                <div className="card" key={idx} style={{ display: "flex", flexDirection: "column", background: "#ffffff" }}>
                  <div style={{ display: "flex", gap: 3, color: "#f59e0b", marginBottom: "1rem" }}>
                    {[1, 2, 3, 4, 5].map(star => (
                      <svg key={star} width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    ))}
                  </div>
                  <p style={{ fontSize: "0.95rem", color: "var(--color-text-main)", fontStyle: "italic", lineHeight: 1.7, marginBottom: "1.5rem", flexGrow: 1 }}>
                    "{t.quote}"
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", borderTop: "1px solid var(--color-border-light)", paddingTop: "1rem" }}>
                    <div style={{ width: 42, height: 42, borderRadius: "50%", background: "var(--color-primary-900)", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>
                      {t.author.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: "var(--color-primary-900)", fontSize: "0.9rem" }}>{t.author}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION & ENQUIRY ENGINE */}
        <section id="contact" className="section section--subtle">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Start a Conversation</span>
              <h2 className="section-title">Let's Build Something Great Together</h2>
              <p className="section-subtitle">
                Have a project in mind or need senior software engineering support? Schedule an architectural consultation with our engineering team.
              </p>
            </div>

            <div className="contact-section-grid">
              {/* Contact Details & Headquarters Map */}
              <div>
                <div className="card" style={{ background: "var(--color-primary-900)", color: "#ffffff", marginBottom: "1.5rem", padding: "var(--space-8)" }}>
                  <h3 style={{ color: "#ffffff", fontSize: "1.4rem", marginBottom: "1rem" }}>Corporate Headquarters</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", fontSize: "0.9rem" }}>
                    <div style={{ display: "flex", gap: "0.75rem" }}>
                      
                      <div>
                        <strong>SM Group Office:</strong><br />
                        {COMPANY_INFO.address}
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: "0.75rem" }}>
                      
                      <div>
                        <strong>General Inquiries:</strong><br />
                        <a href={`mailto:${COMPANY_INFO.email}`} style={{ color: "#ffffff" }}>{COMPANY_INFO.email}</a>
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: "0.75rem" }}>
                      <div>
                        <strong>Direct Line:</strong><br />
                        <a href={`tel:${COMPANY_INFO.phone}`} style={{ color: "#ffffff" }}>{COMPANY_INFO.phone}</a>
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: "0.75rem" }}>
                      
                      <div>
                        <strong>Operating Hours:</strong><br />
                        {COMPANY_INFO.hours}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card" style={{ padding: "1rem", overflow: "hidden", background: "#ffffff" }}>
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "var(--color-text-subtle)", marginBottom: "0.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span>SM Groups &bull; Salem, Tamil Nadu</span>
                    <span style={{ color: "var(--color-success)", fontWeight: 700 }}>• Online</span>
                  </div>
                  <div style={{ height: 170, borderRadius: "var(--radius-md)", overflow: "hidden" }}>
                    <iframe
                      title="SM Groups Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3906.123456789!2d78.1419007!3d11.6729795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf148a6528a77%3A0x265969691a79cb8b!2sThe%20SM%20Groups!5e0!3m2!1sen!2sin!4v1696000000000!5m2!1sen!2sin"
                      width="100%"
                      height="170"
                      style={{ border: 0, display: "block" }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>

              {/* Interactive Contact Form */}
              <div className="card" style={{ background: "#ffffff", boxShadow: "var(--shadow-xl)" }}>
                {contactSubmitted ? (
                  <div style={{ textAlign: "center", padding: "3rem 1.5rem" }}>
                    <div style={{ width: 68, height: 68, borderRadius: "50%", background: "#ecfdf5", color: "#10b981", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <h3 style={{ fontSize: "1.6rem", color: "var(--color-primary-900)", marginBottom: "0.5rem" }}>Enquiry Successfully Logged!</h3>
                    <p style={{ color: "var(--color-text-muted)", maxWidth: 440, margin: "0 auto 1.5rem", lineHeight: 1.6 }}>
                      Your reference ID is <strong style={{ color: "var(--color-primary-900)", fontFamily: "var(--font-mono)" }}>{lastSubmittedId}</strong>. A Senior Solutions Architect will review your requirements and respond within 24 hours.
                    </p>
                    <button type="button" className="btn btn--secondary" onClick={resetContactForm}>
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <div>
                    <h3 style={{ fontSize: "1.4rem", color: "var(--color-primary-900)", marginBottom: "0.5rem" }}>Request an Architectural Consultation</h3>
                    <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "1.5rem" }}>
                      Fill out the form below and an engineering director will get back to you within 24 business hours.
                    </p>

                    <form onSubmit={handleContactSubmit} noValidate>
                      <div className="contact-form-2col">
                        <div className="form-group">
                          <label className="form-label">Full Name *</label>
                          <input
                            type="text"
                            className={`form-control ${contactErrors.fullName ? "is-invalid" : ""}`}
                            placeholder="e.g. Sarah Jenkins"
                            value={contactForm.fullName}
                            onChange={e => setContactForm({ ...contactForm, fullName: e.target.value })}
                          />
                          {contactErrors.fullName && <div className="form-feedback is-visible">{contactErrors.fullName}</div>}
                        </div>

                        <div className="form-group">
                          <label className="form-label">Company Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="e.g. Apex Global Corp"
                            value={contactForm.companyName}
                            onChange={e => setContactForm({ ...contactForm, companyName: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="contact-form-2col">
                        <div className="form-group">
                          <label className="form-label">Corporate Email *</label>
                          <input
                            type="email"
                            className={`form-control ${contactErrors.email ? "is-invalid" : ""}`}
                            placeholder="sarah@company.com"
                            value={contactForm.email}
                            onChange={e => setContactForm({ ...contactForm, email: e.target.value })}
                          />
                          {contactErrors.email && <div className="form-feedback is-visible">{contactErrors.email}</div>}
                        </div>

                        <div className="form-group">
                          <label className="form-label">Phone Number</label>
                          <input
                            type="tel"
                            className="form-control"
                            placeholder="+1 (555) 000-0000"
                            value={contactForm.phone}
                            onChange={e => setContactForm({ ...contactForm, phone: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label className="form-label">Service Required</label>
                        <select
                          className="form-select"
                          value={contactForm.service}
                          onChange={e => setContactForm({ ...contactForm, service: e.target.value })}
                        >
                          {SERVICES.map(s => (
                            <option key={s.id} value={s.title}>{s.title}</option>
                          ))}
                        </select>
                      </div>


                      <div className="form-group">
                        <label className="form-label">Project Overview & Goals *</label>
                        <textarea
                          className={`form-textarea ${contactErrors.message ? "is-invalid" : ""}`}
                          placeholder="Tell us about the project goals, current system architecture, and required launch timeline..."
                          value={contactForm.message}
                          onChange={e => setContactForm({ ...contactForm, message: e.target.value })}
                        ></textarea>
                        {contactErrors.message && <div className="form-feedback is-visible">{contactErrors.message}</div>}
                      </div>

                      <button type="submit" disabled={contactSubmitting} className="btn btn--primary btn--block btn--lg">
                        {contactSubmitting ? "Encrypting & Submitting..." : (
                          <>
                            Send Enquiry
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                          </>
                        )}
                      </button>

                      <div style={{ textAlign: "center", marginTop: "1rem", fontSize: "0.75rem", color: "var(--color-text-subtle)" }}>
                        Secure: Protected by enterprise 256-bit SSL encryption. Mutual NDA available upon request.
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

      {/* =====================================================================
          FOOTER (REACT)
          ===================================================================== */}
      <footer className="footer" role="contentinfo" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="rocket-animation-container">
          <div className="paper-rocket">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"></path><path d="M22 2L15 22L11 13L2 9L22 2Z"></path></svg>
          </div>
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="footer__grid">
            <div>
              <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo("home"); }} className="navbar__brand" style={{ marginTop: "-30px", marginBottom: "0", display: "inline-block" }}>
                <img src="/assets/images/logo-optime.png" alt="Optime IT Solutions" style={{ width: "220px", height: "auto", objectFit: "contain", display: "block" }} />
              </a>
              <p style={{ color: "#334155", fontSize: "0.9rem", fontWeight: "500", lineHeight: 1.6, marginBottom: "1.5rem", maxWidth: 320 }}>
                {COMPANY_INFO.shortDesc}
              </p>
            </div>

            <div>
              <div className="footer__col-title">Services</div>
              <div className="footer__links">
                {SERVICES.slice(0, 6).map(s => (
                  <a key={s.id} href="#services" onClick={(e) => { e.preventDefault(); scrollTo("services"); }} className="footer__link">{s.title}</a>
                ))}
              </div>
            </div>

            <div>
              <div className="footer__col-title">Company</div>
              <div className="footer__links">
                <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo("about"); }} className="footer__link">About Us</a>
                <a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo("projects"); }} className="footer__link">Case Studies</a>
                <a href="#industries" onClick={(e) => { e.preventDefault(); scrollTo("industries"); }} className="footer__link">Industries</a>
                <a href="#careers" onClick={(e) => { e.preventDefault(); scrollTo("careers"); }} className="footer__link">Careers (Hiring)</a>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }} className="footer__link">Get in Touch</a>
                <button
                  type="button"
                  onClick={() => setAdminOpen(true)}
                  style={{ textAlign: "left", background: "none", border: "none", padding: 0, cursor: "pointer", color: "#2563eb", fontWeight: "600" }}
                  className="footer__link"
                >
                  Admin CMS Portal
                </button>
              </div>
            </div>

            <div>
              <div className="footer__col-title">Technologies</div>
              <div className="footer__links">
                <a href="#technologies" onClick={(e) => { e.preventDefault(); scrollTo("technologies"); }} className="footer__link">React & Next.js</a>
                <a href="#technologies" onClick={(e) => { e.preventDefault(); scrollTo("technologies"); }} className="footer__link">Node.js & Python</a>
                <a href="#technologies" onClick={(e) => { e.preventDefault(); scrollTo("technologies"); }} className="footer__link">PostgreSQL & Redis</a>
                <a href="#technologies" onClick={(e) => { e.preventDefault(); scrollTo("technologies"); }} className="footer__link">AWS & Azure</a>
                <a href="#technologies" onClick={(e) => { e.preventDefault(); scrollTo("technologies"); }} className="footer__link">Docker & Kubernetes</a>
              </div>
            </div>

            <div>
              <div className="footer__col-title">Direct Inquiries</div>
              <p style={{ fontSize: "0.9rem", fontWeight: "500", color: "#475569", marginBottom: "0.5rem" }}>
                {COMPANY_INFO.address}
              </p>
              <p style={{ fontSize: "0.85rem", marginBottom: "0.25rem" }}>
                <a href={`mailto:${COMPANY_INFO.email}`} style={{ color: "var(--color-accent-cyan)" }}>{COMPANY_INFO.email}</a>
              </p>
              <p style={{ fontSize: "1rem", color: "#0f172a", fontWeight: 800 }}>
                {COMPANY_INFO.phone}
              </p>
            </div>
          </div>

          <div className="footer__bottom">
            <div>
              &copy; {new Date().getFullYear()} SM Groups Solution. All Rights Reserved.
            </div>
            <div className="footer__legal">
              <a href="#" onClick={(e) => { e.preventDefault(); setLegalModal("privacy"); }}>Privacy Policy</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setLegalModal("terms"); }}>Terms & Conditions</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setLegalModal("cookies"); }}>Cookie Preferences</a>
            </div>
          </div>
        </div>
      </footer>

      {selectedService && (
        <div className="modal-overlay is-open" onClick={() => setSelectedService(null)}>
          <div className="modal-dialog" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">{selectedService.title}</h3>
              <button type="button" className="modal-close-btn" onClick={() => setSelectedService(null)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
            <div className="modal-body">
              <span className="badge" style={{ background: "rgba(2,132,199,0.1)", color: "var(--color-accent-sky)", fontWeight: 700, padding: "0.3rem 0.8rem", borderRadius: "var(--radius-full)", fontSize: "0.75rem", textTransform: "uppercase" }}>
                {selectedService.tagline}
              </span>
              <p style={{ fontSize: "1.05rem", marginTop: "1rem", color: "var(--color-text-main)", lineHeight: 1.7 }}>
                {selectedService.fullDesc}
              </p>

              <h4 style={{ fontSize: "1rem", margin: "1.5rem 0 0.75rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--color-primary-900)" }}>
                Key Capabilities & Deliverables
              </h4>
              <ul className="checklist">
                {selectedService.deliverables.map((item, idx) => (
                  <li className="checklist__item" key={idx}>
                    <span className="checklist__icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                    <span style={{ color: "var(--color-text-main)", fontWeight: 500 }}>{item}</span>
                  </li>
                ))}
              </ul>

              <h4 style={{ fontSize: "1rem", margin: "1.5rem 0 0.75rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--color-primary-900)" }}>
                Primary Technologies
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
                {selectedService.technologies.map((t, idx) => (
                  <span key={idx} style={{ background: "var(--color-bg-surface-subtle)", padding: "0.35rem 0.85rem", borderRadius: "var(--radius-md)", fontFamily: "var(--font-mono)", fontSize: "0.8rem", fontWeight: 600, color: "var(--color-primary-900)", border: "1px solid var(--color-border-light)" }}>
                    {t}
                  </span>
                ))}
              </div>

              <div style={{ borderTop: "1px solid var(--color-border-light)", paddingTop: "1.5rem", display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
                <button type="button" className="btn btn--secondary" onClick={() => setSelectedService(null)}>Close</button>
                <button
                  type="button"
                  className="btn btn--primary"
                  onClick={() => {
                    const svcName = selectedService.title;
                    setSelectedService(null);
                    setContactForm(prev => ({ ...prev, service: svcName }));
                    scrollTo("contact");
                  }}
                >
                  Discuss This Service
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {selectedProject && (
        <div className="modal-overlay is-open" onClick={() => setSelectedProject(null)}>
          <div className="modal-dialog modal-dialog--lg" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">{selectedProject.title}</h3>
              <button type="button" className="modal-close-btn" onClick={() => setSelectedProject(null)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
            <div className="modal-body">
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
                <span className="badge" style={{ background: "var(--color-primary-900)", color: "#ffffff", padding: "0.25rem 0.75rem", borderRadius: "var(--radius-full)", fontSize: "0.75rem" }}>
                  {selectedProject.category}
                </span>
                <span className="badge" style={{ background: "rgba(2,132,199,0.1)", color: "var(--color-accent-sky)", padding: "0.25rem 0.75rem", borderRadius: "var(--radius-full)", fontSize: "0.75rem", fontWeight: 700 }}>
                  {selectedProject.industry}
                </span>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", background: "var(--color-bg-surface-subtle)", padding: "1.25rem", borderRadius: "var(--radius-lg)", marginBottom: "2rem", border: "1px solid var(--color-border-light)" }}>
                {selectedProject.results.map((r, i) => (
                  <div key={i} style={{ textAlign: "center" }}>
                    <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.75rem", fontWeight: 800, color: "var(--color-accent-sky)", lineHeight: 1 }}>{r.metric}</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", fontWeight: 600, marginTop: "0.35rem" }}>{r.label}</div>
                  </div>
                ))}
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <h4 style={{ fontSize: "1.1rem", color: "var(--color-primary-900)", marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ color: "#ef4444" }}>•</span> The Business Challenge
                </h4>
                <p style={{ fontSize: "0.95rem", color: "var(--color-text-main)", lineHeight: 1.7 }}>{selectedProject.challenge}</p>
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <h4 style={{ fontSize: "1.1rem", color: "var(--color-primary-900)", marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ color: "#10b981" }}>•</span> The Technical Solution
                </h4>
                <p style={{ fontSize: "0.95rem", color: "var(--color-text-main)", lineHeight: 1.7 }}>{selectedProject.solution}</p>
              </div>

              <div style={{ marginBottom: "2rem" }}>
                <h4 style={{ fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--color-text-subtle)", marginBottom: "0.75rem" }}>
                  Architectural Technologies Used
                </h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {selectedProject.technologies.map((t, idx) => (
                    <span key={idx} style={{ background: "var(--color-bg-surface)", border: "1px solid var(--color-border-medium)", padding: "0.3rem 0.8rem", borderRadius: "var(--radius-sm)", fontSize: "0.8rem", fontFamily: "var(--font-mono)", fontWeight: 600, color: "var(--color-primary-900)" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ borderTop: "1px solid var(--color-border-light)", paddingTop: "1.5rem", display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
                <button type="button" className="btn btn--secondary" onClick={() => setSelectedProject(null)}>Close</button>
                <button
                  type="button"
                  className="btn btn--primary"
                  onClick={() => {
                    const projTitle = selectedProject.title;
                    setSelectedProject(null);
                    setContactForm(prev => ({ ...prev, message: `Interested in engineering a platform similar to your case study "${projTitle}".` }));
                    scrollTo("contact");
                  }}
                >
                  Build Something Similar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {selectedJob && (
        <div className="modal-overlay is-open" onClick={() => setSelectedJob(null)}>
          <div className="modal-dialog" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">Apply: {selectedJob.title}</h3>
              <button type="button" className="modal-close-btn" onClick={() => setSelectedJob(null)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
            <div className="modal-body">
              <div style={{ marginBottom: "1rem", fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
                Department: <strong>{selectedJob.department}</strong> &bull; Location: <strong>{selectedJob.location}</strong> &bull; Salary: <strong>{selectedJob.salary}</strong>
              </div>
              <form onSubmit={(e) => {
                e.preventDefault();
                setSelectedJob(null);
                showToast(`Application for ${selectedJob.title} submitted! Our team will reach out.`);
              }}>
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input type="text" className="form-control" required placeholder="Jane Doe" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input type="email" className="form-control" required placeholder="jane@example.com" />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input type="tel" className="form-control" required placeholder="+1 (555) 000-0000" />
                </div>
                <div className="form-group">
                  <label className="form-label">LinkedIn or GitHub Profile</label>
                  <input type="url" className="form-control" placeholder="https://linkedin.com/in/jane" />
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem", borderTop: "1px solid var(--color-border-light)", paddingTop: "1.25rem" }}>
                  <button type="button" className="btn btn--secondary" onClick={() => setSelectedJob(null)}>Cancel</button>
                  <button type="submit" className="btn btn--primary">Submit Application</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {adminOpen && (
        <div className="modal-overlay is-open" onClick={() => setAdminOpen(false)}>
          <div className="modal-dialog modal-dialog--lg" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">SM Groups Solution Admin CMS & Lead Portal</h3>
              <button type="button" className="modal-close-btn" onClick={() => setAdminOpen(false)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
            <div className="modal-body">
              {!adminAuth ? (
                <div className="admin-login-box">
                  <div style={{ width: 52, height: 52, borderRadius: "var(--radius-lg)", background: "rgba(2,132,199,0.1)", color: "var(--color-accent-sky)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  </div>
                  <h3 style={{ fontSize: "1.4rem", color: "var(--color-primary-900)", marginBottom: "0.5rem" }}>Corporate Admin Portal</h3>
                  <p style={{ color: "var(--color-text-muted)", fontSize: "0.85rem", marginBottom: "1.5rem" }}>
                    Enter administrative passcode to view real-time client leads, inquiry files, and workflow statuses.
                  </p>
                  <form onSubmit={handleAdminLogin}>
                    <div className="form-group" style={{ textAlign: "left" }}>
                      <label className="form-label">Master Passcode</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter admin passcode"
                        value={adminPasscode}
                        onChange={e => setAdminPasscode(e.target.value)}
                        autoFocus
                      />
                      <div style={{ fontSize: "0.75rem", color: "var(--color-text-subtle)", marginTop: "0.35rem" }}>
                        (Demo Master Passcode: <code style={{ fontFamily: "var(--font-mono)", color: "var(--color-accent-sky)", fontWeight: 700 }}>admin2026</code>)
                      </div>
                    </div>
                    {adminPassError && <div className="form-feedback is-visible" style={{ marginBottom: "1rem" }}>{adminPassError}</div>}
                    <button type="submit" className="btn btn--block btn--primary">Access Dashboard</button>
                  </form>
                </div>
              ) : (
                <div>
                  {/* KPI Counters */}
                  <div className="admin-stats-grid">
                    <div className="admin-stat-card">
                      <div className="admin-stat-card__val">{enquiries.length}</div>
                      <div className="admin-stat-card__lbl">Total Inquiries</div>
                    </div>
                    <div className="admin-stat-card" style={{ borderLeft: "4px solid #3b82f6" }}>
                      <div className="admin-stat-card__val" style={{ color: "#2563eb" }}>{enquiries.filter(e => e.status === "New").length}</div>
                      <div className="admin-stat-card__lbl">New Leads</div>
                    </div>
                    <div className="admin-stat-card" style={{ borderLeft: "4px solid #10b981" }}>
                      <div className="admin-stat-card__val" style={{ color: "#10b981" }}>{enquiries.filter(e => e.status === "In Progress" || e.status === "Contacted").length}</div>
                      <div className="admin-stat-card__lbl">Active Pipeline</div>
                    </div>
                    <div className="admin-stat-card" style={{ borderLeft: "4px solid #8b5cf6" }}>
                      <div className="admin-stat-card__val" style={{ color: "#7c3aed" }}>{enquiries.filter(e => e.status === "Converted").length}</div>
                      <div className="admin-stat-card__lbl">Converted Clients</div>
                    </div>
                  </div>

                  {/* Toolbar */}
                  <div className="admin-toolbar">
                    <div className="admin-filter-group">
                      <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--color-text-subtle)" }}>STATUS:</span>
                      {["All", "New", "Contacted", "In Progress", "Converted", "Closed"].map(st => (
                        <button
                          key={st}
                          type="button"
                          className={`tab-btn ${adminFilter === st ? "tab-btn--active" : ""}`}
                          onClick={() => setAdminFilter(st)}
                          style={{ padding: "0.35rem 0.8rem", fontSize: "0.75rem" }}
                        >
                          {st}
                        </button>
                      ))}
                    </div>

                    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", flexWrap: "wrap" }}>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search leads..."
                        value={adminSearch}
                        onChange={e => setAdminSearch(e.target.value)}
                        style={{ width: 200, padding: "0.45rem 0.75rem", fontSize: "0.8rem" }}
                      />
                      <button type="button" className="btn btn--sm btn--secondary" onClick={handleExportCSV}>Download CSV</button>
                      <button type="button" className="btn btn--sm btn--secondary" onClick={() => setAdminAuth(false)} style={{ color: "#ef4444" }}>Logout</button>
                    </div>
                  </div>

                  {/* Leads Table */}
                  <div className="admin-table-container">
                    <table className="admin-table">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Client / Company</th>
                          <th>Service</th>
                          <th>Budget</th>
                          <th>Date</th>
                          <th>Status</th>
                          <th style={{ textAlign: "right" }}>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredAdminLeads.length === 0 ? (
                          <tr><td colSpan="7" style={{ textAlign: "center", padding: "2rem", color: "var(--color-text-subtle)" }}>No inquiries match the current filter.</td></tr>
                        ) : filteredAdminLeads.map(item => (
                          <tr key={item.id}>
                            <td><code style={{ fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--color-accent-sky)" }}>{item.id}</code></td>
                            <td>
                              <strong>{item.fullName}</strong>
                              <div style={{ fontSize: "0.75rem", color: "var(--color-text-subtle)" }}>{item.companyName} &bull; {item.email}</div>
                            </td>
                            <td><span className="badge" style={{ background: "var(--color-bg-surface-subtle)", fontSize: "0.75rem" }}>{item.service}</span></td>
                            <td><span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem" }}>{item.budget}</span></td>
                            <td style={{ fontSize: "0.75rem", color: "var(--color-text-subtle)" }}>{new Date(item.createdAt).toLocaleDateString()}</td>
                            <td>
                              <select
                                className="form-select"
                                value={item.status}
                                onChange={e => handleStatusChange(item.id, e.target.value)}
                                style={{ padding: "0.25rem 0.5rem", fontSize: "0.75rem" }}
                              >
                                {["New", "Contacted", "In Progress", "Converted", "Closed"].map(st => (
                                  <option key={st} value={st}>{st}</option>
                                ))}
                              </select>
                            </td>
                            <td style={{ textAlign: "right" }}>
                              <button type="button" className="btn btn--sm btn--secondary" onClick={() => setAdminDetailLead(item)}>View</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Lead Detail Drawer */}
                  {adminDetailLead && (
                    <div className="enquiry-detail-view" style={{ marginTop: "1.5rem" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem", borderBottom: "1px solid var(--color-border-medium)", paddingBottom: "0.75rem" }}>
                        <h4 style={{ fontSize: "1.1rem", color: "var(--color-primary-900)", margin: 0 }}>
                          Lead File: {adminDetailLead.fullName} ({adminDetailLead.id})
                        </h4>
                        <button type="button" className="btn btn--sm btn--secondary" onClick={() => setAdminDetailLead(null)}>Close</button>
                      </div>
                      <div className="enquiry-meta-grid">
                        <div className="enquiry-meta-item"><label>Company</label><span>{adminDetailLead.companyName}</span></div>
                        <div className="enquiry-meta-item"><label>Email</label><span><a href={`mailto:${adminDetailLead.email}`}>{adminDetailLead.email}</a></span></div>
                        <div className="enquiry-meta-item"><label>Phone</label><span>{adminDetailLead.phone}</span></div>
                        <div className="enquiry-meta-item"><label>Service</label><span>{adminDetailLead.service}</span></div>
                        <div className="enquiry-meta-item"><label>Budget</label><span>{adminDetailLead.budget}</span></div>
                        <div className="enquiry-meta-item"><label>Date</label><span>{new Date(adminDetailLead.createdAt).toLocaleString()}</span></div>
                      </div>
                      <div style={{ marginBottom: "1.25rem" }}>
                        <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: "var(--color-text-subtle)", textTransform: "uppercase", marginBottom: "0.35rem" }}>
                          Client Project Message
                        </label>
                        <div style={{ background: "#ffffff", padding: "1rem", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border-light)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                          {adminDetailLead.message}
                        </div>
                      </div>
                      <div style={{ display: "flex", gap: "0.75rem" }}>
                        <a href={`mailto:${adminDetailLead.email}?subject=SM%20Groups%20Solution%20Inquiry%20Followup%20(${adminDetailLead.id})`} className="btn btn--primary btn--sm">
                          Reply via Email
                        </a>
                        <button type="button" className="btn btn--secondary btn--sm" onClick={() => handleDeleteLead(adminDetailLead.id)} style={{ color: "var(--color-danger)" }}>
                          Delete Lead
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {legalModal && (
        <div className="modal-overlay is-open" onClick={() => setLegalModal(null)}>
          <div className="modal-dialog" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">
                {legalModal === "privacy" ? "Privacy Policy" : legalModal === "terms" ? "Terms & Conditions" : "Cookie Preferences"}
              </h3>
              <button type="button" className="modal-close-btn" onClick={() => setLegalModal(null)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
            <div className="modal-body">
              <p><strong>SM Groups Solution(R)</strong> adheres to strict corporate governance, SOC-2, and confidentiality protocols.</p>
              <p>All enterprise software deliverables, repositories, and credentials are governed by mutual non-disclosure and intellectual property assignment agreements.</p>
              <div style={{ marginTop: "1.5rem", textAlign: "right" }}>
                <button type="button" className="btn btn--primary" onClick={() => setLegalModal(null)}>I Understand</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

