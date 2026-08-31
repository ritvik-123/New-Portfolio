import type { Project } from "@/data/content";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}
