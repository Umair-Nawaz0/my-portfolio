import { ArrowUpRight, Cpu, Sparkles } from "lucide-react";
import { skillGroups } from "@/data/skills";

const groupColors: Record<string, { borderTop: string; badge: string; text: string }> = {
  "AI & Machine Learning": {
    borderTop: "border-t-purple-500",
    badge: "bg-purple-50 text-purple-700 border-purple-200",
    text: "text-purple-700",
  },
  "Generative AI & Agent Workflows": {
    borderTop: "border-t-blue-500",
    badge: "bg-blue-50 text-blue-700 border-blue-200",
    text: "text-blue-700",
  },
  "Backend & Systems": {
    borderTop: "border-t-emerald-500",
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
    text: "text-emerald-700",
  },
  "Frontend & Engineering Tools": {
    borderTop: "border-t-indigo-500",
    badge: "bg-indigo-50 text-indigo-700 border-indigo-200",
    text: "text-indigo-700",
  },
};

export default function TechStack() {
  return (
    <section id="skills" className="relative border-t border-indigo-100/70 py-24 bg-slate-50/60">
      <div className="container relative z-10">
        <div className="max-w-2xl">
          <span className="section-label">
            <Cpu size={12} className="text-indigo-600" />
            Technical Stack &amp; Tooling
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Core Technologies &amp; <span className="text-gradient">Tooling</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Programming languages, frameworks, machine learning libraries, and deployment tooling applied across my production systems.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => {
            const styling = groupColors[group.title] || {
              borderTop: "border-t-indigo-500",
              badge: "bg-indigo-50 text-indigo-700 border-indigo-200",
              text: "text-indigo-700",
            };

            return (
              <div
                key={group.title}
                className={`glass-card flex flex-col justify-between rounded-2xl p-6 border-t-4 ${styling.borderTop} transition-all duration-300 hover:border-indigo-400 hover:shadow-xl hover:-translate-y-1`}
              >
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 pb-3 border-b border-slate-100">
                    {group.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) =>
                      skill.link ? (
                        <a
                          key={skill.name}
                          href={skill.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg border border-blue-200 bg-blue-50/80 px-2.5 py-1 text-xs font-bold text-blue-700 transition hover:border-blue-400 hover:bg-blue-100 hover:scale-105"
                          title={`Official ${skill.name} documentation`}
                        >
                          <span>{skill.name}</span>
                          <ArrowUpRight size={11} />
                        </a>
                      ) : (
                        <span
                          key={skill.name}
                          className="rounded-lg border border-slate-200/90 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 shadow-2xs transition hover:border-indigo-300 hover:text-indigo-700"
                        >
                          {skill.name}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
