import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import WorkExperience from "@/components/experience/WorkExperience";
import MajorProjects from "@/components/experience/MajorProjects";
import OpenSource from "@/components/experience/OpenSource";
import Internships from "@/components/experience/Internships";

export default function ExperiencePage() {
  return (
    <div className="noise min-h-screen">
      <Navbar />
      <main>
        <section className="container pb-8 pt-40">
          <p className="section-label">Engineering Journey &amp; Projects</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-.04em] sm:text-6xl md:text-7xl">
            Engineering milestones &amp;{" "}
            <span className="text-gradient">practical systems.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            A transparent record of hands-on open-source system implementations,
            production-grade AI agents, machine learning pipelines, and foundational computer science studies.
          </p>
        </section>

        <MajorProjects />
        <WorkExperience />
        <OpenSource />
        <Internships />
      </main>
      <Footer />
    </div>
  );
}
