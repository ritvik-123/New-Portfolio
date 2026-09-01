"use client";

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

  return (
    <header className="glass sticky top-0 z-50 border-b">
      <nav className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3 px-6 py-4">
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
    </header>
  );
}
