"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="container pt-4">
        <div className="theme-nav flex items-center justify-between rounded-full border border-white/10 bg-black/60 px-4 py-2 backdrop-blur-xl">
          <Link
            href="#top"
            className="flex items-center gap-2.5 px-2 py-1 transition-opacity hover:opacity-80"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-violet-600 text-xs font-bold text-white dark:bg-white dark:text-black">
              U
            </span>
            <span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-white">
              {profile.displayName}
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="rounded-full px-4 py-1.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-black/5 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white"
              >
                {item.name}
              </a>
            ))}

            <a
              href={`mailto:${profile.email}`}
              className="nav-cta ml-3 rounded-full bg-zinc-900 px-4 py-1.5 text-sm font-medium text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-black"
            >
              Get in Touch
            </a>

            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="rounded-full p-2 text-zinc-700 hover:bg-black/5 dark:text-zinc-300 dark:hover:bg-white/5"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="mt-2 rounded-2xl border border-zinc-200 bg-white/95 p-4 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/95 md:hidden">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-black/5 dark:text-zinc-300 dark:hover:bg-white/5"
                >
                  {item.name}
                </a>
              ))}

              <a
                href={`mailto:${profile.email}`}
                onClick={() => setOpen(false)}
                className="mt-2 rounded-xl bg-violet-600 px-4 py-2.5 text-center text-sm font-medium text-white transition hover:bg-violet-700 dark:bg-white dark:text-black"
              >
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
