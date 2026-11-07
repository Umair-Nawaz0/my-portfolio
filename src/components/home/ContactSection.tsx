import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export default function ContactSection() {
  return (
    <section id="contact" className="border-t border-zinc-200 py-24 dark:border-white/10">
      <div className="container">
        <div className="glass-card relative overflow-hidden rounded-3xl p-8 sm:p-12 lg:p-16">
          <div className="max-w-2xl">
            <p className="section-label">Connect &amp; Collaborate</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl dark:text-white">
              Let&apos;s build something <span className="text-gradient">exceptional.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              I am open to AI engineering roles, technical collaborations, and software projects.
              Reach out directly via email or connect through LinkedIn.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="primary-button"
              >
                <Mail size={16} />
                <span>Send Email Directly</span>
                <ArrowUpRight size={14} />
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button"
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button"
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-zinc-200 pt-6 text-xs text-zinc-500 dark:border-white/10 dark:text-zinc-400">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-violet-500" />
                <span>{profile.location} (Remote Available)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-zinc-700 dark:text-zinc-300">Email:</span>
                <a
                  href={`mailto:${profile.email}`}
                  className="hover:underline hover:text-violet-600 dark:hover:text-violet-400"
                >
                  {profile.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
