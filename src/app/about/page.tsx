import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import WhoIAm from "@/components/about/WhoIAm";
import Focus from "@/components/about/Focus";
import Skills from "@/components/about/Skills";
import Journey from "@/components/about/Journey";
import Education from "@/components/about/Education";
import CurrentLearning from "@/components/about/CurrentLearning";

export default function AboutPage() {
  return (
    <div className="noise min-h-screen">
      <Navbar />
      <main>
        <section className="container pb-6 pt-40">
          <p className="section-label">Background &amp; Engineering Focus</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-.04em] sm:text-6xl md:text-7xl">
            AI Systems &amp; Machine Learning{" "}
            <span className="text-gradient">Engineer.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            A comprehensive overview of architectural specializations, technical foundations,
            core skill competencies, and engineering milestones.
          </p>
        </section>

        <WhoIAm />
        <Focus />
        <Skills />
        <Journey />
        <Education />
        <CurrentLearning />
      </main>
      <Footer />
    </div>
  );
}
