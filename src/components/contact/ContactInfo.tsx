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
    label: "Exact Location",
    value: profile.location,
    href: profile.mapsUrl,
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
        Reach out to Sardar Umair Nawaz Khan for technical inquiries, software engineering roles,
        agentic AI implementations, or systems collaborations.
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
              <span className="min-w-0 flex-1">
                <span className="block text-xs text-zinc-500">{label}</span>
                <span className="block text-sm font-medium text-zinc-200 break-words">{value}</span>
              </span>
            </div>
            {href.startsWith("http") && (
              <ArrowUpRight size={15} className="shrink-0 text-zinc-500" />
            )}
          </a>
        ))}
      </div>

      {/* Interactive Google Maps Card */}
      <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-xl">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-300">
            <MapPin size={14} />
            Interactive Google Map
          </div>
          <a
            href={profile.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-zinc-300 transition hover:text-white"
          >
            Open in Google Maps <ArrowUpRight size={13} />
          </a>
        </div>
        <div className="relative aspect-[16/9] w-full min-h-[220px]">
          <iframe
            src={profile.mapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location of Derawar Fort, Bahawalpur"
            className="absolute inset-0 h-full w-full opacity-90 transition-opacity hover:opacity-100"
          />
        </div>
      </div>
    </div>
  );
}
