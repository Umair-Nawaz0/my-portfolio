export type ProjectCategory =
  | "Machine Learning"
  | "AI Agents & Systems"
  | "Full-Stack Web"
  | "Systems & C++";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  technologies: string[];
  metrics?: string[];
  features?: string[];
  githubUrl: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "appointment-assistant",
    title: "AI Appointment Assistant & Workflow Automation Engine",
    category: "AI Agents & Systems",
    summary:
      "Production multi-tenant appointment platform combining a React 18 chat portal with an asynchronous FastAPI backend and an autonomous n8n booking workflow powered by Google Gemini.",
    technologies: ["FastAPI", "React 18", "TypeScript", "PostgreSQL", "n8n", "Docker"],
    features: [
      "Engineered function-calling tools for real-time slot checking and conflict-free commits",
      "Dynamic RFC-5545 .ics calendar generation and dual-engine SQL fallback resilience",
    ],
    githubUrl: "https://github.com/Umair-Nawaz0/appointment-assistant",
  },
  {
    slug: "meeting-scheduler",
    title: "Autonomous AI Meeting Scheduling Agent",
    category: "AI Agents & Systems",
    summary:
      "Containerized meeting orchestration pipeline using n8n to ingest webhook payloads, negotiate time slots, and provision video conferences.",
    technologies: ["Python", "n8n", "Zoom API", "Google Calendar API", "Gmail API", "Docker"],
    features: [
      "Integrated Zoom Server-to-Server OAuth, Google Calendar, and Gmail APIs for room provisioning",
      "Sub-5-second automated turnaround with health-checked Docker microservices",
    ],
    githubUrl: "https://github.com/Umair-Nawaz0/meeting-scheduler",
  },
  {
    slug: "svm-credit-card-fraud-detection",
    title: "Financial Fraud Detection & Anomaly Classification",
    category: "Machine Learning",
    summary:
      "End-to-end anomaly detection pipeline on 284,000+ financial transactions with acute class skew (0.17% fraud prevalence) utilizing SMOTE and LinearSVC.",
    technologies: ["Python", "Scikit-Learn", "SMOTE (Imbalanced-Learn)", "LinearSVC", "Pandas", "NumPy"],
    features: [
      "Achieved a 90.82% fraud interception recall rate with 97.73% overall accuracy",
      "Standardized 30 high-dimensional feature vectors to prevent synthetic data leakage",
    ],
    githubUrl: "https://github.com/Umair-Nawaz0/svm-credit-card-fraud-detection",
  },
  {
    slug: "hierarchical-clustering-customer-segmentation",
    title: "Customer Segmentation via Hierarchical Clustering",
    category: "Machine Learning",
    summary:
      "Agglomerative hierarchical clustering with Ward's minimum-variance linkage and SciPy dendrograms, processing 541,000+ transaction lines into RFM customer behavioral profiles.",
    technologies: ["Python", "Scikit-Learn", "SciPy", "Agglomerative Clustering", "PCA", "Pandas"],
    features: [
      "Standardized features and applied 2-component PCA preserving 97.39% of variance",
      "Ward-linkage dendrogram mathematically validating 3 distinct behavioral customer cohorts",
    ],
    githubUrl: "https://github.com/Umair-Nawaz0/hierarchical-clustering-customer-segmentation",
  },
  {
    slug: "hostel-project",
    title: "Full-Stack Hostel Management System",
    category: "Full-Stack Web",
    summary:
      "Full-stack student housing operations platform managing rooms, resident allocations, staff administration, and fee tracking via modular MVC APIs.",
    technologies: ["Node.js", "Express.js", "MySQL", "AWS RDS", "Modular MVC", "RESTful APIs"],
    features: [
      "Architected a normalized 25-table relational schema on AWS RDS with strict referential integrity",
      "Modular RESTful API endpoints with input validation and role-based access control (RBAC)",
    ],
    githubUrl: "https://github.com/Umair-Nawaz0/hostel_project",
  },
  {
    slug: "bank-management-system",
    title: "International Banking Management System",
    category: "Systems & C++",
    summary:
      "Terminal-based international banking engine engineered in modern C++17 applying core OOP principles: class inheritance, polymorphism, and state encapsulation.",
    technologies: ["Modern C++17", "OOP Architecture", "File I/O", "Data Persistence", "CMake"],
    features: [
      "Credential authentication, input validation routines, and inter-account balance transfers",
      "Flat-file transaction audit persistence via CSV ledger serialization with zero memory leaks",
    ],
    githubUrl: "https://github.com/Umair-Nawaz0/bank-management-system",
  },
  {
    slug: "decision-tree-loan-default-risk-prediction",
    title: "Cost-Sensitive Loan Default Risk Classification",
    category: "Machine Learning",
    summary:
      "Financial credit risk classifier addressing asymmetric default loss on the German Credit Dataset using cost-sensitive class balancing and 5-fold GridSearchCV.",
    technologies: ["Python", "Scikit-Learn", "Decision Trees", "GridSearchCV", "Pandas"],
    features: [
      "Tuned hyperparameters specifically for defaulter recall, boosting detection from 11.67% to 68.33%",
      "Cost-sensitive balancing (class_weight='balanced') protecting financial capital",
    ],
    githubUrl: "https://github.com/Umair-Nawaz0/decision-tree-loan-default-risk-prediction",
  },
  {
    slug: "fast-research-portal",
    title: "FAST Academic Research & Project Exchange",
    category: "Full-Stack Web",
    summary:
      "Full-stack academic research opportunity discovery platform connecting FAST-NUCES students with active faculty research labs and thesis grants using Next.js and FastAPI.",
    technologies: ["Next.js", "TypeScript", "FastAPI", "Python", "REST APIs", "TailwindCSS"],
    features: [
      "Role-based applicant management, candidate filtering, and proposal submission workflows",
      "Comprehensive Postman test collection with OpenAPI interactive documentation",
    ],
    githubUrl: "https://github.com/Umair-Nawaz0/fast-research-portal",
  },
];
