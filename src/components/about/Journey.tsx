const journey = [
  {
    stage: "Phase 01",
    title: "Computer Science & OOP Foundations",
    detail:
      "Rigorous foundations in C++, Object-Oriented Programming (inheritance, polymorphism, encapsulation), Data Structures, and relational SQL at FAST-NUCES.",
  },
  {
    stage: "Phase 02",
    title: "Applied Machine Learning & Data",
    detail:
      "Data preprocessing, cleaning, visualization, feature scaling (SMOTE), and model training & evaluation using Scikit-Learn algorithms (SVM, Decision Trees, Regression).",
  },
  {
    stage: "Phase 03",
    title: "AI Agents & Full-Stack Systems",
    detail:
      "Developing autonomous AI agents, Retrieval-Augmented Generation (RAG), FastAPI & Node.js/Express backends, and containerized Docker deployments.",
  },
];

export default function Journey() {
  return (
    <section className="border-y border-zinc-200 bg-zinc-50/50 py-20 dark:border-white/10 dark:bg-white/[0.015]">
      <div className="container">
        <p className="section-label">Development Path</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Technical Background &amp; Milestones.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {journey.map((item) => (
            <article
              className="glass-card rounded-2xl p-6 transition-all duration-300 hover:border-violet-400/30 sm:p-8"
              key={item.title}
            >
              <span className="text-xs font-semibold tracking-[0.2em] text-violet-600 dark:text-violet-300">
                {item.stage}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
