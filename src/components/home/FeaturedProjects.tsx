"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { GithubIcon } from "@/components/ui/icons";

type FilterTab = "All" | "Machine Learning" | "AI Agents & Systems" | "Systems & Full-Stack";

export default function FeaturedProjects() {
  const [activeTab, setActiveTab] = useState<FilterTab>("All");

  const filteredProjects = projects.filter((project) => {
    if (activeTab === "All") return true;
    if (activeTab === "Machine Learning") return project.category === "Machine Learning";
    if (activeTab === "AI Agents & Systems") return project.category === "AI Agents & Systems";
    if (activeTab === "Systems & Full-Stack")
      return project.category === "Full-Stack Web" || project.category === "Systems & C++";
    return true;
  });

  return (
    <section id="projects" className="border-t border-zinc-200 py-20 dark:border-white/10">
      <div className="container">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="section-label">Verified Implementations</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
              Machine Learning &amp; Engineering Systems
            </h2>
            <p className="mt-2 max-w-xl text-sm text-zinc-600 dark:text-zinc-400">
              Open-source machine learning pipelines, autonomous agents, and systems architectures on GitHub.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 rounded-xl border border-zinc-200 bg-zinc-50 p-1 dark:border-white/10 dark:bg-zinc-900/50">
            {(["All", "Machine Learning", "AI Agents & Systems", "Systems & Full-Stack"] as FilterTab[]).map(
              (tab) => {
                const count = projects.filter((p) => {
                  if (tab === "All") return true;
                  if (tab === "Machine Learning") return p.category === "Machine Learning";
                  if (tab === "AI Agents & Systems") return p.category === "AI Agents & Systems";
                  return p.category === "Full-Stack Web" || p.category === "Systems & C++";
                }).length;

                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`rounded-lg px-3 py-1 text-xs font-medium transition-all ${
                      activeTab === tab
                        ? "bg-zinc-900 text-white shadow-sm dark:bg-white dark:text-black"
                        : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                    }`}
                  >
                    {tab} ({count})
                  </button>
                );
              }
            )}
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.slug}
              className="glass-card flex flex-col justify-between rounded-xl p-5 transition-all duration-200 hover:border-violet-500/40"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-md border border-zinc-200 bg-zinc-100 px-2 py-0.5 text-[10px] font-semibold text-zinc-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300">
                    {project.category}
                  </span>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-zinc-500 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                    aria-label={`${project.title} on GitHub`}
                  >
                    <GithubIcon size={12} />
                    <span>GitHub</span>
                    <ArrowUpRight size={11} />
                  </a>
                </div>

                <h3 className="mt-3 text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                  {project.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.summary}
                </p>

                {project.features && project.features.length > 0 && (
                  <ul className="mt-3 space-y-1 border-t border-zinc-100 pt-2.5 text-[11px] text-zinc-500 dark:border-white/5 dark:text-zinc-400">
                    {project.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-violet-500">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-white/5">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-zinc-200 bg-zinc-50 px-1.5 py-0.5 text-[10px] text-zinc-600 dark:border-white/10 dark:bg-white/[0.02] dark:text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex w-full items-center justify-center gap-1 rounded-lg border border-zinc-200 bg-zinc-50/50 py-1.5 text-xs font-medium text-zinc-700 transition hover:border-zinc-400 hover:text-zinc-900 dark:border-white/10 dark:bg-white/[0.02] dark:text-zinc-300 dark:hover:border-white/20 dark:hover:text-white"
                >
                  <GithubIcon size={12} />
                  <span>View Repository</span>
                  <ArrowUpRight size={11} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
