import AboutPreview from "@/components/sections/AboutPreview";
import Skills from "@/components/sections/skills";
import Hero from "@/components/sections/Hero";
import ProjectPreview from "@/components/sections/projectPreview";
import Contact from "@/components/sections/contact";
import UXPhilosophy from "@/components/sections/ux";
import Experience from "@/components/sections/experience";
import Footer from "@/components/sections/footer";

// import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-black overflow-hidden">
      <Hero />
      <AboutPreview />
      <Skills />
      <ProjectPreview />
      <Experience />
      <UXPhilosophy />
      <Contact />
      <Footer />
    </main>
  );
}
