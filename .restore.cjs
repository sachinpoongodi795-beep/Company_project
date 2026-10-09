const fs = require('fs');
let app = fs.readFileSync('src/App.jsx', 'utf8');

app = app.replace(/\/\* MISSING LINE \d+ \*\//g, '');

const missingBlock = `
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
    solution: 'Engineered an event-driven microservices architecture.'
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
  { quote: 'SM Groups Solution took our complex requirements and delivered a flawless system.', author: 'David Wilson', role: 'CTO', company: 'FinCorp' },
  { quote: 'Their engineering team is top-notch. Highly recommended.', author: 'Jessica Lee', role: 'VP Engineering', company: 'HealthPlus' }
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
  const [toast, setToast] = React.useState({ visible: false, message: '', type: 'info' });
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

  const showToast = (message, type = 'success') => {
    setToast({ visible: true, message, type });
    setTimeout(() => setToast({ visible: false, message: '', type: 'info' }), 3000);
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
      showToast('Form submitted successfully!');
    }, 1500);
  };
`;

let finalApp = app.split('\n');
finalApp.splice(100, 0, missingBlock);
finalApp = finalApp.join('\n');

const headerHeroRegex = /{ \/\* HEADER \/ NAVIGATION \(EMENDO STYLE\) \*\/ }[\s\S]*?{ \/\* SERVICES \(ALL 9 SERVICES\) \*\/ }/g;
const newHeaderHero = `
      {/* HEADER / NAVIGATION (VOXARK STYLE) */}
      <header className={\`header-emendo \${scrolled ? "header-emendo--scrolled" : ""}\`}>
        <div className="container emendo-container">
          <a href="#home" className="emendo-logo" onClick={(e) => { e.preventDefault(); scrollTo("home"); }}>
            <img
              src="/assets/images/sm-groups-logo.jpg"
              alt="SM Groups"
              style={{ height: '48px', width: 'auto', objectFit: 'contain' }}
            />
          </a>

          <nav className="emendo-nav">
            <div className="emendo-nav__item">
              <a href="#home" className="emendo-nav__link" onClick={(e) => { e.preventDefault(); scrollTo("home"); }}>Home</a>
            </div>
            <div className="emendo-nav__item">
              <a href="#services" className="emendo-nav__link" onClick={(e) => { e.preventDefault(); scrollTo("services"); }}>Services</a>
            </div>
            <div className="emendo-nav__item">
              <a href="#about" className="emendo-nav__link" onClick={(e) => { e.preventDefault(); scrollTo("about"); }}>About Us</a>
            </div>
            <div className="emendo-nav__item">
              <a href="#contact" className="emendo-nav__link" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>Contact Us</a>
            </div>
            
            <div className="emendo-nav__item" style={{ marginLeft: "1rem" }}>
              <button type="button" className="emendo-nav__link" style={{ border: "1px solid rgba(255,255,255,0.2)", borderRadius: "6px", padding: "0.4rem 0.8rem" }}>
                English
                <svg className="emendo-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
            </div>
            
            <div className="emendo-nav__item">
              <button type="button" className="emendo-nav__link" style={{ border: "1px solid rgba(255,255,255,0.2)", borderRadius: "6px", padding: "0.45rem", color: "#fcd34d" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
              </button>
            </div>
          </nav>

          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      {/* HERO SECTION (VOXARK STYLE) */}
      <section id="home" className="hero-emendo">
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="hero-emendo__grid">
            <div>
              <h1 className="hero-emendo__title">
                Growing Businesses<br />
                <span className="hero-highlight">Remarkable Digital Journeys</span>
              </h1>

              <p className="hero-emendo__subtitle">
                From local shops to scaling brands, we craft digital solutions - apps, websites, and custom platforms - that expand your reach and drive real results.
              </p>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
                <a href="#projects" className="emendo-pill-btn" onClick={(e) => { e.preventDefault(); scrollTo("projects"); }}>
                  Explore Our Project &rarr;
                </a>
              </div>
              
              <div className="hero-dark-stats">
                 <div className="hero-dark-stats__item">
                    <div className="hero-dark-stats__value">50<span className="hero-dark-stats__value--accent">+</span></div>
                    <div className="hero-dark-stats__label">Projects Shipped</div>
                 </div>
                 <div className="hero-dark-stats__item">
                    <div className="hero-dark-stats__value">99.9<span className="hero-dark-stats__value--accent">%</span></div>
                    <div className="hero-dark-stats__label">SLA Uptime</div>
                 </div>
              </div>
            </div>

            {/* Device Showcase (Matching Screenshot) */}
            <div className="hero-emendo__visual">
              <div className="device-showcase">
                {/* Background Tablet */}
                <div className="device-tablet">
                  <div className="device-tablet__frame">
                    <div className="device-tablet__screen">
                      <div style={{ padding: "10px", width: "100%", height: "100%", background: "#fff", display: "flex", flexDirection: "column" }}>
                         <div style={{ height: "20px", background: "#f1f5f9", borderRadius: "4px", marginBottom: "8px" }}></div>
                         <div style={{ height: "40px", background: "#e2e8f0", borderRadius: "4px", marginBottom: "8px" }}></div>
                         <div style={{ flex: 1, background: "#f8fafc", borderRadius: "4px", display: "flex", gap: "4px" }}>
                            <div style={{ flex: 1, background: "#cbd5e1", borderRadius: "2px" }}></div>
                            <div style={{ flex: 1, background: "#cbd5e1", borderRadius: "2px" }}></div>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Laptop */}
                <div className="device-laptop">
                  <div className="device-laptop__screen">
                    <div style={{ width: "100%", height: "100%", background: "#fff", borderRadius: "4px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                      <div style={{ background: "#064e3b", padding: "6px 12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ color: "#fff", fontSize: "8px", fontWeight: "bold" }}>NATIVE CASHEWS</div>
                        <div style={{ display: "flex", gap: "8px", color: "#fff", fontSize: "6px" }}>
                          <span>Home</span><span>Shop</span><span>About</span>
                        </div>
                      </div>
                      <div style={{ flex: 1, background: "#0f766e", position: "relative", display: "flex", alignItems: "center", padding: "20px" }}>
                        <div style={{ width: "50%" }}>
                           <div style={{ color: "#fff", fontSize: "16px", fontWeight: "bold", lineHeight: 1.1, marginBottom: "8px" }}>From Nature<br/>To Nourishment</div>
                           <div style={{ color: "#d1fae5", fontSize: "7px", marginBottom: "12px" }}>Handpicked cashews & dry fruits.</div>
                           <div style={{ background: "#f59e0b", color: "#fff", fontSize: "7px", padding: "4px 8px", borderRadius: "12px", display: "inline-block" }}>Shop Now</div>
                        </div>
                        <div style={{ width: "50%", height: "100%", background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <div style={{ width: "80%", height: "80%", background: "#f59e0b", borderRadius: "50%", opacity: 0.8 }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="device-laptop__base"></div>
                </div>

                {/* Foreground Phone */}
                <div className="device-phone">
                  <div className="device-phone__frame">
                    <div className="device-phone__screen">
                      <div style={{ width: "100%", height: "100%", background: "#fff", display: "flex", flexDirection: "column" }}>
                        <div style={{ height: "15px", background: "#ef4444", display: "flex", alignItems: "center", padding: "0 4px" }}>
                          <div style={{ width: "10px", height: "4px", background: "rgba(255,255,255,0.5)", borderRadius: "2px" }}></div>
                        </div>
                        <div style={{ padding: "8px", flex: 1 }}>
                           <div style={{ fontSize: "8px", fontWeight: "bold", color: "#1e293b", marginBottom: "4px" }}>Mobile Shop</div>
                           <div style={{ height: "30px", background: "#f1f5f9", borderRadius: "4px", marginBottom: "6px" }}></div>
                           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px" }}>
                             <div style={{ height: "20px", background: "#e2e8f0", borderRadius: "2px" }}></div>
                             <div style={{ height: "20px", background: "#e2e8f0", borderRadius: "2px" }}></div>
                             <div style={{ height: "20px", background: "#e2e8f0", borderRadius: "2px" }}></div>
                             <div style={{ height: "20px", background: "#e2e8f0", borderRadius: "2px" }}></div>
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO SECTION */}
      <section className="section" style={{ background: "#ffffff", borderBottom: "1px solid var(--color-border-light)", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div style={{ fontSize: "0.85rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", color: "#0f172a", marginBottom: "1rem" }}>
            WHAT WE DO
          </div>
          <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#0f172a", marginBottom: "1.25rem", fontFamily: "var(--font-heading)" }}>
            We Build. We Manage. We Grow.
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#475569", lineHeight: 1.6 }}>
            SM Groups delivers end-to-end technology solutions that help businesses innovate faster, operate smarter, and grow stronger.
          </p>
        </div>
      </section>

      {/* SERVICES (ALL 9 SERVICES) */}
`;

finalApp = finalApp.replace(headerHeroRegex, newHeaderHero);
fs.writeFileSync('src/App.jsx', finalApp);
console.log('App.jsx fully restored and redesigned successfully.');
