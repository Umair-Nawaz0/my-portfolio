import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { GithubIcon } from "@/components/ui/icons";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="glass-card relative flex h-full flex-col justify-between overflow-hidden rounded-3xl p-6 transition duration-300 hover:-translate-y-1.5 hover:border-violet-400/35 sm:p-7">
      <div className={`absolute inset-x-0 top-0 h-40 bg-gradient-to-br ${project.accent} opacity-80 pointer-events-none`} />
      
      <div>
        <div className="relative flex items-start justify-between">
          <span className="text-xs font-mono tracking-[0.22em] text-violet-600 dark:text-violet-200">0{index + 1}</span>
          <span className="rounded-full border border-zinc-200 bg-zinc-100/90 px-3 py-1 text-xs font-medium text-zinc-700 dark:border-white/10 dark:bg-black/40 dark:text-zinc-300 backdrop-blur-sm">
            {project.category}
          </span>
        </div>

        <div className="relative mt-8">
          <Link href={`/projects/${project.slug}`} className="group">
            <h2 className="text-xl font-semibold tracking-tight text-zinc-900 transition group-hover:text-violet-600 dark:text-white dark:group-hover:text-violet-300 sm:text-2xl">
              {project.title}
            </h2>
          </Link>
          <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            {project.summary}
          </p>
        </div>

        <div className="relative mt-5 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((item) => (
            <span
              className="rounded-full border border-zinc-200 bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:border-white/10 dark:bg-white/[0.02] dark:text-zinc-400"
              key={item}
            >
              {item}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="rounded-full border border-zinc-200 bg-zinc-100/60 px-2 py-0.5 text-xs font-medium text-zinc-600 dark:border-white/5 dark:bg-transparent dark:text-zinc-500">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>

      <div className="relative mt-7 flex items-center justify-between border-t border-zinc-200 pt-5 dark:border-white/10">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-900 transition hover:text-violet-600 dark:text-white dark:hover:text-violet-300"
        >
          Case study <ArrowUpRight size={14} />
        </Link>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 transition hover:border-violet-400 hover:bg-violet-50 hover:text-violet-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300 dark:hover:border-violet-400/40 dark:hover:bg-violet-400/10 dark:hover:text-white"
            title="View GitHub Repository"
          >
            <GithubIcon size={12} /> GitHub
          </a>
        )}
      </div>
    </article>
  );
}
