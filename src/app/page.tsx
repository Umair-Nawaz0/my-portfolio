import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import WhatIBuild from "@/components/home/WhatIBuild";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Engineering from "@/components/home/Engineering";
import TechStack from "@/components/home/TechStack";
import ExperiencePreview from "@/components/home/ExperiencePreview";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <div className="noise min-h-screen bg-[#050505]">
      <Navbar />

      <main>
        <Hero />
        <WhatIBuild />
        <FeaturedProjects />
        <Engineering />
        <TechStack />
        <ExperiencePreview />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}