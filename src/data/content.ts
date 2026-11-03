// All site copy lives here. Edit this file to update the portfolio.

export const profile = {
  name: 'Ushindi Gedeon',
  shortName: 'Gedeon',
  title: 'Full-Stack Engineer · Identity Platform Specialist',
  tagline: 'Auth0 · SSO · OAuth 2.0 / OIDC · SAML · React / Node',
  location: 'Remote · Worldwide',
  languages: 'English · Français',
  email: 'ushindigedeon1@gmail.com',
  whatsapp: 'https://wa.me/243974942259',
  upwork: 'https://www.upwork.com/freelancers/~017b94530ff9f7258f',
  // The Upwork "Book a consultation" flow lives on the profile page.
  booking: 'https://www.upwork.com/freelancers/~017b94530ff9f7258f',
  cv: '/cv.pdf',
  photo: '/me.jpg',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ushindi-gedeon/' },
    { label: 'GitHub', href: 'https://github.com/GedeonTS' },
    { label: 'Upwork', href: 'https://www.upwork.com/freelancers/~017b94530ff9f7258f' },
    { label: 'Medium', href: 'https://medium.com/@Ushindi_Gedeon' },
    { label: 'Wellfound', href: 'https://wellfound.com/u/ushindi-gedeon' },
    { label: 'X / Twitter', href: 'https://twitter.com/Gedeon191' },
  ],
}

export const stack = [
  'Auth0', 'Okta', 'Microsoft Entra ID', 'SAML 2.0', 'OAuth 2.0', 'OpenID Connect',
  'React', 'Next.js', 'Node.js', 'TypeScript', 'Laravel', 'PostgreSQL', 'AWS', 'Docker',
  'Vue / Nuxt', 'React Native', 'OpenAI API',
]

export const stats = [
  { value: 6, suffix: '+', label: 'Years shipping production software' },
  { value: 50, suffix: '+', label: 'Production issues resolved at Torre' },
  { value: 4, suffix: '', label: 'Identity providers federated: Google, Entra ID, Okta, SAML' },
  { value: 3, suffix: '', label: 'SaaS products built & operated' },
]

export const services = [
  {
    title: 'Auth0 & Identity',
    body: 'Auth0 setup, customization and migrations. Actions, Rules and Hooks for token enrichment, webhooks and event tracking. Google, Microsoft and social login.',
    items: ['Auth0 Actions / Hooks', 'Social & passwordless login', 'User migrations'],
  },
  {
    title: 'Enterprise SSO',
    body: 'The SSO your enterprise customers ask for before they sign. Okta, Microsoft Entra ID and SAML IdPs, OAuth 2.0 / OIDC flows across multiple web apps.',
    items: ['Okta · Entra ID · SAML', 'OIDC across apps', 'IdP federation'],
  },
  {
    title: 'Multi-tenant security',
    body: 'Roles, permissions and tenant isolation that do not leak. JWT validation, refresh-token rotation, session hardening and authentication audits.',
    items: ['RBAC & tenant isolation', 'JWT & refresh rotation', 'Auth audits'],
  },
  {
    title: 'SaaS engineering & rescue',
    body: 'Full-stack SaaS in React, Next.js, Node and Laravel. I also take AI-generated or vibe-coded apps and make them secure and production-ready.',
    items: ['React · Next · Node · Laravel', 'Production bug fixing', 'Vibe-code hardening'],
  },
]

export type Project = {
  slug: string
  title: string
  kicker: string
  year: string
  role: string
  stack: string[]
  live?: string
  accent: string
  // Images are tried in order; missing files fall back to the next one.
  cover: string[]
  gallery: string[][]
  summary: string
  problem: string
  solution: string[]
  outcome: string
  featured: boolean
}

