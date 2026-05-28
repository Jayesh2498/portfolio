// ─────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH — edit only this file to update content
// ─────────────────────────────────────────────────────────────────

export const meta = {
  name: "Jayesh Dhanuka",
  role: "Associate Product Manager",
  location: "Bangalore, India",
  email: "dhanukajayesh11@gmail.com",
  linkedin: "https://linkedin.com/in/jayeshdhanuka",
  resumeUrl: "/resume.pdf",
  openToWork: true,
};

export const hero = {
  eyebrow: "ASSOCIATE PRODUCT MANAGER · BANGALORE, INDIA",
  firstName: "JAYESH",
  lastName: "DHANUKA",
  tagline1: "Engineering brain. Business lens.",
  tagline2: "Turning ambiguous problems into products that ship.",
  cta1: "See my work",
  cta2: "Resume",
  currentRole: "APM @ SuperAGI",
};

export const moment = {
  label: "AT THE MOMENT",
  text: "most recently built {voice agents}, {dialer systems & forms} at SuperAGI — now looking for the next thing.",
  tags: [
    "Voice Agents",
    "Forms",
    "Dialer",
    "LLM Workflows",
    "Rapid Prototyping",
    "GTM Strategy",
    "Vibe Coding",
  ],
};

export const ticker = {
  skills: [
    "Product Strategy",
    "0→1 Development",
    "GTM Strategy",
    "A/B Testing",
    "Funnel Analytics",
    "LLM Prompting",
    "AI Workflows",
    "Voice Agents",
    "Automation Systems",
    "API Integrations",
    "Rapid Prototyping",
    "Advanced SQL",
    "Data Modeling",
    "Tableau",
    "Advanced Excel",
  ],
};

export const skills = {
  eyebrow: "SKILLS",
  heading: "What I bring to the table",
  categories: [
    {
      id: "product",
      label: "Product & Business",
      accent: "#fbbf24",
      icon: "📦",
      items: [
        "Product Strategy",
        "0→1 Development",
        "GTM Strategy",
        "A/B Testing",
        "Funnel Analytics",
      ],
    },
    {
      id: "ai",
      label: "AI & Systems",
      accent: "#34d399",
      icon: "🤖",
      items: [
        "LLM Prompting",
        "AI Workflows",
        "Voice Agents",
        "Automation Systems",
        "API Integrations",
        "Rapid Prototyping",
      ],
    },
    {
      id: "data",
      label: "Data & Analytics",
      accent: "#60a5fa",
      icon: "📊",
      items: [
        "Advanced SQL",
        "Data Modeling",
        "Tableau",
        "Advanced Excel",
      ],
    },
    {
      id: "soft",
      label: "Soft Skills",
      accent: "#a78bfa",
      icon: "💡",
      items: [
        "Observant",
        "Detail-Oriented",
        "Problem Solving",
        "Ownership",
        "Organizational Skills",
        "Creativity",
        "Leadership",
      ],
    },
  ],
};

export const logos = {
  companies: [
    { name: "SuperAGI",                domain: "superagi.com" },
    { name: "GoKiwi",                  domain: "gokiwi.in" },
    { name: "Navi Technologies",       domain: "navi.com" },
    { name: "SP Jain Global Institute of\nManagement", domain: "spjain.org" },
    { name: "RV College of Engineering", domain: "rvce.edu.in" },
  ],
};

