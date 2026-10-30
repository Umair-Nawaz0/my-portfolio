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
    stage: "BS Computer Science",
    institution: "FAST NUCES (National University of Computer & Emerging Sciences)",
    focus: "Artificial Intelligence, Systems Architecture & Software Engineering",
    period: "2022 — Present",
    coursework: [
      "Artificial Intelligence & Machine Learning",
      "Data Structures & Algorithms",
      "Object-Oriented Programming (C++)",
      "Database Systems & Advanced SQL",
      "Operating Systems & Computer Networks",
      "Software Design & Architecture",
    ],
  },
];
