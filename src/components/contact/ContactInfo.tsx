import { BriefcaseBusiness, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { GithubIcon } from "@/components/ui/icons";

const links = [
  {
    icon: Mail,
    label: "Direct Email",
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
    value: "linkedin.com/in/umair-nawaz",
    href: profile.linkedin,
  },
  {
    icon: MapPin,
    label: "Location",
    value: profile.location,
    href: "https://www.google.com/maps/search/?api=1&query=Qila+Derawar%2C+Cholistan%2C+Bahawalpur%2C+Pakistan",
  },
];

export default function ContactInfo() {
  return (
    <div>
      <p className="section-label">Communication Channels</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl md:text-6xl">
        Get in touch.
      </h1>
      <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400">
        For technical inquiries, software engineering roles, agentic AI projects,
        or collaborative systems work, reach out via the form or through direct channels.
      </p>

      <div className="mt-10 space-y-3">
        {links.map(({ icon: Icon, label, value, href }) => (
          <a
            className="glass-card flex items-center justify-between gap-4 rounded-2xl p-4 transition hover:border-violet-400/30"
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            key={label}
          >
            <div className="flex items-center gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-violet-400/10 text-violet-300">
                <Icon size={18} />
              </span>
              <span>
                <span className="block text-xs text-zinc-500">{label}</span>
                <span className="text-sm font-medium text-zinc-200">{value}</span>
              </span>
            </div>
            {href.startsWith("http") && (
              <ArrowUpRight size={15} className="text-zinc-500" />
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
