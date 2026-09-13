import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sardar Umair Nawaz Khan — AI Engineer",
  description:
    "AI Engineer building AI agents, RAG systems, LLM applications, and intelligent automation solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try { const theme = localStorage.getItem('portfolio-theme'); if (theme === 'light' || theme === 'dark') document.documentElement.dataset.theme = theme; else if (window.matchMedia('(prefers-color-scheme: light)').matches) document.documentElement.dataset.theme = 'light'; } catch (_) {}`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
