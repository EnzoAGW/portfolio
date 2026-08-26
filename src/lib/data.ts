export const personal = {
  name: "Enzo Alexandre",
  role: "Fullstack Developer",
  location: "Crato, CE — Remote",
  email: "enzogonzaga@outlook.com",
  github: "https://github.com/EnzoAGW",
  linkedin: "https://linkedin.com/in/enzo-alexandre",
};

export const about =
  "Fullstack developer with strong frontend expertise — Angular, React, and Next.js — " +
  "and solid backend experience with .NET / ASP.NET Core. Background in fintech and " +
  "telemedicine products, with a track record of delivering under pressure: reviving " +
  "stalled projects, managing multiple products in parallel, and integrating payment " +
  "gateways and government data systems.";

export const stack = [
  {
    group: "Frontend",
    items: ["TypeScript", "Angular", "React", "Next.js", "RxJS", "Tailwind CSS"],
  },
  {
    group: "Backend",
    items: [".NET / C#", "ASP.NET Core", "Node.js", "Express", "Python", "REST APIs"],
  },
  {
    group: "Databases",
    items: ["PostgreSQL", "MongoDB", "SQL Server"],
  },
  {
    group: "Infra & DevOps",
    items: ["Docker", "AWS", "GitHub Actions"],
  },
  {
    group: "Testing",
    items: ["Cypress", "Jasmine", "xUnit"],
  },
  {
    group: "Mobile",
    items: ["Flutter", "React Native"],
  },
] as const;

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  bullets: { project?: string; text: string }[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "B.M.O.",
    role: "Fullstack Developer",
    period: "Feb 2024 — Present",
    bullets: [
      {
        project: "Neutra+",
        text: "Integrated the CORA payment gateway, enabling a full billing flow — from charge creation to confirmation webhook — eliminating the finance team's reliance on manual processes.",
      },
      {
        project: "Neutra+",
        text: "Architected a hierarchical permissions system with N access levels in Angular + .NET, reducing new profile onboarding from manual configuration to self-service.",
      },
      {
        project: "Telemedicine platform",
        text: "Optimized geospatial data rendering with Mapbox + custom GeoJSON, reducing map load time by 70% and enabling real-time geolocated physician search.",
      },
      {
        project: "Telemedicine platform",
        text: "Implemented OnPush change detection on physician listing components, eliminating unnecessary re-renders and ensuring smooth performance with high-volume data lists.",
      },
      {
        project: "Marcha.io",
        text: "Built the tenant-branding layer for a multi-tenant whitelabel financial management platform — custom domains, animations, and per-company colors and assets resolved at runtime, so each client's instance looks like their own product.",
      },
    ],
  },
  {
    company: "Crosoften",
    role: "Frontend Developer · Part-time Contract",
    period: "Apr 2025 — Feb 2026",
    bullets: [
      {
        project: "Software Factory",
        text: "Took over and delivered a project stalled for 12 months, unblocking a critical delivery for the end client.",
      },
      {
        project: "Software Factory",
        text: "Contributed to 5 simultaneous projects over 4 months, maintaining delivery pace and quality across all of them.",
      },
      {
        project: "Software Factory",
        text: "Fully rebuilt the frontend of a parts management system, adding real-time insights via WebSocket.",
      },
    ],
  },
  {
    company: "3it Consultoria",
    role: "Frontend Developer",
    period: "Mar 2022 — Aug 2023",
    bullets: [
      {
        project: "3PREV",
        text: "Built a liveness verification feature with direct integration to government databases, meeting regulatory compliance requirements.",
      },
      {
        project: "Telecom",
        text: "Rebuilt the core product in Flutter with integrated real-time chat, expanding the product to mobile.",
      },
      {
        project: "Telecom",
        text: "Led the technical integration with Vtal, Brazil's largest fiber optic provider.",
      },
    ],
  },
];

export const education = {
  degree: "B.S. in Information Systems",
  school: "Universidade Paraíso do Ceará",
  period: "2021 — In Progress",
};

export interface ProjectEntry {
  name: string;
  tagline: string;
  problem: string;
  role: string;
  stack: string[];
  result: string;
  links?: { label: string; href: string }[];
}

export const projects: ProjectEntry[] = [
  {
    name: "Bookly",
    tagline: "Multi-tenant booking SaaS with a natural-language AI assistant",
    problem:
      "Service businesses (salons, clinics) need scheduling software where staff can book customers as fast as they can describe the request — without hunting through a calendar UI.",
    role:
      "Solo — designed and built the full system: Clean Architecture/CQRS backend, Angular frontend, and the local-LLM booking assistant.",
    stack: [
      ".NET 10",
      "ASP.NET Core",
      "MediatR (CQRS)",
      "PostgreSQL",
      "Redis",
      "Hangfire",
      "SignalR",
      "Angular 19",
      "Ollama (local LLM)",
    ],
    result:
      "A receptionist types \"haircut tomorrow morning with Carlos\" and gets real open slots back — parsed by a locally-run LLM, with Redis-backed locking preventing double-booked slots and an outbox pattern keeping webhook delivery reliable.",
    links: [
      {
        label: "Live demo",
        href: "https://bookly-fo8j.vercel.app",
      },
    ],
  },
  {
    name: "MedAgenda",
    tagline: "Full-stack medical scheduling platform",
    problem:
      "Clinics needed a scheduling system with real role separation between admins, physicians, and patients — not a single shared calendar view bolted onto generic auth.",
    role: "Solo — built the .NET backend and the Next.js frontend end to end.",
    stack: [".NET / ASP.NET Core", "Next.js", "Chakra UI", "PostgreSQL"],
    result:
      "Shipped a working three-role scheduling flow (admin / physician / patient) with self-service password recovery, used as the reference build for later role-based-access work.",
    links: [
      {
        label: "Live demo",
        href: "https://medagenda-drab.vercel.app",
      },
    ],
  },
  {
    name: "Ledgr",
    tagline: "Multi-tenant B2B fintech dashboard",
    problem:
      "Small finance teams needed a shared, organization-scoped view of accounts and transactions without building their own internal tooling from scratch.",
    role: "Solo — built from scratch as a portfolio-grade reference implementation.",
    stack: [".NET / ASP.NET Core", "Angular", "PostgreSQL", "Docker"],
    result:
      "A clean multi-tenant dashboard demonstrating org-scoped data access, CI via GitHub Actions, and containerized deployment.",
  },
];
