export type SkillItem = {
  name: string;
  link?: string;
};

export type SkillGroup = {
  title: string;
  skills: SkillItem[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "PyTorch", link: "https://pytorch.org" },
      { name: "Scikit-Learn" },
      { name: "SMOTE Oversampling" },
      { name: "LinearSVC & Decision Trees" },
      { name: "PCA Dimensionality Reduction" },
      { name: "K-Means++ & Hierarchical Clustering" },
      { name: "Pandas & NumPy" },
    ],
  },
  {
    title: "Generative AI & Agent Workflows",
    skills: [
      { name: "Autonomous AI Agents" },
      { name: "Prompt Engineering" },
      { name: "LLM Tool Calling & Function Execution" },
      { name: "Google Gemini API & OpenAI" },
      { name: "n8n Workflow Automation" },
      { name: "RAG Architecture" },
    ],
  },
  {
    title: "Backend & Systems",
    skills: [
      { name: "FastAPI (Async Python)" },
      { name: "Node.js & Express" },
      { name: "PHP" },
      { name: "PostgreSQL (asyncpg / SQLAlchemy)" },
      { name: "MySQL & SQLite" },
      { name: "Modern C++17 (OOP & Systems)" },
      { name: "Docker & Docker Compose" },
    ],
  },
  {
    title: "Frontend & Engineering Tools",
    skills: [
      { name: "Next.js 16 (App Router)" },
      { name: "React 19 & TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Git & GitHub Workflows" },
      { name: "Linux / Bash Scripting" },
      { name: "Postman API Testing" },
    ],
  },
];
