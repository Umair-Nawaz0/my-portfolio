"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useRef } from "react";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("portfolio-theme", theme);
}

export default function ThemeToggle() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme") as Theme | null;
    const preferred = window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
    const initial = saved === "light" || saved === "dark" ? saved : preferred;
    applyTheme(initial);
    buttonRef.current?.setAttribute(
      "aria-label",
      `Switch to ${initial === "dark" ? "light" : "dark"} mode`,
    );
  }, []);

  const toggle = () => {
    const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    applyTheme(next);
    buttonRef.current?.setAttribute(
      "aria-label",
      `Switch to ${next === "dark" ? "light" : "dark"} mode`,
    );
  };

  return (
    <button
      type="button"
      ref={buttonRef}
      onClick={toggle}
      className="theme-toggle"
      aria-label="Switch colour theme"
      title="Switch colour theme"
    >
      <Sun className="theme-sun" size={16} />
      <Moon className="theme-moon" size={16} />
    </button>
  );
}