export const corporate = {
  slides: [
    {
      id: "superagi",
      company: "SuperAGI",
      period: "Nov 2025 – Present",
      icon: "🤖",
      domain: "superagi.com",
      title: "SuperAGI",
      tags: ["APM", "0→1", "AI Products"],
      points: [
        "Led **4 product verticals** — Voice Agents, Dialer, AI Sales & Support, Forms",
        "Drove **$30K+ ARR** in 3 months, taking products from launch to adoption",
        "Migrated **$50K ARR** from mid-market clients (e.g. LeadSquared) to SuperAGI",
        "Built voice agent platform with **automations, dynamic variables & custom GPTs**",
        "Built **internal tools & rapid prototypes** (POS, ATS, ERP) for client use cases",
        "Worked directly with **founders** on roadmap, GTM strategy & prioritisation",
      ],
      ctaLabel: "View Case Study",
      ctaLink: "#",
    },
    {
      id: "gokiwi",
      company: "GoKiwi",
      period: "Jul 2025 – Nov 2025",
      icon: "💳",
      domain: "gokiwi.in",
      title: "GoKiwi",
      tags: ["Business Analyst", "Fintech", "Data"],
      points: [
        "Designed **credit risk signals** using alternate data (SMS, Email) to identify revolvers",
        "Reduced **storage costs by 35%** via SQL engine optimisation (compression, sort keys)",
        "Accelerated **funnel analytics by 30%** with custom end-to-end customer journey tables",
        "Enabled **AI-driven analytics** by documenting core tables & designing LLM-ready prompts",
        "Reduced **marketing spend leakage by 10%** by redesigning attribution logic",
        "Built scalable **data pipelines**: RDS → S3 → Redshift",
      ],
      ctaLabel: "View Case Study",
      ctaLink: "#",
    },
    {
      id: "navi",
      company: "Navi Technologies",
      period: "Nov 2022 – Jun 2023",
      icon: "📱",
      domain: "navi.com",
      title: "Navi Technologies",
      tags: ["Product Analyst", "Intern", "Fintech"],
      points: [
        "Designed & evaluated **A/B experiments** — hypotheses, sample sizes, success metrics",
        "Improved **agent productivity by 28%** via KPI redesign and UI/UX recommendations",
        "Built **self-serve analytics tools** (SQL + Tableau), cutting RCA turnaround time",
        "Improved **CTR by 30 bps** via logic-based deep link to payment conversion tracking",
        "Supported **CEO-level decisions** through funnel, segmentation & collections analysis",
      ],
      ctaLabel: "View Case Study",
      ctaLink: "#",
    },
  ],
};

export const projects = {
  slides: [
    {
      id: "retail-pos",
      icon: "🛒",
      title: "Retail POS",
      tags: ["Vibe Coded", "Live", "Solo"],
      screenshot: "/screenshots/pos.png",
      points: [
        "Product catalog with categories, pricing, and stock levels",
        "Cart, discount, and billing flow with printable receipts",
        "Sales history, daily summaries, and inventory reports",
        "Admin panel for product and staff management",
      ],
      ctaLabel: "View Live App",
      ctaLink: "https://pos-omega-vert.vercel.app",
    },
    {
      id: "ats-system",
      icon: "👤",
      title: "ATS System",
      tags: ["Vibe Coded", "Live", "Solo"],
      screenshot: "/screenshots/ats.png",
      points: [
        "Job posting management with custom fields and status controls",
        "Candidate pipeline with stage-wise progression tracking",
        "Interview notes, feedback, and per-candidate activity log",
        "Dashboard with hiring funnel overview across all open roles",
      ],
      ctaLabel: "View Live App",
      ctaLink: "https://ats-iota-eight.vercel.app",
    },
    {
      id: "erp-system",
      icon: "🏭",
      title: "ERP System",
      tags: ["Vibe Coded", "Live", "Solo"],
      screenshot: "/screenshots/erp.png",
      points: [
        "Inventory module with stock tracking, reorder alerts, and supplier management",
        "Finance module with expenses, invoices, and a basic P&L view",
        "Operations dashboard with team tasks and project status tracking",
        "Role-based access across all modules",
      ],
      ctaLabel: "View Live App",
      ctaLink: "https://erp-one-eta.vercel.app",
    },
  ],
};

export const decks = {
  slides: [
    {
      id: "coming-soon",
      icon: "📂",
      title: "Coming Soon",
      tags: ["PRDs", "Teardowns", "Strategy"],
      points: [
        "Decks and PRDs are being prepared and will be added here shortly.",
      ],
      ctaLabel: "Check Back Soon",
      ctaLink: "#",
      fileUrl: undefined as string | undefined,
    },
  ],
};

export const footer = {
  message: "oh, you made it to the end? nice.",
  cta: "→ drop me a line sometime",
};
