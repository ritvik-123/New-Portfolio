"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/#about", label: "About Me" },
  { href: "/#skills", label: "Skills" },
  { href: "/projects/cs", label: "CS Projects" },
  { href: "/projects/mechatronics", label: "Mechatronics" },
  { href: "/#papers", label: "Papers" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? Math.min(100, (window.scrollY / height) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || menuOpen ? "glass-strong shadow-sm" : "border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-4xl items-center justify-between gap-3 px-6 py-4"
      >
        <Link
          href="/"
          className="font-bold tracking-tight text-accent"
          onClick={() => setMenuOpen(false)}
        >
          Portfolio
        </Link>
        <ul className="hidden flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-muted md:flex">
          {links.map((link) => {
            const isActive = link.href.startsWith("/projects") && pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`transition-colors hover:text-accent ${
                    isActive ? "font-semibold text-accent" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex h-9 w-9 items-center justify-center rounded-full text-muted-soft transition-colors hover:text-accent md:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
              {menuOpen ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>
      <div
        id="mobile-nav"
        className={`overflow-hidden transition-[max-height] duration-300 ease-out md:hidden ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 border-t border-border px-6 py-4 text-sm font-medium text-muted">
          {links.map((link) => {
            const isActive = link.href.startsWith("/projects") && pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-lg px-2 py-2.5 transition-colors hover:bg-accent-soft hover:text-accent ${
                    isActive ? "font-semibold text-accent" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className="h-0.5 bg-accent transition-[width] duration-150"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />
    </header>
  );
}
