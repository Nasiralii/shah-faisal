export const profile = {
  firstName: "Shah",
  lastName: "Faisal",
  title: "Senior Frontend Developer",
  summary:
    "Based in Al Olaya, Riyadh. Senior Frontend Developer and Software Engineer with 5+ years building scalable enterprise applications using React 18, Next.js, TypeScript, RTK Query, Redux Toolkit, DevExtreme, and TailwindCSS. Specialized in enterprise dashboards, data-rich UI, i18n (Arabic/English), RTL, secure UI architectures, and high-performance SPAs.",
  location: "Al Olaya, Riyadh, Saudi Arabia",
  email: "faisalmkd02@gmail.com",
  phone: "+966 502639688",
  phoneHref: "+966502639688",
  linkedin: "https://www.linkedin.com/in/shahfaisal8012",
  github: "https://github.com/Shahfaisal12",
  website: "https://faisal-portfolio-app.vercel.app/",
  cv: "/assets/Shah_Faisal_CV.pdf",
  years: "5",
  projects: "6+"
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services-section" },
  { label: "Skills", href: "/#skills-section" },
  { label: "Works", href: "/#works-section" },
  { label: "Resume", href: "/#resume-section" },
  { label: "Strengths", href: "/#testimonials-section" },
  { label: "Stack", href: "/#pricing-section" },
  { label: "Expertise", href: "/#blog-section" },
  { label: "Contact", href: "/#contact-section" }
];

export const services = [
  {
    subtitle: "Frontend Architecture",
    title: "React, Next.js & TypeScript",
    text: "Architecting modular, maintainable enterprise apps with React 18, Next.js 15, TypeScript, SSR/SSG, and reusable component libraries.",
    href: "/#works-section",
    link: "See Projects"
  },
  {
    subtitle: "Data-Rich UI",
    title: "Enterprise Dashboards",
    text: "Building dashboards, charts, KPIs, reports, PDF/Excel exports, and global search with DevExtreme, Chart.js, Highcharts, and custom components.",
    href: "/#works-section",
    link: "See Projects"
  },
  {
    subtitle: "Localization",
    title: "i18n & RTL",
    text: "Arabic/English internationalization, full RTL support, locale-aware date/time formatting, and dynamic content loading.",
    href: "/#skills-section",
    link: "See Skills"
  },
  {
    subtitle: "Secure Platforms",
    title: "Auth & APIs",
    text: "Secure dashboards, authentication, role-based access, token flows, CSRF protection, REST APIs, and real-time data workflows.",
    href: "/#resume-section",
    link: "See Experience"
  },
  {
    subtitle: "Delivery",
    title: "CI/CD & Performance",
    text: "Performance optimization, SEO, Docker, Azure DevOps CI/CD, team mentoring, and cross-browser compatibility.",
    href: "/#contact-section",
    link: "Contact Me"
  }
];

export const skills = [
  {
    name: "React 18",
    text: "Enterprise SPAs, reusable component libraries, design systems, and high-performance UI with React 18.",
    value: 95
  },
  {
    name: "Next.js 15",
    text: "SSR/SSG pipelines, SEO, performance budgets, and scalable Next.js platforms across business modules.",
    value: 92
  },
  {
    name: "TypeScript",
    text: "Typed, maintainable codebases with JavaScript, TypeScript, and Node.js for production frontend systems.",
    value: 90
  },
  {
    name: "Redux Toolkit",
    text: "State management with Redux Toolkit, RTK Query, and React Router for real-time and data-driven workflows.",
    value: 90
  },
  {
    name: "TailwindCSS",
    text: "Responsive, accessible UIs with TailwindCSS, shadcn/ui, Material UI, Bootstrap, and DevExtreme.",
    value: 88
  },
  {
    name: "i18n / RTL",
    text: "Arabic/English localization, full RTL layouts, locale-aware formatting, and dynamic content loading.",
    value: 90
  }
];

