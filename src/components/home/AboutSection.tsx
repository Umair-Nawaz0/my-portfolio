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
    <section id="about" className="border-t border-white/10 py-20">
      <div className="container">
        <div className="max-w-2xl">
          <p className="section-label">Background &amp; Focus</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-[#FFFFFF]">
            Engineering robust intelligence with{" "}
            <span className="text-gradient italic">architectural rigor.</span>
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Focused on production software engineering: deterministic state management,
            high-throughput APIs, and verifiable machine learning models.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="glass-card flex flex-col justify-between rounded-xl p-5 transition-all hover:border-[#C6F432]/40"
              >
                <div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#C6F432]/10 text-[#C6F432]">
                    <Icon size={18} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-zinc-900 dark:text-[#FFFFFF]">
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

        {/* Prominent Chess & Puzzles Live Stats (Slightly Big, Clearly Visible) */}
        <div className="mt-6">
          <ChessLiveCard />
        </div>

        {/* Education Highlight */}
        {edu && (
          <div className="glass-card mt-6 flex flex-col justify-between rounded-2xl p-6 sm:flex-row sm:items-center">
            <div className="flex items-start gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#C6F432]/10 text-[#C6F432]">
                <GraduationCap size={22} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-900 dark:text-[#FFFFFF]">
                  {edu.stage}
                </h4>
                <p className="text-xs text-[#C6F432] font-semibold">
                  {edu.institution}
                </p>
                <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
                  {edu.focus} ({edu.period})
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-0 sm:max-w-md sm:justify-end">
              {edu.coursework.slice(0, 4).map((c) => (
                <span
                  key={c}
                  className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[11px] text-zinc-400 font-medium"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
