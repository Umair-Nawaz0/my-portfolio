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
          className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
            active === filter
              ? "project-filter-active border-violet-500 bg-violet-600 text-white dark:border-violet-400/40 dark:bg-violet-400/15 dark:text-white"
              : "border-zinc-200 bg-white/70 text-zinc-600 hover:border-zinc-300 hover:text-zinc-900 dark:border-white/10 dark:bg-transparent dark:text-zinc-400 dark:hover:border-white/25 dark:hover:text-white"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
