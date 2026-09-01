import type { Project } from "@/data/content";
import DemoVideo from "@/components/DemoVideo";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group glass overflow-hidden rounded-2xl shadow-sm transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg">
      {project.video ? (
        <DemoVideo src={project.video} poster={project.image} title={project.title} />
      ) : (
        project.image && (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-40 w-full object-cover"
          />
        )
      )}
      <div className="p-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-lg font-semibold transition-colors group-hover:text-accent">
            {project.title}
          </h3>
          <div className="flex gap-3 text-sm">
            {project.link && (
              <a
                href={project.link}
                className="text-muted-soft underline underline-offset-4 hover:text-accent"
              >
                Live
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                className="text-muted-soft underline underline-offset-4 hover:text-accent"
              >
                Code
              </a>
            )}
          </div>
        </div>
        <p className="mt-2 text-muted">{project.description}</p>
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
    </div>
  );
}
