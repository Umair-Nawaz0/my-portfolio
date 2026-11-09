"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight, Award, FileText, GraduationCap, Mail, Phone, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            {/* Status Pill Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200/90 bg-emerald-50/90 px-4 py-1.5 text-xs font-semibold text-emerald-800 shadow-xs backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-600" />
              </span>
              <span>Available for AI Systems &amp; Software Engineering Roles</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-[4rem] leading-[1.08]">
              Sardar Umair <br />
              <span className="text-gradient">Nawaz Khan</span>
            </h1>

            {/* Role & Institution */}
            <div className="mt-3 flex flex-wrap items-center gap-2 text-base font-bold sm:text-lg">
              <span className="text-blue-700">{profile.role}</span>
              <span className="text-slate-300">·</span>
              <span className="text-indigo-900">FAST-NUCES</span>
              <span className="rounded-md bg-indigo-50 px-2 py-0.5 text-xs font-semibold text-indigo-700 border border-indigo-100">
                Aug 2024 — 2028
              </span>
            </div>

            {/* Summary Matching ATS Resume */}
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Computer Science undergraduate at <strong className="font-semibold text-slate-800">FAST-NUCES</strong> specializing in <strong className="font-semibold text-slate-800">Agentic AI systems</strong>, workflow automation, and high-performance backend architectures. Experienced in building autonomous multi-tool LLM workflows with LangChain &amp; n8n, training predictive ML models with PyTorch &amp; Scikit-learn, and designing asynchronous RESTful APIs in FastAPI, Node.js, and PHP.
            </p>

            {/* Quick Metrics Bar */}
            <div className="mt-6 flex flex-wrap gap-2.5 text-xs font-semibold">
              <div className="inline-flex items-center gap-1.5 rounded-xl border border-indigo-100 bg-white/90 px-3 py-1.5 text-slate-700 shadow-xs">
                <span className="text-blue-600">♟️</span>
                <span>1300+ Rapid Elo · 4,500+ Puzzles</span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-xl border border-indigo-100 bg-white/90 px-3 py-1.5 text-slate-700 shadow-xs">
                <Sparkles size={13} className="text-amber-500" />
                <span>PyTorch &amp; Scikit-learn ML</span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-xl border border-indigo-100 bg-white/90 px-3 py-1.5 text-slate-700 shadow-xs">
                <span className="text-indigo-600">⚡</span>
                <span>LangChain &amp; n8n Autonomous Agents</span>
              </div>
            </div>

            {/* Primary Action Buttons & Social Links */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="primary-button">
                <span>Explore Projects</span>
                <ArrowDown size={14} />
              </a>

              <a
                href="/Umair_Nawaz_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button"
              >
                <FileText size={15} className="text-blue-600" />
                <span>Resume PDF</span>
                <ArrowUpRight size={13} className="text-slate-400" />
              </a>

              <div className="flex items-center gap-2 pl-1">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/90 bg-white text-slate-600 shadow-xs transition hover:border-indigo-500 hover:text-indigo-600 hover:shadow-md hover:-translate-y-0.5"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon size={18} />
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/90 bg-white text-slate-600 shadow-xs transition hover:border-indigo-500 hover:text-indigo-600 hover:shadow-md hover:-translate-y-0.5"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon size={18} />
                </a>

                <a
                  href={profile.chess}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/90 bg-white text-slate-700 shadow-xs transition hover:border-indigo-500 hover:text-indigo-600 hover:shadow-md hover:-translate-y-0.5"
                  aria-label="Chess.com Profile"
                  title="Chess.com Official Profile (1300+ Rapid Elo)"
                >
                  <span className="text-base font-bold">♟</span>
                </a>

                <a
                  href={`mailto:${profile.email}`}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/90 bg-white text-slate-600 shadow-xs transition hover:border-indigo-500 hover:text-indigo-600 hover:shadow-md hover:-translate-y-0.5"
                  aria-label="Email Sardar Umair"
                  title="Send Email"
                >
                  <Mail size={18} />
                </a>

                <a
                  href={`tel:${profile.phoneRaw}`}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/90 bg-white text-slate-600 shadow-xs transition hover:border-indigo-500 hover:text-indigo-600 hover:shadow-md hover:-translate-y-0.5"
                  aria-label="Call Sardar Umair"
                  title={`Call / WhatsApp: ${profile.phone}`}
                >
                  <Phone size={17} />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Photo Showcase with Multi-Layer Gradient Frame & Floating Badges */}
          <div className="relative mx-auto w-full max-w-[320px] lg:max-w-[360px]">
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-400/30 via-indigo-400/30 to-purple-400/30 blur-2xl" />

            {/* Glowing Gradient Border Frame */}
            <div className="relative rounded-3xl p-1.5 bg-gradient-to-tr from-blue-600 via-indigo-500 to-violet-500 shadow-2xl shadow-indigo-500/20">
              <div className="relative aspect-[4/4.6] overflow-hidden rounded-[1.35rem] bg-white">
                <Image
                  src="/images/profile/profile.webp"
                  alt="Sardar Umair Nawaz Khan"
                  fill
                  priority
                  sizes="(max-width: 1024px) 320px, 360px"
                  className="object-cover object-top"
                />
                
                {/* Subtle bottom vignette to blend */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-900/30 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Floating Badge 1: Chess.com Top Tactician */}
            <div className="absolute -top-3 -right-4 rounded-2xl border border-indigo-100 bg-white/95 px-3.5 py-1.5 shadow-xl shadow-indigo-500/10 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-700">
                  ♟
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Tactics</p>
                  <p className="text-xs font-extrabold text-slate-900">1300+ Rapid Elo</p>
                </div>
              </div>
            </div>

            {/* Floating Badge 2: FAST-NUCES Undergrad */}
            <div className="absolute -bottom-4 -left-4 rounded-2xl border border-indigo-100 bg-white/95 px-3.5 py-1.5 shadow-xl shadow-indigo-500/10 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-50 text-indigo-700">
                  <GraduationCap size={13} />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Education</p>
                  <p className="text-xs font-extrabold text-slate-900">FAST-NUCES &apos;28</p>
                </div>
              </div>
            </div>

            {/* Floating Badge 3: Agentic AI Focus */}
            <div className="absolute -bottom-3 -right-3 rounded-2xl border border-emerald-100 bg-white/95 px-3.5 py-1.5 shadow-xl shadow-emerald-500/10 backdrop-blur-md">
              <div className="flex items-center gap-1.5">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <p className="text-xs font-extrabold text-slate-900">Agentic AI &amp; ML</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
