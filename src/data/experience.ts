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
    title: "AI Engineer & Systems Developer",
    company: "Independent AI Development",
    location: "Bahawalpur, Pakistan",
    detail: "Designing and engineering autonomous agent workflows, production RAG pipelines, and intelligent backend services.",
    responsibilities: [
      "Architected multi-agent reasoning workflows using FastAPI and modern LLM APIs with deterministic state management.",
      "Implemented RAG pipelines incorporating semantic chunking, vector embeddings (Qdrant), and cross-encoder reranking.",
      "Engineered high-throughput document extraction microservices using Pydantic v2 schema validation.",
      "Authored clean technical documentation, unit tests, and containerized deployment scripts with Docker.",
    ],
    technologies: ["Python", "FastAPI", "Docker", "Vector DBs", "LangGraph", "TypeScript"],
  },
  {
    period: "2023 — 2024",
    title: "Full-Stack Developer",
    company: "Freelance Client Projects",
    location: "Remote",
    detail: "Delivered production-ready web applications, responsive interfaces, and API integrations for clients.",
    responsibilities: [
      "Developed responsive, accessible frontend interfaces with Next.js, React, and Tailwind CSS.",
      "Integrated third-party RESTful APIs, webhook dispatchers, and automated notification services.",
      "Optimized client applications for performance, SEO, core web vitals, and mobile responsiveness.",
      "Maintained clean Git version control workflows and comprehensive deployment guides.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST APIs", "Git"],
  },
  {
    period: "2022 — Present",
    title: "BS Computer Science",
    company: "FAST NUCES (National University of Computer & Emerging Sciences)",
    location: "Pakistan",
    detail: "Undergraduate degree emphasizing software engineering fundamentals, algorithms, system design, and AI.",
    responsibilities: [
      "Coursework in Data Structures & Algorithms, Object-Oriented Programming (C++), Operating Systems, and DB Systems.",
      "Built course projects implementing custom search trees, graph algorithms, and relational schema normalization.",
      "Applied machine learning concepts and neural networks to practical pattern recognition and text classification.",
    ],
    technologies: ["C++", "Python", "Data Structures", "Algorithms", "SQL", "OOP"],
  },
];

