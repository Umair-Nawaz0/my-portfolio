import { ArrowUpRight } from "lucide-react";
import { skillGroups } from "@/data/skills";

export default function TechStack() {
  return (
    <section id="skills" className="border-t border-zinc-200 py-20 dark:border-white/10">
      <div className="container">
        <div className="max-w-2xl">
          <p className="section-label">Technical Stack</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
            Core Technologies &amp; Tools
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Languages, frameworks, and deployment tooling applied across my systems.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="glass-card flex flex-col justify-between rounded-xl p-5 transition-all hover:border-violet-500/30"
            >
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-200">
                  {group.title}
                </h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {group.skills.map((skill) =>
                    skill.link ? (
                      <a
                        key={skill.name}
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-md border border-violet-400/40 bg-violet-500/10 px-2 py-1 text-xs font-medium text-violet-700 transition hover:border-violet-500 hover:bg-violet-500/20 dark:border-violet-400/30 dark:bg-violet-400/10 dark:text-violet-300"
                        title={`Official ${skill.name} documentation`}
                      >
                        <span>{skill.name}</span>
                        <ArrowUpRight size={11} />
                      </a>
                    ) : (
                      <span
                        key={skill.name}
                        className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-1 text-xs font-medium text-zinc-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-300"
                      >
                        {skill.name}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
