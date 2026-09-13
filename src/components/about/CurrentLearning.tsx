import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { profile } from "@/data/profile";

const chessProfile = "https://www.chess.com/member/umair-nawaz";

export default function CurrentLearning() {
  return (
    <section className="pb-28 pt-8">
      <div className="container">
        <div className="mb-8 max-w-xl">
          <p className="section-label">Origins &amp; Personal Interests</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Beyond the Terminal.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="glass-card overflow-hidden rounded-3xl transition-all hover:border-violet-400/30">
            <div className="relative aspect-[16/8]">
              <Image
                src="/images/about/chess-knight-rook.png"
                alt="A chess knight and rook on a chessboard"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            </div>
            <div className="p-7 sm:p-8">
              <p className="section-label">Strategy &amp; Chess</p>
              <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Rapid · 1200+ Rating</h3>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Chess.com · @umair-nawaz</p>
                </div>
                <a
                  href={chessProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-button"
                >
                  View profile <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </article>

          <article className="glass-card overflow-hidden rounded-3xl transition-all hover:border-violet-400/30">
            <div className="relative aspect-[16/8]">
              <Image
                src="/images/about/derawar-fort-cholistan.png"
                alt="Derawar Fort in the Cholistan Desert"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            </div>
            <div className="p-7 sm:p-8">
              <p className="section-label">Geographic Roots</p>
              <div className="mt-4 flex items-start gap-3">
                <MapPin size={20} className="mt-1 shrink-0 text-violet-600 dark:text-violet-300" />
                <div>
                  <h3 className="text-xl font-semibold leading-7 text-zinc-900 dark:text-zinc-100">
                    Derawar Fort, Cholistan Desert
                  </h3>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{profile.location}</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

