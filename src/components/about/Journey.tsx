const journey = [
  {
    stage: "Phase 01",
    title: "Systems & CS Foundations",
    detail:
      "Core training in C++, object-oriented design, algorithmic complexity, tree/graph structures, and operating systems at FAST NUCES.",
  },
  {
    stage: "Phase 02",
    title: "Applied Machine Learning & NLP",
    detail:
      "Exploration of neural architectures, transformer attention mechanisms, dense text embeddings, and similarity metrics.",
  },
  {
    stage: "Phase 03",
    title: "AI Systems & Production Engineering",
    detail:
      "Building stateful agent loops, enterprise RAG pipelines, schema-validated APIs with FastAPI, and deployable Docker architectures.",
  },
];

export default function Journey() {
  return (
    <section className="border-y border-white/10 bg-white/[0.015] py-20">
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
              <span className="text-xs font-semibold tracking-[0.2em] text-violet-300">
                {item.stage}
              </span>
              <h3 className="mt-4 text-xl font-medium text-zinc-100">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

