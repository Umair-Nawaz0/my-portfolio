import { Mail } from "lucide-react";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-10 dark:border-white/10">
      <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            {profile.fullName}
          </p>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
            AI Systems &amp; Machine Learning Engineer · FAST-NUCES
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-600 dark:text-zinc-400">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-zinc-900 dark:hover:text-white"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-zinc-900 dark:hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email Sardar Umair"
            className="flex items-center gap-1.5 transition-colors hover:text-zinc-900 dark:hover:text-white"
          >
            <Mail size={16} />
            <span>Email</span>
          </a>
          <a
            href="#top"
            className="transition-colors hover:text-zinc-900 dark:hover:text-white"
          >
            Back to Top ↑
          </a>
        </div>
      </div>

      <div className="container mt-6 border-t border-zinc-100 pt-6 dark:border-white/5">
        <p className="text-xs text-zinc-400 dark:text-zinc-600">
          © {new Date().getFullYear()} {profile.fullName}. Built with Next.js &amp; Tailwind CSS. Hosted on Vercel.
        </p>
      </div>
    </footer>
  );
}