export const projects: Project[] = [
  {
    slug: 'solarion-ai',
    title: 'Solarion AI',
    kicker: 'Enterprise SSO for a multi-tenant AI SaaS',
    year: '2024 — 2025',
    role: 'Sr. Software Engineer & SSO Expert',
    stack: ['React', 'Node.js', 'Auth0', 'Okta', 'Azure AD', 'SAML', 'OIDC', 'Microservices'],
    live: 'https://solarion.ai',
    accent: '#FF8A1F',
    cover: ['/projects/solarion-cover.jpg', '/projects/solarion-1.jpg'],
    gallery: [['/projects/solarion-1.jpg']],
    summary:
      'Solarion AI builds Aura, an AI document-management platform for enterprises. I architected its multi-tenant platform and led the authentication and authorization system.',
    problem:
      'Enterprise customers needed to sign in with their own identity provider, each tenant needed strict isolation, and the AI document features had to respect fine-grained permissions.',
    solution: [
      'Architected and scaled a multi-tenant SaaS platform on React and Node.js.',
      'Designed enterprise authentication on SSO, OAuth 2.0 and OpenID Connect.',
      'Federated Google, Microsoft Azure AD, Okta and SAML-based identity providers.',
      'Built Auth0 Actions, Rules and Hooks for token enrichment, fine-grained access control and real-time event tracking.',
      'Hardened the pipeline with strict JWT validation, refresh-token rotation and session best practices.',
      'Shipped an AI conversational interface for documents (LUMA AI Agent).',
      'Introduced microservices, an API gateway and caching to improve resilience and observability.',
    ],
    outcome:
      'Enterprise tenants sign in through their own IdP with seamless cross-platform authentication, on an architecture built for scale.',
    featured: true,
  },
  {
    slug: 'geekforge-cloud',
    title: 'GeekForge Cloud',
    kicker: 'AI-powered team workspace',
    year: '2025 — 2026',
    role: 'Product engineer · designed & built end to end',
    stack: ['SaaS', 'OAuth (email + Google)', 'OpenAI', 'Anthropic', 'DeepSeek', 'Mistral'],
    live: 'https://geekforge.cloud',
    accent: '#3B5BFF',
    cover: ['/projects/geekforge-poster.jpg', '/projects/geekforge-1.jpg'],
    gallery: [['/projects/geekforge-1.jpg'], ['/projects/geekforge-2.jpg'], ['/projects/geekforge-poster.jpg']],
    summary:
      'One workspace instead of five: documents, tasks, timesheets and AI summaries for teams, freelancers and agencies.',
    problem:
      'Teams stitch together a chat tool, a notes app, a spreadsheet, a time tracker and a standalone AI chatbot. Their work and context end up scattered.',
    solution: [
      'Designed and built the full product: frontend, backend and infrastructure.',
      'Secure sign-in with email and Google, with encrypted data and isolated workspaces.',
      'Document upload and AI processing: summaries, Q&A and chat with your documents.',
      'Works with several AI providers: OpenAI, Anthropic, DeepSeek and Mistral.',
      'Projects, tasks, meetings and built-in timesheets with subscriptions.',
    ],
    outcome: 'A live SaaS product that replaces five tools with one secure workspace.',
    featured: true,
  },
  {
    slug: 'rafiki-stock',
    title: 'Rafiki Stock',
    kicker: 'POS & inventory for shops',
    year: '2026',
    role: 'Lead Software Engineer & Solutions Architect',
    stack: ['Retail SaaS', 'POS', 'Inventory', 'Multi-shop isolation', 'Backups'],
    live: 'https://rafikistock.com',
    accent: '#D9622B',
    cover: ['/projects/rafiki-hand.jpg', '/projects/rafiki-cover.jpg', '/projects/rafiki-1.jpg'],
    gallery: [['/projects/rafiki-cover.jpg'], ['/projects/rafiki-opening.jpg'], ['/projects/rafiki-1.jpg']],
    summary:
      'A French-language point-of-sale and inventory app: cashiers ring up sales in seconds and every sale updates stock automatically.',
    problem:
      'Small retailers juggle paper receipts and guesswork. They need fast checkout, a clear view of stock and confidence that their numbers stay private.',
    solution: [
      'Designed and built the app end to end, from architecture to UI.',
      'Secure shop sign-in, with each shop’s data kept private and backed up.',
      'Sales, cash collected, stock and net profit at a glance.',
      'An animated opening sequence that turns a brand photo into the login screen in about 2.6 seconds.',
    ],
    outcome: '“Vendez plus vite. Gérez sans stress.” Live at rafikistock.com.',
    featured: true,
  },
  {
    slug: 'mlezicare',
    title: 'MleziCare',
    kicker: 'Caregiver & teleconsultation platform',
    year: '2025 — 2026',
    role: 'Designed & built end to end',
    stack: ['HealthTech', 'Verified profiles', 'Teleconsultation', 'Sensitive-data privacy'],
    live: 'https://mlezicare.org',
    accent: '#2F6BFF',
    cover: ['/projects/mlezi-1.jpg'],
    gallery: [['/projects/mlezi-1.jpg'], ['/projects/mlezi-2.jpg']],
    summary:
      'A French-language platform connecting clinics, hospitals and families with certified caregivers and 24/7 teleconsultations.',
    problem:
      'Families and facilities need trusted, verified caregivers quickly, and health data must be handled with care.',
    solution: [
      'Facility and family sign-up with role-specific flows.',
      'Verified caregiver profiles and follow-up.',
      'Service requests and a teleconsultation flow.',
      'Privacy-first handling of sensitive health data.',
    ],
    outcome: 'A 24/7 care platform trusted by 100+ families (4.9/5 shown on the site).',
    featured: true,
  },
  {
    slug: 'torre',
    title: 'Torre',
    kicker: 'The global job network',
    year: '2023',
    role: 'Software Engineer',
    stack: ['Vue', 'Nuxt', 'Scala', 'Microservices', 'Docker'],
    live: 'https://torre.ai',
    accent: '#B8D334',
    cover: ['/projects/torre-1.jpg'],
    gallery: [['/projects/torre-1.jpg'], ['/projects/torre-2.jpg']],
    summary: 'An AI talent-sourcing platform used by companies and professionals worldwide.',
    problem: 'A fast-moving, high-traffic platform needed stability, performance and fewer regressions.',
    solution: [
      'Resolved 50+ production bugs.',
      'Optimized backend performance with caching and load balancing across distributed services.',
      'Contributed to the microservices architecture and Docker-based deployments.',
      'Added unit and integration tests to cut production regressions.',
    ],
    outcome: 'A more stable, more scalable platform under high traffic.',
    featured: true,
  },
  {
    slug: 'yacht-house',
    title: 'Yacht House',
    kicker: 'Booking yachts & coastal houses',
    year: '2022',
    role: 'Full-stack developer',
    stack: ['React', 'Ruby on Rails'],
    live: 'https://yatch-house.netlify.app/',
    accent: '#97C83C',
    cover: ['/projects/yacht-1.jpg'],
    gallery: [['/projects/yacht-1.jpg']],
    summary: 'A booking platform for shared yachts and coastal houses.',
    problem: 'Users needed a simple way to browse and reserve premium shared stays.',
    solution: ['React front end on a Ruby on Rails API with authentication and reservations.'],
    outcome: 'A complete full-stack booking flow.',
    featured: false,
  },
]

