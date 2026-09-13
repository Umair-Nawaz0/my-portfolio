"use client";

type Props = { active: string; onChange: (value: string) => void };

const filters = [
  "All",
  "AI Agents & Automation",
  "Machine Learning",
  "Systems & C++",
];

export default function ProjectFilter({ active, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2" aria-label="Filter projects">
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          onClick={() => onChange(filter)}
          className={`rounded-full border px-4 py-2 text-sm transition ${
            active === filter
              ? "project-filter-active border-violet-400/40 bg-violet-400/15 text-white"
              : "border-white/10 text-zinc-400 hover:border-white/25 hover:text-white"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
