import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { GithubIcon } from "@/components/ui/icons";

export default function FeaturedProjects() {
  const featured = projects.slice(0, 3);

  return (
    <section className="border-y border-white/10 py-28">
      <div className="container">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="section-label">Selected work</p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Featured Systems
              <span className="text-zinc-500"> &amp; Implementations.</span>
            </h2>
          </div>

          <Link
            href="/projects"
            className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
          >
            View all projects ({projects.length})
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="mt-14 space-y-4">
          {featured.map((project, index) => (
            <article
              key={project.slug}
              className="glass-card rounded-2xl p-6 transition-all duration-300 hover:border-violet-400/30 hover:bg-violet-500/[0.04] sm:p-8"
            >
              <div className="grid gap-8 md:grid-cols-[80px_1fr_auto] md:items-center">
                <span className="text-sm font-mono text-zinc-600">
                  0{index + 1}
                </span>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-xs uppercase tracking-[0.2em] text-violet-400">
                      {project.category}
                    </p>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-0.5 text-[11px] text-zinc-400 transition hover:border-violet-400/30 hover:text-white"
                      >
                        <GithubIcon size={12} /> GitHub
                      </a>
                    )}
                  </div>

                  <Link href={`/projects/${project.slug}`} className="group">
                    <h3 className="mt-2 text-xl font-medium text-white transition group-hover:text-violet-300 sm:text-2xl">
                      {project.title}
                    </h3>
                  </Link>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
                    {project.summary}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-all hover:border-violet-400/40 hover:bg-white hover:text-black"
                    title="View Case Study"
                  >
                    <ArrowUpRight size={17} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}