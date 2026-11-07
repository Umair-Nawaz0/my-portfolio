import { NextResponse } from "next/server";

export const revalidate = 300; // Cache for 5 minutes

export async function GET() {
  try {
    const headers = {
      "User-Agent": "portfolio-site (sardarumairnawazkhan@gmail.com)",
    };

    // 1. Fetch public profile stats (rapid, blitz, bullet, etc.)
    const statsRes = await fetch("https://api.chess.com/pub/player/umair-nawaz/stats", {
      headers,
      next: { revalidate: 300 },
    });
    const statsData = statsRes.ok ? await statsRes.json() : null;

    // 2. Fetch puzzle rank & solved count from Chess.com callback API
    const puzzleRes = await fetch(
      "https://www.chess.com/callback/stats/tactics2/new/puzzles/umair-nawaz",
      {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        },
        next: { revalidate: 300 },
      }
    );
    const puzzleData = puzzleRes.ok ? await puzzleRes.json() : null;

    const rapidRating =
      statsData?.chess_rapid?.last?.rating ?? 1363;
    const rapidPeak =
      statsData?.chess_rapid?.best?.rating ?? 1431;

    const puzzlesSolved =
      puzzleData?.statsInfo?.stats?.passed_count ?? 4592;
    const puzzlesAttempted =
      puzzleData?.statsInfo?.stats?.attempt_count ?? 5897;
    const puzzleRating =
      puzzleData?.statsInfo?.stats?.rating ?? 3581;
    const puzzlePeak =
      puzzleData?.statsInfo?.stats?.highest_rating ?? 3599;
    const globalRank =
      puzzleData?.rank ? `#${puzzleData.rank.toLocaleString()}` : "#6,418";
    const percentile =
      puzzleData?.percentile ?? 99.9;
    const totalPlayers =
      puzzleData?.playersCount
        ? `${(puzzleData.playersCount / 1_000_000).toFixed(1)}M+`
        : "62.9M+";

    return NextResponse.json({
      success: true,
      username: "umair-nawaz",
      rapidRating,
      rapidPeak,
      puzzlesSolved,
      puzzlesAttempted,
      puzzleRating,
      puzzlePeak,
      globalRank,
      percentile,
      totalPlayers,
      profileUrl: "https://www.chess.com/member/umair-nawaz",
      lastUpdated: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Failed to fetch Chess.com stats:", error);
    // Fallback verified data so site never breaks
    return NextResponse.json({
      success: true,
      username: "umair-nawaz",
      rapidRating: 1363,
      rapidPeak: 1431,
      puzzlesSolved: 4592,
      puzzlesAttempted: 5897,
      puzzleRating: 3581,
      puzzlePeak: 3599,
      globalRank: "#6,418",
      percentile: 99.9,
      totalPlayers: "62.9M+",
      profileUrl: "https://www.chess.com/member/umair-nawaz",
      lastUpdated: new Date().toISOString(),
    });
  }
}
