export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Generative AI & AI Agents",
    skills: [
      "AI Agents",
      "Retrieval-Augmented Generation (RAG)",
      "Large Language Models (LLMs)",
      "LLMs Integration",
      "Prompt Engineering",
      "LangChain",
      "LangGraph",
      "n8n Workflow Automation",
      "Natural Language Processing (NLP)",
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "Machine Learning (Scikit-Learn)",
      "Data Preprocessing & Cleaning",
      "Data Extraction & Visualization",
      "Model Training & Evaluation",
      "Support Vector Machines (SVM)",
      "Decision Trees & Clustering (PCA)",
      "SMOTE & Feature Scaling",
      "Classification & Regression",
    ],
  },
  {
    title: "Programming & Software Development",
    skills: [
      "Python",
      "C++ (OOP & Data Persistence)",
      "JavaScript",
      "SQL",
      "Backend Development",
      "REST API Integration & Development",
      "MVC Architecture",
      "Basic Frontend Web (React)",
    ],
  },
  {
    title: "Tools, Databases & Frameworks",
    skills: [
      "FastAPI",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MySQL",
      "AWS RDS",
      "MongoDB",
      "Git & GitHub",
      "Docker",
    ],
  },
];
