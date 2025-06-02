import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import ScrollToTop from "@/components/scroll-to-top";
import CustomCursor from "@/components/custom-cursor";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <CustomCursor />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <ScrollToTop />
    </main>
  );
} 