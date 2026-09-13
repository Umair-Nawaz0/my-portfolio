export type ExperienceItem = {
  period: string;
  title: string;
  company: string;
  location: string;
  detail: string;
  responsibilities: string[];
  technologies: string[];
};

export const experience: ExperienceItem[] = [
  {
    period: "2024 — Present",
    title: "Open-Source Systems & AI Development",
    company: "GitHub Repositories & Implementations",
    location: "Derawar Fort, Post Office Shahi Wala, Tehsil Yazman, District Bahawalpur, Punjab, Pakistan",
    detail: "Designing, building, and publishing production-ready autonomous AI agents, workflow automation pipelines, and statistical machine learning systems.",
    responsibilities: [
      "Architected multi-tenant AI Appointment Assistant with FastAPI, React 18, PostgreSQL, and conversational state machine tracking.",
      "Engineered containerized n8n workflow scheduler orchestrating Zoom Server-to-Server OAuth, Google Calendar, and Gmail delivery.",
      "Trained and evaluated statistical ML models: SVM with SMOTE (90.82% fraud recall) and cost-sensitive Decision Trees (68.33% default recall).",
      "Built international banking management system in modern C++17 with full OOP architecture and persistent CSV ledger serialization.",
    ],
    technologies: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "Docker Compose", "C++17", "Scikit-Learn"],
  },
  {
    period: "2022 — Present",
    title: "BS Computer Science",
    company: "FAST NUCES (National University of Computer & Emerging Sciences)",
    location: "Pakistan",
    detail: "Rigorous academic study focusing on algorithmic complexity, data structures, operating systems, database architecture, and artificial intelligence.",
    responsibilities: [
      "Deep foundational coursework in Data Structures & Algorithms, Object-Oriented Programming (C++), and Database Architecture.",
      "Applied statistical modeling, probability theory, and discrete mathematics to machine learning algorithmic implementations.",
      "Designed and evaluated normalized relational database schemas with strict integrity constraints and triggers.",
    ],
    technologies: ["C++17", "Python", "Data Structures", "Algorithms", "PostgreSQL", "System Design"],
  },
];
