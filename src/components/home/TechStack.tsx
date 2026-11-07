import { skillGroups } from "@/data/skills";

export default function TechStack() {
  return (
    <section id="skills" className="border-t border-zinc-200 py-24 dark:border-white/10">
      <div className="container">
        <div className="max-w-2xl">
          <p className="section-label">Skills &amp; Capabilities</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            Core Technologies &amp; <span className="text-gradient">Tooling.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            Languages, frameworks, and deployment workflows used across my production projects.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="glass-card flex flex-col justify-between rounded-2xl p-6 transition-all hover:border-violet-400/30"
            >
              <div>
                <h3 className="text-sm font-semibold tracking-wide text-zinc-900 dark:text-zinc-100">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
