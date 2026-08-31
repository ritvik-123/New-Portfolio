import { skills } from "@/data/content";
import SectionHeading from "@/components/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-16">
      <SectionHeading>Skills</SectionHeading>
      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.label} className="glass rounded-2xl p-5 shadow-sm">
            <h3 className="mb-3 text-sm font-semibold tracking-wide text-accent uppercase">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
