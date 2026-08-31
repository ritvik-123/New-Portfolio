import { socials } from "@/data/content";
import SectionHeading from "@/components/SectionHeading";

const icons: Record<string, React.ReactNode> = {
  email: (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <path
        d="M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v11A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5v-11Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.46-1.19-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.79-4.58 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M6.94 8.5H3.56V20.5H6.94V8.5ZM5.25 3.5A1.94 1.94 0 1 0 5.25 7.38 1.94 1.94 0 0 0 5.25 3.5ZM20.5 20.5v-6.8c0-3.24-1.73-4.75-4.03-4.75a3.48 3.48 0 0 0-3.16 1.74v-1.49H9.94c.04.9 0 11.3 0 11.3h3.37v-6.31c0-.34.02-.68.12-.92.27-.68.88-1.38 1.9-1.38 1.35 0 1.89 1.03 1.89 2.53v6.08h3.28Z" />
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M18.9 4h2.9l-6.3 7.2L23 20h-5.8l-4.5-5.9L7.5 20H4.6l6.7-7.7L4 4h5.9l4.1 5.4L18.9 4Zm-1 14.4h1.6L7.2 5.5H5.5l12.4 12.9Z" />
    </svg>
  ),
  scholar: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M12 3 1 9l11 6 9-4.9V17h2V9L12 3Zm-7 9.2V16c0 2.2 3.1 4 7 4s7-1.8 7-4v-3.8l-7 3.8-7-3.8Z" />
    </svg>
  ),
  leetcode: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M9.5 3 3 9.6l6.5 6.6 1.5-1.5-5-5.1L11 4.5 9.5 3Zm2 12.4L13 16.9l3.5-3.6L21 17.9l-1.5 1.5-4-4-3 3.1L11 15.4Z" />
    </svg>
  ),
};

const links = [
  { key: "email", label: "Email", href: `mailto:${socials.email}` },
  { key: "github", label: "GitHub", href: socials.github },
  { key: "linkedin", label: "LinkedIn", href: socials.linkedin },
  { key: "scholar", label: "Google Scholar", href: socials.scholar },
  { key: "leetcode", label: "LeetCode", href: socials.leetcode },
  { key: "twitter", label: "Twitter", href: socials.twitter },
].filter((link) => link.href);

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-16">
      <SectionHeading>Contact</SectionHeading>
      <p className="mb-6 max-w-xl text-zinc-600 dark:text-zinc-400">
        Feel free to reach out — I&apos;m happy to talk about projects,
        research, or opportunities.
      </p>
      <div className="flex flex-wrap gap-3">
        {links.map((link) => (
          <a
            key={link.key}
            href={link.href}
            className="flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium shadow-sm transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent hover:shadow-md"
          >
            {icons[link.key]}
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
