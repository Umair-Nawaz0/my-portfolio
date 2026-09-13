"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";

export default function ProjectGrid() {
  const [active, setActive] = useState("All");

  const visible =
    active === "All"
      ? projects
      : projects.filter((project) => {
          if (active === "AI Agents & Automation") {
            return (
              project.category === "AI Agents & Automation" ||
              project.categories?.includes("AI Agents") ||
              project.categories?.includes("Automation")
            );
          }
          if (active === "AI Agents") {
            return (
              project.category === "AI Agents & Automation" ||
              project.categories?.includes("AI Agents")
            );
          }
          if (active === "Automation") {
            return (
              project.category === "AI Agents & Automation" ||
              project.categories?.includes("Automation")
            );
          }
          return (
            project.category === active ||
            project.categories?.includes(active)
          );
        });

  return (
    <>
      <ProjectFilter active={active} onChange={setActive} />
      <div className="mt-9 grid gap-5 md:grid-cols-2">
        {visible.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </>
  );
}
