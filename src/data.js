// ============================================================
//  All the site's content lives here. Edit this file to change
//  projects, links, skills, tools and contact details.
// ============================================================

export const contact = {
  email: "modupe.phillips@lusterquest.com",
  phoneDisplay: "+234 807 785 5777",
  phoneLink: "+2348077855777",
  linkedin: "https://www.linkedin.com/in/modupephillips",
};

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "What I do" },
  { href: "#toolkit", label: "Toolkit" },
  { href: "#sidequests", label: "Sidequests" },
  { href: "#about", label: "About" },
];

// `key` matches the screenshot file name in public/assets/shots/<key>.jpg
// and the drawn fallback preview in components/Previews.jsx.
// Leave `url` empty ("") if a project has no live site yet.
export const projects = [
  {
    key: "nexcent",
    title: "Nexcent, a landing page for a membership platform",
    type: "Web Development",
    year: "2026",
    url: "https://nexcent-chi-cyan.vercel.app/",
    blurb:
      "A responsive landing page for Nexcent, a platform that helps membership organisations, national associations and clubs run their members, events and payments from one system. I built it from a Figma design: navigation with login and register, client logo strip, audience cards, a stats band, testimonial, blog cards and a newsletter footer, all tuned from phone to wide desktop.",
    tools: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "Figma", "Vercel"],
  },
  {
    key: "worknest",
    title: "WorkNest, a hiring hub where humans read your CV",
    type: "Product UI & Coding",
    year: "2026",
    url: "",
    blurb:
      "Account sign-up and a four-step job application: confirm details, attach CV and links, answer questions, review and submit, then track your status.",
    tools: ["HTML", "Tailwind CSS", "JavaScript", "Figma", "Git & GitHub"],
  },
  {
    key: "lagos",
    title: "Driving in Lagos, a game about surviving Lagos roads",
    type: "Browser Game",
    year: "2026",
    url: "https://driving-in-lagos-wc15.vercel.app/",
    blurb:
      "Drive the Ikeja to Mile 12 route: pick up fares, dodge potholes and read the danfos before they cut you off. Slow down for craters that burst tyres, watch for pedestrians and marshals, and stop when a VIO officer flags you down. Players sign in, earn fares into a wallet and track speed and damage. It works on a phone with thumb buttons or on a keyboard with the arrow keys.",
    tools: ["JavaScript", "HTML", "CSS", "Game design", "Vercel"],
  },
  {
    key: "lusterquest",
    title: "LusterQuest, a consultancy site with an AI copilot inside",
    type: "Website & Web App",
    year: "2026",
    url: "https://lusterquest.vercel.app/",
    blurb:
      "\"Responsible business, measurable impact.\" The site for my consultancy, which helps African organisations manage ESG performance, measure environmental impact and meet sustainability reporting requirements. Behind it sits LQ OS: 11 dashboard views for carbon tracking, ESIA, programme monitoring and reporting, a Responsible Business Index and an embedded AI assistant.",
    tools: ["React", "JavaScript", "HTML", "CSS", "Claude API", "Recharts"],
  },
  {
    key: "shoesfront",
    title: "Sneakers, a full-stack online shoe store",
    type: "Full-Stack Web App",
    year: "2026",
    url: "https://shoesfront.vercel.app/",
    blurb:
      "\"Sneakers that keep up with you.\" A sneaker shop with a React storefront and its own back-end API. Shoppers browse men's and women's styles, filter by brand and category, open a product page, add pairs to a cart and check out, with sign-up and login. Behind it sits an admin dashboard where new shoes go live on the storefront straight away, plus a contact form and a size-help flow.",
    tools: ["React", "Tailwind CSS", "React Router", "Node.js", "REST APIs", "Vercel"],
  },
];

export const marqueeTools = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Node.js", "Tailwind CSS",
  "n8n", "Zapier", "Make", "Claude API", "OpenAI API", "Git", "GitHub",
  "Vercel", "Figma", "Excel", "Tableau",
];

