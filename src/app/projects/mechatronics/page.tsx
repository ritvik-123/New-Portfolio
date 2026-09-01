import type { Metadata } from "next";
import { projects, projectCategories, images } from "@/data/content";
import ProjectsPageHero from "@/components/ProjectsPageHero";
import ProjectGrid from "@/components/ProjectGrid";

export const metadata: Metadata = {
  title: "Mechatronics Projects, Ritvik Mahapatra",
};

export default function MechatronicsProjectsPage() {
  const mechProjects = projects.filter((p) => p.category === "mechatronics");
  return (
    <main id="main-content" className="mx-auto w-full max-w-4xl flex-1 px-6">
      <ProjectsPageHero
        title={projectCategories.mechatronics.label}
        subtitle="Robotics, embedded systems, and applied ML from my Bachelor's in Mechatronics Engineering"
        image={images.mechHero}
        secondaryImage={images.mechAccent}
      />
      <div className="py-10">
        <ProjectGrid projects={mechProjects} />
      </div>
    </main>
  );
}
