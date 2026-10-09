/**
 * NOVATECH ENTERPRISE SOLUTIONS - CENTRAL CONFIGURATION & DATA REPOSITORY
 * Edit this file to update any company data, branding, services, projects, team members, or careers.
 */

export const COMPANY_CONFIG = {
  name: "Novatech Solutions",
  legalName: "Novatech Digital Solutions Inc.",
  tagline: "Architecting Enterprise Digital Systems",
  shortDesc: "Enterprise software engineering, cloud architecture, and AI-driven digital transformation.",
  foundedYear: 2018,
  contact: {
    email: "contact@novatechsolutions.com",
    salesEmail: "sales@novatechsolutions.com",
    careersEmail: "careers@novatechsolutions.com",
    phone: "+1 (800) 555-8324",
    intlPhone: "+1 (415) 890-4200",
    address: {
      street: "100 Montgomery Street, Suite 2200",
      city: "San Francisco",
      state: "CA",
      postalCode: "94104",
      country: "United States"
    },
    workingHours: "Monday – Friday: 8:00 AM – 6:00 PM PST",
    social: {
      linkedin: "https://linkedin.com/company/novatech-solutions",
      github: "https://github.com/novatech-solutions",
      twitter: "https://twitter.com/novatech_hq"
    }
  },
  stats: [
    { value: 50, suffix: "+", label: "Projects Delivered", desc: "Across 6 continents" },
    { value: 20, suffix: "+", label: "Technology Experts", desc: "Senior architects & engineers" },
    { value: 15, suffix: "+", label: "Industries Served", desc: "From FinTech to HealthTech" },
    { value: 99, suffix: "%", label: "Client Satisfaction", desc: "Based on post-launch audits" }
  ]
};

export const SERVICES_DATA = [
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
    technologies: ["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "Docker"],
    featured: true
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
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GraphQL", "Vercel"],
    featured: false
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
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    featured: false
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
    technologies: ["Figma", "Design Systems", "Prototyping", "WCAG 2.1 AA", "Storybook"],
    featured: false
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
    technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
    featured: true
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
    technologies: ["Python", "PyTorch", "OpenAI API", "LangChain", "Vector DBs", "FastAPI"],
    featured: true
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
    technologies: ["Shopify Plus", "Next.js", "Stripe", "GraphQL", "PostgreSQL", "Redis"],
    featured: false
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
    technologies: ["Node.js", "Go", "Apache Kafka", "GraphQL", "Redis", "Swagger/OpenAPI"],
    featured: false
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
    technologies: ["Architecture Audits", "SOC2 / HIPAA Compliance", "DevOps Maturity", "Roadmapping"],
    featured: false
  }
];

export const TECH_STACK = {
  frontend: [
    { name: "React", category: "Library", level: "Core", icon: "react" },
    { name: "Next.js", category: "Framework", level: "Core", icon: "nextjs" },
    { name: "TypeScript", category: "Language", level: "Standard", icon: "typescript" },
    { name: "Vue.js", category: "Framework", level: "Supported", icon: "vue" },
    { name: "Tailwind CSS", category: "Styling", level: "Standard", icon: "tailwind" },
    { name: "HTML5 / CSS3", category: "Core Web", level: "Standard", icon: "html" }
  ],
  backend: [
    { name: "Node.js", category: "Runtime", level: "Core", icon: "nodejs" },
    { name: "Python", category: "Language", level: "Core", icon: "python" },
    { name: "Java / Spring", category: "Enterprise", level: "Supported", icon: "java" },
    { name: ".NET Core", category: "Enterprise", level: "Supported", icon: "dotnet" },
    { name: "Go (Golang)", category: "High Throughput", level: "Standard", icon: "go" },
    { name: "Express / NestJS", category: "Framework", level: "Standard", icon: "nest" }
  ],
  database: [
    { name: "PostgreSQL", category: "Relational", level: "Primary", icon: "postgresql" },
    { name: "MongoDB", category: "NoSQL Document", level: "Standard", icon: "mongodb" },
    { name: "Redis", category: "In-Memory Caching", level: "Standard", icon: "redis" },
    { name: "MySQL", category: "Relational", level: "Standard", icon: "mysql" },
    { name: "Elasticsearch", category: "Search & Log", level: "Standard", icon: "elastic" },
    { name: "Pinecone / Qdrant", category: "Vector AI", level: "Advanced", icon: "database" }
  ],
  cloud: [
    { name: "AWS", category: "Cloud Provider", level: "Tier-1 Partner", icon: "aws" },
    { name: "Microsoft Azure", category: "Enterprise Cloud", level: "Standard", icon: "azure" },
    { name: "Google Cloud", category: "GCP Services", level: "Standard", icon: "gcp" },
    { name: "Docker", category: "Containers", level: "Standard", icon: "docker" },
    { name: "Kubernetes", category: "Orchestration", level: "Standard", icon: "kubernetes" },
    { name: "Terraform", category: "IaC", level: "Standard", icon: "terraform" }
  ],
  ai: [
    { name: "PyTorch", category: "Deep Learning", level: "Standard", icon: "pytorch" },
    { name: "OpenAI API", category: "LLM Orchestration", level: "Standard", icon: "openai" },
    { name: "LangChain", category: "Agentic Chains", level: "Standard", icon: "langchain" },
    { name: "Hugging Face", category: "Open Weights", level: "Standard", icon: "huggingface" },
    { name: "Computer Vision", category: "Detection & OCR", level: "Specialized", icon: "eye" },
    { name: "Automated RPA", category: "Process Automation", level: "Standard", icon: "workflow" }
  ]
};

