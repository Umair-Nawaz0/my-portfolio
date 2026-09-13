import { experience } from "@/data/experience";
import { MapPin } from "lucide-react";


export default function WorkExperience() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="max-w-2xl">
          <p className="section-label">Timeline</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Work Experience &amp; Roles.
          </h2>
        </div>

        <div className="mt-10 space-y-6">
          {experience.map((item) => (
            <article
              key={item.title + item.company}
              className="glass-card rounded-2xl p-6 transition-all duration-300 hover:border-violet-400/30 sm:p-8"
            >
              <div className="grid gap-6 md:grid-cols-[160px_1fr] md:items-start">
                <div>
                  <span className="inline-block rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs font-medium text-violet-300">
                    {item.period}
                  </span>
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-zinc-500">
                    <MapPin size={13} className="shrink-0" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-xl font-semibold text-zinc-100">
                      {item.title}
                    </h3>
                    <span className="text-sm font-medium text-violet-400">
                      {item.company}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-zinc-400">
                    {item.detail}
                  </p>

                  <ul className="mt-4 space-y-2 border-l border-white/10 pl-4 text-sm text-zinc-400">
                    {item.responsibilities.map((resp, i) => (
                      <li key={i} className="leading-relaxed">
                        • {resp}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2 pt-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

