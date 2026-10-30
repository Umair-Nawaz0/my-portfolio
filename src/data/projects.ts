export type ProjectCategory = "AI Agents & Automation" | "Full-Stack Web" | "Systems & C++" | "Machine Learning";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  categories?: string[];
  summary: string;
  description: string;
  technologies: string[];
  outcome: string;
  accent: string;
  architecture: string;
  features: string[];
  metrics: string[];
  githubUrl: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "appointment-assistant",
    title: "AI Appointment Assistant & Receptionist",
    category: "AI Agents & Automation",
    categories: ["AI Agents & Automation", "Full-Stack Web"],
    summary: "Production-oriented multi-tenant AI conversational booking platform with an asynchronous FastAPI backend, PostgreSQL, and React dashboard.",
    description: "Architected a multi-tenant conversational appointment booking platform. Ingests omnichannel customer inquiries, orchestrates deterministic state transitions via an AI state machine, validates operational business hours with holiday overrides, and schedules appointments while guaranteeing strict tenant isolation with composite foreign keys.",
    technologies: ["FastAPI", "React 18", "TypeScript", "PostgreSQL", "asyncpg", "Docker Compose", "TailwindCSS", "Pytest"],
    outcome: "Automates appointment scheduling 24/7 with zero cross-tenant data leakage and verified email dispatch.",
    accent: "from-violet-500/30 via-fuchsia-500/20 to-transparent",
    architecture: "Asynchronous FastAPI REST API coupled with asyncpg connection pooling. Deterministic conversational state machine, JWT bearer authentication with real SMTP email verification, and a modern React 18 TypeScript dashboard.",
    features: [
      "Multi-tenant data isolation with composite primary and foreign key constraints",
      "Deterministic conversational booking state machine with dynamic slot conflict detection",
      "Secure JWT authentication with SMTP email verification codes",
      "Containerized deployment via Docker Compose and automated Pytest integration test suite",
    ],
    metrics: [
      "Zero cross-tenant data leakage guaranteed at database schema level",
      "Sub-50ms API response latency on async PostgreSQL queries",
      "100% automated booking workflow from inquiry to confirmation",
    ],
    githubUrl: "https://github.com/Umair-Nawaz0/appointment-assistant",
  },
  {
    slug: "fast-research-portal",
    title: "FAST Academic Research & Project Exchange",
    category: "Full-Stack Web",
    categories: ["Full-Stack Web", "AI Agents & Automation"],
    summary: "Full-stack academic research matching and opportunity discovery portal built with Next.js App Router and FastAPI backend.",
    description: "Designed and built an end-to-end academic research exchange platform connecting university students with active faculty research projects, thesis opportunities, and lab grants. Features role-based application workflows, automated candidate filtering, and full REST API integration.",
    technologies: ["Next.js", "TypeScript", "FastAPI", "Python", "SQLite", "SQLAlchemy", "TailwindCSS", "Postman"],
    outcome: "Streamlines university research discovery, replacing fragmented email chains with a centralized matching pipeline.",
    accent: "from-blue-500/30 via-cyan-500/20 to-transparent",
    architecture: "Next.js frontend using the modern App Router and Tailwind CSS, interfacing with a high-performance FastAPI backend. Includes complete Postman collections, test automation, and recorded video demonstration.",
    features: [
      "Centralized opportunity discovery with multi-criteria search and faculty filtering",
      "Role-based applicant management and research project proposal submissions",
      "Comprehensive Postman collection and automated API integration testing",
      "Full system video demonstration and OpenAPI interactive documentation",
    ],
    metrics: [
      "Clean client-server separation with sub-30ms local API response times",
      "100% test coverage across core CRUD application endpoints",
      "Recorded video demo showcasing full applicant and supervisor lifecycle",
    ],
    githubUrl: "https://github.com/Umair-Nawaz0/fast-research-portal",
  },
  {
    slug: "meeting-scheduler",
    title: "AI Meeting Scheduler & Workflow Orchestration",
    category: "AI Agents & Automation",
    categories: ["AI Agents & Automation"],
    summary: "Containerized agentic workflow service orchestrating Google Gemini LLM, Zoom Server-to-Server OAuth, Google Calendar, and Gmail.",
    description: "Engineered an autonomous AI meeting scheduling microservice utilizing n8n and Docker. The service parses incoming conversational meeting requests using the Google Gemini API, automatically queries Google Calendar for real-time availability, generates secure Zoom meetings via Server-to-Server OAuth, and dispatches automated invitation emails.",
    technologies: ["n8n", "Docker", "Docker Compose", "Google Gemini API", "Zoom OAuth", "Google Calendar API", "Bash"],
    outcome: "Eliminates meeting coordination friction, reducing scheduling turnaround from hours of back-and-forth emails to seconds.",
    accent: "from-emerald-500/30 via-teal-500/20 to-transparent",
    architecture: "Containerized n8n workflow engine deployed via Docker Compose. Handles Webhook triggers, Google Gemini LLM intent extraction, bidirectional Google Calendar API synchronization, and Zoom OAuth token lifecycle management.",
    features: [
      "Natural language meeting request parsing using Google Gemini API",
      "Dynamic calendar conflict resolution across timezone boundaries",
      "Automated Zoom meeting generation via Server-to-Server OAuth 2.0",
      "Containerized one-command deployment with Docker Compose and healthchecks",
    ],
    metrics: [
      "Zero manual intervention required for standard scheduling workflows",
      "Automatic token refresh and secure credential isolation via environment variables",
      "Sub-5-second end-to-end turnaround from incoming request to calendar invite",
    ],
    githubUrl: "https://github.com/Umair-Nawaz0/meeting-scheduler",
  },
  {
    slug: "svm-credit-card-fraud-detection",
    title: "Credit Card Fraud & Risk Detection Pipeline",
    category: "Machine Learning",
    categories: ["Machine Learning"],
    summary: "End-to-end fraud detection pipeline evaluating 284,000+ imbalanced transactions with Linear Support Vector Machines and SMOTE.",
    description: "Engineered an enterprise financial fraud detection pipeline on 284,800+ credit card transactions. Addressed extreme class imbalance (<0.2% fraud) using Synthetic Minority Over-sampling Technique (SMOTE), trained a Linear Support Vector Machine (LinearSVC), and optimized decision thresholds to prioritize high recall and minimize catastrophic false negatives.",
    technologies: ["Python", "Scikit-Learn", "SMOTE (Imbalanced-Learn)", "LinearSVC", "Pandas", "NumPy"],
    outcome: "Achieved 90.8% recall on fraudulent transactions, intercepting 89 out of 98 fraud cases in the test set while maintaining 97.7% overall accuracy.",
    accent: "from-rose-500/30 via-orange-500/20 to-transparent",
    architecture: "Scikit-Learn and Imbalanced-Learn pipeline utilizing StandardScaler normalization, SMOTE synthetic sampling, and LinearSVC hyperplane optimization with cost-sensitive decision boundaries.",
    features: [
      "SMOTE synthetic data oversampling addressing extreme class imbalance",
      "StandardScaler feature normalization across 30 PCA transaction dimensions",
      "Cost-sensitive evaluation focusing on high-recall fraud detection",
      "Confusion matrix and precision-recall trade-off optimization",
    ],
    metrics: [
      "90.82% Recall on fraudulent transactions (89 of 98 caught)",
      "97.73% overall transaction classification accuracy",
      "284,807 transactions processed through the pipeline",
    ],
    githubUrl: "https://github.com/Umair-Nawaz0/svm-credit-card-fraud-detection",
  },
  {
    slug: "kmeans-customer-segmentation",
    title: "Customer Behavioral Segmentation (2D & 3D PCA)",
    category: "Machine Learning",
    categories: ["Machine Learning"],
    summary: "Unsupervised behavioral customer segmentation using K-Means++, Hierarchical Ward linkage, and 2D/3D PCA geometric projection.",
    description: "Conducted comprehensive behavioral customer market segmentation combining K-Means++ clustering, Agglomerative Hierarchical Clustering with Ward linkage, and Principal Component Analysis (PCA). Implemented the Elbow Method across k=1..10 to detect optimal inertia inflection, and rendered interactive 2D and 3D geometric cluster projections with centroid tracking.",
    technologies: ["Python", "Scikit-Learn", "PCA", "K-Means++", "Hierarchical Clustering", "Matplotlib", "SciPy"],
    outcome: "Transformed high-dimensional consumer behavioral data into distinct, actionable customer personas with clear spending patterns.",
    accent: "from-amber-500/30 via-yellow-500/20 to-transparent",
    architecture: "Unsupervised learning pipeline combining OneHotEncoder, StandardScaler, Scipy dendrogram hierarchical analysis, PCA dimensionality reduction, and 3D spatial cluster rendering.",
    features: [
      "Elbow Method (WCSS) heuristic identifying optimal k=4 customer clusters",
      "K-Means++ centroid initialization preventing poor convergence",
      "Agglomerative Hierarchical Clustering with Ward's minimum variance criterion",
      "Interactive 2D and 3D PCA geometric projection with spatial centroid coordinates",
    ],
    metrics: [
      "Optimal 4-cluster segmentation mapping distinct customer spending behaviors",
      "Explained variance captured through 2D and 3D principal components",
      "Dendrogram validation of natural cluster boundaries",
    ],
    githubUrl: "https://github.com/Umair-Nawaz0/kmeans-customer-segmentation",
  },
  {
    slug: "bank-management-system",
    title: "International Banking Management System (C++17)",
    category: "Systems & C++",
    categories: ["Systems & C++"],
    summary: "Terminal-based international banking management system built with modern C++17, OOP architecture, and transactional data persistence.",
    description: "Architected an object-oriented banking engine in C++17 implementing account management, fund transfers, transactional auditing, and role-based terminal workflows with persistent CSV data storage.",
    technologies: ["C++17", "CMake", "Makefile", "POSIX", "OOP"],
    outcome: "Demonstrates low-level memory safety, strong object-oriented principles, and robust file stream persistence.",
    accent: "from-cyan-500/30 via-blue-500/20 to-transparent",
    architecture: "C++17 object-oriented architecture utilizing encapsulation, file stream I/O for persistent records, input sanitization, and CMake build automation.",
    features: [
      "Robust account creation, balance inquiry, deposit, withdrawal, and transfer workflows",
      "CSV file stream persistence ensuring zero data loss across terminal sessions",
      "Modular CMake and Makefile build configurations",
      "Defensive input validation preventing terminal buffer overflows",
    ],
    metrics: [
      "1,200+ lines of robust C++17 application logic",
      "Sub-millisecond terminal transaction execution",
      "Full persistence of account states and ledger records",
    ],
    githubUrl: "https://github.com/Umair-Nawaz0/bank-management-system",
  },
];
