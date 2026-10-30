import { BriefcaseBusiness, Mail, MapPin, ArrowUpRight, Clock, CheckCircle } from "lucide-react";
import { profile } from "@/data/profile";
import { GithubIcon } from "@/components/ui/icons";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/Umair-Nawaz0",
    href: profile.github,
  },
  {
    icon: BriefcaseBusiness,
    label: "LinkedIn",
    value: "linkedin.com/in/sardar-umair-nawaz-khan",
    href: profile.linkedin,
  },
  {
    icon: MapPin,
    label: "Location",
    value: profile.location,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(profile.location)}`,
  },
];

export default function ContactInfo() {
  return (
    <div>
      <p className="section-label">Communication &amp; Opportunities</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl md:text-6xl">
        Get in touch.
      </h1>
      <p className="mt-6 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
        Interested in collaborating, hiring for AI/backend engineering roles, or discussing agentic architectures? Reach out directly through any of the channels below.
      </p>

      <div className="mt-10 space-y-3">
        {links.map(({ icon: Icon, label, value, href }) => (
          <a
            className="glass-card flex items-center justify-between gap-4 rounded-2xl p-4 transition hover:border-violet-400/30 hover:bg-violet-500/[0.02]"
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            key={label}
          >
            <div className="flex items-center gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-violet-500/10 text-violet-600 dark:bg-violet-400/10 dark:text-violet-300">
                <Icon size={18} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs text-zinc-500">{label}</span>
                <span className="block text-sm font-medium text-zinc-900 dark:text-zinc-200 break-words">{value}</span>
              </span>
            </div>
            {href.startsWith("http") && (
              <ArrowUpRight size={15} className="shrink-0 text-zinc-500" />
            )}
          </a>
        ))}
      </div>

      <div className="glass-card mt-8 rounded-2xl border border-zinc-200 p-6 dark:border-white/10">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-300">
          <Clock size={15} />
          Availability &amp; Work Status
        </div>
        <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
          Actively available for software engineering roles, AI agent development, and systems consulting. Typically responds within 24 hours.
        </p>
        <div className="mt-4 flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400">
          <CheckCircle size={14} />
          <span>Open to remote &amp; on-site opportunities</span>
        </div>
      </div>
    </div>
  );
}
