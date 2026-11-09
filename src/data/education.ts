export type EducationItem = {
  stage: string;
  institution: string;
  focus: string;
  period: string;
  result?: string;
  coursework: string[];
};

export const education: EducationItem[] = [
  {
    stage: "Bachelor of Science in Computer Science (BSCS)",
    institution: "FAST National University of Computer and Emerging Sciences (FAST-NUCES)",
    focus: "Agentic AI Systems, Machine Learning Pipelines & Backend Engineering",
    period: "August 2024 — June 2028 (Expected)",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (C++)",
      "Operating Systems",
      "Database Systems",
      "Machine Learning & Artificial Intelligence",
      "Software Design & Architecture",
    ],
  },
];
