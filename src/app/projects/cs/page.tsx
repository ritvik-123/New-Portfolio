import type { Metadata } from "next";
import { projects, projectCategories, images } from "@/data/content";
import ProjectsPageHero from "@/components/ProjectsPageHero";
import ProjectGrid from "@/components/ProjectGrid";

export const metadata: Metadata = {
  title: "CS Projects — Ritvik Mahapatra",
};

export default function CsProjectsPage() {
  const csProjects = projects.filter((p) => p.category === "cs");
  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-6">
      <ProjectsPageHero
        title={projectCategories.cs.label}
        subtitle="Coursework and independent projects from my Master's in Computer Science"
        image={images.cs}
      />
      <div className="py-10">
        <ProjectGrid projects={csProjects} />
      </div>
    </main>
  );
}
