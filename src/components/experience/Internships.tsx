import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const targetRoles = [
  "AI Engineer / LLM Systems Developer",
  "Backend Python / FastAPI Engineer",
  "Full-Stack Web Developer (Next.js / TypeScript)",
  "Machine Learning & AI Research Intern",
];

export default function Internships() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/[0.05] to-transparent p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="section-label">Opportunities &amp; Availability</p>
              <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
                Open for Engineering Roles &amp; Internships.
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-400">
                Available for software engineering positions and technical collaborations
                where I can design AI systems, write robust backend code, and deploy production workflows.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact" className="primary-button">
                  Reach out
                  <ArrowRight size={15} />
                </Link>
                <Link href="/resume" className="secondary-button">
                  View full resume
                </Link>
              </div>
            </div>

            <div className="space-y-3 rounded-2xl border border-white/10 bg-black/20 p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-violet-300">
                Target Roles
              </p>
              {targetRoles.map((role) => (
                <div key={role} className="flex items-center gap-3 text-sm text-zinc-300">
                  <CheckCircle2 size={16} className="shrink-0 text-violet-400" />
                  <span>{role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