export const skillCards = [
  {
    id: "sk-web",
    sticker: "</>",
    title: "Web development",
    intro:
      "I'm trained in full-stack web development, so I can go from a Figma file or a rough brief to a fast site live on Vercel.",
    points: [
      "Websites and landing pages, responsive and accessible",
      "Internal tools and dashboards: at Pety Trade, 16 tools, a CRM dashboard and an FX margin calculator",
      "Sign-ups, onboarding and multi-step forms",
      "Scoping MVPs for new products, like Sentra's multi-currency wallet",
    ],
    tools: "HTML, CSS, JavaScript, TypeScript, React, Node.js, Tailwind, Git, Vercel, Figma",
  },
  {
    id: "sk-ai",
    sticker: "⚡",
    title: "AI & automation",
    intro: "Most teams don't need a moonshot. They need the same ten tasks to stop eating their week.",
    points: [
      "Zapier, Make and n8n workflows connecting forms, email, sheets, CRMs and chat",
      "AI agents and chatbots grounded in your own documents and rules",
      "AI copilots inside web apps, like the LQ OS assistant",
      "Approval flows, automated reporting and dashboards that update themselves",
    ],
    tools: "Zapier, Make, n8n, Claude & OpenAI APIs, AI agents, chatbots, Excel, Tableau",
  },
  {
    id: "sk-pm",
    sticker: "✓",
    title: "My other badges",
    intro:
      "13 years of programme and transformation work means I map the process, write the SOP and train the team, so the tool actually gets used after launch.",
    points: [
      "Process maps, RACI, SOPs and SLAs",
      "KPI frameworks and performance dashboards",
      "PRINCE2-certified delivery",
    ],
  },
];

export const toolkit = [
  {
    id: "tg-front",
    title: "Front end",
    items: [
      ["HTML", "Semantic, accessible page structure"],
      ["CSS", "Responsive layouts, animation, design tokens"],
      ["JavaScript", "Interactivity, form logic, browser games"],
      ["TypeScript", "Safer, typed code for bigger apps"],
      ["React", "Dashboards and app interfaces, like LQ OS and this site"],
      ["Tailwind CSS", "Fast, consistent styling from Figma designs"],
    ],
  },
  {
    id: "tg-back",
    title: "Back end",
    items: [
      ["Node.js", "APIs, server logic and scripts"],
      ["REST APIs & webhooks", "Connecting apps and moving data between them"],
    ],
  },
  {
    id: "tg-auto",
    title: "Automation & AI",
    items: [
      ["n8n", "Multi-step workflows with AI and approvals"],
      ["Zapier", "Quick links between everyday apps"],
      ["Make", "Visual automations with branching logic"],
      ["AI agents", "Assistants that research, triage and draft"],
      ["Chatbots", "Customer and staff help grounded in your documents"],
    ],
  },
  {
    id: "tg-ship",
    title: "Design, shipping & data",
    items: [
      ["Figma", "Reading designs and turning them into code"],
      ["Git & GitHub", "Version control and code history"],
      ["Vercel", "Deploying sites, including this one"],
      ["VS Code", "Where the code gets written"],
      ["Excel & Tableau", "Data analysis, KPI and CRM dashboards"],
    ],
  },
];

export const sidequests = [
  { name: "Rootz", text: "A family legacy platform: register relatives, get birthday and anniversary reminders, keep a family archive." },
  { name: "Think Like a Consultant", text: "My book: 100 frameworks for strategy, transformation, process and performance." },
  { name: "Circle Cliq", text: "A social app idea for meeting people through shared interests." },
  { name: "A'Lure", text: "My Lagos fragrance brand, from formulation to Instagram." },
];

export const facts = [
  ["Based in", "Lagos, open to remote"],
  ["Trained at", "Tech Studio Academy (Full Stack), TS Academy (AI Automation)"],
  ["Certified", "PRINCE2, Google Data Analytics, Google Project Management"],
  ["Proudest number", "60% sales growth while deputising for an MD"],
];

export const professionalSkills = [
  "AI and Automation",
  "Web Development",
  "Programme & Portfolio Management",
  "PRINCE2",
  "Business Transformation",
  "Change Management",
  "Business Process Re-engineering",
  "Digital Transformation",
  "MVP Scoping & Product Roadmaps",
  "Fintech & Payments",
  "FX Operations",
  "Data Analysis & Dashboards",
  "KPI & Performance Management",
  "SOPs, SLAs & RACI",
  "Stakeholder Engagement",
  "ESG & Sustainability",
  "CSR & Social Impact",
  "Grant Management",
  "Capacity Building",
  "Public Sector Reform",
  "Entrepreneurship Development",
  "Brand & Communications Strategy",
  "Public Relations",
  "HR & Operations",
];
