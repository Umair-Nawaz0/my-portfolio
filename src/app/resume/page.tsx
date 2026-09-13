import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ResumePreview from "@/components/resume/ResumePreview";
import DownloadResume from "@/components/resume/DownloadResume";
import Link from "next/link";
import { Mail } from "lucide-react";


export default function ResumePage() {
  return (
    <div className="noise min-h-screen">
      <Navbar />
      <main className="container pb-28 pt-40">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <p className="section-label">Curriculum Vitae</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-5xl md:text-6xl">
              Professional credentials &amp;{" "}
              <span className="text-gradient">technical record.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400">
              A structured summary of education, engineering experience, technical
              competencies, and system implementations.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <DownloadResume />
              <Link href="/contact" className="secondary-button">
                <Mail size={15} />
                Get in touch
              </Link>
            </div>
          </div>

          <div className="w-full">
            <ResumePreview />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

