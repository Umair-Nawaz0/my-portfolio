"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="container pt-4">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-[#0B0B0C]/85 px-4 py-2 backdrop-blur-xl">
          <Link
            href="#top"
            className="flex items-center gap-2.5 px-2 py-1 transition-opacity hover:opacity-85"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#C6F432] text-xs font-black text-[#0B0B0C]">
              U
            </span>
            <span className="text-sm font-bold tracking-tight text-[#FFFFFF]">
              {profile.displayName}
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="rounded-full px-4 py-1.5 text-sm font-medium text-zinc-400 transition-colors hover:text-[#C6F432]"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="rounded-full p-2 text-zinc-400 hover:text-white"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="mt-2 rounded-2xl border border-white/10 bg-[#0B0B0C]/95 p-4 shadow-2xl backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-300 transition hover:bg-white/5 hover:text-[#C6F432]"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
