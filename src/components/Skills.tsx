import { skills } from "@/data/content";
import SectionHeading from "@/components/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-16">
      <SectionHeading>Skills</SectionHeading>
      <div className="glass flex flex-col divide-y divide-border rounded-2xl px-5 shadow-sm">
        {skills.map((group) => (
          <div
            key={group.label}
            className="flex flex-col gap-2 py-3 sm:flex-row sm:items-baseline sm:gap-4"
          >
            <h3 className="shrink-0 text-xs font-semibold tracking-wide text-accent uppercase sm:w-44">
              {group.label}
            </h3>
            <p className="text-sm text-muted">
              {group.skills.join(" · ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
