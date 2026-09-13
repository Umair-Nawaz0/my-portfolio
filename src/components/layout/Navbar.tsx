"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="container pt-4">
        <div className="theme-nav rounded-full border border-white/10 bg-black/60 px-3 py-2 backdrop-blur-2xl">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 px-3 py-2"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-bold text-black">
                U
              </span>

              <span className="text-sm font-semibold tracking-wide">
                {profile.displayName.toUpperCase()}
              </span>
            </Link>

            <div className="hidden items-center gap-1 md:flex">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-black/5 hover:text-zinc-900 dark:hover:bg-white/5 dark:hover:text-white ${pathname === item.href ? "nav-active bg-violet-500/10 text-violet-700 dark:bg-white/10 dark:text-white" : "text-zinc-600 dark:text-zinc-400"}`}
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href="/contact"
                className="nav-cta ml-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-opacity hover:opacity-85"
              >
                Let&apos;s Talk
              </Link>

              <ThemeToggle />
            </div>

            <div className="flex items-center gap-1 md:hidden"><ThemeToggle /><button type="button" onClick={() => setOpen((value) => !value)} className="rounded-full p-2 text-zinc-700 hover:bg-black/5 dark:text-zinc-300 dark:hover:bg-white/5" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X size={20} /> : <Menu size={20} />}</button></div>
          </div>

          {open && (
            <div className="border-t border-zinc-200 px-3 pb-3 pt-3 dark:border-white/10 md:hidden">
              <div className="flex flex-col">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-xl px-3 py-3 text-sm font-medium hover:bg-black/5 hover:text-zinc-900 dark:hover:bg-white/5 dark:hover:text-white ${pathname === item.href ? "nav-active bg-violet-500/10 text-violet-700 dark:bg-white/10 dark:text-white" : "text-zinc-600 dark:text-zinc-400"}`}
                  >
                    {item.name}
                  </Link>
                ))}

                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="nav-cta mt-2 rounded-xl bg-white px-4 py-3 text-center text-sm font-medium text-black"
                >
                  Let&apos;s Talk
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
