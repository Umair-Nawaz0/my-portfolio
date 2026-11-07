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
    slug: "svm-credit-card-fraud-detection",
    title: "Credit Card Fraud & Risk Detection Pipeline",
    category: "Machine Learning",
    summary:
      "Enterprise fraud classification pipeline evaluating 284,800+ transactions with severe class skew (<0.2% fraud). Leveraged SMOTE oversampling and LinearSVC to optimize cost-sensitive decision boundaries.",
    technologies: ["Python", "Scikit-Learn", "SMOTE (Imbalanced-Learn)", "LinearSVC", "Pandas", "NumPy"],
    features: [
      "90.82% Recall on fraudulent transactions (intercepted 89 of 98 fraud cases)",
      "StandardScaler feature normalization across 30 PCA transaction dimensions",
    ],
    githubUrl: "https://github.com/Umair-Nawaz0/svm-credit-card-fraud-detection",
  },
  {
    slug: "decision-tree-heart-disease-prediction",
    title: "Cardiovascular Disease Detection (Decision Tree)",
    category: "Machine Learning",
    summary:
      "Interpretable clinical decision-support diagnostic model trained on 1,025 patient records across 13 physiological biomarkers. Achieved near-perfect diagnostic screening accuracy with zero false positives.",
    technologies: ["Python", "Scikit-Learn", "Decision Trees", "StandardScaler", "Pandas"],
    features: [
      "98.54% Accuracy, 100% Precision (0 False Positives on N=205 test set)",
      "Deterministic, rule-based clinical explainability for medical practitioners",
    ],
    githubUrl: "https://github.com/Umair-Nawaz0/decision-tree-heart-disease-prediction",
  },
  {
    slug: "decision-tree-loan-default-risk-prediction",
    title: "Cost-Sensitive Loan Default Risk Classification",
    category: "Machine Learning",
    summary:
      "Banking credit risk scoring engine that replaces naive accuracy optimization with cost-sensitive class balancing and 5-fold GridSearchCV, maximizing loan default detection to protect financial capital.",
    technologies: ["Python", "Scikit-Learn", "GridSearchCV", "Cost-Sensitive Learning", "Pandas"],
    features: [
      "Elevated bad borrower default recall nearly 6x (from 11.67% to 68.33%)",
      "5-fold cross-validation tuned specifically for recall maximization",
    ],
    githubUrl: "https://github.com/Umair-Nawaz0/decision-tree-loan-default-risk-prediction",
  },
  {
    slug: "kmeans-customer-segmentation",
    title: "Customer Market Segmentation (2D & 3D PCA)",
    category: "Machine Learning",
    summary:
      "Unsupervised behavioral market segmentation combining K-Means++ clustering and Principal Component Analysis. Renders interactive 2D and 3D spatial cluster projections with centroid tracking.",
    technologies: ["Python", "Scikit-Learn", "PCA", "K-Means++", "Matplotlib", "SciPy"],
    features: [
      "Elbow Method (WCSS) heuristic identifying optimal k=4 customer cohorts",
      "Interactive 2D & 3D PCA spatial projections capturing maximum variance",
    ],
    githubUrl: "https://github.com/Umair-Nawaz0/kmeans-customer-segmentation",
  },
  {
    slug: "hierarchical-clustering-customer-segmentation",
    title: "Hierarchical Customer Clustering & Dendrograms",
    category: "Machine Learning",
    summary:
      "Agglomerative hierarchical clustering with Ward's minimum variance linkage and SciPy dendrograms. Aggregated 541,000+ transaction lines into 4,372 customer behavioral profiles.",
    technologies: ["Python", "SciPy", "Hierarchical Clustering", "PCA", "Pandas", "Matplotlib"],
    features: [
      "Preserved 97.39% of variance across 2 principal components via PCA",
      "Ward linkage dendrogram mathematically validating 3 natural customer tiers",
    ],
    githubUrl: "https://github.com/Umair-Nawaz0/hierarchical-clustering-customer-segmentation",
  },
  {
    slug: "knn-diabetes-prediction",
    title: "Clinical Diabetes Screening Model (KNN)",
    category: "Machine Learning",
    summary:
      "Non-parametric clinical diagnostic screening model using K-Nearest Neighbors on 768 patient biomarker records. Applies Z-score normalization and correlation-based feature selection.",
    technologies: ["Python", "Scikit-Learn", "KNN", "StandardScaler", "Plotly", "Pandas"],
    features: [
      "Distance-based patient neighbor mapping based on glucose and BMI biomarkers",
      "Neighborhood tuning across K=5 and K=7 for optimal diagnostic recall",
    ],
    githubUrl: "https://github.com/Umair-Nawaz0/knn-diabetes-prediction",
  },
  {
    slug: "appointment-assistant",
    title: "AI Appointment Assistant & Receptionist Platform",
    category: "AI Agents & Systems",
    summary:
      "Production-oriented multi-tenant AI conversational booking platform with an asynchronous FastAPI backend, PostgreSQL database, and modern React management dashboard.",
    technologies: ["FastAPI", "React 18", "TypeScript", "PostgreSQL", "asyncpg", "Docker Compose"],
    features: [
      "Deterministic conversational state machine with dynamic slot conflict detection",
      "Strict multi-tenant schema isolation with zero cross-tenant data leakage",
    ],
    githubUrl: "https://github.com/Umair-Nawaz0/appointment-assistant",
  },
  {
    slug: "meeting-scheduler",
    title: "Autonomous AI Meeting Scheduler Service",
    category: "AI Agents & Systems",
    summary:
      "Containerized agentic workflow service orchestrating Google Gemini LLM intent parsing, Zoom Server-to-Server OAuth, Google Calendar synchronization, and automated email invites.",
    technologies: ["n8n", "Docker", "Docker Compose", "Google Gemini API", "Zoom OAuth", "Calendar API"],
    features: [
      "Natural language request parsing to extract participant time and agenda",
      "Sub-5-second turnaround from incoming webhook to calendar & Zoom generation",
    ],
    githubUrl: "https://github.com/Umair-Nawaz0/meeting-scheduler",
  },
  {
    slug: "fast-research-portal",
    title: "FAST Academic Research & Project Exchange",
    category: "Full-Stack Web",
    summary:
      "Full-stack academic research opportunity discovery platform connecting university students with active faculty research labs and thesis grants using Next.js App Router and FastAPI.",
    technologies: ["Next.js", "TypeScript", "FastAPI", "Python", "SQLite", "TailwindCSS"],
    features: [
      "Role-based applicant management, candidate filtering, and proposal submission",
      "Comprehensive Postman test collection with OpenAPI interactive documentation",
    ],
    githubUrl: "https://github.com/Umair-Nawaz0/fast-research-portal",
  },
  {
    slug: "bank-management-system",
    title: "International Banking Management System (C++17)",
    category: "Systems & C++",
    summary:
      "Terminal-based international banking engine built with modern C++17, OOP architecture, persistent CSV ledger storage, and defensive input validation preventing buffer overflows.",
    technologies: ["C++17", "CMake", "POSIX", "OOP Architecture", "File Streams"],
    features: [
      "1,200+ lines of robust C++17 application logic with zero runtime memory leaks",
      "Full persistence of account balances, transactions, and role credentials",
    ],
    githubUrl: "https://github.com/Umair-Nawaz0/bank-management-system",
  },
];
