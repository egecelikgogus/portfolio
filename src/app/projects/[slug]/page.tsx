import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import ProjectContent from "./ProjectContent";

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

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
      }}
    >
      <Navbar />
      <ProjectContent project={project} />
    </main>
  );
}
