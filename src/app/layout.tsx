import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sardar Umair Nawaz Khan — AI Systems & Machine Learning Engineer",
  description:
    "Portfolio of Sardar Umair Nawaz Khan — AI Systems & Machine Learning Engineer specializing in autonomous agents, workflow automation, and high-performance backend architectures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className="bg-slate-50 text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}