export const works = [
  {
    title: "PIF Cycle, Together, PartnerHub",
    category: "Enterprise, PIF",
    filters: ["enterprise"],
    image: "/assets/images/work4.jpeg",
    href: "/#resume-section",
    external: false,
    linkLabel: "See experience",
    text: "Contributed to responsive UI, API integration, and performance across multiple Public Investment Fund platforms while working with cross-functional teams."
  },
  {
    title: "Content Catalyst",
    category: "AI Research Platform",
    filters: ["ai"],
    image: "/assets/images/work2.jpeg",
    href: "https://contentcatalyst.com",
    external: true,
    linkLabel: "See project",
    text: "Built the frontend for an AI platform with PDF/PPT/DOC ingestion, chat-based AI summaries, and large-file UI workflows. Deployed with Docker and Azure DevOps."
  },
  {
    title: "Flyingcolour",
    category: "Enterprise Product",
    filters: ["enterprise", "product"],
    image: "/assets/images/work7.jpg",
    href: "http://flyingcolour.online",
    external: true,
    linkLabel: "See project",
    text: "Enhanced UX and performance by developing admin features and integrating APIs. Collaborated with global teams to deliver a proprietary product."
  },
  {
    title: "Collaboration Yard",
    category: "Education Platform",
    filters: ["product"],
    image: "/assets/images/work1.jpeg",
    href: "https://app.collaborationyard.com",
    external: true,
    linkLabel: "See project",
    text: "Built interactive UI workflows for teachers and students and integrated live session modules."
  },
  {
    title: "OneHubPlace",
    category: "HR Management",
    filters: ["enterprise", "product"],
    image: "/assets/images/single8.jpg",
    href: "https://onehubplace-app.azurewebsites.net",
    external: true,
    linkLabel: "See project",
    text: "Built an HR management system with portals for personnel, holidays, and task management."
  },
  {
    title: "EPR",
    category: "Government Portal",
    filters: ["product"],
    image: "/assets/images/single6.jpg",
    href: "https://epr.org.pk",
    external: true,
    linkLabel: "See project",
    text: "Employment Processing Resource — built UI components for government job portals and processing workflows."
  }
];

export const education = [
  {
    title: "Bachelor of Computer Science (Software)",
    place: "Abdul Wali Khan University, Mardan, Pakistan",
    date: "2017 – 2021",
    text: "Final Year Project: E-commerce Store built with Laravel, MySQL, and Bootstrap."
  }
];

export const experience = [
  {
    title: "Senior Frontend Developer",
    place: "TCS | Riyadh, Saudi Arabia",
    date: "Feb 2026 – Present",
    present: true,
    text: "Leading frontend development for enterprise-grade platforms on-site for Public Investment Fund (PIF). Architecting React.js, Next.js, and TypeScript applications; optimizing SSR/SSG; integrating REST APIs; building secure dashboards, authentication, and role-based access; collaborating across teams; and driving code quality through reviews."
  },
  {
    title: "Senior Frontend Developer",
    place: "BITS | Riyadh, KSA",
    date: "Aug 2023 – Feb 2026",
    text: "Architected and maintained a React 18 + Next.js enterprise platform. Implemented Arabic/English i18n with full RTL, locale-aware date/time, and dynamic content. Built dashboards, charts, KPIs, reports, PDF/Excel exports, and global search using DevExtreme. Contributed to architecture, coding standards, design system, and reusable libraries with shadcn/ui + TailwindCSS."
  },
  {
    title: "Software Engineer",
    place: "Codehub Systems | UK-based company",
    date: "Aug 2023 – March 2025",
    text: "Built high-performance frontends with React, Next.js (SSR/SSG), and TypeScript. Improved SEO and load times, integrated complex REST APIs, implemented secure token flows, CSRF protection, and session handling. Deployed with Docker and Azure DevOps CI/CD. Participated in Agile standups, sprint planning, and retrospectives."
  },
  {
    title: "Front-End Developer",
    place: "Relymer Group | Islamabad",
    date: "Aug 2022 – Aug 2023",
    text: "Refactored legacy systems into modern reusable React components. Built responsive UI with TailwindCSS and MUI, integrated third-party APIs, and implemented secure data flows."
  },
  {
    title: "Frontend Developer",
    place: "FlyingColour | Dubai",
    date: "Feb 2022 – Aug 2022",
    text: "Debugged and optimized frontend performance for enterprise software. Contributed to new feature development using React and API-based workflows. Participated in daily standups and Agile processes."
  },
  {
    title: "Frontend Developer",
    place: "Collaboration Yard | Karachi",
    date: "Mar 2021 – Sep 2021",
    text: "Built responsive React frontends and translated Figma designs into production UIs. Maintained code quality through structured reviews and daily standups."
  }
];

