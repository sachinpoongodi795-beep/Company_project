/**
 * NOVATECH ENTERPRISE SOLUTIONS - COMPLETE BUNDLE
 * Self-contained production bundle supporting both local file:// execution and HTTP deployment.
 */

(function () {
  "use strict";

  // =========================================================================
  // 1. CONFIGURATION DATA
  // =========================================================================
  const COMPANY_CONFIG = {
    name: "Novatech Solutions",
    legalName: "Novatech Digital Solutions Inc.",
    tagline: "Architecting Enterprise Digital Systems",
    shortDesc: "Enterprise software engineering, cloud architecture, and AI-driven digital transformation.",
    foundedYear: 2018,
    contact: {
      email: "contact@novatechsolutions.com",
      salesEmail: "sales@novatechsolutions.com",
      phone: "+1 (800) 555-8324",
      intlPhone: "+1 (415) 890-4200",
      address: {
        street: "100 Montgomery Street, Suite 2200",
        city: "San Francisco",
        state: "CA",
        postalCode: "94104",
        country: "United States"
      },
      workingHours: "Monday – Friday: 8:00 AM – 6:00 PM PST"
    },
    stats: [
      { value: 50, suffix: "+", label: "Projects Delivered", desc: "Across 6 continents" },
      { value: 20, suffix: "+", label: "Technology Experts", desc: "Senior architects & engineers" },
      { value: 15, suffix: "+", label: "Industries Served", desc: "From FinTech to HealthTech" },
      { value: 99, suffix: "%", label: "Client Satisfaction", desc: "Based on post-launch audits" }
    ]
  };

  const SERVICES_DATA = [
    {
      id: "software-dev",
      icon: "code-square",
      title: "Software Development",
      tagline: "High-Performance Custom Engineering",
      shortDesc: "Custom web and software applications built for bespoke enterprise business requirements and high throughput.",
      fullDesc: "We design and build resilient, maintainable software systems tailored to your specific operational workflows. Our solutions focus on domain-driven design, clean architecture, automated testing pipelines, and long-term maintainability.",
      deliverables: [
        "Custom Enterprise Web Applications",
        "Microservices & Distributed Systems",
        "Legacy Codebase Modernization",
        "Automated CI/CD & Unit Test Suites",
        "Role-Based Access Control & Compliance"
      ],
      technologies: ["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "Docker"]
    },
    {
      id: "web-dev",
      icon: "globe",
      title: "Web Development",
      tagline: "Scalable Modern Web Portals",
      shortDesc: "Modern, lightning-fast responsive websites, client dashboards, and web applications that convert visitors.",
      fullDesc: "Crafting exceptional web applications using the latest web standards, headless CMS solutions, and high-conversion UI architectures. We ensure 99+ Lighthouse performance scores, perfect mobile responsiveness, and SEO readiness.",
      deliverables: [
        "Single Page & Server-Rendered Applications",
        "Customer Self-Service Portals",
        "Progressive Web Apps (PWA)",
        "High-Traffic Marketing Engines",
        "Core Web Vitals & Speed Optimization"
      ],
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GraphQL", "Vercel"]
    },
    {
      id: "mobile-dev",
      icon: "smartphone",
      title: "Mobile App Development",
      tagline: "Native & Cross-Platform Mobility",
      shortDesc: "Native iOS, Android, and cross-platform mobile applications engineered for smooth user engagement.",
      fullDesc: "End-to-end mobile development from concept to App Store and Google Play deployment. We develop fluid, offline-capable mobile experiences with hardware integration, real-time push notifications, and high biometric security.",
      deliverables: [
        "iOS (Swift) & Android (Kotlin) Engineering",
        "Cross-Platform Apps (React Native & Flutter)",
        "Offline Sync & Local Database Architecture",
        "App Store & Play Store Publishing & Compliance",
        "Biometric Security & Mobile Payments"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"]
    },
    {
      id: "ui-ux",
      icon: "palette",
      title: "UI/UX Design",
      tagline: "User-Centered Digital Experience",
      shortDesc: "User-focused interface and experience design backed by cognitive research, design systems, and rapid prototyping.",
      fullDesc: "Transforming complex business logic into intuitive, visually breathtaking digital interfaces. We build comprehensive design systems that accelerate development and elevate brand prestige.",
      deliverables: [
        "UX Research, Journey Mapping & Personas",
        "Interactive High-Fidelity Wireframes",
        "Comprehensive Enterprise Design Systems",
        "Accessibility (WCAG 2.1 AA) Compliance",
        "Usability Testing & Conversion Optimization"
      ],
      technologies: ["Figma", "Design Systems", "Prototyping", "WCAG 2.1 AA", "Storybook"]
    },
    {
      id: "cloud-solutions",
      icon: "cloud",
      title: "Cloud Solutions",
      tagline: "Reliable, Elastic Cloud Infrastructure",
      shortDesc: "Cloud infrastructure, serverless deployment, container orchestration, and multi-region scalability.",
      fullDesc: "Certified cloud architects helping companies migrate, automate, and optimize their infrastructure on AWS, Azure, and Google Cloud. We implement Infrastructure as Code (IaC) to guarantee repeatable, immutable environments.",
      deliverables: [
        "Cloud Migration & Modernization",
        "Kubernetes & Docker Orchestration",
        "Serverless Microservices Architecture",
        "Disaster Recovery & High Availability",
        "Cost Optimization & Cloud Governance"
      ],
      technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "GitHub Actions"]
    },
    {
      id: "ai-automation",
      icon: "cpu",
      title: "AI & Automation",
      tagline: "Intelligent Workflows & Machine Learning",
      shortDesc: "AI-powered applications, business process automation, LLM integrations, and predictive analytics pipelines.",
      fullDesc: "Harnessing the power of modern machine learning and generative AI to automate routine operational tasks, extract deep business intelligence, and create conversational copilot systems.",
      deliverables: [
        "Custom LLM & Agentic Workflows",
        "Retrieval-Augmented Generation (RAG) Systems",
        "Document AI & Intelligent Data Extraction",
        "Predictive Analytics & Forecasting Models",
        "Robotic Process Automation (RPA)"
      ],
      technologies: ["Python", "PyTorch", "OpenAI API", "LangChain", "Vector DBs", "FastAPI"]
    },
    {
      id: "ecommerce",
      icon: "shopping-bag",
      title: "E-Commerce Solutions",
      tagline: "High-Volume Commerce Engines",
      shortDesc: "Scalable online stores, headless commerce architectures, and global multi-currency checkout platforms.",
      fullDesc: "We build enterprise e-commerce platforms designed for lightning-fast catalog navigation, flawless checkouts, inventory synchronization, and integration with ERP systems.",
      deliverables: [
        "Headless E-Commerce Frontends",
        "Shopify Plus & Custom Checkout Integrations",
        "ERP & Warehouse Inventory Synchronization",
        "Global Payment Gateway Orchestration",
        "Personalized Recommendation Engines"
      ],
      technologies: ["Shopify Plus", "Next.js", "Stripe", "GraphQL", "PostgreSQL", "Redis"]
    },
    {
      id: "api-integration",
      icon: "git-merge",
      title: "API & System Integration",
      tagline: "Seamless Data & Platform Interoperability",
      shortDesc: "Connect disparate business systems, legacy mainframes, and modern SaaS services with secure REST and GraphQL APIs.",
      fullDesc: "Eliminate data silos across your organization with robust enterprise middleware, event-driven message buses, and authenticated API gateways that operate with microsecond latency.",
      deliverables: [
        "RESTful & GraphQL API Architecture",
        "Event-Driven Architecture (Kafka / RabbitMQ)",
        "CRM, ERP & Payment Gateway Connectors",
        "API Security, Rate Limiting & Developer Portals",
        "Real-time Webhook Systems"
      ],
      technologies: ["Node.js", "Go", "Apache Kafka", "GraphQL", "Redis", "Swagger/OpenAPI"]
    },
    {
      id: "it-consulting",
      icon: "briefcase",
      title: "IT Consulting & Advisory",
      tagline: "Strategic Technology Roadmapping",
      shortDesc: "Technology strategy, software architecture audit, digital transformation consulting, and CTO-as-a-service.",
      fullDesc: "Guiding executive leadership through crucial technology decisions. We audit existing systems, identify technical debt, verify security posture, and formulate scalable engineering roadmaps.",
      deliverables: [
        "Architecture & Codebase Health Audits",
        "Technology Stack Modernization Strategies",
        "Cybersecurity & Compliance Assessments",
        "Fractional CTO & Tech Advisory",
        "Engineering Team Mentorship & Agile Coaching"
      ],
      technologies: ["Architecture Audits", "SOC2 / HIPAA Compliance", "DevOps Maturity", "Roadmapping"]
    }
  ];

  const TECH_STACK = {
    frontend: [
      { name: "React", category: "Library", level: "Core", icon: "react" },
      { name: "Next.js", category: "Framework", level: "Core", icon: "nextjs" },
      { name: "TypeScript", category: "Language", level: "Standard", icon: "typescript" },
      { name: "Vue.js", category: "Framework", level: "Supported", icon: "default" },
      { name: "Tailwind CSS", category: "Styling", level: "Standard", icon: "default" },
      { name: "HTML5 / CSS3", category: "Core Web", level: "Standard", icon: "default" }
    ],
    backend: [
      { name: "Node.js", category: "Runtime", level: "Core", icon: "nodejs" },
      { name: "Python", category: "Language", level: "Core", icon: "python" },
      { name: "Java / Spring", category: "Enterprise", level: "Supported", icon: "default" },
      { name: ".NET Core", category: "Enterprise", level: "Supported", icon: "default" },
      { name: "Go (Golang)", category: "High Throughput", level: "Standard", icon: "default" },
      { name: "Express / NestJS", category: "Framework", level: "Standard", icon: "default" }
    ],
    database: [
      { name: "PostgreSQL", category: "Relational", level: "Primary", icon: "postgresql" },
      { name: "MongoDB", category: "NoSQL Document", level: "Standard", icon: "default" },
      { name: "Redis", category: "In-Memory Caching", level: "Standard", icon: "default" },
      { name: "MySQL", category: "Relational", level: "Standard", icon: "default" },
      { name: "Elasticsearch", category: "Search & Log", level: "Standard", icon: "default" },
      { name: "Qdrant Vector DB", category: "Vector AI", level: "Advanced", icon: "default" }
    ],
    cloud: [
      { name: "AWS", category: "Cloud Provider", level: "Tier-1 Partner", icon: "aws" },
      { name: "Microsoft Azure", category: "Enterprise Cloud", level: "Standard", icon: "default" },
      { name: "Google Cloud", category: "GCP Services", level: "Standard", icon: "default" },
      { name: "Docker", category: "Containers", level: "Standard", icon: "docker" },
      { name: "Kubernetes", category: "Orchestration", level: "Standard", icon: "default" },
      { name: "Terraform", category: "IaC", level: "Standard", icon: "default" }
    ],
    ai: [
      { name: "PyTorch", category: "Deep Learning", level: "Standard", icon: "default" },
      { name: "OpenAI API", category: "LLM Orchestration", level: "Standard", icon: "default" },
      { name: "LangChain", category: "Agentic Chains", level: "Standard", icon: "default" },
      { name: "Hugging Face", category: "Open Weights", level: "Standard", icon: "default" },
      { name: "Computer Vision", category: "Detection & OCR", level: "Specialized", icon: "default" },
      { name: "Automated RPA", category: "Process Automation", level: "Standard", icon: "default" }
    ]
  };

  const INDUSTRIES_DATA = [
    { id: "finance", icon: "dollar-sign", title: "Banking & FinTech", desc: "PCI-DSS compliant payment gateways, algorithmic risk models, and wealth management portals." },
    { id: "healthcare", icon: "activity", title: "Healthcare & Life Sciences", desc: "HIPAA-compliant EHR integration, telemedicine platforms, and medical imaging workflows." },
    { id: "ecommerce", icon: "shopping-cart", title: "Retail & E-Commerce", desc: "Omnichannel inventory orchestration, headless checkout engines, and dynamic pricing algorithms." },
    { id: "manufacturing", icon: "settings", title: "Manufacturing & IoT", desc: "Predictive equipment maintenance telemetry, digital twin visualizers, and ERP integration." },
    { id: "logistics", icon: "truck", title: "Logistics & Supply Chain", desc: "Fleet dispatch tracking, dynamic route optimization, and warehouse automation interfaces." },
    { id: "education", icon: "book-open", title: "Education & EdTech", desc: "Interactive LMS portals, virtual classroom video streaming, and automated grading pipelines." },
    { id: "automotive", icon: "navigation", title: "Automotive & Mobility", desc: "Connected car telematics dashboards, EV charging network software, and dealership systems." },
    { id: "startups", icon: "zap", title: "High-Growth Startups", desc: "Rapid prototype MVP development, scalable seed-to-Series A technical foundations, and high velocity." }
  ];

  const PROJECTS_DATA = [
    {
      id: "project-fintech",
      title: "ApexPay Global Remittance Platform",
      category: "Enterprise",
      categoryKey: "enterprise",
      industry: "Financial Services",
      imageType: "fintech",
      shortDesc: "Next-generation cross-border payment rails processing $140M+ annually with real-time currency conversion and sub-second settlement.",
      challenge: "The client operated on legacy batch settlement banking rails suffering from high latency (3-5 business days), 4.2% FX drop-off, and strict compliance audits.",
      solution: "Novatech engineered an event-driven distributed payment gateway using Go, Apache Kafka, and AWS Fargate with real-time AML/KYC screening.",
      technologies: ["Go", "Kafka", "PostgreSQL", "AWS Fargate", "Docker", "Redis"],
      results: [
        { metric: "99.99%", label: "Platform Uptime SLA" },
        { metric: "1.4s", label: "Average Settlement Time" },
        { metric: "$140M+", label: "Annual Volume Processed" }
      ]
    },
    {
      id: "project-health",
      title: "OmniCare Clinical Telehealth Portal",
      category: "Web",
      categoryKey: "web",
      industry: "Healthcare",
      imageType: "health",
      shortDesc: "HIPAA-compliant web platform linking 12,000+ physicians with over 450,000 patients across encrypted video consultations and EHR sync.",
      challenge: "Fragmented hospital systems prevented doctors from accessing patient histories during video calls, leading to consultation delays.",
      solution: "Designed and deployed a modern React/Next.js portal powered by WebRTC and FHIR/HL7 API connectors with end-to-end encryption.",
      technologies: ["Next.js", "React", "WebRTC", "Node.js", "HL7/FHIR", "PostgreSQL"],
      results: [
        { metric: "450K+", label: "Active Consultations" },
        { metric: "100%", label: "HIPAA & SOC-2 Audit Pass" },
        { metric: "35%", label: "Reduction in Wait Times" }
      ]
    },
    {
      id: "project-ecommerce",
      title: "Veloce Luxury Headless Commerce",
      category: "E-Commerce",
      categoryKey: "ecommerce",
      industry: "Retail & Fashion",
      imageType: "ecommerce",
      shortDesc: "Headless e-commerce infrastructure supporting 32 international currencies, sub-second product filtering, and customized checkout flows.",
      challenge: "Slow legacy monolithic store (6.8s page load) suffered 62% mobile cart abandonment during seasonal promotional peaks.",
      solution: "Built a headless frontend using Next.js on edge CDNs, backed by Shopify Plus Storefront API, Algolia InstantSearch, and Stripe routing.",
      technologies: ["Next.js", "Shopify Storefront", "Algolia", "Tailwind CSS", "Stripe", "Redis"],
      results: [
        { metric: "0.8s", label: "Global Page Load Time" },
        { metric: "+48%", label: "Mobile Conversion Rate" },
        { metric: "32", label: "Currencies Supported" }
      ]
    },
    {
      id: "project-ai",
      title: "CogniFlow Enterprise Document AI",
      category: "AI",
      categoryKey: "ai",
      industry: "Legal & Insurance",
      imageType: "ai",
      shortDesc: "Autonomous LLM-driven contract analysis platform processing complex 200+ page policy agreements with 98.4% extraction accuracy.",
      challenge: "Claims adjusters spent an average of 4.5 hours manually reviewing insurance clauses, creating claims processing backlogs.",
      solution: "Engineered a Retrieval-Augmented Generation (RAG) system with hybrid semantic search, custom entity extraction, and human verification.",
      technologies: ["Python", "FastAPI", "OpenAI API", "LangChain", "Qdrant Vector DB", "React"],
      results: [
        { metric: "82%", label: "Reduction in Review Time" },
        { metric: "98.4%", label: "Data Extraction Accuracy" },
        { metric: "50,000+", label: "Contracts Processed / Mo" }
      ]
    },
    {
      id: "project-mobile",
      title: "SyncFleet Driver & Dispatch App",
      category: "Mobile",
      categoryKey: "mobile",
      industry: "Logistics",
      imageType: "mobile",
      shortDesc: "Offline-first mobile application utilized by 3,500 commercial haulage drivers for route guidance, proof-of-delivery, and telemetry.",
      challenge: "Drivers frequently lost cellular reception in rural transit zones, causing lost dispatch updates and billing delays.",
      solution: "Developed an offline-first React Native mobile app with SQLite local synchronization, background GPS tracking, and digital signature capture.",
      technologies: ["React Native", "TypeScript", "SQLite", "Node.js", "WebSockets", "AWS IoT"],
      results: [
        { metric: "3,500+", label: "Daily Active Drivers" },
        { metric: "0%", label: "Data Loss in Offline Zones" },
        { metric: "22%", label: "Route Mileage Savings" }
      ]
    },
    {
      id: "project-iot",
      title: "AeroTelemetry Industrial Monitoring",
      category: "Enterprise",
      categoryKey: "enterprise",
      industry: "Manufacturing",
      imageType: "iot",
      shortDesc: "Real-time sensor telemetry platform ingesting 80,000 events/second across 14 manufacturing plants to predict mechanical failures.",
      challenge: "Unplanned manufacturing downtime cost the client upwards of $800,000 annually due to reactive rather than predictive machine repairs.",
      solution: "Architected a high-throughput time-series ingestion pipeline with Kafka, TimescaleDB, and an interactive 3D plant dashboard.",
      technologies: ["Kafka", "TimescaleDB", "React", "Three.js", "Docker", "Go"],
      results: [
        { metric: "80K/s", label: "Sensor Events Ingested" },
        { metric: "-64%", label: "Unscheduled Plant Downtime" },
        { metric: "$1.2M", label: "First-Year Cost Savings" }
      ]
    }
  ];

  const PROCESS_STEPS = [
    { step: "01", title: "Discover", subtitle: "Requirement Analysis & Architecture Audit", desc: "We dive deep into your operational workflows, user journeys, data structures, and compliance requirements to establish unambiguous project scope." },
    { step: "02", title: "Strategy", subtitle: "Architecture Blueprint & Tech Selection", desc: "We formulate an architectural design document, map entity relationships, choose the optimal technology stack, and establish cloud security protocols." },
    { step: "03", title: "Design", subtitle: "Interactive UI/UX & Design Systems", desc: "Our design team crafts intuitive user journeys, wireframes, and design systems in Figma, conducting stakeholder walkthroughs before engineering commences." },
    { step: "04", title: "Develop", subtitle: "Agile Engineering & Test Automation", desc: "Engineers build clean, modular code in 2-week agile sprints with daily standups, pull request peer reviews, and automated CI/CD unit testing." },
    { step: "05", title: "Test", subtitle: "Security Audits & Quality Assurance", desc: "Rigorous automated integration tests, penetration testing, load stress simulations, and cross-browser regression validation guarantee stability." },
    { step: "06", title: "Launch & Support", subtitle: "Zero-Downtime Deployment & SLA", desc: "We deploy using automated blue/green pipelines, configure APM monitoring, and provide continuous 24/7 SLA infrastructure support." }
  ];

  const WHY_CHOOSE_US = [
    { icon: "users", title: "Experienced Tech Team", desc: "Senior engineers and cloud architects with an average of 9+ years delivering production software for Fortune 500s." },
    { icon: "sliders", title: "Custom Solutions", desc: "Zero boilerplate shortcuts. Every line of code and architecture diagram is tailored to your business model and scaling goals." },
    { icon: "repeat", title: "Agile & Transparent", desc: "Bi-weekly sprint demos, shared code repositories, dedicated Slack/Teams channels, and complete budget visibility." },
    { icon: "shield-check", title: "Security & Compliance", desc: "ISO-aligned development practices, OWASP top 10 adherence, role-based controls, and SOC 2 / HIPAA preparation." },
    { icon: "maximize-2", title: "Scalable Architecture", desc: "Systems built to gracefully scale from hundreds of pilot users to millions of global transactions without structural redesigns." },
    { icon: "clock", title: "On-Time Delivery", desc: "Strict milestone tracking, risk mitigation matrices, and proven delivery track record with 94% of milestones shipped ahead of deadline." },
    { icon: "life-buoy", title: "Long-Term Partnership", desc: "Post-launch warranty, ongoing feature maintenance, cloud cost management, and continuous optimization guarantees." },
    { icon: "award", title: "Zero Vendor Lock-In", desc: "You retain 100% intellectual property ownership of source code, container configurations, documentation, and cloud accounts." }
  ];

  const TEAM_DATA = [
    { name: "Marcus Vance", role: "Chief Technology Officer", bio: "Former Principal Architect with 16+ years designing distributed cloud backends and enterprise SaaS systems.", expertise: ["Cloud Architecture", "Distributed Systems", "Kubernetes", "Security"] },
    { name: "Elena Rostova", role: "Head of Engineering", bio: "Leads engineering squads across modern web, microservices, and backend platform reliability engineering.", expertise: ["React / Next.js", "Node.js", "Go", "CI/CD Automation"] },
    { name: "David Chen", role: "Principal AI & Data Architect", bio: "Specializes in LLM fine-tuning, RAG enterprise pipelines, and real-time machine learning inference systems.", expertise: ["Python", "PyTorch", "LLMs & RAG", "Data Engineering"] },
    { name: "Sarah Lindqvist", role: "Director of Product Design", bio: "Design systems specialist who has directed UX transformations for global banking and logistics platforms.", expertise: ["Design Systems", "Figma", "User Research", "WCAG AA"] }
  ];

  const TESTIMONIALS_DATA = [
    { quote: "Novatech took our complex cross-border payment requirements and turned them into an ultra-reliable platform. Their engineering rigor and communication are the best we have experienced.", author: "Jonathan Mercer", role: "VP of Product", company: "Apex Global FinTech" },
    { quote: "The telehealth platform Novatech engineered exceeded our clinical compliance benchmarks and allowed us to scale from 20,000 to over 450,000 patients seamlessly. They are true technical partners.", author: "Dr. Rachel Sterling", role: "Chief Digital Officer", company: "OmniHealth Network" },
    { quote: "Our mobile fleet app used to crash constantly in areas with low cell coverage. Novatech rebuilt it with an offline-first architecture that eliminated data loss entirely and saved our dispatch team hundreds of hours each week.", author: "Carlos Morales", role: "Director of Fleet Operations", company: "TransLogix International" }
  ];

  const CAREERS_DATA = [
    { id: "job-sr-react", title: "Senior Full-Stack Engineer (React & Node.js)", department: "Engineering", location: "San Francisco, CA / Hybrid / Remote", type: "Full-time", experience: "5+ Years", salary: "$140,000 – $175,000 + Equity", desc: "Design and develop enterprise web platforms using React, TypeScript, Node.js, and modern cloud microservices." },
    { id: "job-ai-engineer", title: "AI / Machine Learning Engineer", department: "AI & Data Solutions", location: "Remote (US/Canada)", type: "Full-time", experience: "4+ Years", salary: "$150,000 – $185,000 + Equity", desc: "Build production LLM systems, custom RAG architectures, and predictive analytics tools for enterprise clients." },
    { id: "job-devops-lead", title: "Senior Cloud & DevOps Architect", department: "Cloud & Infrastructure", location: "San Francisco, CA / Remote", type: "Full-time", experience: "6+ Years", salary: "$160,000 – $190,000 + Equity", desc: "Lead cloud infrastructure architecture across multi-region AWS and Azure setups, container orchestration, and security." },
    { id: "job-lead-designer", title: "Lead UI/UX Product Designer", department: "Design", location: "Remote (Global)", type: "Full-time", experience: "5+ Years", salary: "$125,000 – $155,000", desc: "Define the visual and interaction design for complex digital products, maintain enterprise design systems." },
    { id: "job-qa-automation", title: "QA Automation Engineer", department: "Quality Assurance", location: "Remote (US/EU)", type: "Full-time", experience: "3+ Years", salary: "$100,000 – $130,000", desc: "Build automated end-to-end testing frameworks, perform API regression testing, and ensure high release stability." },
    { id: "job-tech-pm", title: "Technical Project Manager", department: "Project Delivery", location: "San Francisco, CA / Hybrid", type: "Full-time", experience: "4+ Years", salary: "$120,000 – $150,000", desc: "Coordinate sprint planning, client milestones, and cross-functional engineering squads to deliver enterprise projects on schedule." }
  ];

  // =========================================================================
  // 2. STATE & STORAGE MANAGEMENT
  // =========================================================================
  const STORAGE_KEY_ENQUIRIES = "novatech_enquiries_v1";
  const STORAGE_KEY_APPLICATIONS = "novatech_job_applications_v1";
  const STORAGE_KEY_ADMIN_AUTH = "novatech_admin_session";

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
      message: "We need an enterprise fleet telematics dashboard to track 1,200 vehicles in real-time with automated dispatch route optimization and fuel telemetry integration.",
      status: "New"
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
      message: "Looking for an automated medical record summarizer using private LLM deployment compliant with HIPAA standards for clinical patient triage.",
      status: "In Progress"
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
      message: "Migrating legacy Magento store to Next.js Headless Shopify Plus setup with multi-currency EU checkout support.",
      status: "Contacted"
    }
  ];

  const AppState = {
    init() {
      try {
        if (!localStorage.getItem(STORAGE_KEY_ENQUIRIES)) {
          localStorage.setItem(STORAGE_KEY_ENQUIRIES, JSON.stringify(SEED_ENQUIRIES));
        }
        if (!localStorage.getItem(STORAGE_KEY_APPLICATIONS)) {
          localStorage.setItem(STORAGE_KEY_APPLICATIONS, JSON.stringify([]));
        }
      } catch (e) {
        console.warn("Storage restricted", e);
      }
    },
    getEnquiries() {
      try {
        const d = localStorage.getItem(STORAGE_KEY_ENQUIRIES);
        return d ? JSON.parse(d) : SEED_ENQUIRIES;
      } catch (e) {
        return SEED_ENQUIRIES;
      }
    },
    addEnquiry(formData) {
      const list = this.getEnquiries();
      const newEntry = {
        id: `ENQ-${Math.floor(1000 + Math.random() * 9000)}`,
        createdAt: new Date().toISOString(),
        fullName: (formData.fullName || "").trim(),
        companyName: (formData.companyName || "Independent").trim(),
        email: (formData.email || "").trim(),
        phone: (formData.phone || "N/A").trim(),
        service: formData.service || "General Inquiry",
        budget: formData.budget || "Not Specified",
        message: (formData.message || "").trim(),
        status: "New"
      };
      list.unshift(newEntry);
      try {
        localStorage.setItem(STORAGE_KEY_ENQUIRIES, JSON.stringify(list));
      } catch (e) {}
      window.dispatchEvent(new CustomEvent("novatech:enquiry-added", { detail: newEntry }));
      return newEntry;
    },
    updateEnquiryStatus(id, newStatus) {
      const list = this.getEnquiries();
      const item = list.find(e => e.id === id);
      if (item) {
        item.status = newStatus;
        try {
          localStorage.setItem(STORAGE_KEY_ENQUIRIES, JSON.stringify(list));
        } catch (e) {}
        window.dispatchEvent(new CustomEvent("novatech:enquiries-updated"));
      }
    },
    deleteEnquiry(id) {
      let list = this.getEnquiries();
      list = list.filter(e => e.id !== id);
      try {
        localStorage.setItem(STORAGE_KEY_ENQUIRIES, JSON.stringify(list));
      } catch (e) {}
      window.dispatchEvent(new CustomEvent("novatech:enquiries-updated"));
    },
    exportCSV() {
      const list = this.getEnquiries();
      const headers = ["ID", "Date", "Full Name", "Company", "Email", "Phone", "Service", "Budget", "Status", "Message"];
      const rows = list.map(e => [
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
    },
    addApplication(jobId, jobTitle, applicant) {
      try {
        const apps = JSON.parse(localStorage.getItem(STORAGE_KEY_APPLICATIONS) || "[]");
        const entry = {
          id: `APP-${Math.floor(1000 + Math.random() * 9000)}`,
          createdAt: new Date().toISOString(),
          jobId,
          jobTitle,
          ...applicant
        };
        apps.unshift(entry);
        localStorage.setItem(STORAGE_KEY_APPLICATIONS, JSON.stringify(apps));
        return entry;
      } catch (e) {
        return null;
      }
    },
    isAdmin() {
      try {
        return sessionStorage.getItem(STORAGE_KEY_ADMIN_AUTH) === "authenticated";
      } catch (e) {
        return false;
      }
    },
    loginAdmin(code) {
      if (code === "admin2026" || code === "novatech") {
        try {
          sessionStorage.setItem(STORAGE_KEY_ADMIN_AUTH, "authenticated");
        } catch (e) {}
        return true;
      }
      return false;
    },
    logoutAdmin() {
      try {
        sessionStorage.removeItem(STORAGE_KEY_ADMIN_AUTH);
      } catch (e) {}
    }
  };

  AppState.init();

  // =========================================================================
  // 3. UI COMPONENTS & RENDERING
  // =========================================================================

  // Navbar
  function initNavbar() {
    const navbar = document.querySelector(".navbar");
    const toggleBtn = document.querySelector(".navbar__toggle");
    const mobileNav = document.querySelector(".mobile-nav");
    const backdrop = document.querySelector(".mobile-nav-backdrop");
    const closeBtn = document.querySelector(".mobile-nav__close");
    const navLinks = document.querySelectorAll(".navbar__link, .mobile-nav__link");

    const onScroll = () => {
      if (window.scrollY > 40) {
        navbar?.classList.add("is-scrolled");
      } else {
        navbar?.classList.remove("is-scrolled");
      }
      updateActive();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const openMenu = () => {
      mobileNav?.classList.add("is-open");
      backdrop?.classList.add("is-open");
      document.body.style.overflow = "hidden";
      toggleBtn?.setAttribute("aria-expanded", "true");
    };

    const closeMenu = () => {
      mobileNav?.classList.remove("is-open");
      backdrop?.classList.remove("is-open");
      document.body.style.overflow = "";
      toggleBtn?.setAttribute("aria-expanded", "false");
    };

    toggleBtn?.addEventListener("click", openMenu);
    closeBtn?.addEventListener("click", closeMenu);
    backdrop?.addEventListener("click", closeMenu);

    navLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (href && href.startsWith("#")) {
          e.preventDefault();
          closeMenu();
          const target = document.querySelector(href);
          if (target) {
            const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({ top, behavior: "smooth" });
          }
        }
      });
    });

    function updateActive() {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.pageYOffset + 120;
      sections.forEach(sec => {
        const top = sec.offsetTop;
        const h = sec.offsetHeight;
        const id = sec.getAttribute("id");
        const links = document.querySelectorAll(`.navbar__link[href="#${id}"]`);
        if (scrollY >= top && scrollY < top + h) {
          links.forEach(l => l.classList.add("is-active"));
        } else {
          links.forEach(l => l.classList.remove("is-active"));
        }
      });
    }
  }

  // Services & Modal
  function initServices() {
    const grid = document.getElementById("services-grid");
    const modal = document.getElementById("service-modal");
    const modalTitle = document.getElementById("service-modal-title");
    const modalBody = document.getElementById("service-modal-body");
    const modalClose = document.getElementById("service-modal-close");

    if (!grid) return;

    grid.innerHTML = SERVICES_DATA.map(s => `
      <div class="service-card reveal-on-scroll" data-service-id="${s.id}">
        <div class="service-card__icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
        </div>
        <div class="service-card__tagline">${s.tagline}</div>
        <h3 class="service-card__title">${s.title}</h3>
        <p class="service-card__desc">${s.shortDesc}</p>
        <button type="button" class="service-card__link js-open-service-modal" data-id="${s.id}">
          Learn More
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>
      </div>
    `).join("");

    grid.addEventListener("click", (e) => {
      const btn = e.target.closest(".js-open-service-modal");
      if (!btn) return;
      const service = SERVICES_DATA.find(s => s.id === btn.getAttribute("data-id"));
      if (service && modal && modalTitle && modalBody) {
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

        modalBody.querySelector(".js-consult-service")?.addEventListener("click", () => {
          modal.classList.remove("is-open");
          document.body.style.overflow = "";
          const sel = document.getElementById("contact-service");
          if (sel) sel.value = service.title;
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        });

        modalBody.querySelector(".js-close-modal")?.addEventListener("click", () => {
          modal.classList.remove("is-open");
          document.body.style.overflow = "";
        });
      }
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

  // Portfolio & Case Study Modal
  function initPortfolio() {
    const grid = document.getElementById("portfolio-grid");
    const tabBtns = document.querySelectorAll(".portfolio-tab-btn");
    const modal = document.getElementById("case-study-modal");
    const modalTitle = document.getElementById("case-study-title");
    const modalBody = document.getElementById("case-study-body");
    const modalClose = document.getElementById("case-study-close");

    if (!grid) return;
    let activeCategory = "all";

    const render = () => {
      const list = activeCategory === "all"
        ? PROJECTS_DATA
        : PROJECTS_DATA.filter(p => p.categoryKey === activeCategory);

      grid.innerHTML = list.map(p => `
        <div class="project-card reveal-on-scroll" data-id="${p.id}">
          <div class="project-card__thumb">
            <div class="project-card__thumb-graphic" style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; background: linear-gradient(135deg, #0a1128 0%, #172a5a 100%); color: #38bdf8;">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            </div>
            <span class="project-card__badge">${p.category}</span>
          </div>
          <div class="project-card__body">
            <div class="project-card__meta">${p.industry}</div>
            <h3 class="project-card__title">${p.title}</h3>
            <p class="project-card__desc">${p.shortDesc}</p>
            <div class="project-card__tags">
              ${p.technologies.slice(0, 4).map(t => `<span class="project-tag">${t}</span>`).join("")}
            </div>
            <div class="project-card__footer">
              <button type="button" class="btn btn--sm btn--secondary js-view-case-study" data-id="${p.id}">
                View Case Study &rarr;
              </button>
            </div>
          </div>
        </div>
      `).join("");
    };

    render();

    tabBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        tabBtns.forEach(b => b.classList.remove("tab-btn--active"));
        btn.classList.add("tab-btn--active");
        activeCategory = btn.getAttribute("data-category") || "all";
        render();
      });
    });

    grid.addEventListener("click", (e) => {
      const btn = e.target.closest(".js-view-case-study");
      if (!btn) return;
      const proj = PROJECTS_DATA.find(p => p.id === btn.getAttribute("data-id"));
      if (proj && modal && modalTitle && modalBody) {
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
            <button type="button" class="btn btn--primary js-inquire-project">Build Something Similar</button>
          </div>
        `;

        modal.classList.add("is-open");
        document.body.style.overflow = "hidden";

        modalBody.querySelector(".js-inquire-project")?.addEventListener("click", () => {
          modal.classList.remove("is-open");
          document.body.style.overflow = "";
          const msg = document.getElementById("contact-message");
          if (msg) msg.value = `Interested in enterprise solution similar to ${proj.title}`;
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        });

        modalBody.querySelector(".js-close-modal")?.addEventListener("click", () => {
          modal.classList.remove("is-open");
          document.body.style.overflow = "";
        });
      }
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

  // Careers & Job Modal
  function initCareers() {
    const grid = document.getElementById("careers-grid");
    const modal = document.getElementById("job-modal");
    const modalTitle = document.getElementById("job-modal-title");
    const modalBody = document.getElementById("job-modal-body");
    const modalClose = document.getElementById("job-modal-close");

    if (!grid) return;

    grid.innerHTML = CAREERS_DATA.map(j => `
      <div class="card reveal-on-scroll" style="display: flex; flex-direction: column; height: 100%;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem; margin-bottom: 0.75rem;">
          <span class="badge" style="background: rgba(2,132,199,0.1); color: var(--color-accent-sky); font-size: 0.75rem; font-weight: 700; padding: 0.25rem 0.65rem; border-radius: var(--radius-full); text-transform: uppercase;">
            ${j.department}
          </span>
          <span style="font-size: 0.75rem; color: var(--color-text-subtle); font-weight: 600;">
            ${j.type}
          </span>
        </div>
        <h3 style="font-size: 1.2rem; color: var(--color-primary-900); margin-bottom: 0.5rem;">${j.title}</h3>
        <div style="font-size: 0.8rem; color: var(--color-text-muted); display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; flex-wrap: wrap;">
          <span>📍 ${j.location}</span>
          <span>💼 ${j.experience}</span>
        </div>
        <p style="font-size: 0.875rem; color: var(--color-text-muted); line-height: 1.6; margin-bottom: 1.25rem; flex-grow: 1;">
          ${j.desc}
        </p>
        <div style="background: var(--color-bg-surface-subtle); padding: 0.75rem 1rem; border-radius: var(--radius-md); font-size: 0.8rem; font-weight: 700; color: var(--color-primary-900); margin-bottom: 1.25rem;">
          💰 ${j.salary}
        </div>
        <button type="button" class="btn btn--block btn--primary js-apply-job" data-id="${j.id}">
          Apply for Role
        </button>
      </div>
    `).join("");

    grid.addEventListener("click", (e) => {
      const btn = e.target.closest(".js-apply-job");
      if (!btn) return;
      const job = CAREERS_DATA.find(j => j.id === btn.getAttribute("data-id"));
      if (job && modal && modalTitle && modalBody) {
        modalTitle.textContent = `Apply for: ${job.title}`;
        modalBody.innerHTML = `
          <form id="job-apply-form" novalidate>
            <div class="form-group">
              <label class="form-label">Full Name *</label>
              <input type="text" id="app-name" class="form-control" placeholder="Jane Doe" required>
            </div>
            <div class="form-group">
              <label class="form-label">Email Address *</label>
              <input type="email" id="app-email" class="form-control" placeholder="jane@example.com" required>
            </div>
            <div class="form-group">
              <label class="form-label">Phone Number *</label>
              <input type="tel" id="app-phone" class="form-control" placeholder="+1 (555) 000-0000" required>
            </div>
            <div class="form-group">
              <label class="form-label">LinkedIn / Portfolio Link</label>
              <input type="url" id="app-portfolio" class="form-control" placeholder="https://linkedin.com/in/jane">
            </div>
            <div class="form-group">
              <label class="form-label">Brief Background</label>
              <textarea id="app-note" class="form-textarea" placeholder="Tell us about relevant projects..."></textarea>
            </div>
            <div id="app-feedback" class="form-feedback" style="margin-bottom: 1rem;"></div>
            <div style="display: flex; justify-content: flex-end; gap: 1rem; border-top: 1px solid var(--color-border-light); padding-top: 1rem;">
              <button type="button" class="btn btn--secondary js-close-modal">Cancel</button>
              <button type="submit" class="btn btn--primary">Submit Application</button>
            </div>
          </form>
        `;

        modal.classList.add("is-open");
        document.body.style.overflow = "hidden";

        const form = modalBody.querySelector("#job-apply-form");
        form?.addEventListener("submit", (ev) => {
          ev.preventDefault();
          const name = document.getElementById("app-name")?.value.trim();
          const email = document.getElementById("app-email")?.value.trim();
          const phone = document.getElementById("app-phone")?.value.trim();

          if (!name || !email || !phone) {
            const fb = document.getElementById("app-feedback");
            if (fb) {
              fb.textContent = "Please fill in Name, Email, and Phone.";
              fb.classList.add("is-visible");
            }
            return;
          }

          AppState.addApplication(job.id, job.title, { fullName: name, email, phone });

          modalBody.innerHTML = `
            <div style="text-align: center; padding: 2.5rem 1rem;">
              <div style="width: 52px; height: 52px; border-radius: 50%; background: #ecfdf5; color: #10b981; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <h3 style="font-size: 1.4rem; color: var(--color-primary-900); margin-bottom: 0.5rem;">Application Submitted!</h3>
              <p style="color: var(--color-text-muted); margin-bottom: 1.5rem;">
                Thank you, ${name}. Our recruitment team has received your profile for ${job.title}.
              </p>
              <button type="button" class="btn btn--primary js-close-modal">Done</button>
            </div>
          `;
          modalBody.querySelector(".js-close-modal")?.addEventListener("click", () => {
            modal.classList.remove("is-open");
            document.body.style.overflow = "";
          });
        });

        modalBody.querySelector(".js-close-modal")?.addEventListener("click", () => {
          modal.classList.remove("is-open");
          document.body.style.overflow = "";
        });
      }
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

  // Contact Form
  function initContact() {
    const form = document.getElementById("contact-form");
    const budgetPills = document.querySelectorAll(".budget-pill");
    const toastContainer = document.getElementById("toast-container");

    if (!form) return;

    budgetPills.forEach(pill => {
      pill.addEventListener("click", () => {
        budgetPills.forEach(p => p.classList.remove("is-selected"));
        pill.classList.add("is-selected");
        const rad = pill.querySelector("input[type='radio']");
        if (rad) rad.checked = true;
      });
    });

    const showToast = (msg) => {
      if (!toastContainer) return;
      const t = document.createElement("div");
      t.className = "toast toast--success is-active";
      t.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>${msg}</span>
      `;
      toastContainer.appendChild(t);
      setTimeout(() => {
        t.classList.remove("is-active");
        setTimeout(() => t.remove(), 300);
      }, 4000);
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

      let valid = true;
      form.querySelectorAll(".form-control, .form-textarea").forEach(el => el.classList.remove("is-invalid"));
      form.querySelectorAll(".form-feedback").forEach(el => el.classList.remove("is-visible"));

      if (!nameInput.value.trim()) {
        nameInput.classList.add("is-invalid");
        const fb = document.getElementById("name-feedback");
        if (fb) { fb.textContent = "Full name is required."; fb.classList.add("is-visible"); }
        valid = false;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        emailInput.classList.add("is-invalid");
        const fb = document.getElementById("email-feedback");
        if (fb) { fb.textContent = "Valid corporate email is required."; fb.classList.add("is-visible"); }
        valid = false;
      }

      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        messageInput.classList.add("is-invalid");
        const fb = document.getElementById("message-feedback");
        if (fb) { fb.textContent = "Please provide at least 10 characters."; fb.classList.add("is-visible"); }
        valid = false;
      }

      if (!valid) return;

      const budgetEl = form.querySelector("input[name='budget']:checked");
      const budget = budgetEl ? budgetEl.value : "Not Specified";

      submitBtn.disabled = true;
      const oldHtml = submitBtn.innerHTML;
      submitBtn.innerHTML = `Encrypting & Submitting...`;

      await new Promise(r => setTimeout(r, 600));

      const enquiry = AppState.addEnquiry({
        fullName: nameInput.value,
        companyName: companyInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        service: serviceInput.value,
        budget: budget,
        message: messageInput.value
      });

      submitBtn.disabled = false;
      submitBtn.innerHTML = oldHtml;
      showToast(`Inquiry recorded! Reference: ${enquiry.id}`);

      const bodyCard = document.getElementById("contact-card-body");
      if (bodyCard) {
        const resetHtml = bodyCard.innerHTML;
        bodyCard.innerHTML = `
          <div style="text-align: center; padding: 3rem 1.5rem;">
            <div style="width: 68px; height: 68px; border-radius: 50%; background: #ecfdf5; color: #10b981; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 1.5rem;">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <h3 style="font-size: 1.6rem; color: var(--color-primary-900); margin-bottom: 0.5rem;">Enquiry Successfully Logged!</h3>
            <p style="color: var(--color-text-muted); max-width: 440px; margin: 0 auto 1.5rem; line-height: 1.6;">
              Reference ID: <strong style="color: var(--color-primary-900); font-family: var(--font-mono);">${enquiry.id}</strong>. A Senior Solutions Architect will respond within 24 hours.
            </p>
            <button type="button" class="btn btn--secondary js-reset-form">Submit Another Inquiry</button>
          </div>
        `;
        bodyCard.querySelector(".js-reset-form")?.addEventListener("click", () => {
          bodyCard.innerHTML = resetHtml;
          initContact();
        });
      }
    });
  }

  // Admin CMS Portal
  function initAdminPortal() {
    const modal = document.getElementById("admin-modal");
    const modalBody = document.getElementById("admin-modal-body");
    const modalClose = document.getElementById("admin-modal-close");
    const triggers = document.querySelectorAll(".js-open-admin-portal");

    if (!modal || !modalBody) return;

    triggers.forEach(t => {
      t.addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.add("is-open");
        document.body.style.overflow = "hidden";
        render();
      });
    });

    const closePortal = () => {
      modal.classList.remove("is-open");
      document.body.style.overflow = "";
    };

    modalClose?.addEventListener("click", closePortal);
    modal?.addEventListener("click", (e) => {
      if (e.target === modal) closePortal();
    });

    function render() {
      if (!AppState.isAdmin()) {
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
            Enter administrative passcode to view client inquiries, active leads, and pipeline records.
          </p>
          <form id="admin-login-form">
            <div class="form-group" style="text-align: left;">
              <label class="form-label">Master Passcode</label>
              <input type="password" id="admin-passcode" class="form-control" placeholder="Enter admin passcode" required autofocus>
              <div style="font-size: 0.75rem; color: var(--color-text-subtle); margin-top: 0.35rem;">
                (Demo Master Passcode: <code style="font-family: var(--font-mono); color: var(--color-accent-sky); font-weight: 700;">admin2026</code>)
              </div>
            </div>
            <div id="admin-login-err" class="form-feedback" style="margin-bottom: 1rem;"></div>
            <button type="submit" class="btn btn--block btn--primary">Access Dashboard</button>
          </form>
        </div>
      `;

      modalBody.querySelector("#admin-login-form")?.addEventListener("submit", (e) => {
        e.preventDefault();
        const code = document.getElementById("admin-passcode")?.value.trim();
        if (AppState.loginAdmin(code)) {
          renderDashboard();
        } else {
          const err = document.getElementById("admin-login-err");
          if (err) {
            err.textContent = "Invalid passcode. Use 'admin2026'.";
            err.classList.add("is-visible");
          }
        }
      });
    }

    function renderDashboard() {
      let filter = "All";
      let search = "";

      const draw = () => {
        const list = AppState.getEnquiries();
        const total = list.length;
        const newCount = list.filter(e => e.status === "New").length;
        const inProg = list.filter(e => e.status === "In Progress" || e.status === "Contacted").length;
        const conv = list.filter(e => e.status === "Converted").length;

        let filtered = list;
        if (filter !== "All") filtered = filtered.filter(e => e.status === filter);
        if (search.trim()) {
          const q = search.toLowerCase();
          filtered = filtered.filter(e =>
            (e.fullName && e.fullName.toLowerCase().includes(q)) ||
            (e.companyName && e.companyName.toLowerCase().includes(q)) ||
            (e.email && e.email.toLowerCase().includes(q)) ||
            (e.id && e.id.toLowerCase().includes(q))
          );
        }

        modalBody.innerHTML = `
          <div class="admin-stats-grid">
            <div class="admin-stat-card">
              <div class="admin-stat-card__val">${total}</div>
              <div class="admin-stat-card__lbl">Total Inquiries</div>
            </div>
            <div class="admin-stat-card" style="border-left: 4px solid #3b82f6;">
              <div class="admin-stat-card__val" style="color: #2563eb;">${newCount}</div>
              <div class="admin-stat-card__lbl">New Leads</div>
            </div>
            <div class="admin-stat-card" style="border-left: 4px solid #10b981;">
              <div class="admin-stat-card__val" style="color: #10b981;">${inProg}</div>
              <div class="admin-stat-card__lbl">Active Pipeline</div>
            </div>
            <div class="admin-stat-card" style="border-left: 4px solid #8b5cf6;">
              <div class="admin-stat-card__val" style="color: #7c3aed;">${conv}</div>
              <div class="admin-stat-card__lbl">Converted Clients</div>
            </div>
          </div>

          <div class="admin-toolbar">
            <div class="admin-filter-group">
              <span style="font-size: 0.8rem; font-weight: 700; color: var(--color-text-subtle);">STATUS:</span>
              ${["All", "New", "Contacted", "In Progress", "Converted", "Closed"].map(st => `
                <button type="button" class="tab-btn ${filter === st ? 'tab-btn--active' : ''} js-filter" data-status="${st}" style="padding: 0.35rem 0.8rem; font-size: 0.75rem;">
                  ${st}
                </button>
              `).join("")}
            </div>

            <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
              <input type="text" id="admin-search-input" class="form-control" placeholder="Search leads..." value="${search}" style="width: 200px; padding: 0.45rem 0.75rem; font-size: 0.8rem;">
              <button type="button" class="btn btn--sm btn--secondary js-export-csv">📥 Export CSV</button>
              <button type="button" class="btn btn--sm btn--secondary js-admin-logout" style="color: #ef4444;">Logout</button>
            </div>
          </div>

          <div class="admin-table-container">
            <table class="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Client / Company</th>
                  <th>Service</th>
                  <th>Budget</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th style="text-align: right;">Action</th>
                </tr>
              </thead>
              <tbody>
                ${filtered.length === 0 ? `
                  <tr><td colspan="7" style="text-align: center; padding: 2rem; color: var(--color-text-subtle);">No inquiries found.</td></tr>
                ` : filtered.map(item => `
                  <tr>
                    <td><code style="font-family: var(--font-mono); font-weight: 700; color: var(--color-accent-sky);">${item.id}</code></td>
                    <td>
                      <strong>${item.fullName}</strong>
                      <div style="font-size: 0.75rem; color: var(--color-text-subtle);">${item.companyName} &bull; ${item.email}</div>
                    </td>
                    <td><span class="badge" style="background: var(--color-bg-surface-subtle); font-size: 0.75rem;">${item.service}</span></td>
                    <td><span style="font-family: var(--font-mono); font-size: 0.75rem;">${item.budget}</span></td>
                    <td style="font-size: 0.75rem; color: var(--color-text-subtle);">${new Date(item.createdAt).toLocaleDateString()}</td>
                    <td>
                      <select class="form-select js-status-change" data-id="${item.id}" style="padding: 0.25rem 0.5rem; font-size: 0.75rem;">
                        ${["New", "Contacted", "In Progress", "Converted", "Closed"].map(st => `
                          <option value="${st}" ${item.status === st ? 'selected' : ''}>${st}</option>
                        `).join("")}
                      </select>
                    </td>
                    <td style="text-align: right;">
                      <button type="button" class="btn btn--sm btn--secondary js-view-detail" data-id="${item.id}">View</button>
                    </td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>

          <div id="lead-drawer"></div>
        `;

        modalBody.querySelector("#admin-search-input")?.addEventListener("input", (e) => {
          search = e.target.value;
          draw();
        });

        modalBody.querySelectorAll(".js-filter").forEach(b => {
          b.addEventListener("click", () => {
            filter = b.getAttribute("data-status") || "All";
            draw();
          });
        });

        modalBody.querySelectorAll(".js-status-change").forEach(s => {
          s.addEventListener("change", (e) => {
            AppState.updateEnquiryStatus(s.getAttribute("data-id"), e.target.value);
            draw();
          });
        });

        modalBody.querySelectorAll(".js-view-detail").forEach(b => {
          b.addEventListener("click", () => {
            const enq = AppState.getEnquiries().find(e => e.id === b.getAttribute("data-id"));
            if (enq) {
              const drawer = modalBody.querySelector("#lead-drawer");
              if (drawer) {
                drawer.innerHTML = `
                  <div class="enquiry-detail-view">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; border-bottom: 1px solid var(--color-border-medium); padding-bottom: 0.75rem;">
                      <h4 style="font-size: 1.1rem; color: var(--color-primary-900); margin: 0;">
                        Lead: ${enq.fullName} (${enq.id})
                      </h4>
                      <button type="button" class="btn btn--sm btn--secondary js-close-lead">Close</button>
                    </div>
                    <div class="enquiry-meta-grid">
                      <div class="enquiry-meta-item"><label>Company</label><span>${enq.companyName}</span></div>
                      <div class="enquiry-meta-item"><label>Email</label><span><a href="mailto:${enq.email}">${enq.email}</a></span></div>
                      <div class="enquiry-meta-item"><label>Phone</label><span>${enq.phone}</span></div>
                      <div class="enquiry-meta-item"><label>Service</label><span>${enq.service}</span></div>
                      <div class="enquiry-meta-item"><label>Budget</label><span>${enq.budget}</span></div>
                      <div class="enquiry-meta-item"><label>Date</label><span>${new Date(enq.createdAt).toLocaleString()}</span></div>
                    </div>
                    <div style="margin-bottom: 1rem;">
                      <label style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--color-text-subtle); text-transform: uppercase;">Message</label>
                      <div style="background: #ffffff; padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--color-border-light); font-size: 0.9rem; line-height: 1.6;">${enq.message}</div>
                    </div>
                    <button type="button" class="btn btn--secondary btn--sm js-del-lead" data-id="${enq.id}" style="color: var(--color-danger);">Delete Lead</button>
                  </div>
                `;
                drawer.querySelector(".js-close-lead")?.addEventListener("click", () => { drawer.innerHTML = ""; });
                drawer.querySelector(".js-del-lead")?.addEventListener("click", () => {
                  if (confirm(`Delete inquiry ${enq.id}?`)) {
                    AppState.deleteEnquiry(enq.id);
                    draw();
                  }
                });
              }
            }
          });
        });

        modalBody.querySelector(".js-export-csv")?.addEventListener("click", () => {
          const csv = AppState.exportCSV();
          const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = `Novatech_Inquiries_${new Date().toISOString().slice(0,10)}.csv`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        });

        modalBody.querySelector(".js-admin-logout")?.addEventListener("click", () => {
          AppState.logoutAdmin();
          render();
        });
      };

      draw();
      window.addEventListener("novatech:enquiry-added", draw);
    }
  }

  // Animation & Counters
  function initAnimations() {
    const reveals = document.querySelectorAll(".reveal-on-scroll");
    if ("IntersectionObserver" in window) {
      const obs = new IntersectionObserver((entries, o) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add("is-revealed");
            o.unobserve(e.target);
          }
        });
      }, { threshold: 0.1 });
      reveals.forEach(r => obs.observe(r));
    } else {
      reveals.forEach(r => r.classList.add("is-revealed"));
    }

    // Number counters
    const counters = document.querySelectorAll(".js-counter");
    let ran = false;
    const runCounters = () => {
      if (ran) return;
      ran = true;
      counters.forEach(c => {
        const target = parseInt(c.getAttribute("data-target"), 10) || 0;
        let cur = 0;
        const inc = target / 50;
        const timer = setInterval(() => {
          cur += inc;
          if (cur >= target) {
            c.textContent = target;
            clearInterval(timer);
          } else {
            c.textContent = Math.floor(cur);
          }
        }, 25);
      });
    };

    const statsBar = document.querySelector(".stats-bar");
    if (statsBar && "IntersectionObserver" in window) {
      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            runCounters();
            obs.disconnect();
          }
        });
      }, { threshold: 0.2 });
      obs.observe(statsBar);
    } else {
      runCounters();
    }
  }

  // Common Section Renderers
  function renderAllSections() {
    // Tech Stack
    const techContainer = document.getElementById("tech-stack-grid");
    const techTabs = document.querySelectorAll(".tech-tab-btn");
    if (techContainer) {
      let activeCat = "frontend";
      const drawTech = () => {
        const list = TECH_STACK[activeCat] || TECH_STACK.frontend;
        techContainer.innerHTML = list.map(item => `
          <div class="tech-card reveal-on-scroll">
            <div class="tech-card__icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0284C7" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            </div>
            <div class="tech-card__name">${item.name}</div>
            <div class="tech-card__tag">${item.category}</div>
            <span style="font-size: 0.68rem; color: var(--color-accent-sky); font-weight: 700; margin-top: 0.25rem; text-transform: uppercase;">
              ${item.level}
            </span>
          </div>
        `).join("");
      };
      drawTech();
      techTabs.forEach(b => {
        b.addEventListener("click", () => {
          techTabs.forEach(t => t.classList.remove("tab-btn--active"));
          b.classList.add("tab-btn--active");
          activeCat = b.getAttribute("data-category") || "frontend";
          drawTech();
        });
      });
    }

    // Industries
    const indContainer = document.getElementById("industries-grid");
    if (indContainer) {
      indContainer.innerHTML = INDUSTRIES_DATA.map(ind => `
        <div class="card card--interactive reveal-on-scroll" style="display: flex; flex-direction: column;">
          <div style="width: 48px; height: 48px; border-radius: var(--radius-lg); background: rgba(2,132,199,0.08); color: var(--color-accent-sky); display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
          </div>
          <h3 style="font-size: 1.15rem; color: var(--color-primary-900); margin-bottom: 0.5rem;">${ind.title}</h3>
          <p style="font-size: 0.875rem; color: var(--color-text-muted); line-height: 1.6; margin-bottom: 1.25rem; flex-grow: 1;">
            ${ind.desc}
          </p>
          <div style="margin-top: auto; font-size: 0.75rem; font-weight: 700; color: var(--color-accent-sky); text-transform: uppercase; letter-spacing: 0.04em;">
            Enterprise Solutions Ready &rarr;
          </div>
        </div>
      `).join("");
    }

    // Process
    const procContainer = document.getElementById("process-grid");
    if (procContainer) {
      procContainer.innerHTML = PROCESS_STEPS.map(p => `
        <div class="process-card reveal-on-scroll">
          <div class="process-card__number">${p.step}</div>
          <div class="process-card__subtitle">${p.subtitle}</div>
          <h3 class="process-card__title">${p.title}</h3>
          <p class="process-card__desc">${p.desc}</p>
        </div>
      `).join("");
    }

    // Why Choose Us
    const whyContainer = document.getElementById("why-choose-grid");
    if (whyContainer) {
      whyContainer.innerHTML = WHY_CHOOSE_US.map(w => `
        <div class="card reveal-on-scroll" style="display: flex; flex-direction: column;">
          <div style="width: 44px; height: 44px; border-radius: var(--radius-md); background: rgba(6,182,212,0.1); color: var(--color-accent-sky); display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <h3 style="font-size: 1.1rem; color: var(--color-primary-900); margin-bottom: 0.4rem;">${w.title}</h3>
          <p style="font-size: 0.875rem; color: var(--color-text-muted); line-height: 1.6;">${w.desc}</p>
        </div>
      `).join("");
    }

    // Team
    const teamContainer = document.getElementById("team-grid");
    if (teamContainer) {
      teamContainer.innerHTML = TEAM_DATA.map(m => `
        <div class="card reveal-on-scroll" style="text-align: center; display: flex; flex-direction: column; align-items: center;">
          <div style="width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg, #0f1c3f 0%, #0284c7 100%); color: #ffffff; display: flex; align-items: center; justify-content: center; font-size: 1.75rem; font-weight: 800; font-family: var(--font-heading); margin-bottom: 1rem; border: 3px solid #ffffff; box-shadow: var(--shadow-md);">
            ${m.name.split(" ").map(n => n[0]).join("")}
          </div>
          <h3 style="font-size: 1.2rem; color: var(--color-primary-900); margin-bottom: 0.2rem;">${m.name}</h3>
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--color-accent-sky); margin-bottom: 0.75rem; text-transform: uppercase;">${m.role}</div>
          <p style="font-size: 0.85rem; color: var(--color-text-muted); line-height: 1.5; margin-bottom: 1rem;">${m.bio}</p>
          <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; justify-content: center; margin-top: auto;">
            ${m.expertise.map(tag => `<span style="font-size: 0.7rem; background: var(--color-bg-surface-subtle); color: var(--color-text-subtle); padding: 0.2rem 0.5rem; border-radius: var(--radius-sm); font-weight: 600;">${tag}</span>`).join("")}
          </div>
        </div>
      `).join("");
    }

    // Testimonials
    const testContainer = document.getElementById("testimonials-grid");
    if (testContainer) {
      testContainer.innerHTML = TESTIMONIALS_DATA.map(t => `
        <div class="card reveal-on-scroll" style="display: flex; flex-direction: column; background: #ffffff;">
          <div style="display: flex; gap: 3px; color: #f59e0b; margin-bottom: 1rem;">
            ${[1, 2, 3, 4, 5].map(() => `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`).join("")}
          </div>
          <p style="font-size: 0.95rem; color: var(--color-text-main); font-style: italic; line-height: 1.7; margin-bottom: 1.5rem; flex-grow: 1;">
            "${t.quote}"
          </p>
          <div style="display: flex; align-items: center; gap: 0.75rem; border-top: 1px solid var(--color-border-light); padding-top: 1rem;">
            <div style="width: 42px; height: 42px; border-radius: 50%; background: var(--color-primary-900); color: #ffffff; display: flex; align-items: center; justify-content: center; font-weight: 700;">
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

    // Featured Services Switch
    const featTabs = document.querySelectorAll(".featured-tab-btn");
    const featTitle = document.getElementById("featured-title");
    const featDesc = document.getElementById("featured-desc");
    const featBtn = document.getElementById("featured-cta-btn");
    if (featTabs.length) {
      featTabs.forEach(b => {
        b.addEventListener("click", () => {
          featTabs.forEach(t => t.classList.remove("tab-btn--active"));
          b.classList.add("tab-btn--active");
          const key = b.getAttribute("data-featured");
          if (key === "cloud") {
            if (featTitle) featTitle.textContent = "Enterprise Cloud Migration & Scalability";
            if (featDesc) featDesc.textContent = "Elastic multi-region infrastructure architectures on AWS and Azure built with Infrastructure as Code.";
          } else if (key === "ai") {
            if (featTitle) featTitle.textContent = "Enterprise AI & Intelligent Automation";
            if (featDesc) featDesc.textContent = "Deploy private LLM copilots, automated document intelligence, and predictive analytics.";
          } else {
            if (featTitle) featTitle.textContent = "Custom Enterprise Software Development";
            if (featDesc) featDesc.textContent = "Build scalable software products tailored to your intricate business workflows, with high throughput.";
          }
        });
      });
      if (featBtn) {
        featBtn.addEventListener("click", () => {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        });
      }
    }

    // About Tabs
    const aboutTabs = document.querySelectorAll(".about-tab-btn");
    const aboutContent = document.getElementById("about-tab-content");
    const ABOUT_TEXTS = {
      story: { title: "Engineered for Technical Authority & Real Results", text: "Novatech was founded by senior systems architects who saw that modern enterprises struggled with agency bloat, fragile legacy codebases, and missed delivery deadlines." },
      mission: { title: "Our Mission: Transforming Ideas Into High-Performance Software", text: "To engineer scalable, secure, and intuitive digital solutions that solve real business problems and give our clients an unbeatable competitive advantage." },
      vision: { title: "Our Vision: The Gold Standard in Enterprise Engineering", text: "To become the world's most trusted software architecture and digital transformation partner for forward-looking enterprises and high-growth ventures." },
      values: { title: "Our Core Pillars of Excellence", text: "<strong>Innovation:</strong> Continuously pioneering modern architectures.<br><strong>Quality:</strong> Zero compromises on code standards.<br><strong>Transparency:</strong> Complete visibility into sprints.<br><strong>Customer Success:</strong> We measure our engineering by your bottom-line impact." }
    };
    aboutTabs.forEach(b => {
      b.addEventListener("click", () => {
        aboutTabs.forEach(t => t.classList.remove("tab-btn--active"));
        b.classList.add("tab-btn--active");
        const key = b.getAttribute("data-tab") || "story";
        const item = ABOUT_TEXTS[key];
        if (item && aboutContent) {
          aboutContent.innerHTML = `
            <h4 style="font-size: 1.25rem; color: var(--color-primary-900); margin-bottom: 0.75rem;">${item.title}</h4>
            <p style="font-size: 1rem; color: var(--color-text-muted); line-height: 1.7;">${item.text}</p>
          `;
        }
      });
    });

    // Legal Modals
    const legalModal = document.getElementById("legal-modal");
    const legalTitle = document.getElementById("legal-modal-title");
    const legalBody = document.getElementById("legal-modal-body");
    const legalClose = document.getElementById("legal-modal-close");

    document.querySelectorAll(".js-open-legal").forEach(a => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        const doc = a.getAttribute("data-doc") || "privacy";
        if (legalModal && legalTitle && legalBody) {
          legalTitle.textContent = doc === "privacy" ? "Privacy Policy" : (doc === "terms" ? "Terms & Conditions" : "Cookie Preferences");
          legalBody.innerHTML = `
            <p><strong>Novatech Digital Solutions Inc.</strong> adheres to strict corporate governance and confidentiality protocols.</p>
            <p>All enterprise software deliverables, repositories, and credentials are governed by mutual non-disclosure and intellectual property assignment agreements.</p>
            <div style="margin-top: 1.5rem; text-align: right;">
              <button type="button" class="btn btn--primary js-close-legal">I Understand</button>
            </div>
          `;
          legalModal.classList.add("is-open");
          document.body.style.overflow = "hidden";
          legalBody.querySelector(".js-close-legal")?.addEventListener("click", () => {
            legalModal.classList.remove("is-open");
            document.body.style.overflow = "";
          });
        }
      });
    });

    legalClose?.addEventListener("click", () => {
      legalModal?.classList.remove("is-open");
      document.body.style.overflow = "";
    });

    legalModal?.addEventListener("click", (e) => {
      if (e.target === legalModal) {
        legalModal.classList.remove("is-open");
        document.body.style.overflow = "";
      }
    });

    // Jump to Contact buttons
    document.querySelectorAll(".js-jump-contact").forEach(b => {
      b.addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      });
    });

    const yearEl = document.getElementById("current-year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  // Initialization
  document.addEventListener("DOMContentLoaded", () => {
    initNavbar();
    initServices();
    initPortfolio();
    initCareers();
    initContact();
    initAdminPortal();
    initAnimations();
    renderAllSections();
  });
})();
