import { Mail, MapPin, GraduationCap, Code, Briefcase } from "lucide-react";

import { profile } from "@/data/profile";
import { experience } from "@/data/experience";
import { education } from "@/data/education";
import { skillGroups } from "@/data/skills";

export default function ResumePreview() {
  return (
    <div className="glass-card w-full rounded-3xl p-6 shadow-2xl sm:p-10">
      {/* Resume Header */}
      <div className="border-b border-white/10 pb-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
          <div>
            <h2 className="text-2xl font-bold text-zinc-100 sm:text-3xl">
              {profile.fullName}
            </h2>
            <p className="mt-1 text-base font-medium text-violet-400">
              AI Systems &amp; Machine Learning Engineer
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-xs text-zinc-400 sm:flex-col sm:items-end sm:text-right">
            <span className="flex items-center gap-1.5">
              <Mail size={13} className="text-violet-400" />
              {profile.email}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={13} className="text-violet-400" />
              {profile.location}
            </span>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="mt-6 border-b border-white/10 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-300">
          <GraduationCap size={15} />
          Education
        </div>
        <div className="mt-3 space-y-4">
          {education.map((edu) => (
            <div key={edu.stage} className="text-sm">
              <div className="flex flex-wrap justify-between gap-1">
                <span className="font-semibold text-zinc-200">{edu.stage} — {edu.institution}</span>
                <span className="text-xs text-zinc-500">{edu.period}</span>
              </div>
              <p className="text-xs text-zinc-400">{edu.focus} · <span className="font-medium text-zinc-300">{edu.result}</span></p>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Skills */}
      <div className="mt-6 border-b border-white/10 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-300">
          <Code size={15} />
          Technical Skills
        </div>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title} className="text-xs">
              <span className="font-semibold text-zinc-200">{group.title}: </span>
              <span className="text-zinc-400">{group.skills.join(", ")}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="mt-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-300">
          <Briefcase size={15} />
          Experience &amp; Technical Roles
        </div>
        <div className="mt-4 space-y-5">
          {experience.map((item) => (
            <div key={item.title + item.company} className="text-sm">
              <div className="flex flex-wrap justify-between gap-1">
                <span className="font-semibold text-zinc-200">{item.title} — {item.company}</span>
                <span className="text-xs text-zinc-500">{item.period}</span>
              </div>
              <p className="mt-1 text-xs text-zinc-400">{item.detail}</p>
              <ul className="mt-2 space-y-1 text-xs text-zinc-400">
                {item.responsibilities.slice(0, 3).map((r, i) => (
                  <li key={i}>• {r}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
