import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { GithubIcon } from "@/components/ui/icons";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="border-t border-zinc-200 py-24 dark:border-white/10">
      <div className="container">
        <div className="max-w-2xl">
          <p className="section-label">Production &amp; Engineering Systems</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            Technical Projects &amp; <span className="text-gradient">Open Source.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            Real implementations covering autonomous agent orchestration, full-stack microservices,
            machine learning pipelines, and low-level systems.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="glass-card flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 hover:border-violet-400/40 hover:shadow-lg hover:shadow-violet-500/[0.03]"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-violet-700 dark:border-violet-400/20 dark:bg-violet-400/10 dark:text-violet-300">
                    {project.category}
                  </span>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-zinc-500 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                      aria-label={`${project.title} on GitHub`}
                    >
                      <GithubIcon size={14} />
                      <span>Code</span>
                      <ArrowUpRight size={12} />
                    </a>
                  )}
                </div>

                <h3 className="mt-4 text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                  {project.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.summary}
                </p>

                {project.features && project.features.length > 0 && (
                  <ul className="mt-4 space-y-1.5 border-t border-zinc-100 pt-3 text-[11px] text-zinc-500 dark:border-white/5 dark:text-zinc-400">
                    {project.features.slice(0, 2).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-violet-500">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-white/5">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-[10px] font-medium text-zinc-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="rounded-md border border-transparent px-1 py-0.5 text-[10px] text-zinc-400">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-zinc-200 bg-zinc-50/50 py-2 text-xs font-medium text-zinc-800 transition hover:border-violet-400 hover:bg-violet-50 hover:text-violet-700 dark:border-white/10 dark:bg-white/[0.02] dark:text-zinc-200 dark:hover:border-violet-400/40 dark:hover:bg-violet-500/10 dark:hover:text-white"
                  >
                    <GithubIcon size={13} />
                    View GitHub Repository
                    <ArrowUpRight size={13} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