export const experience = [
  {
    company: 'EvoluData',
    role: 'Software Engineer',
    period: 'Feb 2024 — Present',
    place: 'Montreal · Remote',
    points: [
      'Shipped features and fixes across Tiki Wiki CMS releases 26–30 and Cypht.',
      'Full-stack work, structured QA and regression fixes, Virtualmin deployments.',
      'Open-source collaboration on dev.tiki.org.',
    ],
  },
  {
    company: 'Solarion AI',
    role: 'Sr. Software Engineer & SSO Expert',
    period: 'Jun 2024 — Nov 2025',
    place: 'New York · Remote',
    points: [
      'Architected a multi-tenant SaaS on React and Node.js.',
      'Led enterprise SSO: OAuth 2.0, OIDC, Google, Azure AD, Okta, SAML.',
      'Auth0 Actions, JWT validation, refresh rotation, AI document chat.',
    ],
  },
  {
    company: 'Torre',
    role: 'Software Engineer',
    period: 'Apr 2023 — Dec 2023',
    place: 'San Francisco · Remote',
    points: ['50+ production bugs resolved.', 'Caching, load balancing, microservices, Docker, automated tests.'],
  },
  {
    company: 'Microverse',
    role: 'Mentor & Code Quality Reviewer',
    period: 'Nov 2022 — Apr 2023',
    place: 'San Francisco · Remote',
    points: ['In-depth code reviews and 1:1 debugging sessions for engineering students.'],
  },
  {
    company: 'Co.Lab',
    role: 'Software Developer',
    period: 'Jan 2023 — Feb 2023',
    place: 'Seattle · Remote',
    points: ['Built a web app with Node.js, React and Firebase in a cross-functional team.'],
  },
  {
    company: 'Uamuzi',
    role: 'Mobile Software Engineer',
    period: 'Sep 2020 — Apr 2023',
    place: 'Nairobi · Remote',
    points: ['React Native interfaces, USSD gateway and messaging integrations.'],
  },
]

