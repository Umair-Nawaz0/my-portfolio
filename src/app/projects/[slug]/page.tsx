import { notFound } from "next/navigation";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import CaseStudy from "@/components/projects/CaseStudy";
import { projects } from "@/data/projects";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const project = projects.find((item) => item.slug === slug); if (!project) notFound(); return <div className="noise min-h-screen"><Navbar/><main><CaseStudy project={project}/></main><Footer/></div>; }
