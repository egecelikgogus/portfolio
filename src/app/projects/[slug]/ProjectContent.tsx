"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { projects } from "@/data/projects";

export default function ProjectContent({
  project,
}: {
  project: Project;
}) {
  const [isMobile, setIsMobile] = useState(false);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const currentIndex = projects.findIndex(
    (p) => p.slug === project.slug
  );
  const nextProject =
    projects[(currentIndex + 1) % projects.length];

  const pad = isMobile ? "20px" : "32px";

  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          padding: isMobile
            ? "48px 20px 24px"
            : "80px 32px 40px",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "flex-end",
          gap: isMobile ? "20px" : "40px",
          flexWrap: "wrap",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            fontSize: isMobile
              ? "clamp(32px, 10vw, 48px)"
              : "clamp(48px, 8vw, 96px)",
            fontWeight: 400,
            letterSpacing: isMobile ? "-1px" : "-2px",
            lineHeight: 0.95,
            textTransform: "uppercase",
            color: "var(--fg)",
          }}
        >
          {project.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.15,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          style={{
            fontSize: isMobile ? "13px" : "15px",
            lineHeight: 1.6,
            color: "var(--fg-muted)",
            maxWidth: "480px",
            fontWeight: 300,
          }}
        >
          {project.description}
        </motion.p>
      </div>

      {/* Meta bar: Role, Team, Duration */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          padding: `0 ${pad}`,
          marginBottom: isMobile ? "24px" : "40px",
          display: "flex",
          flexWrap: "wrap",
          gap: isMobile ? "16px" : "48px",
        }}
      >
        {[
          { label: "Role", value: project.role },
          { label: "Team", value: project.team },
          { label: "Duration", value: project.duration },
        ].map((item) => (
          <div key={item.label}>
            <p
              style={{
                fontSize: isMobile ? "10px" : "11px",
                color: "var(--fg-dim)",
                fontWeight: 300,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                marginBottom: "4px",
              }}
            >
              {item.label}
            </p>
            <p
              style={{
                fontSize: isMobile ? "13px" : "14px",
                color: "var(--fg)",
                fontWeight: 400,
              }}
            >
              {item.value}
            </p>
          </div>
        ))}

      </motion.div>

      {/* Hero Image / Video */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{
          margin: `0 ${pad}`,
          height: project.heroImage ? "auto" : isMobile ? "55vh" : project.slug === "amiai" ? "100vh" : "80vh",
          minHeight: project.heroImage ? undefined : isMobile ? "320px" : project.slug === "amiai" ? "700px" : "560px",
          borderRadius: "6px",
          background: project.color,
          overflow: "hidden",
          position: "relative",
        }}
      >
        {project.heroImage ? (
          <img
            src={project.heroImage}
            alt={project.title}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        ) : (project.detailVideo || project.video) ? (
          <video
            src={project.detailVideo || project.video}
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.3)",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              Project hero image
            </span>
          </div>
        )}
      </motion.div>

      {/* Content: Two-column on desktop, stacked on mobile */}
      <div
        style={{
          padding: isMobile ? "48px 20px" : "80px 32px",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "32px" : "60px",
          maxWidth: "1200px",
        }}
      >
        {/* Left column - images stacked */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {project.images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${project.title} image ${i + 1}`}
              style={{
                display: "block",
                width: "100%",
                height: "auto",
                borderRadius: "6px",
              }}
            />
          ))}
        </motion.div>

        {/* Right column - text sections */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* Links */}
          {project.links && project.links.length > 0 && (
            <div style={{ marginBottom: isMobile ? "36px" : "48px" }}>
              <h3
                style={{
                  fontSize: isMobile ? "13px" : "14px",
                  fontWeight: 400,
                  color: "var(--fg)",
                  marginBottom: "16px",
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                }}
              >
                Links:
              </h3>
              {project.links.map((lnk, i) => (
                <a
                  key={i}
                  href={lnk.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    marginBottom: "10px",
                    padding: "12px 14px",
                    borderRadius: "6px",
                    background: "var(--bg-card)",
                    textDecoration: "none",
                    color: "inherit",
                    transition: "opacity 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  <p style={{ fontSize: isMobile ? "13px" : "14px", fontWeight: 400, color: "var(--fg)" }}>
                    {lnk.label} ↗
                  </p>
                </a>
              ))}
            </div>
          )}

          {/* Publications */}
          {project.publications && project.publications.length > 0 && (
            <div style={{ marginBottom: isMobile ? "36px" : "48px" }}>
              <h3
                style={{
                  fontSize: isMobile ? "13px" : "14px",
                  fontWeight: 400,
                  color: "var(--fg)",
                  marginBottom: "16px",
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                }}
              >
                Publications:
              </h3>
              {project.publications.map((pub, i) => (
                <a
                  key={i}
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    marginBottom: "10px",
                    padding: "12px 14px",
                    borderRadius: "6px",
                    background: "var(--bg-card)",
                    textDecoration: "none",
                    color: "inherit",
                    transition: "opacity 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  <p style={{ fontSize: isMobile ? "13px" : "14px", fontWeight: 400, color: "var(--fg)", marginBottom: "3px" }}>
                    {pub.title} ↗
                  </p>
                  <p style={{ fontSize: isMobile ? "11px" : "12px", color: "var(--fg-muted)", fontWeight: 300 }}>
                    {pub.venue}
                  </p>
                </a>
              ))}
            </div>
          )}

          {/* Live link */}
          {project.link && (
            <div style={{ marginBottom: isMobile ? "36px" : "48px" }}>
              <h3
                style={{
                  fontSize: isMobile ? "13px" : "14px",
                  fontWeight: 400,
                  color: "var(--fg)",
                  marginBottom: "16px",
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                }}
              >
                Live site:
              </h3>
              <a
                href={project.link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  padding: "12px 14px",
                  borderRadius: "6px",
                  background: "var(--bg-card)",
                  textDecoration: "none",
                  color: "inherit",
                  transition: "opacity 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                <p style={{ fontSize: isMobile ? "13px" : "14px", fontWeight: 400, color: "var(--fg)" }}>
                  {project.link.label} ↗
                </p>
              </a>
            </div>
          )}

          {/* Responsibilities */}
          <div ref={(el) => { sectionRefs.current[0] = el; }} style={{ marginBottom: isMobile ? "36px" : "48px" }}>
            <h3
              style={{
                fontSize: isMobile ? "13px" : "14px",
                fontWeight: 400,
                color: "var(--fg)",
                marginBottom: "16px",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
              }}
            >
              My responsibilities:
            </h3>
            <div>
              {project.responsibilities.map((item, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: isMobile ? "13px" : "14px",
                    color: "var(--fg-muted)",
                    lineHeight: 1.8,
                    fontWeight: 300,
                  }}
                >
                  – {item}
                </p>
              ))}
            </div>
          </div>

          {/* Content sections */}
          {project.sections.map((section, i) => (
            <div
              key={i}
              ref={(el) => { sectionRefs.current[i + 1] = el; }}
              style={{ marginBottom: isMobile ? "36px" : "48px" }}
            >
              <h3
                style={{
                  fontSize: isMobile ? "13px" : "14px",
                  fontWeight: 400,
                  color: "var(--fg)",
                  marginBottom: "16px",
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                }}
              >
                {section.title}:
              </h3>
              {section.content.split("\n\n").map((para, j) => (
                <p
                  key={j}
                  style={{
                    fontSize: isMobile ? "13px" : "14px",
                    color: "var(--fg-muted)",
                    lineHeight: 1.8,
                    fontWeight: 300,
                    marginBottom: j < section.content.split("\n\n").length - 1 ? "12px" : 0,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Additional images */}
      {project.additionalImages && project.additionalImages.length > 0 && (
        <div
          style={{
            padding: `0 ${pad} ${isMobile ? "48px" : "80px"}`,
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "10px" : "14px",
          }}
        >
          {project.additionalImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${project.title} additional ${i + 1}`}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "6px",
                display: "block",
              }}
            />
          ))}
        </div>
      )}

      {/* Next project link */}
      <Link
        href={`/projects/${nextProject.slug}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div
          style={{
            padding: isMobile ? "32px 20px" : "60px 32px",
            borderTop: "0.5px solid var(--border)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
            transition: "background 0.2s ease",
          }}
        >
          <div>
            <p
              style={{
                fontSize: isMobile ? "10px" : "11px",
                color: "var(--fg-dim)",
                letterSpacing: "1px",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              Next project
            </p>
            <h2
              style={{
                fontSize: isMobile ? "22px" : "32px",
                fontWeight: 400,
                letterSpacing: "-1px",
              }}
            >
              {nextProject.title}
            </h2>
          </div>
          <span
            style={{
              fontSize: isMobile ? "20px" : "24px",
              color: "var(--fg-muted)",
            }}
          >
            →
          </span>
        </div>
      </Link>
    </div>
  );
}