export const education = [
  'University of Helsinki — Full Stack Open (2023)',
  'Microverse — Software Engineering certificate (2022)',
  'ULK Kigali — Electrical & Electronics Engineering (2017–2021)',
]

export const articles = [
  { title: 'How to Reach Your Local Server from Anywhere', href: 'https://medium.com/@Ushindi_Gedeon' },
  { title: 'What do you need to know about Rails Controllers?', href: 'https://medium.com/@Ushindi_Gedeon' },
  { title: 'Being a software developer', href: 'https://medium.com/@Ushindi_Gedeon' },
]

export const process = [
  { title: 'Audit', body: 'A 30-minute call and a look at your stack, IdP and current login flows. You get a clear diagnosis and a fixed plan.' },
  { title: 'Design', body: 'Tenant model, roles, token strategy and IdP federation, documented before any code is written.' },
  { title: 'Build', body: 'Working code in small, reviewable steps, with practical tests at every stage. You see progress daily.' },
  { title: 'Hand-off', body: 'Documentation your team can maintain, a walkthrough, and support after launch.' },
]

export const pricing = [
  {
    name: 'Auth review',
    price: '$50',
    unit: '/ 30 min',
    body: 'A focused Zoom session on your authentication. Leave with a diagnosis and next steps.',
    features: ['Stack & IdP review', 'Risk hot-spots', 'Written next steps'],
    cta: 'Book a review',
    highlight: false,
  },
  {
    name: 'Implementation',
    price: 'Fixed',
    unit: 'scope & price',
    body: 'Auth0, SSO or multi-tenant RBAC delivered as a project, with a clear scope and timeline.',
    features: ['Auth0 / Okta / Entra ID / SAML', 'Tests & documentation', 'Post-launch support'],
    cta: 'Get a quote',
    highlight: true,
  },
  {
    name: 'Hourly',
    price: '$30',
    unit: '/ hour',
    body: 'Production bug fixing, maintenance or an extra pair of hands on your team.',
    features: ['Flexible hours', 'Daily updates', 'Via Upwork or direct'],
    cta: 'Hire on Upwork',
    highlight: false,
  },
]

export const testimonials = [
  {
    quote:
      'Gedeon is an excellent developer and very easy to work with. He understands the requirement clearly and implements an optimal solution. He completed all the tasks as assigned and did an amazing job!',
    author: 'Upwork client',
    project: 'ReactJS App',
    rating: 5,
    date: 'Aug 2024',
  },
]

export const faq = [
  {
    q: 'Do you only work with Auth0?',
    a: 'No. Auth0 is where I go deepest, but I also work with Okta, Microsoft Entra ID, any SAML 2.0 IdP, and custom OAuth 2.0 / OIDC implementations in Node.js and Laravel.',
  },
  {
    q: 'Can you fix an app that was built with AI tools?',
    a: 'Yes. I audit AI-generated or “vibe-coded” SaaS apps for broken auth, leaky permissions and unsafe token handling, then make them production-ready.',
  },
  {
    q: 'How do we work together?',
    a: 'Through Upwork or directly. I respond within hours, share daily progress and work in English or French.',
  },
  {
    q: 'What time zone are you in?',
    a: 'UTC+2. I overlap with European mornings and US East Coast mornings, and I adapt to your stand-ups.',
  },
  {
    q: 'What do I get at the end?',
    a: 'Working code, practical tests and documentation your team can maintain, plus a hand-off walkthrough.',
  },
  {
    q: 'Do you take full-stack work outside identity?',
    a: 'Yes. I build complete SaaS products in React, Next.js, Node.js and Laravel, as with GeekForge Cloud and Rafiki Stock.',
  },
]
