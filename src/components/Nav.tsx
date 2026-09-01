"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/#about", label: "About" },
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

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "glass-strong shadow-sm" : "border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3 px-6 py-4"
      >
        <Link href="/" className="font-bold tracking-tight text-accent">
          Portfolio
        </Link>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
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
      </nav>
      <div
        className="h-0.5 bg-accent transition-[width] duration-150"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />
    </header>
  );
}
