import { Bot, BrainCircuit, Cpu, GraduationCap } from "lucide-react";
import { education } from "@/data/education";
import ChessLiveCard from "./ChessLiveCard";

const pillars = [
  {
    icon: Bot,
    title: "Autonomous AI Agents",
    description:
      "Multi-tenant conversational agents, deterministic state machines, and dynamic LLM tool calling that automate real-world scheduling and business workflows.",
  },
  {
    icon: BrainCircuit,
    title: "Machine Learning Engineering",
    description:
      "Predictive modeling, addressing extreme class imbalance (SMOTE), Linear Support Vector Machines (LinearSVC), and unsupervised PCA clustering.",
  },
  {
    icon: Cpu,
    title: "Backend & Systems",
    description:
      "Asynchronous microservices with FastAPI, PostgreSQL connection pooling (asyncpg), Docker orchestration, and low-level object-oriented systems in C++17.",
  },
];

export default function AboutSection() {
  const edu = education[0];

  return (
    <section id="about" className="border-t border-zinc-200 py-20 dark:border-white/10">
      <div className="container">
        <div className="max-w-2xl">
          <p className="section-label">Background &amp; Focus</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
            Engineering robust intelligence with{" "}
            <span className="text-gradient">architectural rigor.</span>
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Focused on production software engineering: deterministic state management,
            high-throughput APIs, and verifiable machine learning models.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="glass-card flex flex-col justify-between rounded-xl p-5 transition-all hover:border-violet-500/30"
              >
                <div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10 text-violet-600 dark:bg-violet-400/10 dark:text-violet-300">
                    <Icon size={18} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-zinc-900 dark:text-zinc-100">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {edu && (
            <div className="glass-card flex flex-col justify-between rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 dark:bg-violet-400/10 dark:text-violet-300">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    {edu.stage}
                  </h4>
                  <p className="text-xs text-violet-600 dark:text-violet-400 font-medium">
                    {edu.institution}
                  </p>
                  <p className="mt-1 text-[11px] text-zinc-500 dark:text-zinc-400">
                    {edu.focus} ({edu.period})
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-1 border-t border-zinc-100 pt-3 dark:border-white/5">
                {edu.coursework.slice(0, 4).map((c) => (
                  <span
                    key={c}
                    className="rounded border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-[10px] text-zinc-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-400"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          )}

          <ChessLiveCard />
        </div>
      </div>
    </section>
  );
}
