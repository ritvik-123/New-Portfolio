import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import FeaturedProjects from "@/components/FeaturedProjects";
import DegreeExplorer from "@/components/DegreeExplorer";
import Papers from "@/components/Papers";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-6">
      <Hero />
      <About />
      <DegreeExplorer />
      <FeaturedProjects />
      <Papers />
      <Skills />
      <Contact />
    </main>
  );
}
