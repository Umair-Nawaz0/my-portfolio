import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import TechStack from "@/components/home/TechStack";
import ChessLiveCard from "@/components/home/ChessLiveCard";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-50/70 text-slate-900 overflow-x-hidden">
      {/* Vibrant Multi-Layer Ambient Tech Light Mesh (Strictly Bright / Light Theme) */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Top Center Radiant Blue/Indigo Aura */}
        <div className="absolute left-1/2 top-[-100px] -translate-x-1/2 h-[650px] w-[1100px] rounded-full bg-gradient-to-b from-blue-300/35 via-indigo-200/25 to-transparent blur-[130px]" />
        
        {/* Right Accent Soft Violet Glow */}
        <div className="absolute right-[-15%] top-[25%] h-[600px] w-[750px] rounded-full bg-gradient-to-bl from-violet-200/30 via-indigo-100/20 to-transparent blur-[150px]" />
        
        {/* Left Accent Cyan/Sky Glow */}
        <div className="absolute left-[-15%] top-[55%] h-[650px] w-[800px] rounded-full bg-gradient-to-tr from-sky-200/35 via-blue-100/25 to-transparent blur-[160px]" />

        {/* Bottom Ambient Indigo Glow */}
        <div className="absolute right-[-10%] bottom-[5%] h-[550px] w-[700px] rounded-full bg-gradient-to-tl from-indigo-200/30 via-purple-100/20 to-transparent blur-[140px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <AboutSection />
          
          {/* Competitive Chess Section */}
          <section id="chess" className="relative border-y border-indigo-100/70 py-16 bg-gradient-to-b from-blue-50/40 via-indigo-50/20 to-slate-50/60">
            <div className="container relative z-10">
              <div className="max-w-xl mb-8">
                <span className="section-label">
                  <span className="inline-block h-2 w-2 rounded-full bg-indigo-600" />
                  Chess Profile
                </span>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  Competitive Chess
                </h2>
              </div>

              <ChessLiveCard />
            </div>
          </section>

          <FeaturedProjects />
          <TechStack />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
