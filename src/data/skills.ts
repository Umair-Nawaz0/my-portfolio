export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Generative AI & Agentic Systems",
    skills: [
      "Autonomous AI Agents",
      "RAG Architecture",
      "LLM Tool Calling & Function Execution",
      "LangChain & LangGraph",
      "n8n Workflow Automation",
      "Google Gemini & OpenAI APIs",
      "Prompt Engineering",
    ],
  },
  {
    title: "Backend & Systems Architecture",
    skills: [
      "FastAPI (Async Python)",
      "Node.js & Express",
      "PostgreSQL (asyncpg / SQLAlchemy)",
      "RESTful API Architecture",
      "Docker & Docker Compose",
      "Authentication (JWT / SMTP)",
      "C++17 (OOP & Systems)",
    ],
  },
  {
    title: "Machine Learning & Analytics",
    skills: [
      "Scikit-Learn",
      "SMOTE Imbalanced Oversampling",
      "Support Vector Machines (LinearSVC)",
      "PCA Dimensionality Reduction",
      "K-Means++ & Hierarchical Clustering",
      "Decision Trees & Cost-Sensitive Learning",
      "Interactive Plotly Visualizations",
    ],
  },
  {
    title: "Frontend & Engineering Tools",
    skills: [
      "Next.js 16 (App Router)",
      "React 19 & TypeScript",
      "Tailwind CSS & Vite",
      "Git & GitHub Workflows",
      "Postman API Testing",
      "Linux / Bash Scripting",
    ],
  },
];
