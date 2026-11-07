"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export default function Hero() {
  return (
    <section id="top" className="relative pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C6F432]/30 bg-[#C6F432]/10 px-3 py-1 text-xs font-semibold text-[#C6F432]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C6F432] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#C6F432]" />
              </span>
              Available for Opportunities
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-[#FFFFFF] sm:text-5xl md:text-6xl">
              Sardar Umair <br />
              <span className="text-gradient">Nawaz Khan</span>
            </h1>

            <p className="mt-3 text-base font-semibold text-[#C6F432] sm:text-lg">
              {profile.role} · FAST-NUCES
            </p>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
              Computer Science undergraduate building production machine learning pipelines,
              cost-sensitive classification models, autonomous agent workflows, and asynchronous backend microservices.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a href="#projects" className="primary-button">
                Explore Projects
                <ArrowDown size={14} />
              </a>

              <div className="flex items-center gap-2">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition hover:border-[#C6F432] hover:text-[#C6F432]"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon size={16} />
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition hover:border-[#C6F432] hover:text-[#C6F432]"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon size={16} />
                </a>

                <a
                  href={`mailto:${profile.email}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition hover:border-[#C6F432] hover:text-[#C6F432]"
                  aria-label="Email Sardar Umair"
                  title="Send Email"
                >
                  <Mail size={16} />
                </a>
              </div>

              {/* Verified Chess & Puzzles stats mention (world rank removed as instructed) */}
              <a
                href={profile.chess}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-zinc-300 transition hover:border-[#C6F432] hover:text-[#C6F432]"
                title="Chess.com Profile"
              >
                <span className="text-[#C6F432]">♟</span>
                <span>1,363 Rapid · 4,592 Puzzles Solved</span>
                <ArrowUpRight size={11} />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-1.5 text-xs text-zinc-400">
              <span className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-0.5 font-medium">
                Machine Learning &amp; SMOTE
              </span>
              <span className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-0.5 font-medium">
                FastAPI &amp; Python
              </span>
              <span className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-0.5 font-medium">
                Autonomous Agents
              </span>
              <span className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-0.5 font-medium">
                Modern C++17
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[280px] lg:max-w-[320px]">
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/15 bg-[#161618] shadow-2xl transition hover:border-[#C6F432]/50">
              <Image
                src="/images/profile/profile.webp"
                alt="Sardar Umair Nawaz Khan"
                fill
                priority
                sizes="(max-width: 1024px) 280px, 320px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
