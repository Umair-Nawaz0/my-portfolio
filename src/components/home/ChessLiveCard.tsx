"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Trophy, Zap } from "lucide-react";

type ChessStats = {
  rapidRating: number;
  rapidPeak: number;
  puzzlesSolved: number;
  puzzleRating: number;
  puzzlePeak: number;
  globalRank: string;
  percentile: number;
  totalPlayers: string;
  profileUrl: string;
};

const defaultStats: ChessStats = {
  rapidRating: 1363,
  rapidPeak: 1431,
  puzzlesSolved: 4592,
  puzzleRating: 3581,
  puzzlePeak: 3599,
  globalRank: "#6,418",
  percentile: 99.9,
  totalPlayers: "62.9M+",
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
        // Keeps fallback stats safely
      });
  }, []);

  return (
    <div className="glass-card rounded-2xl p-4 sm:p-5 transition-all hover:border-violet-500/40">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-base">♟</span>
          <span className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-200">
            Chess.com Global Standing
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {isLive ? "Live Sync" : "Verified"}
          </span>
        </div>

        <a
          href={stats.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs text-zinc-500 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          title="View profile on Chess.com"
        >
          <span>@umair-nawaz</span>
          <ArrowUpRight size={12} />
        </a>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-4 border-t border-zinc-100 pt-3 dark:border-white/5">
        <div className="rounded-xl border border-zinc-200 bg-zinc-50/70 p-2.5 dark:border-white/10 dark:bg-white/[0.02]">
          <div className="flex items-center gap-1 text-[11px] text-zinc-500 dark:text-zinc-400">
            <Zap size={12} className="text-amber-500" />
            <span>Rapid Rating</span>
          </div>
          <p className="mt-1 text-base sm:text-lg font-bold text-zinc-900 dark:text-white">
            {stats.rapidRating.toLocaleString()}
          </p>
          <p className="text-[10px] text-zinc-400">Peak: {stats.rapidPeak}</p>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-zinc-50/70 p-2.5 dark:border-white/10 dark:bg-white/[0.02]">
          <div className="flex items-center gap-1 text-[11px] text-zinc-500 dark:text-zinc-400">
            <Trophy size={12} className="text-violet-500" />
            <span>Puzzles Solved</span>
          </div>
          <p className="mt-1 text-base sm:text-lg font-bold text-zinc-900 dark:text-white">
            {stats.puzzlesSolved.toLocaleString()}
          </p>
          <p className="text-[10px] text-zinc-400">Rating: {stats.puzzleRating}</p>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-zinc-50/70 p-2.5 dark:border-white/10 dark:bg-white/[0.02]">
          <div className="flex items-center gap-1 text-[11px] text-zinc-500 dark:text-zinc-400">
            <span className="text-emerald-500 font-bold text-[10px]">#1</span>
            <span>World Rank</span>
          </div>
          <p className="mt-1 text-base sm:text-lg font-bold text-emerald-600 dark:text-emerald-400">
            {stats.globalRank}
          </p>
          <p className="text-[10px] text-zinc-400">Top {100 - stats.percentile}% Globally</p>
        </div>
      </div>
    </div>
  );
}
