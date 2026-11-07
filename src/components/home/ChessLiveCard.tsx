"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

type ChessStats = {
  rapidRating: number;
  rapidPeak: number;
  puzzlesSolved: number;
  puzzleRating: number;
  puzzlePeak: number;
  profileUrl: string;
};

const defaultStats: ChessStats = {
  rapidRating: 1363,
  rapidPeak: 1431,
  puzzlesSolved: 4592,
  puzzleRating: 3581,
  puzzlePeak: 3599,
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
        // Keeps fallback data smoothly
      });
  }, []);

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8 transition-all hover:border-[#C6F432]/50">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#C6F432]/10 text-base text-[#C6F432]">
            ♟
          </span>
          <div>
            <h3 className="text-sm font-bold tracking-tight text-zinc-900 dark:text-[#FFFFFF]">
              Chess.com Official Stats
            </h3>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
              Verified account · @umair-nawaz
            </p>
          </div>
          <span className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-[#C6F432]/15 px-2.5 py-0.5 text-[10px] font-semibold text-[#C6F432]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C6F432] animate-pulse" />
            {isLive ? "Live Sync" : "Verified"}
          </span>
        </div>

        <a
          href={stats.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300 transition hover:border-[#C6F432] hover:text-[#C6F432]"
          title="Open Chess.com Profile"
        >
          <span>View Chess.com</span>
          <ArrowUpRight size={13} />
        </a>
      </div>

      {/* Prominent 2-Column Stats Grid */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {/* Card 1: Rapid Rating with Chess Illustration */}
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#161618] p-5 sm:p-6 transition hover:border-[#C6F432]/40">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#C6F432]">
                Rapid Chess Rating
              </p>
              <p className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                {stats.rapidRating.toLocaleString()}
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs text-zinc-400">
                <span className="rounded bg-white/5 px-2 py-0.5 text-zinc-300 font-medium">
                  Peak: {stats.rapidPeak}
                </span>
                <span>·</span>
                <span>1,615+ Wins</span>
              </div>
            </div>

            {/* Chess Piece Illustration */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#C6F432]/20 bg-[#C6F432]/10 text-[#C6F432]">
              <svg
                viewBox="0 0 24 24"
                width="32"
                height="32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-label="Chess Knight"
              >
                <path d="M19 20H5v-2c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v2z" fill="#C6F432" fillOpacity="0.2" />
                <path d="M16 16c0-3-1-4-2-5 1-1 1-3 0-4-1-1-3-1-4 0l-1 1c-1-1-3-1-4 0-1 1-1 3 0 4-1 1-2 2-2 5" />
                <path d="M12 4v4" />
                <circle cx="10" cy="9" r="1" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>

        {/* Card 2: Puzzles Solved with Puzzle Illustration */}
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#161618] p-5 sm:p-6 transition hover:border-[#C6F432]/40">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#C6F432]">
                Puzzles Solved
              </p>
              <p className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                {stats.puzzlesSolved.toLocaleString()}
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs text-zinc-400">
                <span className="rounded bg-white/5 px-2 py-0.5 text-zinc-300 font-medium">
                  Rating: {stats.puzzleRating}
                </span>
                <span>·</span>
                <span>Peak: {stats.puzzlePeak}</span>
              </div>
            </div>

            {/* Puzzle Piece Illustration */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#C6F432]/20 bg-[#C6F432]/10 text-[#C6F432]">
              <svg
                viewBox="0 0 24 24"
                width="32"
                height="32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-label="Puzzle Piece"
              >
                <path
                  d="M19.439 7.85c0-1.571-.802-2.85-1.791-2.85H16V3.85c0-.989-1.279-1.79-2.85-1.79-1.571 0-2.85.801-2.85 1.79V5H8.35c-.989 0-1.79 1.279-1.79 2.85 0 1.571.801 2.85 1.79 2.85H9.5v2.85c0 .989-1.279 1.79-2.85 1.79-1.571 0-2.85-.801-2.85-1.79V12H2.65C1.66 12 .86 13.28.86 14.85c0 1.57.8 2.85 1.79 2.85H5v1.45c0 .99 1.28 1.79 2.85 1.79 1.57 0 2.85-.8 2.85-1.79V19.5h2.85c.99 0 1.79-1.28 1.79-2.85 0-1.57-.8-2.85-1.79-2.85H12v-2.85c0-.99 1.28-1.79 2.85-1.79 1.57 0 2.85.8 2.85 1.79V12h1.45c.99 0 1.79-1.28 1.79-2.85 0-.47-.07-.9-.19-1.3z"
                  fill="#C6F432"
                  fillOpacity="0.2"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
