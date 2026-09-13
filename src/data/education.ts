export type EducationItem = {
  stage: string;
  institution: string;
  focus: string;
  period: string;
  result: string;
  coursework: string[];
};

export const education: EducationItem[] = [
  {
    stage: "BS Computer Science",
    institution: "FAST NUCES (National University of Computer & Emerging Sciences)",
    focus: "Computer Science & Artificial Intelligence",
    period: "2022 — Present",
    result: "CGPA: 2.49 / 4.00",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (C++)",
      "Database Systems & SQL",
      "Operating Systems",
      "Artificial Intelligence & Machine Learning",
      "Software Engineering",
    ],
  },
  {
    stage: "Intermediate / HSSC",
    institution: "Punjab College / BISE",
    focus: "Pre-Engineering (Mathematics, Physics, Chemistry)",
    period: "Completed",
    result: "Grade A · 77.50%",
    coursework: ["Calculus & Analytical Geometry", "Physics", "Chemistry"],
  },
  {
    stage: "Matriculation / SSC",
    institution: "BISE",
    focus: "Science (Computer Science & Mathematics)",
    period: "Completed",
    result: "Grade A+ · 87.73%",
    coursework: ["Computer Science", "Mathematics", "Physics", "Chemistry"],
  },
];

