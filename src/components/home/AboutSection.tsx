import { Bot, BrainCircuit, Cpu, GraduationCap, Sparkles } from "lucide-react";
import { education } from "@/data/education";

const pillars = [
  {
    icon: Bot,
    title: "Autonomous AI Agents",
    gradient: "from-blue-600 to-indigo-600",
    borderTop: "border-t-blue-500",
    badge: "LangChain · n8n · Gemini API",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    description:
      "Architecting multi-tenant conversational agents, deterministic state machines, and dynamic LLM tool calling with LangChain and n8n to automate complex business workflows and calendar scheduling.",
  },
  {
    icon: BrainCircuit,
    title: "Machine Learning & Deep Learning",
    gradient: "from-indigo-600 to-purple-600",
    borderTop: "border-t-indigo-500",
    badge: "PyTorch · Scikit-learn · PCA",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    description:
      "Developing production-oriented ML pipelines: training neural networks in PyTorch, addressing acute class skew with SMOTE in Scikit-learn, and engineering unsupervised hierarchical clustering with PCA.",
  },
  {
    icon: Cpu,
    title: "High-Performance Backend & Systems",
    gradient: "from-emerald-600 to-teal-600",
    borderTop: "border-t-emerald-500",
    badge: "FastAPI · PostgreSQL · C++17",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    description:
      "Engineering asynchronous RESTful microservices with FastAPI and Node.js, managing normalized relational schemas in PostgreSQL and MySQL, and developing low-level systems in modern C++17.",
  },
];

export default function AboutSection() {
  const edu = education[0];

  return (
    <section id="about" className="relative border-t border-indigo-100/70 py-24 bg-white/70">
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <span className="section-label">
            <Sparkles size={12} className="text-indigo-600" />
            Engineering Philosophy &amp; Core Focus
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Building robust intelligence with{" "}
            <span className="text-gradient">architectural rigor.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Focused on production software engineering: deterministic state management,
            high-throughput asynchronous APIs, and mathematically verifiable machine learning models.
          </p>
        </div>

        {/* 3 Core Engineering Pillars */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`glass-card flex flex-col justify-between rounded-2xl p-7 border-t-4 ${pillar.borderTop} transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr ${pillar.gradient} text-white shadow-md shadow-indigo-500/20`}
                    >
                      <Icon size={22} />
                    </div>
                    <span
                      className={`rounded-full border px-3 py-1 text-[11px] font-bold ${pillar.badgeColor}`}
                    >
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold tracking-tight text-slate-900">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-600">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Higher Education Card */}
        {edu && (
          <div className="glass-card mt-10 rounded-3xl p-7 sm:p-8 border border-indigo-100/90 shadow-md transition-all hover:shadow-xl">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-md shadow-indigo-500/25">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-blue-50 border border-blue-200 px-3 py-0.5 text-[11px] font-extrabold text-blue-700">
                      Higher Education
                    </span>
                    <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-0.5 text-[11px] font-bold text-emerald-700">
                      Active Degree
                    </span>
                  </div>
                  <h4 className="mt-2 text-lg font-black tracking-tight text-slate-900 sm:text-xl">
                    {edu.stage}
                  </h4>
                  <p className="text-sm font-bold text-blue-700">
                    {edu.institution}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-500">
                    {edu.focus} · <span className="text-indigo-900 font-bold">{edu.period}</span>
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 lg:max-w-md lg:justify-end">
                {edu.coursework.map((c) => (
                  <span
                    key={c}
                    className="rounded-lg border border-slate-200/90 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-2xs"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
