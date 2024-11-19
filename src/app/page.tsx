import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";


export default function Home() {
  return (
    <div className="min-h-screen dark:bg-black bg-white  dark:bg-dot-white/[0.5] bg-dot-black/[0.5]">
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}