export const INDUSTRIES_DATA = [
  {
    id: "finance",
    icon: "dollar-sign",
    title: "Banking & FinTech",
    desc: "PCI-DSS compliant payment gateways, algorithmic risk models, real-time transaction processing, and wealth management portals."
  },
  {
    id: "healthcare",
    icon: "activity",
    title: "Healthcare & Life Sciences",
    desc: "HIPAA-compliant EHR integration, telemedicine platforms, medical imaging workflows, and clinical research data lakes."
  },
  {
    id: "ecommerce",
    icon: "shopping-cart",
    title: "Retail & E-Commerce",
    desc: "Omnichannel inventory orchestration, headless checkout engines, personalized merchandising, and dynamic pricing algorithms."
  },
  {
    id: "manufacturing",
    icon: "settings",
    title: "Manufacturing & IoT",
    desc: "Predictive equipment maintenance telemetry, digital twin visualizers, factory floor inventory tracking, and ERP integration."
  },
  {
    id: "logistics",
    icon: "truck",
    title: "Logistics & Supply Chain",
    desc: "Fleet dispatch tracking, dynamic route optimization, warehouse automation interfaces, and automated customs documentation."
  },
  {
    id: "education",
    icon: "book-open",
    title: "Education & EdTech",
    desc: "Interactive LMS portals, virtual classroom video streaming, automated grading pipelines, and institutional analytics."
  },
  {
    id: "automotive",
    icon: "navigation",
    title: "Automotive & Mobility",
    desc: "Connected car telematics dashboards, EV charging network software, and digital dealership inventory systems."
  },
  {
    id: "startups",
    icon: "zap",
    title: "High-Growth Startups",
    desc: "Rapid prototype MVP development, scalable seed-to-Series A technical foundations, and high-velocity sprint execution."
  }
];

