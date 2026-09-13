const directions = [
  {
    title: "Autonomous Agent Architectures",
    text: "Multi-step tool-calling loops, dynamic DAG planning, structured memory persistence, and human-in-the-loop verification.",
  },
  {
    title: "Production RAG Pipelines",
    text: "Hybrid dense & lexical search, cross-encoder reranking, contextual chunking, and deterministic citation grounding.",
  },
  {
    title: "Backend Microservices & APIs",
    text: "FastAPI services, asynchronous task queues (Redis/Celery), Pydantic v2 schema enforcement, and Dockerized deployments.",
  },
  {
    title: "Core Computational Foundations",
    text: "Algorithmic complexity analysis, data structure design, and object-oriented systems engineering in modern C++.",
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
              <span className="text-xs font-semibold tracking-[0.2em] text-violet-300">
                0{index + 1}
              </span>
              <h3 className="mt-6 text-lg font-medium text-zinc-100">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

