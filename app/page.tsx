import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import GitHubRepositories from "@/components/github-repositories";
import Contact from "@/components/contact";
import sections from "@/config/sections";
import ScrollToTop from "@/components/scroll-to-top";
import CustomCursor from "@/components/custom-cursor";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <CustomCursor />
      <Header />
      {sections.hero && <Hero />}
      {sections.about && <About />}
      {sections.skills && <Skills />}
      {sections.experience && <Experience />}
      {sections.projects && <Projects />}
      {sections.github && <GitHubRepositories />}
      {sections.contact && <Contact />}
      <ScrollToTop />
    </main>
  );
} 