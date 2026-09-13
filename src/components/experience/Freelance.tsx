import { Layers, Cpu, Code2 } from "lucide-react";


const services = [
  {
    icon: Cpu,
    title: "AI & LLM Integration",
    desc: "Implementing custom RAG pipelines, function calling, agent workflows, and vector store retrieval.",
  },
  {
    icon: Layers,
    title: "Full-Stack Web Development",
    desc: "Production Next.js, React, and TypeScript applications with responsive, accessible UI and clean architecture.",
  },
  {
    icon: Code2,
    title: "Backend API Engineering",
    desc: "FastAPI and Python microservices with Pydantic validation, database integration, and Docker deployment.",
  },
];

export default function Freelance() {
  return (
    <section className="border-y border-white/10 bg-white/[.015] py-20">
      <div className="container">
        <p className="section-label">Freelance &amp; Consulting</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
          End-to-end technical delivery for web and AI products.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400">
          Partnering with founders and engineering teams to build performant, maintainable software
          from early specification through deployable code.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="glass-card rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-400/10 text-violet-300">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 text-lg font-medium text-zinc-200">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

