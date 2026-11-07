import { Mail } from "lucide-react";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-bold tracking-tight text-zinc-900 dark:text-[#FFFFFF]">
            {profile.fullName}
          </p>
          <p className="mt-1 text-xs text-zinc-400">
            AI Systems &amp; Machine Learning Engineer · FAST-NUCES
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-400">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#C6F432]"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#C6F432]"
          >
            LinkedIn
          </a>
          <a
            href={profile.chess}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#C6F432]"
          >
            Chess.com
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email Sardar Umair"
            className="flex items-center gap-1.5 transition-colors hover:text-[#C6F432]"
          >
            <Mail size={15} />
            <span>Email</span>
          </a>
          <a
            href="#top"
            className="transition-colors hover:text-[#C6F432]"
          >
            Top ↑
          </a>
        </div>
      </div>

      <div className="container mt-6 border-t border-white/5 pt-6">
        <p className="text-xs text-zinc-500">
          © {new Date().getFullYear()} {profile.fullName}. Built with Next.js &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
