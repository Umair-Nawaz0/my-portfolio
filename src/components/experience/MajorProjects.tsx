import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

export default function MajorProjects() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="section-label">Engineering Portfolio</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Key Technical Implementations.
            </h2>
            <p className="mt-3 max-w-2xl text-zinc-400">
              Deep dives into architecture diagrams, trade-offs, and source code.
            </p>
          </div>
          <Link className="secondary-button" href="/projects">
            All projects ({projects.length}) <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {projects.slice(0, 2).map((proj) => (
            <Link
              key={proj.slug}
              href={`/projects/${proj.slug}`}
              className="glass-card group rounded-2xl p-6 transition-all hover:border-violet-400/30"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs text-violet-300">
                  {proj.category}
                </span>
                <ExternalLink
                  size={15}
                  className="text-zinc-500 transition-colors group-hover:text-white"
                />
              </div>
              <h3 className="mt-4 text-lg font-medium text-zinc-100">{proj.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{proj.summary}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {proj.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-white/5 bg-white/[0.02] px-2 py-0.5 text-xs text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