export const PROJECTS_DATA = [
  {
    id: "project-fintech",
    title: "ApexPay Global Remittance Platform",
    category: "Enterprise",
    categoryKey: "enterprise",
    industry: "Financial Services",
    imageType: "fintech",
    shortDesc: "Next-generation cross-border payment rails processing $140M+ annually with real-time currency conversion and sub-second settlement.",
    challenge: "The client operated on legacy batch settlement banking rails suffering from high latency (3-5 business days), 4.2% FX drop-off, and strict multi-jurisdiction compliance audits.",
    solution: "Novatech engineered an event-driven distributed payment gateway using Go, Apache Kafka, and AWS Fargate. We integrated real-time AML/KYC screening with instant webhook verification.",
    technologies: ["Go", "Kafka", "PostgreSQL", "AWS Fargate", "Docker", "Redis"],
    results: [
      { metric: "99.99%", label: "Platform Uptime SLA" },
      { metric: "1.4s", label: "Average Settlement Time" },
      { metric: "$140M+", label: "Annual Volume Processed" }
    ],
    liveUrl: "#contact"
  },
  {
    id: "project-health",
    title: "OmniCare Clinical Telehealth Portal",
    category: "Web",
    categoryKey: "web",
    industry: "Healthcare",
    imageType: "health",
    shortDesc: "HIPAA-compliant web platform linking 12,000+ physicians with over 450,000 patients across encrypted video consultations and EHR sync.",
    challenge: "Fragmented hospital systems prevented doctors from accessing patient histories during video calls, leading to consultation delays and compliance risks.",
    solution: "Designed and deployed a modern React/Next.js portal powered by WebRTC and FHIR/HL7 API connectors with end-to-end encryption and audit logging.",
    technologies: ["Next.js", "React", "WebRTC", "Node.js", "HL7/FHIR", "PostgreSQL"],
    results: [
      { metric: "450K+", label: "Active Consultations" },
      { metric: "100%", label: "HIPAA & SOC-2 Audit Pass" },
      { metric: "35%", label: "Reduction in Wait Times" }
    ],
    liveUrl: "#contact"
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
    solution: "Built a headless frontend using Next.js on edge CDNs, backed by Shopify Plus Storefront API, Algolia InstantSearch, and custom Stripe payment routing.",
    technologies: ["Next.js", "Shopify Storefront", "Algolia", "Tailwind CSS", "Stripe", "Redis"],
    results: [
      { metric: "0.8s", label: "Global Page Load Time" },
      { metric: "+48%", label: "Mobile Conversion Rate" },
      { metric: "32", label: "Currencies Supported" }
    ],
    liveUrl: "#contact"
  },
  {
    id: "project-ai",
    title: "CogniFlow Enterprise Document AI",
    category: "AI",
    categoryKey: "ai",
    industry: "Legal & Insurance",
    imageType: "ai",
    shortDesc: "Autonomous LLM-driven contract analysis platform processing complex 200+ page policy agreements with 98.4% extraction accuracy.",
    challenge: "Claims adjusters spent an average of 4.5 hours manually reviewing insurance clauses, creating claims processing backlogs and human review errors.",
    solution: "Engineered a Retrieval-Augmented Generation (RAG) system with hybrid semantic search, custom entity extraction pipelines, and human-in-the-loop verification.",
    technologies: ["Python", "FastAPI", "OpenAI API", "LangChain", "Qdrant Vector DB", "React"],
    results: [
      { metric: "82%", label: "Reduction in Review Time" },
      { metric: "98.4%", label: "Data Extraction Accuracy" },
      { metric: "50,000+", label: "Contracts Processed / Mo" }
    ],
    liveUrl: "#contact"
  },
  {
    id: "project-mobile",
    title: "SyncFleet Driver & Dispatch App",
    category: "Mobile",
    categoryKey: "mobile",
    industry: "Logistics",
    imageType: "mobile",
    shortDesc: "Offline-first mobile application utilized by 3,500 commercial haulage drivers for route guidance, proof-of-delivery, and telemetry.",
    challenge: "Drivers frequently lost cellular reception in rural transit zones, causing lost dispatch updates, missing signatures, and billing reconciliation delays.",
    solution: "Developed an offline-first React Native mobile app with SQLite local synchronization, background GPS tracking, and digital signature capture.",
    technologies: ["React Native", "TypeScript", "SQLite", "Node.js", "WebSockets", "AWS IoT"],
    results: [
      { metric: "3,500+", label: "Daily Active Drivers" },
      { metric: "0%", label: "Data Loss in Offline Zones" },
      { metric: "22%", label: "Route Mileage Savings" }
    ],
    liveUrl: "#contact"
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
    solution: "Architected a high-throughput time-series ingestion pipeline with Kafka, TimescaleDB, and an interactive 3D plant dashboard in React.",
    technologies: ["Kafka", "TimescaleDB", "React", "Three.js", "Docker", "Go"],
    results: [
      { metric: "80K/s", label: "Sensor Events Ingested" },
      { metric: "-64%", label: "Unscheduled Plant Downtime" },
      { metric: "$1.2M", label: "First-Year Cost Savings" }
    ],
    liveUrl: "#contact"
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discover",
    subtitle: "Requirement Analysis & Architecture Audit",
    desc: "We dive deep into your operational workflows, user journeys, data structures, and compliance requirements to establish unambiguous project scope and KPI baselines."
  },
  {
    step: "02",
    title: "Strategy",
    subtitle: "Architecture Blueprint & Tech Selection",
    desc: "We formulate an architectural design document, map entity relationships, choose the optimal technology stack, and establish cloud security protocols."
  },
  {
    step: "03",
    title: "Design",
    subtitle: "Interactive UI/UX & Design Systems",
    desc: "Our design team crafts intuitive user journeys, wireframes, and design systems in Figma, conducting stakeholder walkthroughs before engineering commences."
  },
  {
    step: "04",
    title: "Develop",
    subtitle: "Agile Engineering & Test Automation",
    desc: "Engineers build clean, modular code in 2-week agile sprints with daily standups, pull request peer reviews, and automated CI/CD unit testing."
  },
  {
    step: "05",
    title: "Test",
    subtitle: "Security Audits & Quality Assurance",
    desc: "Rigorous automated integration tests, penetration testing, load stress simulations, and cross-browser regression validation guarantee production stability."
  },
  {
    step: "06",
    title: "Launch & Support",
    subtitle: "Zero-Downtime Deployment & SLA",
    desc: "We deploy using automated blue/green pipelines, configure APM monitoring, and provide continuous 24/7 SLA infrastructure support and iterative feature growth."
  }
];

