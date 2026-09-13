export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "AI Systems & LLMs",
    skills: [
      "AI Agents",
      "RAG Architecture",
      "Vector Databases (Qdrant, ChromaDB)",
      "Embeddings & Semantic Search",
      "Prompt Engineering",
      "Tool Calling & Function Calling",
      "Structured Output (Pydantic / Instructor)",
      "LangChain & LangGraph",
    ],
  },
  {
    title: "Backend & Systems",
    skills: [
      "Python",
      "FastAPI",
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "MySQL",
      "PostgreSQL",
      "AWS RDS",
      "C++17 (Data Structures & OOP)",
      "Asyncio & Microservices",
    ],
  },
  {
    title: "Frontend & Web",
    skills: [
      "TypeScript",
      "JavaScript (ES6+)",
      "React",
      "Next.js (App Router)",
      "HTML5 & CSS3",
      "Tailwind CSS",
      "Responsive UI/UX Design",
    ],
  },
  {
    title: "DevOps & Engineering",
    skills: [
      "Docker",
      "Git & GitHub",
      "Linux / Bash",
      "System Architecture",
      "Testing & Debugging",
      "CI/CD Basics",
    ],
  },
];

