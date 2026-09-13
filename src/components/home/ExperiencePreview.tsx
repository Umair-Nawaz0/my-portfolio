import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ExperiencePreview() {
  return (
    <section className="py-28">
      <div className="container">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/[0.08] via-transparent to-blue-500/[0.05] p-8 sm:p-12">
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="section-label">Experience &amp; Background</p>

              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Engineering, freelance development, and academic foundations.
              </h2>

              <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
                A track record of shipping production workflows, client web applications,
                and technical research in artificial intelligence.
              </p>
            </div>

            <Link href="/experience" className="secondary-button">
              View full timeline
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}