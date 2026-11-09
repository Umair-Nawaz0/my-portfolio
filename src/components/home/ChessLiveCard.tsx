"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Award, CheckCircle2, Cpu } from "lucide-react";

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
    <div className="glass-card-featured rounded-3xl p-6 sm:p-8 shadow-xl transition-all duration-300">
      {/* Header Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-indigo-100/80">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-xl text-white shadow-md shadow-indigo-500/20">
            ♟
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-slate-900">
                Chess.com Profile
              </h3>
              <CheckCircle2 size={15} className="text-blue-600" />
            </div>
            <p className="text-xs text-slate-500">
              Handle: <span className="font-semibold text-slate-700">@umair-nawaz</span>
            </p>
          </div>
          <span className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-0.5 text-xs font-semibold text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {isLive ? "Live API" : "Verified"}
          </span>
        </div>

        <a
          href={stats.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-white border border-indigo-200 px-4 py-2 text-xs font-bold text-indigo-700 shadow-xs transition hover:border-indigo-400 hover:bg-indigo-50/50"
          title="Open Official Chess.com Profile"
        >
          <span>View on Chess.com</span>
          <ArrowUpRight size={13} />
        </a>
      </div>

      {/* Clean 2-Card Showcase */}
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {/* Card 1: Rapid Elo Rating */}
        <div className="relative overflow-hidden rounded-2xl border border-blue-200/80 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/40 p-6 shadow-xs">
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100/70 px-2.5 py-0.5 text-[11px] font-bold text-blue-800">
              <Award size={12} />
              Rapid
            </span>
            <span className="text-xs font-medium text-slate-500">
              Peak: <strong className="text-slate-800">{stats.rapidPeak}</strong>
            </span>
          </div>

          <div className="mt-4 flex items-baseline gap-2">
            <p className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              {stats.rapidRating}
            </p>
            <span className="text-sm font-semibold text-blue-700">Rapid Elo</span>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            10-minute rapid games rating on Chess.com
          </p>
        </div>

        {/* Card 2: Tactical Puzzles Solved */}
        <div className="relative overflow-hidden rounded-2xl border border-indigo-200/80 bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/40 p-6 shadow-xs">
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-100/70 px-2.5 py-0.5 text-[11px] font-bold text-indigo-800">
              <Cpu size={12} />
              Tactics
            </span>
            <span className="text-xs font-medium text-slate-500">
              Chess.com Puzzles
            </span>
          </div>

          <div className="mt-4 flex items-baseline gap-2">
            <p className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              {stats.puzzlesSolved ? stats.puzzlesSolved.toLocaleString() : "4,500+"}
            </p>
            <span className="text-sm font-semibold text-indigo-700">Solved</span>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            Tactical puzzles solved on Chess.com
          </p>
        </div>
      </div>
    </div>
  );
}