export const WHY_CHOOSE_US = [
  {
    icon: "users",
    title: "Experienced Tech Team",
    desc: "Senior engineers and cloud architects with an average of 9+ years delivering production software for Fortune 500s and high-growth ventures."
  },
  {
    icon: "sliders",
    title: "Custom Solutions",
    desc: "Zero boilerplate shortcuts. Every line of code and architecture diagram is tailored to your business model and scaling goals."
  },
  {
    icon: "repeat",
    title: "Agile & Transparent",
    desc: "Bi-weekly sprint demos, shared code repositories, dedicated Slack/Teams channels, and complete budget visibility."
  },
  {
    icon: "shield-check",
    title: "Security & Compliance",
    desc: "ISO-aligned development practices, OWASP top 10 adherence, role-based controls, and preparation for SOC 2, HIPAA, and GDPR."
  },
  {
    icon: "maximize-2",
    title: "Scalable Architecture",
    desc: "Systems built to gracefully scale from hundreds of pilot users to millions of global transactions without structural redesigns."
  },
  {
    icon: "clock",
    title: "On-Time Delivery",
    desc: "Strict milestone tracking, risk mitigation matrices, and proven delivery track record with 94% of milestones shipped ahead of deadline."
  },
  {
    icon: "life-buoy",
    title: "Long-Term Partnership",
    desc: "Post-launch warranty, ongoing feature maintenance, cloud cost management, and continuous optimization guarantees."
  },
  {
    icon: "award",
    title: "Zero Vendor Lock-In",
    desc: "You retain 100% intellectual property ownership of source code, container configurations, documentation, and cloud accounts."
  }
];

export const TEAM_DATA = [
  {
    name: "Marcus Vance",
    role: "Chief Technology Officer",
    division: "Executive Leadership",
    bio: "Former Principal Architect with 16+ years designing distributed cloud backends and enterprise SaaS systems.",
    expertise: ["Cloud Architecture", "Distributed Systems", "Kubernetes", "Security"]
  },
  {
    name: "Elena Rostova",
    role: "Head of Engineering",
    division: "Software Engineering",
    bio: "Leads engineering squads across modern web, microservices, and backend platform reliability engineering.",
    expertise: ["React / Next.js", "Node.js", "Go", "CI/CD Automation"]
  },
  {
    name: "David Chen",
    role: "Principal AI & Data Architect",
    division: "Artificial Intelligence",
    bio: "Specializes in LLM fine-tuning, RAG enterprise pipelines, and real-time machine learning inference systems.",
    expertise: ["Python", "PyTorch", "LLMs & RAG", "Data Engineering"]
  },
  {
    name: "Sarah Lindqvist",
    role: "Director of Product Design",
    division: "UI/UX & Creative",
    bio: "Design systems specialist who has directed UX transformations for global banking and logistics platforms.",
    expertise: ["Design Systems", "Figma", "User Research", "WCAG AA"]
  }
];

export const TESTIMONIALS_DATA = [
  {
    quote: "Novatech took our complex cross-border payment requirements and turned them into an ultra-reliable platform. Their engineering rigor and communication are the best we have experienced in 10 years of partnering with technology agencies.",
    author: "Jonathan Mercer",
    role: "VP of Product",
    company: "Apex Global FinTech",
    rating: 5
  },
  {
    quote: "The telehealth platform Novatech engineered exceeded our clinical compliance benchmarks and allowed us to scale from 20,000 to over 450,000 patients seamlessly. They are true technical partners, not just contract coders.",
    author: "Dr. Rachel Sterling",
    role: "Chief Digital Officer",
    company: "OmniHealth Network",
    rating: 5
  },
  {
    quote: "Our mobile fleet app used to crash constantly in areas with low cell coverage. Novatech rebuilt it with an offline-first architecture that eliminated data loss entirely and saved our dispatch team hundreds of hours each week.",
    author: "Carlos Morales",
    role: "Director of Fleet Operations",
    company: "TransLogix International",
    rating: 5
  }
];

