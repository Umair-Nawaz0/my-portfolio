import { education } from "@/data/education";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="max-w-2xl">
          <p className="section-label">Academic Foundations</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Education &amp; Training.
          </h2>
        </div>

        <div className="mt-10 max-w-3xl">
          {education.map((item) => (
            <article
              className="glass-card relative rounded-3xl p-7 transition-all duration-300 hover:border-violet-400/30 sm:p-9"
              key={item.stage}
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 dark:bg-violet-400/10 dark:text-violet-300">
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">{item.stage}</h3>
                    <p className="text-sm font-medium text-violet-600 dark:text-violet-400">{item.institution}</p>
                  </div>
                </div>
                <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3.5 py-1 text-xs font-medium text-zinc-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300">
                  {item.period}
                </span>
              </div>

              <p className="mt-5 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Focused on {item.focus}. Rigorous curriculum combining theoretical computer science foundations with hands-on systems programming and artificial intelligence implementations.
              </p>

              {item.coursework && (
                <div className="mt-6 border-t border-zinc-200 pt-5 dark:border-white/10">
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Core Computer Science &amp; Engineering Coursework
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.coursework.map((course) => (
                      <span
                        key={course}
                        className="rounded-lg border border-zinc-200 bg-zinc-100/70 px-3 py-1 text-xs font-medium text-zinc-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
