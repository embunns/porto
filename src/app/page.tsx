import { Navbar } from "@/components/ui/navbar";
import { Hero } from "@/components/sections/hero";
import { Competencies } from "@/components/sections/competencies";
import { Projects } from "@/components/sections/projects";
import { Certificates } from "@/components/sections/certificates";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Competencies />
      <Projects />
      <Certificates />
      <Footer />
    </>
  );
}