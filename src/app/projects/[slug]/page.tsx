import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import CaseStudy from "./CaseStudy";
import BackToProjects from "@/components/BackToProjects";
import SiteFooter from "@/components/SiteFooter";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  // Hidden projects are kept out of the carousel, so they must stay out of
  // the next-project chain too. A hidden project itself points at the first
  // visible one.
  const visible = projects.filter((p) => !p.hidden);
  const currentIndex = visible.findIndex((p) => p.slug === project.slug);
  const nextProject =
    currentIndex === -1
      ? visible[0]
      : visible[(currentIndex + 1) % visible.length];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
      }}
    >
      <Navbar />
      <CaseStudy p={project} />

      <Link className="case-next" href={`/projects/${nextProject.slug}`}>
        <div>
          <span className="k">Next project</span>
          <h2>{nextProject.title}</h2>
        </div>
        <span className="arw" aria-hidden="true">
          →
        </span>
      </Link>

      <BackToProjects />
      <SiteFooter />
    </main>
  );
}
