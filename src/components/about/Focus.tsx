const directions = [
  {
    title: "Autonomous AI Agents & Workflows",
    text: "Building goal-driven conversational agents, multi-step tool execution, and workflow orchestration using LangChain, LangGraph, and n8n.",
  },
  {
    title: "Generative AI & RAG",
    text: "Retrieval-Augmented Generation (RAG) architectures, Large Language Model (LLM) integration, prompt engineering, and conversational memory.",
  },
  {
    title: "Backend & API Development",
    text: "Production-grade RESTful APIs using FastAPI and Node.js/Express with PostgreSQL, MySQL/AWS RDS, and Docker containerization.",
  },
  {
    title: "Machine Learning & C++ OOP",
    text: "Supervised and unsupervised ML workflows using Scikit-Learn (SVM, SMOTE, Decision Trees) and robust Object-Oriented software engineering in C++.",
  },
];

export default function Focus() {
  return (
    <section className="py-16">
      <div className="container">
        <p className="section-label">Technical Specialization</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Core Focus Areas.
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {directions.map((item, index) => (
            <article
              className="glass-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30"
              key={item.title}
            >
              <span className="text-xs font-semibold tracking-[0.2em] text-violet-600 dark:text-violet-300">
                0{index + 1}
              </span>
              <h3 className="mt-6 text-lg font-semibold text-zinc-900 dark:text-zinc-100">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
