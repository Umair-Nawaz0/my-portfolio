"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <div className="hero-glow -left-64 top-20" />
      <div className="hero-glow -right-72 bottom-0 opacity-70" />

      <div className="site-grid absolute inset-0 opacity-40" />

      <div className="container relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/5 px-3 py-1.5 text-xs text-violet-200">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
              </span>

              Available for opportunities
            </div>

            <p className="section-label mb-5">
              AI Systems · Machine Learning · Automation
            </p>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[5.7rem]">
              AI Systems &amp;
              <br />
              <span className="text-gradient">ML Engineering.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
              AI Systems &amp; Machine Learning Engineer specializing in autonomous agent workflows,
              production-grade microservices, workflow automation pipelines, and robust predictive modeling.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/projects" className="primary-button">
                Explore projects
                <ArrowRight size={16} />
              </Link>

              <Link href="/contact" className="secondary-button">
                Get in touch
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs text-zinc-500">
              <span className="flex items-center gap-2">
                <Sparkles size={14} className="text-violet-400" />
                Autonomous Agents
              </span>

              <span>Machine Learning</span>
              <span>FastAPI &amp; Python</span>
              <span>Workflow Automation</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="absolute -inset-10 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="relative mx-auto aspect-[4/5] max-w-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/70 shadow-2xl shadow-violet-950/20">
              <Image
                src="/images/profile/profile.png"
                alt="Sardar Umair Nawaz Khan — AI Systems & Machine Learning Engineer"
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 420px"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>

        <div className="mt-16 flex items-center justify-center border-t border-white/10 pt-6 text-zinc-600">
          <Link
            href="#what-i-build"
            className="flex items-center gap-2 text-xs transition-colors hover:text-zinc-300"
          >
            Scroll to explore
            <ArrowDown size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
