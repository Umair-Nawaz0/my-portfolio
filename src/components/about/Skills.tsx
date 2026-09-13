import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="max-w-2xl">
          <p className="section-label">Technical Competencies</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Skills &amp; Technologies.
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            A structured breakdown of core languages, AI frameworks, backend services, and DevOps tools.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="glass-card flex flex-col justify-between rounded-2xl p-6 transition-all hover:border-violet-400/30"
            >
              <div>
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-zinc-200 bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-800 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-200"
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