export const CAREERS_DATA = [
  {
    id: "job-sr-react",
    title: "Senior Full-Stack Engineer (React & Node.js)",
    department: "Engineering",
    location: "San Francisco, CA / Hybrid / Remote",
    type: "Full-time",
    experience: "5+ Years",
    salary: "$140,000 – $175,000 + Equity",
    desc: "We are seeking a senior engineer to design and develop enterprise web platforms using React, TypeScript, Node.js, and modern cloud microservices.",
    requirements: [
      "5+ years professional experience building web apps with TypeScript, React, and Node.js",
      "Deep understanding of distributed systems, REST/GraphQL APIs, and SQL/NoSQL databases",
      "Experience with Docker, AWS/GCP, and CI/CD pipelines",
      "Passion for clean code, automated unit testing, and architectural discussions"
    ]
  },
  {
    id: "job-ai-engineer",
    title: "AI / Machine Learning Engineer",
    department: "AI & Data Solutions",
    location: "Remote (US/Canada)",
    type: "Full-time",
    experience: "4+ Years",
    salary: "$150,000 – $185,000 + Equity",
    desc: "Join our AI squad to build production LLM systems, custom RAG architectures, and predictive analytics tools for enterprise clients.",
    requirements: [
      "Proven track record building and deploying ML/LLM applications using Python, PyTorch, and FastAPI",
      "Experience with vector databases (Pinecone, Qdrant, Milvus) and retrieval pipelines",
      "Understanding of model evaluation, hallucination reduction, and agentic workflows",
      "Strong computer science fundamentals and algorithmic problem solving"
    ]
  },
  {
    id: "job-devops-lead",
    title: "Senior Cloud & DevOps Architect",
    department: "Cloud & Infrastructure",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
    experience: "6+ Years",
    salary: "$160,000 – $190,000 + Equity",
    desc: "Lead cloud infrastructure architecture across multi-region AWS and Azure setups, container orchestration, and security automation.",
    requirements: [
      "Extensive experience with AWS or Azure, Kubernetes (EKS/AKS), and Terraform",
      "Solid understanding of zero-trust security, VPC networking, and SOC 2 compliance",
      "Proficiency in automating CI/CD workflows using GitHub Actions or GitLab CI",
      "Ability to mentor junior engineers and advise clients on cloud cost optimization"
    ]
  },
  {
    id: "job-lead-designer",
    title: "Lead UI/UX Product Designer",
    department: "Design",
    location: "Remote (Global)",
    type: "Full-time",
    experience: "5+ Years",
    salary: "$125,000 – $155,000",
    desc: "Define the visual and interaction design for complex digital products, maintain enterprise design systems, and collaborate closely with engineering teams.",
    requirements: [
      "Mastery of Figma, component tokens, responsive design systems, and rapid prototyping",
      "Strong portfolio demonstrating complex dashboard or SaaS product design",
      "Deep knowledge of WCAG 2.1 AA accessibility guidelines and usability testing methods",
      "Excellent communication and ability to present design rationale to enterprise stakeholders"
    ]
  },
  {
    id: "job-qa-automation",
    title: "QA Automation Engineer",
    department: "Quality Assurance",
    location: "Remote (US/EU)",
    type: "Full-time",
    experience: "3+ Years",
    salary: "$100,000 – $130,000",
    desc: "Build automated end-to-end testing frameworks, perform API regression testing, and ensure every release meets the highest stability standards.",
    requirements: [
      "Experience writing test automation suites using Playwright, Cypress, or Selenium",
      "API automated testing experience using Postman, Newman, or Python/Jest",
      "Familiarity with CI/CD integration and test reporting dashboards",
      "Strong attention to detail and ability to identify edge cases before release"
    ]
  },
  {
    id: "job-tech-pm",
    title: "Technical Project Manager",
    department: "Project Delivery",
    location: "San Francisco, CA / Hybrid",
    type: "Full-time",
    experience: "4+ Years",
    salary: "$120,000 – $150,000",
    desc: "Coordinate sprint planning, client milestones, and cross-functional engineering squads to deliver enterprise digital projects on time and within scope.",
    requirements: [
      "Background managing technical software development projects in an Agile/Scrum environment",
      "Strong communication skills with the ability to bridge technical teams and non-technical stakeholders",
      "Proficiency with Jira, Confluence, Linear, and modern sprint tracking tools",
      "PMP, CSM, or equivalent certification is a plus"
    ]
  }
];
