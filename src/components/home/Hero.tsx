"use client";

import Image from "next/image";
import { ArrowDown, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-700 dark:border-violet-400/20 dark:bg-violet-400/10 dark:text-violet-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for Opportunities
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl dark:text-white">
              Sardar Umair <br />
              <span className="text-gradient">Nawaz Khan</span>
            </h1>

            <p className="mt-4 text-lg font-medium text-violet-600 dark:text-violet-400 sm:text-xl">
              {profile.role}
            </p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
              Computer Science undergraduate at FAST-NUCES specializing in autonomous AI agents,
              asynchronous backend architectures (FastAPI, PostgreSQL), and predictive machine learning systems.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="primary-button">
                View Projects
                <ArrowDown size={15} />
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="secondary-button"
              >
                <Mail size={15} />
                Get in Touch
              </a>

              <div className="flex items-center gap-2 pl-2">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition hover:border-violet-500 hover:text-violet-600 dark:border-white/10 dark:text-zinc-400 dark:hover:border-violet-400 dark:hover:text-white"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon size={18} />
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition hover:border-violet-500 hover:text-violet-600 dark:border-white/10 dark:text-zinc-400 dark:hover:border-violet-400 dark:hover:text-white"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon size={18} />
                </a>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-2 text-xs text-zinc-600 dark:text-zinc-400">
              <span className="rounded-md border border-zinc-200 bg-zinc-100 px-2.5 py-1 font-medium dark:border-white/10 dark:bg-white/[0.03]">
                Autonomous Agents
              </span>
              <span className="rounded-md border border-zinc-200 bg-zinc-100 px-2.5 py-1 font-medium dark:border-white/10 dark:bg-white/[0.03]">
                FastAPI &amp; Python
              </span>
              <span className="rounded-md border border-zinc-200 bg-zinc-100 px-2.5 py-1 font-medium dark:border-white/10 dark:bg-white/[0.03]">
                Machine Learning
              </span>
              <span className="rounded-md border border-zinc-200 bg-zinc-100 px-2.5 py-1 font-medium dark:border-white/10 dark:bg-white/[0.03]">
                Modern C++17
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="relative mx-auto aspect-square max-w-[340px] overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-100 shadow-xl dark:border-white/10 dark:bg-zinc-900">
              <Image
                src="/images/profile/profile.webp"
                alt="Sardar Umair Nawaz Khan"
                fill
                priority
                sizes="(max-width: 1024px) 320px, 340px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
