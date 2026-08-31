import { projects } from "@/data/content";
import SectionHeading from "@/components/SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-16">
      <SectionHeading>Projects</SectionHeading>
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold transition-colors group-hover:text-accent">
                {project.title}
              </h3>
              <div className="flex gap-3 text-sm">
                {project.link && (
                  <a
                    href={project.link}
                    className="text-zinc-500 underline underline-offset-4 hover:text-accent"
                  >
                    Live
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    className="text-zinc-500 underline underline-offset-4 hover:text-accent"
                  >
                    Code
                  </a>
                )}
              </div>
            </div>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              {project.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
