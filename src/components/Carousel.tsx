"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Carousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Vertical scroll → horizontal movement (desktop only)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || isMobile) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      el.scrollLeft += e.deltaY * 2;
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [isMobile]);

  // Mouse drag (desktop)
  const onMouseDown = (e: React.MouseEvent) => {
    if (isMobile) return;
    setIsDragging(true);
    setHasDragged(false);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current || isMobile) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const diff = x - startX;
    if (Math.abs(diff) > 5) setHasDragged(true);
    scrollRef.current.scrollLeft = scrollLeft - diff * 1.5;
  };

  const onMouseUp = () => setIsDragging(false);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (hasDragged) {
        e.preventDefault();
        e.stopPropagation();
      }
    },
    [hasDragged]
  );

  const cardWidth = isMobile ? 240 : 310;
  const cardGap = isMobile ? 10 : 14;
  const padding = isMobile ? 20 : 32;

  return (
    <div
      ref={scrollRef}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      style={{
        padding: `0 ${padding}px`,
        overflowX: "auto",
        overflowY: "hidden",
        cursor: isMobile ? "default" : isDragging ? "grabbing" : "grab",
        WebkitOverflowScrolling: "touch",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: `${cardGap}px`,
          width: "max-content",
          height: isMobile
            ? "calc(66vh)"
            : "calc(62vh)",
          minHeight: isMobile ? "300px" : "340px",
          maxHeight: isMobile ? "460px" : "540px",
        }}
      >
        {/* Intro Card */}
        <div
          style={{
            width: `${cardWidth}px`,
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              flex: 1,
              borderRadius: "6px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <img
              src="/images/ege_profile.jpg"
              alt="Ege Çelikgöğüs"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
          <div style={{ padding: "10px 2px 0" }}>
            <p
              style={{
                fontSize: isMobile ? "12px" : "14px",
                fontWeight: 600,
                color: "var(--fg)",
                lineHeight: 1.55,
                letterSpacing: "-0.1px",
              }}
            >
              Hi! I&apos;m Ege, a product &amp; interaction designer
              crafting thoughtful experiences at the intersection of
              physical and digital.
            </p>
          </div>
        </div>

        {/* Project Cards */}
        {projects.filter((p) => !p.hidden).map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            onClick={handleClick}
            style={{ textDecoration: "none", color: "inherit" }}
            draggable={false}
          >
            <ProjectCard
              project={project}
              cardWidth={cardWidth}
              isMobile={isMobile}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  cardWidth,
  isMobile,
}: {
  project: (typeof projects)[0];
  cardWidth: number;
  isMobile: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (isMobile) return;
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        width: `${cardWidth}px`,
        flexShrink: 0,
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* Image / Video area */}
      <div
        style={{
          flex: 1,
          borderRadius: "6px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Gradient background */}
        <div
          style={{
            width: "100%",
            height: "100%",
            background: project.color,
            position: "absolute",
            inset: 0,
            transition: "transform 0.6s ease",
            transform: isHovered ? "scale(1.03)" : "scale(1)",
          }}
        />

        {/* Static image */}
        {(project.coverImage || project.images[0]) && (
          <img
            src={project.coverImage || project.images[0]}
            alt={project.title}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: isHovered && project.video && !isMobile ? 0 : 1,
              transition: "opacity 0.5s ease, transform 0.6s ease",
              transform: isHovered ? "scale(1.03)" : "scale(1)",
              zIndex: 1,
            }}
          />
        )}

        {/* Video (desktop hover only) */}
        {project.video && !isMobile && (
          <video
            ref={videoRef}
            src={project.video}
            muted
            loop
            playsInline
            preload="metadata"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: isHovered ? 1 : 0,
              transition: "opacity 0.5s ease, transform 0.6s ease",
              transform: isHovered ? "scale(1.03)" : "scale(1)",
              zIndex: 2,
            }}
          />
        )}

        {/* Category badge */}
        <div
          style={{
            position: "absolute",
            top: isMobile ? "8px" : "12px",
            left: isMobile ? "8px" : "12px",
            fontSize: isMobile ? "9px" : "10px",
            background: "rgba(0, 0, 0, 0.5)",
            color: "#fff",
            padding: isMobile ? "2px 8px" : "3px 10px",
            borderRadius: "4px",
            letterSpacing: "0.5px",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            zIndex: 3,
          }}
        >
          {project.category}
        </div>
      </div>

      {/* Info below image */}
      <div style={{ padding: "10px 2px 0" }}>
        <h3
          style={{
            fontSize: isMobile ? "12px" : "14px",
            fontWeight: 400,
            color: "var(--fg)",
            marginBottom: "2px",
            letterSpacing: "-0.1px",
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontSize: isMobile ? "10px" : "12px",
            color: "var(--fg-muted)",
            fontWeight: 300,
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          {project.shortDescription}
          <span
            style={{
              display: "inline-block",
              transition: "transform 0.2s ease",
              transform: isHovered
                ? "translateX(3px)"
                : "translateX(0)",
            }}
          >
            →
          </span>
        </p>
      </div>
    </div>
  );
}
