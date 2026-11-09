import { FileText, Mail, Phone } from "lucide-react";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-indigo-100 bg-white/90 py-14 backdrop-blur-md">
      <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-base font-black tracking-tight text-slate-900">
            {profile.fullName}
          </p>
          <p className="mt-1 text-xs font-semibold text-slate-500">
            AI Systems &amp; Machine Learning Engineer · FAST-NUCES (BSCS 2024–2028)
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs font-bold text-slate-600">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-indigo-600"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-indigo-600"
          >
            LinkedIn
          </a>
          <a
            href={profile.chess}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 transition-colors hover:text-indigo-600"
          >
            <span>♟ Chess.com (1300+ Rapid)</span>
          </a>
          <a
            href="/Umair_Nawaz_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-indigo-600"
          >
            <FileText size={13} />
            <span>Resume</span>
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email Sardar Umair"
            className="flex items-center gap-1.5 transition-colors hover:text-indigo-600"
          >
            <Mail size={13} />
            <span>Email</span>
          </a>
          <a
            href={`tel:${profile.phoneRaw}`}
            aria-label="Call Sardar Umair"
            className="flex items-center gap-1.5 transition-colors hover:text-indigo-600"
          >
            <Phone size={13} />
            <span>{profile.phone}</span>
          </a>
          <a
            href="#top"
            className="transition-colors hover:text-indigo-600"
          >
            Top ↑
          </a>
        </div>
      </div>

      <div className="container mt-8 border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
        <p>
          © {new Date().getFullYear()} {profile.fullName}. Built with Next.js, React 19 &amp; Tailwind CSS.
        </p>
        <p>
          Derawar Fort, Bahawalpur, Punjab, Pakistan
        </p>
      </div>
    </footer>
  );
}
