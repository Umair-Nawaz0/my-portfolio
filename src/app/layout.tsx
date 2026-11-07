import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sardar Umair Nawaz Khan — AI Systems & Machine Learning Engineer",
  description:
    "Portfolio of Sardar Umair Nawaz Khan — AI Systems & Machine Learning Engineer specializing in autonomous agents, workflow automation, and predictive modeling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0B0B0C] text-[#FFFFFF] antialiased">
        {children}
      </body>
    </html>
  );
}
