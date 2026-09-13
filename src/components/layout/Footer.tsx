import { Mail } from "lucide-react";
import Link from "next/link";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-[0.12em]">{profile.displayName.toUpperCase()}</p>

          <p className="mt-2 text-sm text-zinc-500">
            AI Systems &amp; Machine Learning Engineer
          </p>
        </div>

        <div className="flex items-center gap-5">
          <Link
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-sm text-zinc-500 transition-colors hover:text-white"
          >
            GitHub
          </Link>

          <Link
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-sm text-zinc-500 transition-colors hover:text-white"
          >
            LinkedIn
          </Link>

          <Link
            href="/contact"
            aria-label="Contact"
            className="text-zinc-500 transition-colors hover:text-white"
          >
            <Mail size={20} />
          </Link>
        </div>
      </div>

      <div className="container border-t border-white/5 py-6">
        <p className="text-xs text-zinc-600">
          © {new Date().getFullYear()} {profile.fullName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
