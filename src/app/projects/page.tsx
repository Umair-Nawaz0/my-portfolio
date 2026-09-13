import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ProjectGrid from "@/components/projects/ProjectGrid";

export default function ProjectsPage() {
  return (
    <div className="noise min-h-screen">
      <Navbar />
      <main className="container pb-28 pt-40">
        <p className="section-label">Selected Systems &amp; Code</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-.04em] sm:text-6xl md:text-7xl">
          AI systems, architectures &amp;{" "}
          <span className="text-gradient">deployable applications.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          A collection of autonomous agent workflows, enterprise RAG pipelines,
          API microservices, and practical automation systems.
        </p>
        <div className="mt-14">
          <ProjectGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
}

