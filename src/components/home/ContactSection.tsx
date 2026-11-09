import { ArrowUpRight, FileText, Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export default function ContactSection() {
  return (
    <section id="contact" className="relative border-t border-indigo-100/70 py-24 bg-white/70">
      <div className="container relative z-10">
        <div className="glass-card-featured rounded-3xl p-8 sm:p-14 border border-indigo-200/90 shadow-2xl transition-all duration-300 hover:shadow-indigo-500/10">
          <div className="max-w-3xl">
            <span className="section-label">
              <Send size={12} className="text-indigo-600" />
              Direct Communication
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Let&apos;s build something <span className="text-gradient">exceptional.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
              Open to AI Systems Engineering roles, Machine Learning research, and backend infrastructure opportunities. Feel free to reach out directly via email or connect on LinkedIn and GitHub.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href={`mailto:${profile.email}`}
                className="primary-button text-sm"
              >
                <Mail size={16} />
                <span>{profile.email}</span>
                <ArrowUpRight size={14} />
              </a>

              <a
                href={`tel:${profile.phoneRaw}`}
                className="secondary-button text-sm"
              >
                <Phone size={16} className="text-emerald-600" />
                <span>{profile.phone}</span>
              </a>

              <a
                href="/Umair_Nawaz_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button text-sm"
              >
                <FileText size={16} className="text-blue-600" />
                <span>Download Resume</span>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button text-sm"
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button text-sm"
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
              </a>

              <a
                href={profile.chess}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button text-sm"
              >
                <span className="font-bold">♟</span>
                <span>Chess.com</span>
              </a>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-indigo-100/80 pt-6 text-xs font-semibold text-slate-500">
              <div className="flex items-center gap-1.5">
                <MapPin size={15} className="text-blue-600 shrink-0" />
                <span>{profile.fullAddress}</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-700 shrink-0">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Remote &amp; On-Site Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
