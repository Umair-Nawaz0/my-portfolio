import { education } from "@/data/education";


export default function Education() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="max-w-2xl">
          <p className="section-label">Academic Background</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Formal Education &amp; Training.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {education.map((item, index) => (
            <article
              className="glass-card relative flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 hover:border-violet-400/30 sm:p-7"
              key={item.stage}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.2em] text-violet-300">
                    0{index + 1}
                  </span>
                  <span className="text-xs text-zinc-500">{item.period}</span>
                </div>

                <h3 className="mt-6 text-xl font-semibold text-zinc-100">{item.stage}</h3>
                <p className="mt-1 text-sm font-medium text-violet-400">{item.institution}</p>
                <p className="mt-3 text-xs leading-5 text-zinc-400">{item.focus}</p>

                {item.coursework && (
                  <div className="mt-5 border-t border-white/10 pt-4">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                      Key Coursework
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {item.coursework.map((course) => (
                        <span
                          key={course}
                          className="rounded border border-white/5 bg-white/[0.02] px-2 py-0.5 text-[11px] text-zinc-400"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-6 border-t border-white/10 pt-4">
                <span className="text-xs text-zinc-500">Result: </span>
                <span className="text-xs font-semibold text-zinc-200">{item.result}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

