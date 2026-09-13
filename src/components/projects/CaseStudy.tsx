import { ArrowLeft, ArrowUpRight, CheckCircle2, BarChart3, Layers, GitFork } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { GithubIcon } from "@/components/ui/icons";

export default function CaseStudy({ project }: { project: Project }) {
  return (
    <article className="pb-28 pt-36">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
          >
            <ArrowLeft size={16} /> All projects
          </Link>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-zinc-200 transition hover:border-violet-400/40 hover:bg-violet-400/10 hover:text-white"
            >
              <GithubIcon size={14} /> View on GitHub <ArrowUpRight size={14} />
            </a>
          )}
        </div>

        {/* Hero */}
        <div className="mt-10 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="section-label">{project.category}</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl md:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              {project.summary}
            </p>

            {project.githubUrl && (
              <div className="mt-7 flex items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-button"
                >
                  <GithubIcon size={16} /> Inspect Source Code <ArrowUpRight size={16} />
                </a>
              </div>
            )}
          </div>

          <div
            className={`min-h-56 rounded-3xl border border-white/10 bg-gradient-to-br ${project.accent} p-7`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              Primary Objective &amp; Outcome
            </p>
            <p className="mt-8 max-w-sm text-lg font-medium leading-7 text-white">
              {project.outcome}
            </p>
          </div>
        </div>

        {/* Architecture & Stack */}
        <div className="mt-16 grid gap-12 border-t border-white/10 pt-12 lg:grid-cols-[0.35fr_0.65fr]">
          <aside className="space-y-8">
            <div>
              <p className="section-label">Technology Stack</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((item) => (
                  <span
                    className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-zinc-300"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {project.metrics && project.metrics.length > 0 && (
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-300">
                  <BarChart3 size={15} />
                  Performance Benchmarks &amp; Results
                </div>
                <ul className="mt-3 space-y-2 text-xs text-zinc-400">
                  {project.metrics.map((metric) => (
                    <li key={metric} className="flex items-start gap-2">
                      <span className="text-violet-400">•</span>
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.githubUrl && (
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-300">
                  <GitFork size={14} className="text-violet-400" />
                  Repository Information
                </div>
                <p className="mt-2 text-xs text-zinc-400">
                  Published open-source on GitHub with documentation, architecture notes, and verification scripts.
                </p>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-violet-300 hover:text-white"
                >
                  Visit repository <ArrowUpRight size={13} />
                </a>
              </div>
            )}
          </aside>

          <div className="space-y-10">
            <div>
              <p className="section-label">Technical Overview &amp; Problem Statement</p>
              <p className="mt-4 text-base leading-7 text-zinc-300">
                {project.description}
              </p>
            </div>

            {project.architecture && (
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-zinc-200">
                  <Layers size={17} className="text-violet-400" />
                  System Architecture &amp; Methodology
                </div>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {project.architecture}
                </p>
              </div>
            )}

            {project.features && (
              <div>
                <p className="section-label">Core Capabilities &amp; Implementation Details</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {project.features.map((feature, i) => (
                    <div
                      className="glass-card flex items-start gap-3 rounded-2xl p-4 text-sm text-zinc-300 transition-all hover:border-violet-400/30"
                      key={i}
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-violet-400"
                      />
                      <span className="leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.025] p-8 sm:p-10">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="section-label">Next Steps</p>
              <h2 className="mt-2 text-2xl font-semibold text-zinc-100 sm:text-3xl">
                Interested in this implementation or architecture?
              </h2>
              <p className="mt-2 text-sm text-zinc-400">
                Available to discuss technical decisions, deployment tradeoffs, and engineering collaborations.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-button"
                >
                  <GithubIcon size={16} /> GitHub Repo
                </a>
              )}
              <Link href="/contact" className="primary-button shrink-0">
                Get in touch <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
