"use client";

import { useState } from "react";
import { ArrowUpRight, Code, Sparkles } from "lucide-react";
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

  const getCategoryStyles = (category: string) => {
    switch (category) {
      case "Machine Learning":
        return "bg-purple-50 text-purple-700 border-purple-200";
      case "AI Agents & Systems":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "Full-Stack Web":
        return "bg-sky-50 text-sky-700 border-sky-200";
      case "Systems & C++":
        return "bg-indigo-50 text-indigo-700 border-indigo-200";
      default:
        return "bg-slate-50 text-slate-700 border-slate-200";
    }
  };

  return (
    <section id="projects" className="relative border-t border-indigo-100/70 py-24 bg-white/50">
      <div className="container relative z-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="section-label">
              <Sparkles size={12} className="text-indigo-600" />
              Verified Implementations
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Machine Learning &amp; <span className="text-gradient">Systems Projects</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm sm:text-base text-slate-600 leading-relaxed">
              Open-source machine learning pipelines, autonomous agents, and systems architectures verified with live codebases on GitHub.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 rounded-2xl border border-indigo-100 bg-white/90 p-1.5 shadow-sm backdrop-blur-md overflow-x-auto max-w-full shrink-0">
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
                    className={`rounded-xl px-3.5 py-2 text-xs font-bold whitespace-nowrap transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/20"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"
                    }`}
                    style={isActive ? { color: "#ffffff" } : undefined}
                  >
                    {tab} ({count})
                  </button>
                );
              }
            )}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.slug}
              className="glass-card flex flex-col justify-between rounded-2xl p-7 transition-all duration-300 hover:border-indigo-400 hover:shadow-xl hover:-translate-y-1.5"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`rounded-full border px-3 py-0.5 text-[11px] font-extrabold ${getCategoryStyles(
                      project.category
                    )}`}
                  >
                    {project.category}
                  </span>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 transition hover:text-indigo-600"
                    aria-label={`${project.title} on GitHub`}
                  >
                    <GithubIcon size={14} />
                    <span>GitHub</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>

                <h3 className="mt-4 text-base font-black tracking-tight text-slate-900 leading-snug">
                  {project.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-600">
                  {project.summary}
                </p>

                {project.features && project.features.length > 0 && (
                  <ul className="mt-4 space-y-2 border-t border-slate-100 pt-3.5 text-xs text-slate-600">
                    {project.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-indigo-600 font-bold shrink-0 mt-0.5">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-slate-200/80 bg-white/90 px-2.5 py-1 text-[11px] text-slate-700 font-semibold shadow-2xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-indigo-100 bg-white py-2.5 text-xs font-bold text-slate-800 shadow-xs transition hover:border-indigo-500 hover:bg-indigo-50/50 hover:text-indigo-600"
                >
                  <GithubIcon size={15} />
                  <span>View Repository</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
