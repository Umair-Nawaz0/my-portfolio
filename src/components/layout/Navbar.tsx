"use client";

import { FileText, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="container pt-4">
        <div className="flex items-center justify-between rounded-full border border-indigo-100/90 bg-white/85 px-4 py-2 shadow-lg shadow-slate-900/5 backdrop-blur-xl">
          <Link
            href="#top"
            className="flex items-center gap-2.5 px-2 py-1 transition-transform hover:scale-105"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 text-xs font-black text-white shadow-md shadow-indigo-500/30">
              U
            </span>
            <span className="text-sm font-extrabold tracking-tight text-slate-900">
              {profile.displayName}
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="rounded-full px-3.5 py-1.5 text-xs font-semibold text-slate-700 transition-all hover:bg-indigo-50 hover:text-indigo-600"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/Umair_Nawaz_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-4 py-2 text-xs font-bold text-white shadow-md shadow-indigo-500/25 transition-all hover:shadow-lg hover:shadow-indigo-500/40 hover:-translate-y-0.5"
              style={{ color: "#ffffff" }}
              title="View & Download Resume PDF"
            >
              <FileText size={13} className="text-white" />
              <span className="text-white">Resume PDF</span>
            </a>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="rounded-full p-2 text-slate-700 hover:bg-slate-100 md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="mt-2 rounded-2xl border border-indigo-100 bg-white/95 p-4 shadow-2xl backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-indigo-50 hover:text-indigo-600"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2 border-t border-slate-100 mt-1">
                <a
                  href="/Umair_Nawaz_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-indigo-500/25"
                  style={{ color: "#ffffff" }}
                >
                  <FileText size={15} className="text-white" />
                  <span className="text-white">Download Resume PDF</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
