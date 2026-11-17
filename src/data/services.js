// Single source of truth for every service page, the home services grid,
// the contact form "Service" dropdown, sitemap entries and JSON-LD.
// Only real facts go here. Anything still missing is marked TODO.

export const WHATSAPP_NUMBER = "923295985714";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi IBtech Nova, I'd like a quote"
)}`;
// TODO(Bilal): replace with your Calendly link when ready.
export const BOOK_CALL_URL = WHATSAPP_URL;

export const services = [
  {
    slug: "construction-estimating",
    short: "Construction Estimating & Takeoffs",
    icon: "Ruler",
    accent: "pink",
    teaser:
      "Quantity takeoffs and cost estimates for US contractors. PlanSwift file + Excel estimate, quoted the same day.",
    metaTitle: "Construction Estimates & Quantity Takeoffs for US Contractors",
    metaDescription:
      "Same-day quotes for construction cost estimates and quantity takeoffs. $52.5M+ estimated across NY, NJ, CA and HI. PlanSwift/Bluebeam takeoff + Excel estimate by CSI division.",
    eyebrow: "For US Contractors",
    title: "Construction Estimates & Quantity Takeoffs for US Contractors",
    hook: "Every bid you skip is a job someone else wins.",
    intro:
      "Send us your plans and get a detailed takeoff and cost estimate, broken down by CSI division and priced with your own rates, so you can bid more jobs without spending your week measuring.",
    primaryCta: { label: "Get a Same-Day Quote", href: "#quote" },
    video: {
      src: "/videos/estimating-showcase.mp4",
      poster: "/videos/estimating-thumb.jpg",
      label: "Recent estimates from our desk (64s)",
    },
    stats: [
      { value: "$52.5M+", label: "in construction estimates" },
      { value: "4,300+", label: "line items priced" },
      { value: "NY · NJ · CA · HI", label: "projects estimated" },
      { value: "24–48 hr", label: "typical turnaround" },
    ],
    projectsTitle: "Recent estimates",
    projectsNote: "Sample projects. Client names and addresses removed.",
    projects: [
      {
        tag: "Municipal · Recreation",
        title: "Aquatic & recreation center",
        location: "New Jersey",
        figure: "$24.56M",
        detail: "9 bid packages · 3,400+ line items · 19 CSI divisions",
      },
      {
        tag: "Commercial · Healthcare",
        title: "4-level assisted care community",
        location: "California",
        figure: "116,011 SF",
        detail: "~$26M total · finishes, openings, MEP, wood and concrete",
      },
      {
        tag: "Residential",
        title: "Custom residences & additions",
        location: "New York & Hawaii",
        figure: "$500K–$780K",
        detail: "Priced right down to the rebar",
      },
    ],
    highlightsTitle: "What you get",
    highlights: [
      { title: "Takeoff file", text: "PlanSwift or Bluebeam takeoff you can open, check and reuse." },
      { title: "Excel estimate by CSI division", text: "Quantity, waste, material and labor for every line item. Nothing hidden." },
      { title: "Your own rates", text: "Priced with your rates, markups and local pricing, or ours if you prefer." },
      { title: "24–48 hour turnaround", text: "Quote the same day. Most estimates delivered within 24–48 hours." },
    ],
    pricing: {
      note: "Starting prices. Final quote after we review your plans.",
      tiers: [
        { name: "Basic", price: "$25", text: "Single trade or a small residential job." },
        { name: "Standard", price: "$75", text: "Full residential or a small commercial project.", featured: true },
        { name: "Premium", price: "$200", text: "Multi-trade commercial project." },
      ],
    },
    faqs: [
      {
        q: "How fast can you deliver?",
        a: "We quote the same day you send plans. Most estimates are delivered in 24–48 hours; large multi-trade commercial jobs may take longer and we will tell you upfront.",
      },
      {
        q: "What file formats do you accept?",
        a: "PDF plans are best. We also work with DWG, images and Bluebeam/PlanSwift files. Send a Dropbox or Google Drive link for large sets.",
      },
      {
        q: "Which trades do you cover?",
        a: "Concrete, masonry, metals, wood and framing, thermal and moisture, openings, finishes, MEP and sitework. Full CSI-division estimates or a single trade.",
      },
      {
        q: "Are my plans kept confidential?",
        a: "Yes. Plans and estimates are used only for your project and never shared. We are happy to sign an NDA before you send anything.",
      },
      {
        q: "How do I pay?",
        // TODO(Bilal): confirm payment methods you accept.
        a: "By bank transfer, or through Upwork or Fiverr if you prefer a marketplace. Larger projects can be split into milestones.",
      },
    ],
    form: "estimate",
  },
  {
    slug: "ai-calling-bots",
    short: "AI Calling Bots & Dialers",
    icon: "Bot",
    accent: "cyan",
    teaser:
      "AI voice and fronter bots, custom dialer platforms and VICIdial setups. Bots are live with multiple clients.",
    metaTitle: "AI Calling Bots, Voice Agents & Dialer Systems",
    metaDescription:
      "AI voice and fronter bots, custom dialer platforms, VICIdial setup and customization, and call routing tools. Multiple clients already run our bots in production.",
    eyebrow: "AI Voice · Dialers · VICIdial",
    title: "AI Calling Bots & Dialer Systems",
    hook: "Multiple clients are already running our bots in production.",
    intro:
      "We build AI voice and fronter bots that qualify leads and hand off live calls, plus the dialer and VICIdial infrastructure underneath them, so your agents only talk to people ready to buy.",
    primaryCta: { label: "Book a 15-min Call", href: "BOOK" },
    images: [
      { src: "/work/ai-agents.webp", alt: "AI agents that answer, qualify and hand off" },
      { src: "/work/vicidial.webp", alt: "VICIdial setup for call centers" },
    ],
    // TODO(Bilal): add demo video links (dialer platform, fronter bot, Vici Priority).
    highlightsTitle: "What we build",
    highlights: [
      { title: "AI voice & fronter bots", text: "Bots that open the call, qualify the lead and transfer to a live agent with full context." },
      { title: "Custom dialer platform", text: "Your own dialer with campaigns, lists, live dashboards and reporting." },
      { title: "VICIdial setup & customization", text: "Install, campaigns, SIP trunks, IVR, custom agent and admin panels, multi-server clusters." },
      { title: "Routing & priority tools", text: "Agent-performance scoring and call routing so your best agents get the best calls." },
      { title: "CRM & lead-flow integration", text: "Leads flow from the dialer and bots into your CRM or QA portal automatically." },
      { title: "Monitoring & support", text: "We keep the stack running: Asterisk, SIP, audio issues, scaling and updates." },
    ],
    faqs: [
      { q: "Do the bots work with my existing dialer?", a: "Usually yes. We integrate with VICIdial and SIP-based systems, or we can set up a dialer for you." },
      { q: "Can calls be transferred to my agents?", a: "Yes. The bot qualifies the lead and transfers the call to a live agent or closer with the details captured." },
      { q: "How long does setup take?", a: "A standard bot or VICIdial setup takes days, not months. We confirm the timeline after a short call." },
    ],
    form: "contact",
  },
  {
    slug: "crm-hrms-qa",
    short: "CRM / HRMS / QA Portals",
    icon: "LayoutDashboard",
    accent: "pink",
    teaser:
      "Custom CRMs, HRMS with attendance and payroll, call-center QA portals and one-form lead entry.",
    metaTitle: "Custom CRM, HRMS & Call-Center QA Portals",
    metaDescription:
      "Custom-built CRM, HRMS (attendance, payroll, role-based access), call-center QA feedback portals and OneForm single-form lead entry with DNC checks.",
    eyebrow: "Custom Business Systems",
    title: "CRM, HRMS & QA Portals Built Around Your Team",
    hook: "Replace the spreadsheets your team is drowning in.",
    intro:
      "We build the internal systems that run operations: HR and payroll, quality assurance, lead entry and CRM, designed around how your team actually works.",
    primaryCta: { label: "Book a 15-min Call", href: "BOOK" },
    images: [
      { src: "/work/qa-portal.webp", alt: "QA portal live dashboard" },
      { src: "/work/oneform.webp", alt: "OneForm single-form lead entry" },
    ],
    // TODO(Bilal): add demo video links (HRMS, QA Portal, OneForm).
    highlightsTitle: "Systems we have built",
    highlights: [
      { title: "HRMS", text: "Org hierarchy, attendance, payroll and role-based access control in one place." },
      { title: "QA Feedback Portal", text: "Campaigns, sales tracking, call transcription and audits, replacing Google Sheets." },
      { title: "OneForm lead entry", text: "Agents fill one form; the number is DNC-checked and a bot fills the other sales forms." },
      { title: "Custom CRM", text: "Pipelines, contacts, tasks and reports shaped around your sales process." },
      { title: "Dashboards & reports", text: "Live numbers for managers instead of end-of-day spreadsheets." },
      { title: "Integrations", text: "Connect dialers, forms, email, WhatsApp and third-party APIs." },
    ],
    faqs: [
      { q: "Do you build from scratch or customize existing software?", a: "Both. We build custom systems when off-the-shelf tools don't fit, and integrate with tools you already use." },
      { q: "Can you migrate our data from Google Sheets or Excel?", a: "Yes. We import your existing data so your team can switch without starting over." },
      { q: "Where is it hosted?", a: "On your server or cloud, or we can host and maintain it for you." },
    ],
    form: "contact",
  },
  {
    slug: "ai-automation",
    short: "AI Agents & Automation",
    icon: "Sparkles",
    accent: "cyan",
    teaser:
      "AI agents that answer, qualify and hand off on chat, email and WhatsApp, plus workflow automation.",
    metaTitle: "AI Agents & Business Automation",
    metaDescription:
      "AI agents that answer, qualify and hand off on chat, email and WhatsApp, RAG assistants trained on your data, and workflow automation with n8n, Make and APIs.",
    eyebrow: "AI Agents · Automation",
    title: "AI Agents & Automation That Do the Busywork",
    hook: "Reply in seconds, 24/7, without hiring another person.",
    intro:
      "We set up AI agents and automations that answer customers, qualify leads, book meetings and move data between your tools, with a human handoff when it matters.",
    primaryCta: { label: "Book a 15-min Call", href: "BOOK" },
    images: [{ src: "/work/ai-agents.webp", alt: "AI agents that answer, qualify and hand off" }],
    highlightsTitle: "What we automate",
    highlights: [
      { title: "Chat & WhatsApp agents", text: "Instant first replies on every channel, trained on your services and pricing." },
      { title: "Lead qualification", text: "Ask the right questions, score the lead and book the meeting." },
      { title: "RAG assistants", text: "Assistants that answer from your documents, SOPs and knowledge base." },
      { title: "Workflow automation", text: "n8n, Make and custom APIs to move data between forms, CRMs, sheets and email." },
    ],
    faqs: [
      { q: "Which AI models do you use?", a: "We work with OpenAI, Claude and other providers, and pick what fits your budget and data needs." },
      { q: "Will a human still be in the loop?", a: "Yes. Agents hand off to your team with the full conversation whenever needed." },
    ],
    form: "contact",
  },
  {
    slug: "websites",
    short: "Websites & Landing Pages",
    icon: "Globe",
    accent: "pink",
    teaser:
      "Fast, modern business websites and landing pages built to turn visitors into enquiries.",
    metaTitle: "Websites & Landing Pages",
    metaDescription:
      "High-performance business websites and landing pages built with Next.js, plus hosting and deployment. See live websites we have built.",
    eyebrow: "Websites · Landing Pages",
    title: "Websites That Turn Visitors Into Enquiries",
    hook: "Your website is your best salesperson. Make it work 24/7.",
    intro:
      "We design and build fast, modern websites and landing pages, then host and maintain them, so you have a site that looks the part and brings in leads.",
    primaryCta: { label: "Get a Quote", href: "BOOK" },
    portfolioTitle: "Live websites we've built",
    portfolio: [
      { name: "7E Builders & Developers", url: "https://www.7ebuildersanddevelopers.com/", img: "/work/site-7ebuilders.webp" },
      { name: "LeadsFury", url: "https://www.leadsfury.com/", img: "/work/site-leadsfury.webp" },
      { name: "Dream Home Upgrade", url: "https://dreamhomeupgrade.us/", img: "/work/site-dreamhomeupgrade.webp" },
      { name: "Zee Finance", url: "https://zeefinance.net/", img: "/work/site-zeefinance.webp" },
      { name: "SmartBrains BPO", url: "https://smartbrainsbpo.com/", img: "/work/site-smartbrainsbpo.webp" },
      { name: "SmartBrains BPO LLC", url: "https://www.smartbrainsbpollc.com/", img: "/work/site-smartbrainsbpollc.webp" },
    ],
    highlightsTitle: "What's included",
    highlights: [
      { title: "Custom design", text: "On-brand design, not a template, that works on every screen size." },
      { title: "Fast & SEO-ready", text: "Next.js builds with clean metadata, sitemaps and fast load times." },
      { title: "Lead capture", text: "Contact forms, WhatsApp buttons and tracking so you see where leads come from." },
      { title: "Hosting & deployment", text: "We deploy, host and keep your site online and updated." },
    ],
    faqs: [
      { q: "How long does a website take?", a: "A landing page takes a few days; a full business website usually 1–3 weeks depending on content." },
      { q: "Can you redesign my existing site?", a: "Yes. We can redesign, speed up and move your current site to a modern stack." },
    ],
    form: "contact",
  },
  {
    slug: "cloud-cctv",
    short: "CCTV, Networking & Cloud",
    icon: "Cloud",
    accent: "cyan",
    teaser:
      "Network setup and security, CCTV-to-cloud recording, Linux servers, backups and cloud hosting.",
    metaTitle: "CCTV, Networking & Cloud Services",
    metaDescription:
      "Business network design and security, firewall and VPN setup, CCTV-to-cloud recording, Linux and cloud servers, backups and monitoring.",
    eyebrow: "Networking · Security · Cloud",
    title: "CCTV, Networking & Cloud Infrastructure",
    hook: "Secure, monitored and backed up, so nothing stops your business.",
    intro:
      "We design and secure your office network, move CCTV recordings to the cloud, and set up the servers and backups your systems run on.",
    primaryCta: { label: "Book a 15-min Call", href: "BOOK" },
    images: [{ src: "/work/network-security.webp", alt: "Secure your business network" }],
    highlightsTitle: "What we do",
    highlights: [
      { title: "Network design & security", text: "Firewalls, VPNs, segmentation and hardening for offices and call centers." },
      { title: "CCTV to cloud", text: "Recordings saved off-site so footage survives theft, damage or a dead DVR." },
      { title: "Linux & cloud servers", text: "Setup, hardening, monitoring and scaling on your hardware or in the cloud." },
      { title: "Backups & recovery", text: "Automatic backups and a tested plan to get you back online fast." },
    ],
    faqs: [
      { q: "Do you work on-site?", a: "On-site in Pakistan where possible; most configuration, monitoring and cloud work is done remotely." },
      { q: "Can you audit our current network?", a: "Yes. We find open ports, weak configs and risks, then fix them." },
    ],
    form: "contact",
  },
];

export const serviceBySlug = Object.fromEntries(services.map((s) => [s.slug, s]));
export const serviceOptions = services.map((s) => s.short);
