import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="pb-28 pt-4">
      <div className="container">
        <div className="glass-card relative overflow-hidden rounded-3xl border border-zinc-200 px-6 py-20 text-center sm:px-12 dark:border-white/10">
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="relative">
            <p className="section-label">Collaboration &amp; Opportunities</p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Open to AI Engineering
              <span className="text-gradient"> &amp; Development.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-zinc-600 dark:text-zinc-400">
              Available for technical roles, autonomous agent development, RAG systems,
              and freelance software engineering.
            </p>

            <Link
              href="/contact"
              className="primary-button mt-8"
            >
              Get in touch
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

