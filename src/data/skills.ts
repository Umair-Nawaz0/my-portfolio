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
      { name: "NLP (Natural Language Processing)" },
      { name: "Machine Learning Workflows" },
      { name: "Data Preprocessing" },
      { name: "Model Fine-Tuning" },
      { name: "LinearSVC & Decision Trees" },
      { name: "Pandas & NumPy" },
    ],
  },
  {
    title: "Generative AI & Agent Workflows",
    skills: [
      { name: "Generative AI" },
      { name: "LLM Integrations" },
      { name: "Autonomous AI Agents" },
      { name: "Agentic Workflows" },
      { name: "LangChain" },
      { name: "LangGraph" },
      { name: "Prompt Engineering" },
      { name: "LLM Tool Calling & Function Execution" },
      { name: "Google Gemini API & OpenAI" },
      { name: "n8n Workflow Automation" },
      { name: "RAG Architecture" },
    ],
  },
  {
    title: "Full-Stack & Backend Systems",
    skills: [
      { name: "Next.js 16 (App Router)" },
      { name: "React 19" },
      { name: "JavaScript (ES6+)" },
      { name: "HTML5 & CSS3" },
      { name: "TypeScript" },
      { name: "FastAPI (Async Python)" },
      { name: "Node.js & Express" },
      { name: "PHP" },
      { name: "RESTful APIs" },
      { name: "Modern C++17 (OOP & Systems)" },
    ],
  },
  {
    title: "Databases & DevOps Tools",
    skills: [
      { name: "PostgreSQL (asyncpg / SQLAlchemy)" },
      { name: "MySQL" },
      { name: "Relational Schema Architecture" },
      { name: "Docker" },
      { name: "Tailwind CSS" },
      { name: "Git & GitHub Workflows" },
      { name: "Linux / Bash Scripting" },
      { name: "Postman API Testing" },
    ],
  },
];
