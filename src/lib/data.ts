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
    links: [
      {
        label: "Live demo",
        href: "https://ledgr-mu-two.vercel.app",
      },
    ],
  },
  {
    name: "Sonoscape",
    tagline: "Real-time audio-reactive 3D visualizer",
    problem:
      "Most audio visualizers are decorative — color gradients pulsing to volume. Building one that's real engineering work (not just a pretty shader) means driving actual 3D geometry from frequency-band analysis in real time.",
    role: "Solo — built the audio engine, 3D scene, and shader pipeline from scratch, no framework.",
    stack: ["Three.js", "Web Audio API", "TypeScript", "Vite", "GLSL"],
    result:
      "96 instanced 3D bars driven independently by live bass/mid/treble analysis (Web Audio AnalyserNode), rendered in a single draw call with a real EffectComposer bloom pipeline — reacts to any local audio file or live microphone input.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/EnzoAGW/sonoscape",
      },
    ],
  },
  {
    name: "Relay",
    tagline: "Polyglot webhook delivery platform — .NET domain, Node.js delivery",
    problem:
      "Every SaaS eventually needs reliable webhook delivery — signed payloads, automatic retries, dead-lettering after repeated failures — and doing it well spans concerns better suited to different runtimes: a strongly-typed domain model versus highly concurrent I/O.",
    role:
      "Solo — designed the transactional outbox bridging both runtimes, built the .NET domain API, the Node.js delivery worker and rate-limiting gateway, and a parallel serverless deployment variant.",
    stack: [
      ".NET 10",
      "ASP.NET Core",
      "MediatR (CQRS)",
      "PostgreSQL",
      "Node.js",
      "TypeScript",
      "Redis Streams",
      "Terraform",
      "AWS Lambda",
    ],
    result:
      "An event written once flows through a transactional outbox into a Redis Streams consumer group, gets HMAC-signed and delivered with exponential backoff, and dead-letters after repeated failures — verified end to end against real infrastructure, and re-proven as a fully serverless variant (API Gateway, Lambda, DynamoDB, SQS) provisioned by Terraform.",
  },
  {
    name: "Prism",
    tagline: "Angular micro-frontend console composing independently deployed dashboards",
    problem:
      "A CRUD dashboard with roles demonstrates the same pattern twice. Showing depth beyond that means proving something senior Angular roles actually ask about — real Module Federation, and modern reactive state without reaching for NgRx by default.",
    role:
      "Solo — designed the shell/remote split, built both federated remotes, and the signals-based state layer.",
    stack: ["Angular", "Native Federation", "Signals", "TypeScript", "Socket.io-client"],
    result:
      "A shell that composes two independently built, independently deployable Angular remotes at runtime — a live status view and a webhook-events view — each holding state in plain signals instead of NgRx, verified by an end-to-end test that builds and serves all three apps separately before confirming they compose correctly.",
  },
  {
    name: "Chorus",
    tagline: "Real-time chat proving WebSockets scale horizontally, not just claiming it",
    problem:
      "Socket.io's default broadcast only reaches clients connected to the same process. \"This scales horizontally\" is an easy claim to make and a rarely verified one.",
    role:
      "Solo — built the chat, wired in the Redis adapter, and wrote the cross-instance verification most teams never actually run.",
    stack: ["Node.js", "Express", "Socket.io", "Redis adapter", "Redis"],
    result:
      "Two independent server processes, zero shared memory, bridged only by a Redis adapter — proven with an automated test that drives two real browser sessions against two real instances and fails the build if a message doesn't cross between them.",
  },
  {
    name: "Conveyor",
    tagline: "Async file-processing pipeline — image thumbnails and CSV validation off the request thread",
    problem:
      "Processing a large upload inline ties up a request thread on work that was never request/response-shaped — and any endpoint accepting user-controlled URLs or file types needs real trust-boundary validation, not just a try/catch.",
    role:
      "Solo — built the queue-backed pipeline and both processors, then hardened it (SSRF guard, content verification, unguessable job IDs) after a dedicated security review.",
    stack: ["Node.js", "Express", "BullMQ", "Redis", "sharp", "csv-parse", "Server-Sent Events"],
    result:
      "Uploads return a job ID in milliseconds while a separate worker resizes images or validates CSVs row by row, reporting live progress over SSE or a signed webhook — hardened against SSRF, IDOR, and content-type spoofing after review.",
  },
  {
    name: "Pulse",
    tagline: "Live status dashboard monitoring every other project in this portfolio",
    problem:
      "A portfolio of live demos is only as trustworthy as its uptime, and a recruiter clicking through several projects has no way to know if one is quietly down.",
    role:
      "Solo — built the monitoring service, the real-time dashboard, and the CI-status fallback for projects with no public deployment.",
    stack: ["Node.js", "Express", "Socket.io", "SQLite", "node-cron"],
    result:
      "A single live dashboard pinging every deployed project on its own schedule, pushing updates to connected browsers with zero client-side polling — and, for backend-only projects with no public URL, falling back to their CI build status instead of pretending to ping something that isn't there.",
  },
];
