import { profile } from "@/data/content";
import SectionHeading from "@/components/SectionHeading";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-16">
      <SectionHeading>About Me</SectionHeading>
      <div className="flex flex-col-reverse gap-8 sm:flex-row sm:items-start">
        <div className="flex-1">
          <div className="flex flex-col gap-4 text-foreground">
            {profile.bio.map((paragraph, i) => (
              <p key={i} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          <a
            href={profile.resumeUrl}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
          >
            Download Resume
          </a>
        </div>
        <img
          src={profile.sideAvatarUrl}
          alt={`${profile.name} avatar`}
          className="mx-auto h-40 w-40 shrink-0 rounded-2xl border border-border object-cover shadow-lg sm:mx-0"
        />
      </div>
    </section>
  );
}
