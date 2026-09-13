"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";

export default function ProjectGrid() {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? projects : projects.filter((project) => project.category === active);
  return <><ProjectFilter active={active} onChange={setActive} /><div className="mt-9 grid gap-5 md:grid-cols-2">{visible.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div></>;
}
