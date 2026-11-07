import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import TechStack from "@/components/home/TechStack";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F8FA] transition-colors duration-200 dark:bg-[#0B0B0C] site-grid text-zinc-900 dark:text-[#FFFFFF]">
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
  );
}
