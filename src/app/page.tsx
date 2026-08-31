import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Papers from "@/components/Papers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <Nav />
      <main className="mx-auto w-full max-w-4xl flex-1 px-6">
        <Hero />
        <About />
        <Projects />
        <Papers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
