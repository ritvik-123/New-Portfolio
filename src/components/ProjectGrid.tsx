import type { Project } from "@/data/content";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const sorted = [...projects].sort((a, b) => Number(!a.image) - Number(!b.image));
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {sorted.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}
