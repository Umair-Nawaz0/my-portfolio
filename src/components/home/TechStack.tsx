import { ArrowUpRight } from "lucide-react";
import { skillGroups } from "@/data/skills";

export default function TechStack() {
  return (
    <section id="skills" className="border-t border-white/10 py-20">
      <div className="container">
        <div className="max-w-2xl">
          <p className="section-label">Technical Stack</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-[#FFFFFF]">
            Core Technologies &amp; <span className="text-gradient italic">Tooling</span>
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Languages, frameworks, and deployment tooling applied across my systems.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="glass-card flex flex-col justify-between rounded-xl p-5 transition-all hover:border-[#C6F432]/30"
            >
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-[#FFFFFF]">
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
                        className="inline-flex items-center gap-1 rounded-md border border-[#C6F432]/40 bg-[#C6F432]/10 px-2.5 py-1 text-xs font-semibold text-[#C6F432] transition hover:border-[#C6F432] hover:bg-[#C6F432]/20"
                        title={`Official ${skill.name} documentation`}
                      >
                        <span>{skill.name}</span>
                        <ArrowUpRight size={11} />
                      </a>
                    ) : (
                      <span
                        key={skill.name}
                        className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-zinc-300"
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