export const strengths = [
  {
    name: "Problem Solving",
    role: "Core strength",
    image: "/assets/images/testi4-2.jpg",
    text: "Troubleshoot and resolve complex technical issues efficiently across enterprise frontend platforms."
  },
  {
    name: "Team Collaboration",
    role: "Agile / Scrum",
    image: "/assets/images/testi4-1.jpg",
    text: "Experienced in cross-functional teams and Agile environments, from standups to sprint planning and retrospectives."
  },
  {
    name: "Adaptability",
    role: "Continuous learning",
    image: "/assets/images/testi4-4.jpg",
    text: "Quick learner, capable of mastering new technologies and applying them in production systems."
  },
  {
    name: "Commercial Communication",
    role: "Stakeholder-ready",
    image: "/assets/images/testi4-3.jpg",
    text: "Strong verbal and written skills for technical and non-technical stakeholders across global teams."
  },
  {
    name: "Attention to Detail",
    role: "Code quality",
    image: "/assets/images/testi4-5.jpg",
    text: "Deliver high-quality, bug-free code consistently through reviews, standards, and attention to detail."
  }
];

export const stack = [
  {
    subtitle: "Languages",
    price: "JS",
    suffix: "/",
    em: "TS",
    text: "Core languages used to build and ship production frontend systems.",
    items: ["JavaScript", "TypeScript", "Node.js", "MySQL"],
    featured: false
  },
  {
    subtitle: "Frameworks",
    price: "React",
    suffix: "18",
    em: "Next.js",
    text: "Libraries and UI systems used across enterprise dashboards and products.",
    items: ["React 18, Next.js 15", "Redux Toolkit, RTK Query", "DevExtreme, shadcn/ui", "Tailwind, MUI, Bootstrap"],
    featured: true
  },
  {
    subtitle: "Platforms",
    price: "CI",
    suffix: "/",
    em: "CD",
    text: "Delivery, visualization, and data tools used in production workflows.",
    items: ["GitHub, Bitbucket, Azure", "Docker, Vercel, Netlify", "Firebase, cPanel", "Chart.js, Highcharts, D3.js"],
    featured: false
  }
];

export const expertise = [
  {
    category: "Architecture",
    title: "AEM-style Headless Content",
    href: "/#resume-section",
    image: "/assets/images/single7.jpg",
    text: "Strong expertise in AEM-style headless content integration, REST APIs, maps, and modular frontend architecture for enterprise platforms.",
    link: "See experience"
  },
  {
    category: "Performance",
    title: "SEO, SSR & Optimization",
    href: "/#skills-section",
    image: "/assets/images/blog-4-scaled-1.jpg",
    text: "Performance optimization, SEO, Next.js SSR/SSG pipelines, accessibility compliance, and cross-browser stability for data-rich SPAs.",
    link: "See skills"
  },
  {
    category: "Delivery",
    title: "CI/CD, Docker & Mentoring",
    href: "/#contact-section",
    image: "/assets/images/blog-2.jpg",
    text: "CI/CD pipelines, Docker, Azure DevOps, project deployment, team mentoring, and Agile/Scrum delivery across multiple products.",
    link: "Contact me"
  },
  {
    category: "Collaboration",
    title: "Design Systems & Team Enablement",
    href: "/#works-section",
    image: "/assets/images/blog6.jpg",
    text: "Building reusable component libraries, documenting UI patterns, and helping teams ship consistent dashboards with shadcn/ui, TailwindCSS, and MUI.",
    link: "See projects"
  }
];
