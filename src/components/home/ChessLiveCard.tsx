"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Award, CheckCircle2, Cpu, ShieldCheck, Zap } from "lucide-react";

type ChessStats = {
  rapidRating: number;
  rapidPeak: number;
  puzzlesSolved: number;
  profileUrl: string;
};

const defaultStats: ChessStats = {
  rapidRating: 1363,
  rapidPeak: 1431,
  puzzlesSolved: 4592,
  profileUrl: "https://www.chess.com/member/umair-nawaz",
};

export default function ChessLiveCard() {
  const [stats, setStats] = useState<ChessStats>(defaultStats);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    fetch("/api/chess")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && data.success) {
          setStats(data);
          setIsLive(true);
        }
      })
      .catch(() => {
        // Keeps fallback stats smoothly
      });
  }, []);

  return (
    <div className="glass-card-featured rounded-3xl p-6 sm:p-10 shadow-2xl transition-all duration-300 hover:shadow-indigo-500/10">
      {/* Header Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-indigo-100/90">
        <div className="flex items-center gap-3.5">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-2xl text-white shadow-md shadow-indigo-500/25">
            ♟
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-black tracking-tight text-slate-900">
                Official Chess.com Verified Profile
              </h3>
              <CheckCircle2 size={16} className="text-blue-600" />
            </div>
            <p className="text-xs font-semibold text-slate-500">
              Handle: <span className="font-bold text-slate-800">@umair-nawaz</span> · Competitive Match History
            </p>
          </div>
          <span className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-700 shadow-xs">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            {isLive ? "Live API Connected" : "Verified Account"}
          </span>
        </div>

        <a
          href={stats.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-white border border-indigo-200/90 px-5 py-2.5 text-xs font-bold text-indigo-700 shadow-sm transition hover:border-indigo-500 hover:bg-indigo-50/50 hover:shadow-md hover:-translate-y-0.5"
          title="Open Official Chess.com Profile"
        >
          <span>View Chess.com Profile</span>
          <ArrowUpRight size={14} />
        </a>
      </div>

      {/* Prominent High-Impact 2-Card Showcase */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {/* Card 1: Rapid Elo Rating */}
        <div className="relative overflow-hidden rounded-3xl border border-blue-200/90 bg-gradient-to-br from-white via-blue-50/40 to-indigo-50/50 p-8 shadow-sm transition-all hover:border-blue-400 hover:shadow-xl">
          {/* Subtle Ambient Background Watermark */}
          <div className="pointer-events-none absolute -right-6 -bottom-6 text-slate-900/5 select-none font-black text-9xl">
            ♟
          </div>

          <div className="relative z-10 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100/80 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-blue-800">
                  <Award size={13} />
                  Competitive Rapid Elo
                </span>
                <span className="rounded-full bg-white px-2.5 py-0.5 text-[11px] font-bold text-blue-700 border border-blue-200 shadow-xs">
                  Peak: {stats.rapidPeak} Elo
                </span>
              </div>

              {/* Huge Stat */}
              <div className="mt-5 flex items-baseline gap-3">
                <p className="text-5xl sm:text-6xl font-black tracking-tight text-slate-900">
                  1300+
                </p>
                <div className="flex flex-col">
                  <span className="text-base font-extrabold text-blue-700">Rapid Elo</span>
                  <span className="text-[11px] font-semibold text-slate-500">10-Minute Blitz/Rapid</span>
                </div>
              </div>

              {/* Sub-metrics */}
              <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-lg bg-white border border-blue-100 px-2.5 py-1 font-bold text-slate-800 shadow-xs">
                  1,615+ Match Victories
                </span>
                <span className="rounded-lg bg-white border border-blue-100 px-2.5 py-1 font-semibold text-slate-600 shadow-xs">
                  Deterministic Time Strategy
                </span>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-slate-600 sm:text-sm">
                Disciplined clock management, dynamic positional awareness, and rapid tactical execution under time pressure.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-blue-100/80 flex items-center gap-2 text-xs font-semibold text-blue-900">
              <Zap size={14} className="text-blue-600" />
              <span>Applied to engineering: Low-latency deterministic decision loops</span>
            </div>
          </div>
        </div>

        {/* Card 2: Tactical Puzzles Solved */}
        <div className="relative overflow-hidden rounded-3xl border border-indigo-200/90 bg-gradient-to-br from-white via-indigo-50/40 to-purple-50/50 p-8 shadow-sm transition-all hover:border-indigo-400 hover:shadow-xl">
          {/* Subtle Ambient Background Watermark */}
          <div className="pointer-events-none absolute -right-6 -bottom-6 text-slate-900/5 select-none font-black text-9xl">
            🧩
          </div>

          <div className="relative z-10 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-100/80 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-indigo-800">
                  <Cpu size={13} />
                  Tactical Puzzles Solved
                </span>
                <span className="rounded-full bg-white px-2.5 py-0.5 text-[11px] font-bold text-indigo-700 border border-indigo-200 shadow-xs">
                  4,500+ Verified
                </span>
              </div>

              {/* Huge Stat */}
              <div className="mt-5 flex items-baseline gap-3">
                <p className="text-5xl sm:text-6xl font-black tracking-tight text-slate-900">
                  4,500+
                </p>
                <div className="flex flex-col">
                  <span className="text-base font-extrabold text-indigo-700">Puzzles Solved</span>
                  <span className="text-[11px] font-semibold text-slate-500">Complex Combinations</span>
                </div>
              </div>

              {/* Sub-metrics */}
              <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-lg bg-white border border-indigo-100 px-2.5 py-1 font-bold text-slate-800 shadow-xs">
                  Combinatorial Pattern Recognition
                </span>
                <span className="rounded-lg bg-white border border-indigo-100 px-2.5 py-1 font-semibold text-slate-600 shadow-xs">
                  Pruning &amp; Calculation
                </span>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-slate-600 sm:text-sm">
                Deep algorithmic pattern recognition, deterministic decision trees, and forward-calculation under complex constraints.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-indigo-100/80 flex items-center gap-2 text-xs font-semibold text-indigo-900">
              <ShieldCheck size={14} className="text-indigo-600" />
              <span>Applied to engineering: Edge-case elimination and branch pruning</span>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Transfer to AI & Engineering Banner */}
      <div className="mt-8 rounded-2xl border border-indigo-100 bg-white/80 p-6 backdrop-blur-md">
        <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
          How Competitive Chess Sharpens Software Engineering &amp; AI
        </h4>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-4">
            <p className="text-xs font-bold text-slate-900">1. Forward-Branch Pruning</p>
            <p className="mt-1 text-[11px] leading-relaxed text-slate-600">
              Evaluating multi-ply candidate moves under constraints directly parallels designing deterministic state machines and tool-calling agent loops.
            </p>
          </div>
          <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-4">
            <p className="text-xs font-bold text-slate-900">2. Pattern Recognition</p>
            <p className="mt-1 text-[11px] leading-relaxed text-slate-600">
              Solving 4,500+ tactical puzzles builds acute instinct for edge cases, anomalies, and architectural vulnerabilities before they cause production faults.
            </p>
          </div>
          <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-4">
            <p className="text-xs font-bold text-slate-900">3. Time &amp; Resource Economy</p>
            <p className="mt-1 text-[11px] leading-relaxed text-slate-600">
              Clock management in 10-minute games trains ruthless prioritization, matching asynchronous API latency and compute cost budgets in LLM pipelines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
