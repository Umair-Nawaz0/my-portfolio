import {
  Braces,
  Cloud,
  Database,
  Network,
  Server,
  Workflow,
} from "lucide-react";

const engineeringAreas = [
  {
    icon: Network,
    title: "AI Architecture",
    text: "Designing systems where models, tools, data, and application logic work together.",
  },
  {
    icon: Database,
    title: "RAG & Knowledge",
    text: "Retrieval-Augmented Generation (RAG), LLM integration, prompt engineering, and context retrieval.",
  },
  {
    icon: Workflow,
    title: "Agent Workflows",
    text: "Tool use, orchestration, planning, state, memory, and multi-step execution.",
  },
  {
    icon: Server,
    title: "Backend Systems",
    text: "APIs and services that connect intelligent applications to reliable infrastructure.",
  },
  {
    icon: Braces,
    title: "Software Engineering",
    text: "Clean architecture, maintainable code, testing, APIs, and production practices.",
  },
  {
    icon: Cloud,
    title: "Deployment",
    text: "Taking AI applications from local prototypes toward scalable production systems.",
  },
];

export default function Engineering() {
  return (
    <section className="py-28">
      <div className="container">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="section-label">Engineering</p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Beyond the model.
            </h2>

            <p className="mt-5 leading-7 text-zinc-600 dark:text-zinc-500">
              Building useful AI products requires more than prompting a
              model. I focus on the engineering around the intelligence.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {engineeringAreas.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="glass-card rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
                >
                  <Icon size={19} className="text-violet-600 dark:text-violet-400" />

                  <h3 className="mt-5 font-semibold text-zinc-900 dark:text-zinc-100">{item.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}