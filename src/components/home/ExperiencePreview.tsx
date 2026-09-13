import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ExperiencePreview() {
  return (
    <section className="py-28">
      <div className="container">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/[0.08] via-transparent to-blue-500/[0.05] p-8 sm:p-12">
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="section-label">Engineering Journey</p>

              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Open-source systems, practical implementations, and academic foundations.
              </h2>

              <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
                A genuine track record of building production-grade autonomous agents, containerized workflow automations,
                and mathematically grounded machine learning models.
              </p>
            </div>

            <Link href="/experience" className="secondary-button">
              Explore journey
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}