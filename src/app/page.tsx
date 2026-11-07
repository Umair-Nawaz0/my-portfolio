import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import TechStack from "@/components/home/TechStack";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white transition-colors duration-200 dark:bg-[#050505]">
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
