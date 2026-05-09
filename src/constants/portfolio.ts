import {
  Code2,
  Database,
  Server,
  Cloud,
  Zap,
  Mail,
  Workflow,
  Terminal,
  Github,
  Linkedin,
  MessageCircle,
  Globe,
  Layers,
  Shield,
} from "lucide-react";

export const PROFILE = {
  username: "shahmirifyy",
  name: "Shahmir Ali",
  title: "Senior Full Stack Developer",
  subtitle:
    "Building scalable web applications, modern user experiences, and powerful backend systems.",
  email: "shahmirali371@gmail.com",
  whatsapp: "+92 3145125507",
  github: "https://github.com/shahmirifyy",
  linkedin: "https://linkedin.com/in/shahmirifyy",
  resume: "/resume.pdf",
  location: "Remote · Worldwide",
};

export const TYPING_ROLES = [
  "Next.js Architect",
  "NestJS Engineer",
  "PostgreSQL & Prisma",
  "Real-time Systems",
  "Automation Builder",
];

export const STATS = [
  { label: "Years Experience", value: 5, suffix: "+" },
  { label: "Projects Completed", value: 40, suffix: "+" },
  { label: "Happy Clients", value: 25, suffix: "+" },
  { label: "Technologies Used", value: 30, suffix: "+" },
];

export type SkillCategory = "Frontend" | "Backend" | "Other";
export const SKILLS: { name: string; level: number; category: SkillCategory }[] = [
  { name: "React.js", level: 95, category: "Frontend" },
  { name: "Next.js", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 92, category: "Frontend" },
  { name: "Tailwind CSS", level: 95, category: "Frontend" },
  { name: "React Native", level: 80, category: "Frontend" },
  { name: "Redux", level: 85, category: "Frontend" },
  { name: "Ant Design", level: 85, category: "Frontend" },
  { name: "ShadCN UI", level: 90, category: "Frontend" },
  { name: "Node.js", level: 95, category: "Backend" },
  { name: "NestJS", level: 92, category: "Backend" },
  { name: "Express.js", level: 90, category: "Backend" },
  { name: "Prisma", level: 92, category: "Backend" },
  { name: "PostgreSQL", level: 90, category: "Backend" },
  { name: "MySQL", level: 82, category: "Backend" },
  { name: "MongoDB", level: 85, category: "Backend" },
  { name: "REST APIs", level: 95, category: "Backend" },
  { name: "Socket.io", level: 88, category: "Backend" },
  { name: "BullMQ", level: 85, category: "Backend" },
  { name: "Docker", level: 80, category: "Other" },
  { name: "GitHub", level: 92, category: "Other" },
  { name: "Linux", level: 82, category: "Other" },
  { name: "AWS Basics", level: 75, category: "Other" },
  { name: "Web Scraping", level: 85, category: "Other" },
  { name: "Automation", level: 90, category: "Other" },
  { name: "Email Systems", level: 88, category: "Other" },
  { name: "Swagger", level: 85, category: "Other" },
  { name: "JWT Auth", level: 90, category: "Other" },
];

export const EXPERIENCE = [
  {
    company: "Binary Marvels",
    role: "Senior Full Stack Developer",
    period: "2022 — Present",
    location: "Remote",
    points: [
      "Architected scalable frontend and backend applications serving thousands of users",
      "Designed and shipped a full CRM platform with automation workflows",
      "Built real-time systems using Socket.io for live updates and notifications",
      "Developed dynamic queue-based email systems with BullMQ",
      "Modeled complex domains with PostgreSQL and Prisma",
      "Engineered REST APIs in Node.js and NestJS with Swagger documentation",
      "Optimized database queries and shaved p95 latency on critical endpoints",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Inventory & Ordering System",
    description:
      "Centralized inventory and ordering platform for warehouse and retail operations with role-based access, stock movements, and analytics.",
    tech: ["Next.js", "NestJS", "PostgreSQL", "Prisma"],
    category: "Full Stack",
    github: "#",
    demo: "#",
    accent: "from-cyan-400 to-blue-500",
  },
  {
    title: "CRM System",
    description:
      "Advanced CRM with automation workflows, real-time notifications, integrations and a fully customizable pipeline.",
    tech: ["React.js", "Node.js", "Socket.io", "PostgreSQL"],
    category: "Full Stack",
    github: "#",
    demo: "#",
    accent: "from-fuchsia-400 to-purple-600",
  },
  {
    title: "Dynamic Email Automation Platform",
    description:
      "Queue-based email automation engine with scheduled follow-ups, templates and delivery tracking, powered by BullMQ.",
    tech: ["Node.js", "BullMQ", "PostgreSQL"],
    category: "Backend",
    github: "#",
    demo: "#",
    accent: "from-amber-400 to-rose-500",
  },
  {
    title: "Solar Management System",
    description:
      "Operational dashboard for solar installations with customer handling, project tracking and reporting.",
    tech: ["Next.js", "Prisma", "PostgreSQL"],
    category: "Full Stack",
    github: "#",
    demo: "#",
    accent: "from-emerald-400 to-teal-500",
  },
  {
    title: "Waitlist Management System",
    description:
      "Intelligent queue-based waitlist and scheduling platform with priority logic and notifications.",
    tech: ["Next.js", "NestJS"],
    category: "Full Stack",
    github: "#",
    demo: "#",
    accent: "from-indigo-400 to-cyan-500",
  },
];

export const SERVICES = [
  {
    title: "Full Stack Web Development",
    desc: "End-to-end product development with modern frameworks.",
    icon: Code2,
  },
  {
    title: "Backend API Development",
    desc: "Robust REST APIs with NestJS, Node.js & Swagger docs.",
    icon: Server,
  },
  {
    title: "CRM Development",
    desc: "Custom CRMs with pipelines, automations and integrations.",
    icon: Workflow,
  },
  {
    title: "Dashboard Development",
    desc: "Beautiful analytics dashboards with real-time data.",
    icon: Layers,
  },
  {
    title: "Automation Systems",
    desc: "Workflow automations, schedulers and background jobs.",
    icon: Zap,
  },
  { title: "Database Design", desc: "Scalable schemas in PostgreSQL with Prisma.", icon: Database },
  {
    title: "Real-Time Applications",
    desc: "Live experiences with Socket.io and event streams.",
    icon: Globe,
  },
  {
    title: "Performance Optimization",
    desc: "Profiling, caching and query tuning for speed.",
    icon: Cloud,
  },
];

export const TESTIMONIALS = [
  {
    name: "Ayesha Khan",
    role: "Product Manager, Binary Marvels",
    quote:
      "Shahmir consistently delivers production-grade work. His architecture decisions saved us months of refactoring later.",
  },
  {
    name: "Daniel Roberts",
    role: "Founder, NorthOps",
    quote:
      "He shipped our CRM in record time without sacrificing quality. Communication and ownership were exceptional.",
  },
  {
    name: "Hira Saleem",
    role: "CTO, FlowDesk",
    quote:
      "Rare combination of strong frontend craftsmanship and deep backend skill. Easy hire, easier to recommend.",
  },
];

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export const SOCIAL_ICONS = { Github, Linkedin, Mail, MessageCircle, Terminal, Shield };
