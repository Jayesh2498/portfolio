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
  tagline2: "I don't just define products — I build them.",
  cta1: "See my work",
  cta2: "Resume",
  currentRole: "APM @ SuperAGI",
};

export const moment = {
  label: "AT THE MOMENT",
  text: "building {voice agents}, {dialer systems & forms} at SuperAGI — and vibe-coding internal tools on the side because I genuinely can't help it. I prototype the things I pitch.",
  tags: [
    "Voice Agents",
    "Forms 0→1",
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
      id: "quiz-platform",
      icon: "📝",
      title: "Quiz Platform",
      tags: ["AI-powered", "Kimi K2.5", "Live"],
      points: [
        "**AI-powered MCQ generation** with custom prompts for SQL, Python, IQ & English",
        "**Admin panel** for knowledge base management and quiz configuration",
        "**Shareable quiz links** — public-facing flow, no login required",
        "Built on SuperAGI's vibe coding platform using **Kimi K2.5**, no external API keys",
      ],
      ctaLabel: "View Live App",
      ctaLink: "#",
    },
    {
      id: "retail-pos",
      icon: "🛒",
      title: "Retail POS",
      tags: ["Vibe Coded", "Live", "Solo"],
      points: [
        "**Full point-of-sale system** — inventory, billing, receipts, product management",
        "Built and deployed **solo from zero** as a rapid prototype",
        "Used as a **client demo tool** for retail use cases at SuperAGI",
      ],
      ctaLabel: "View Live App",
      ctaLink: "#",
    },
    {
      id: "ats-system",
      icon: "👤",
      title: "ATS System",
      tags: ["Vibe Coded", "Live", "Prototype"],
      points: [
        "**Applicant tracking system** — pipeline, candidate stages, hiring workflow",
        "Built as an **internal prototype** for feature experimentation and ops tracking",
        "Enabled **faster product decisions** through hands-on tooling",
      ],
      ctaLabel: "View Live App",
      ctaLink: "#",
    },
    {
      id: "erp-system",
      icon: "🏭",
      title: "ERP System",
      tags: ["Vibe Coded", "Live", "Solo"],
      points: [
        "**Full enterprise resource planner** — ops, finance and inventory modules",
        "Built **end-to-end without a team** as a rapid vibe-coded prototype",
        "Used for operational tracking and demonstrating **AI-first product capabilities**",
      ],
      ctaLabel: "View Live App",
      ctaLink: "#",
    },
  ],
};

export const decks = {
  slides: [
    {
      id: "leadsquared-teardown",
      icon: "📊",
      title: "LeadSquared Teardown",
      tags: ["Competitive Analysis", "GTM", "Migration"],
      points: [
        "**Deep competitive analysis** of LeadSquared's CRM and sales automation stack",
        "Directly drove a **$50K ARR client migration** from LeadSquared to SuperAGI",
        "Used in **pre-sales demos** and GTM positioning by the founding team",
      ],
      ctaLabel: "View Deck",
      ctaLink: "#",
      fileUrl: undefined as string | undefined,
    },
    {
      id: "voice-agent-prd",
      icon: "📄",
      title: "Voice Agent PRD",
      tags: ["PRD", "0→1", "Spec"],
      points: [
        "**Full product requirements document** for the 0→1 voice agent platform",
        "Covered **user stories, edge cases, architecture decisions** & launch plan",
        "Shaped **roadmap & prioritisation** alongside the founding team at SuperAGI",
      ],
      ctaLabel: "View Deck",
      ctaLink: "#",
      fileUrl: undefined as string | undefined,
    },
  ],
};

export const footer = {
  message: "oh, you made it to the end? nice.",
  cta: "→ drop me a line sometime",
};
