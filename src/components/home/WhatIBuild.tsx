import {
  Bot,
  BrainCircuit,
  Cpu,
  Workflow,
} from "lucide-react";

const capabilities = [
  {
    number: "01",
    icon: Bot,
    title: "Autonomous AI Agents",
    description:
      "Stateful agent systems that reason, maintain conversational memory, invoke dynamic tools, and execute multi-step business workflows.",
  },
  {
    number: "02",
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Containerized orchestration engines connecting webhooks, asynchronous queues, and third-party APIs (Zoom, Google Calendar, Gmail).",
  },
  {
    number: "03",
    icon: BrainCircuit,
    title: "Machine Learning & Analytics",
    description:
      "Predictive modeling, anomaly detection under severe class imbalance (SMOTE), cost-sensitive classification, and high-dimensional clustering.",
  },
  {
    number: "04",
    icon: Cpu,
    title: "Systems & Backend Engineering",
    description:
      "High-throughput asynchronous APIs with FastAPI and PostgreSQL, alongside robust low-level architectures in modern C++17.",
  },
];

export default function WhatIBuild() {
  return (
    <section id="what-i-build" className="relative py-28">
      <div className="container">
        <div className="max-w-2xl">
          <p className="section-label">Engineering Focus</p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            AI systems engineered for
            <span className="text-zinc-500"> real-world impact.</span>
          </h2>

          <p className="mt-5 text-zinc-400">
            From multi-tenant conversational receptionists and containerized workflow automations
            to mathematically validated machine learning algorithms and C++ systems.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="group bg-[#080808] p-7 transition-colors hover:bg-violet-500/[0.04] sm:p-9"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                    <Icon
                      size={20}
                      className="text-violet-300 transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <span className="text-xs text-zinc-700 font-mono">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-medium">{item.title}</h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-zinc-500">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}