import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export default function ContactSection() {
  return (
    <section id="contact" className="border-t border-zinc-200 py-20 dark:border-white/10">
      <div className="container">
        <div className="glass-card rounded-2xl p-8 sm:p-10">
          <div className="max-w-xl">
            <p className="section-label">Contact</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
              Get in Touch
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Open to machine learning engineering roles, AI agent development, and technical opportunities.
              Feel free to reach out directly via email or connect on LinkedIn.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="primary-button"
              >
                <Mail size={15} />
                <span>{profile.email}</span>
                <ArrowUpRight size={13} />
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button"
              >
                <GithubIcon size={15} />
                <span>GitHub</span>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button"
              >
                <LinkedinIcon size={15} />
                <span>LinkedIn</span>
              </a>
            </div>

            <div className="mt-8 flex items-center gap-2 border-t border-zinc-100 pt-5 text-xs text-zinc-500 dark:border-white/5 dark:text-zinc-400">
              <MapPin size={13} className="text-violet-500" />
              <span>{profile.location} · Remote Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
