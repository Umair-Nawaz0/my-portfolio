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
    <section id="projects" className="border-t border-white/10 py-20">
      <div className="container">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="section-label">Verified Implementations</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-[#FFFFFF]">
              Machine Learning &amp; <span className="text-gradient italic">Systems</span>
            </h2>
            <p className="mt-2 max-w-xl text-sm text-zinc-600 dark:text-zinc-400">
              Open-source machine learning pipelines, autonomous agents, and systems architectures on GitHub.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1 rounded-xl border border-white/10 bg-[#161618] p-1">
            {(["All", "Machine Learning", "AI Agents & Systems", "Systems & Full-Stack"] as FilterTab[]).map(
              (tab) => {
                const count = projects.filter((p) => {
                  if (tab === "All") return true;
                  if (tab === "Machine Learning") return p.category === "Machine Learning";
                  if (tab === "AI Agents & Systems") return p.category === "AI Agents & Systems";
                  return p.category === "Full-Stack Web" || p.category === "Systems & C++";
                }).length;

                const isActive = activeTab === tab;

                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                      isActive
                        ? "bg-[#C6F432] text-[#0B0B0C] shadow-md shadow-[#C6F432]/20"
                        : "text-zinc-400 hover:text-white"
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
              className="glass-card flex flex-col justify-between rounded-xl p-5 transition-all duration-200 hover:border-[#C6F432]/40"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-md border border-[#C6F432]/25 bg-[#C6F432]/10 px-2 py-0.5 text-[10px] font-bold text-[#C6F432]">
                    {project.category}
                  </span>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-zinc-400 transition hover:text-[#C6F432]"
                    aria-label={`${project.title} on GitHub`}
                  >
                    <GithubIcon size={12} />
                    <span>GitHub</span>
                    <ArrowUpRight size={11} />
                  </a>
                </div>

                <h3 className="mt-3 text-base font-bold tracking-tight text-zinc-900 dark:text-[#FFFFFF]">
                  {project.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.summary}
                </p>

                {project.features && project.features.length > 0 && (
                  <ul className="mt-3 space-y-1 border-t border-white/5 pt-2.5 text-[11px] text-zinc-400">
                    {project.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-[#C6F432] font-bold">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-white/5">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-white/10 bg-white/[0.03] px-1.5 py-0.5 text-[10px] text-zinc-400 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3.5 inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] py-2 text-xs font-semibold text-zinc-300 transition hover:border-[#C6F432] hover:bg-[#C6F432]/10 hover:text-[#C6F432]"
                >
                  <GithubIcon size={13} />
                  <span>View Repository</span>
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
