import { profile } from "@/data/profile";
import { Brain, Code, Cpu, LineChart } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "AI Agents & State Machines",
    desc: "Autonomous conversational agents, omnichannel ingestion, and deterministic workflow state transitions.",
  },
  {
    icon: LineChart,
    title: "Machine Learning Engineering",
    desc: "Cost-sensitive classification, SMOTE oversampling on imbalanced data, and PCA clustering.",
  },
  {
    icon: Cpu,
    title: "Backend Engineering",
    desc: "FastAPI, asynchronous PostgreSQL with asyncpg, Pydantic v2 validation, and Docker Compose.",
  },
  {
    icon: Code,
    title: "Core CS & Systems",
    desc: "Object-oriented software engineering, data structures, and high-performance system design in C++17.",
  },
];

export default function WhoIAm() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="section-label">Profile</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Engineering robust AI systems grounded in rigorous computer science principles.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-zinc-800 dark:text-zinc-300">
              I am {profile.fullName}, an AI Systems &amp; Machine Learning Engineer.
            </p>
            <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              My engineering focus centers on building production-grade intelligence:
              multi-tenant autonomous agents that manage omnichannel conversational bookings,
              containerized automation engines integrating third-party APIs (Zoom, Google Calendar, Gmail),
              and predictive machine learning pipelines designed for real-world statistical challenges.
            </p>
            <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              I emphasize architectural rigor, clean code separation, deterministic state management,
              and verifiable metrics—whether optimizing fraud recall on 284,000 imbalanced transactions
              or designing modular object-oriented systems in modern C++17.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {pillars.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="glass-card rounded-2xl p-5 transition-all hover:border-violet-400/30"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10 text-violet-600 dark:bg-violet-400/10 dark:text-violet-300">
                      <Icon size={18} />
                    </div>
                    <h3 className="mt-3 text-base font-semibold text-zinc-900 dark:text-zinc-200">{item.title}</h3>
                    <p className="mt-1.5 text-xs leading-5 text-zinc-600 dark:text-zinc-400">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
