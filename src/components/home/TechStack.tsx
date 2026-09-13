import { skillGroups } from "@/data/skills";

export default function TechStack() {
  return (
    <section className="border-y border-white/10 bg-white/[0.015] py-24">
      <div className="container">
        <div className="max-w-2xl">
          <p className="section-label">Technical Stack</p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Core Technologies
            <span className="text-zinc-500"> &amp; Frameworks.</span>
          </h2>

          <p className="mt-4 text-zinc-400">
            Selected languages, AI frameworks, databases, and deployment tooling
            utilized across systems.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="glass-card flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 hover:border-violet-400/30"
            >
              <div>
                <h3 className="text-base font-semibold text-zinc-200">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-white/[0.02] px-2.5 py-1 text-xs text-zinc-400"
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