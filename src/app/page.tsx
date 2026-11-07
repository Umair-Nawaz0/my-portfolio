import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import TechStack from "@/components/home/TechStack";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0B0B0C] text-[#FFFFFF] overflow-x-hidden">
      {/* Ambient Lime Glow from the screenshot */}
      <div className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-[#C6F432]/[0.08] blur-[140px]" />
      <div className="pointer-events-none absolute right-0 top-[40%] h-[400px] w-[500px] rounded-full bg-[#C6F432]/[0.04] blur-[150px]" />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <AboutSection />
          <FeaturedProjects />
          <TechStack />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
