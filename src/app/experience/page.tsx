import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import WorkExperience from "@/components/experience/WorkExperience";
import Freelance from "@/components/experience/Freelance";
import MajorProjects from "@/components/experience/MajorProjects";
import OpenSource from "@/components/experience/OpenSource";
import Internships from "@/components/experience/Internships";

export default function ExperiencePage() {
  return (
    <div className="noise min-h-screen">
      <Navbar />
      <main>
        <section className="container pb-8 pt-40">
          <p className="section-label">Career &amp; Practical Work</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-.04em] sm:text-6xl md:text-7xl">
            Engineering experience &amp;{" "}
            <span className="text-gradient">practical delivery.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            A comprehensive record of software engineering roles, independent AI system
            development, freelance technical consulting, and academic CS studies.
          </p>
        </section>

        <WorkExperience />
        <Freelance />
        <MajorProjects />
        <OpenSource />
        <Internships />
      </main>
      <Footer />
    </div>
  );
}

