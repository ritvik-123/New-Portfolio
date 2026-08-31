import { featuredProjects } from "@/data/content";
import SectionHeading from "@/components/SectionHeading";
import ProjectGrid from "@/components/ProjectGrid";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="scroll-mt-20 py-16">
      <SectionHeading>Featured Projects</SectionHeading>
      <ProjectGrid projects={featuredProjects} />
    </section>
  );
}
