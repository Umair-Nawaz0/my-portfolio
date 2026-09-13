import { Code2, ArrowUpRight } from "lucide-react";

import Link from "next/link";
import { profile } from "@/data/profile";

export default function OpenSource() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="flex flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:flex-row sm:items-center sm:p-10">
          <div>
            <p className="section-label">Open Source &amp; Code</p>
            <h3 className="mt-2 text-2xl font-semibold text-zinc-100">
              Public repositories, experiments &amp; AI utilities.
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-400">
              Code repositories featuring agent workflows, RAG starter kits, and full-stack implementations.
            </p>
          </div>
          <Link
            className="secondary-button shrink-0"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Code2 size={16} />
            Explore on GitHub
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

