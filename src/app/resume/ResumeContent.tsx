"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const education = [
  {
    degree: "MSc, Human-Computer Interaction",
    school: "University of Salzburg + FH Salzburg · Joint-Degree Programme",
    period: "Sep 2022 – Aug 2025",
    location: "Salzburg, Austria",
    grade: "Grade: 1.3",
    detail:
      "Master Thesis (Grade: 1.0): \"Get In the Zone: Assisting Runners with Maintaining Heart Rate Zones through Visual Ambient Feedback\" — Published at MUM 2025, presented at SportsHCI 2025 (Best Demo Award 🏆), featured in Communications of the ACM.",
    coursework:
      "Interaction Design · Game Design Principles · Applied Prototyping · Experience Engineering · Design Research · Creative Coding",
  },
  {
    degree: "BA, Industrial Product Design",
    school: "Bahcesehir University",
    period: "Feb 2018 – Jun 2021",
    location: "Istanbul, Turkey",
    grade: "GPA: 3.1",
    detail:
      "Graduation Project (Grade: A): Sustainable outdoor furniture design implementing photovoltaic energy panels for Istanbul residents, aligned with UN Sustainable Development Goal 7 (Affordable and Clean Energy).",
    coursework:
      "Product Design Studio · Human Factors · Design Marketing and Management",
  },
];

const work = [
  {
    role: "UX/UI Designer",
    type: "Freelance",
    company: "University of Salzburg — CIVIS Project",
    period: "Feb 2026 – Apr 2026",
    location: "Remote, Salzburg, Austria",
    items: [
      "Designed and developed intergenerational-learning.com — complete website covering information architecture, UX wireframes, visual theme, responsive front-end, accessibility, and GDPR-compliant implementation",
      "Built shared material library, moderated community forum, and event calendar; delivered handover documentation enabling non-technical editorial management",
    ],
    tools: "Wix Studio · Figma · Adobe Photoshop",
  },
  {
    role: "Web Designer",
    type: "Voluntary",
    company: "Radio Orange Wien — Radio Biz",
    period: "Jan 2026 – Present",
    location: "Remote, Vienna, Austria",
    items: [
      "Redesigned visual identity and web presence of Radio Biz, developing refreshed brand direction, updated layout system, improved navigation structure, news section, and live podcast functionalities",
      "Created logos, motion graphics, and promotional visuals for on-air and digital communication across social media channels",
    ],
    tools: "Wix Studio · Adobe Photoshop · After Effects",
    link: "radiobiz.at",
  },
  {
    role: "UX/UI Designer",
    type: "Part-time, Hybrid",
    company: "University of Salzburg — Plustrack",
    period: "Sep 2023 – Apr 2024",
    location: "Salzburg, Austria",
    items: [
      "Student Place redesign: Analyzed and optimized student information system (30,000+ users) based on user feedback, reducing pain-points through market research, wireframes, prototypes, and usability testing",
      "Created reusable Figma components, variables, and visual guideline documentation to standardize typography and spacing",
      "Redesigned Plustrack and Social Psychology websites; updated visual system and layout templates, rebuilt key pages in WordPress",
    ],
    tools: "Figma · Illustrator · Photoshop · SharePoint · WordPress",
  },
  {
    role: "UX/UI Designer",
    type: "FH Industry Project",
    company: "Razer Inc. + Wyvrn",
    period: "Sep 2023 – Feb 2024",
    location: "Salzburg, Austria",
    items: [
      "Collaborated on design of an iterative 3D haptics tool for 360-degree spatial UI for game developers (Intersensa), working within Razer's existing design system",
      "Planned, organized, and conducted two rounds of user testing with game developers, iteratively optimizing interface based on feedback",
    ],
    tools: "Figma · Blender · After Effects · Unity · Miro",
  },
  {
    role: "Design and Presentation Specialist",
    type: "Full-time, On-site",
    company: "ERSA Furniture",
    period: "Nov 2021 – Sep 2022",
    location: "Istanbul, Turkey",
    items: [
      "Developed furniture collections from initial concept through production-ready 3D models; created photorealistic renderings and animations for catalogs, marketing materials, and presentations",
      "End-to-end design projects: concept development, moodboards, technical specifications, manufacturer coordination, and sample approval",
      "Collaborated with CMF designers to define materials, finishes, textures, and proportions",
    ],
    tools: "3ds Max · Corona Renderer · Photoshop · After Effects · InDesign · AutoCAD · Rhinoceros · KeyShot",
  },
  {
    role: "Product Design Intern",
    type: "Full-time, On-site",
    company: "ERSA Furniture",
    period: "Aug 2021 – Oct 2021",
    location: "Istanbul, Turkey",
    items: [
      "Created 3D furniture models and photorealistic renders for client pitches and internal reviews; produced CAD floor plans",
      "Partnered with product teams to adapt assets for catalogs and web",
    ],
    tools: "3ds Max · Rhinoceros · Photoshop",
  },
];

const publications = [
  {
    title:
      "\"Into the Zone: Assisting Runners with Maintaining Heart Rate Zones through a Glanceable Ambient Display\"",
    venue: "MUM 2025 — 24th International Conference on Mobile and Ubiquitous Multimedia",
    detail: "Dec 1–4, 2025 · Enna, Italy · Long paper (14 pages) · 247 downloads",
    url: "https://dl.acm.org/doi/10.1145/3771882.3771897",
  },
  {
    title:
      "\"Into the Zone: Demo of Glanceable Ambient LED-Goggles to Assist Runners with Maintaining Heart Rate Zones\"",
    venue: "SportsHCI 2025 — 1st Annual Conference on HCI and Sports",
    detail: "Nov 17–19, 2025 · Enschede, Netherlands · Demo paper · Best Demo Award 🏆 · 211 downloads",
    url: "https://doi.org/10.1145/3749385.3749403",
  },
];

const awards = [
  {
    title: "Communications of the ACM — Article Mention",
    venue: "Featured in \"Performance Apps Look to Put More Fun Into Fitness\" by Paul Marks",
    year: "2026",
    url: "https://cacm.acm.org/news/performance-apps-look-to-put-more-fun-into-fitness/",
  },
  {
    title: "Best Demo Award",
    venue: "SportsHCI Conference · University of Twente, Netherlands",
    year: "2025",
  },
  {
    title: "Advanced Tech Award",
    venue: "GastroHackaton · Salzburg, Austria",
    year: "2022",
  },
];

const toolGroups = [
  { label: "3D & Visualization", tools: "3ds Max · Rhinoceros · Blender · Corona Renderer · KeyShot · Unity" },
  { label: "UI/UX & Web Design", tools: "Figma · Adobe Photoshop · After Effects · DaVinci Resolve · WordPress · Framer · Wix Studio" },
  { label: "Web Development", tools: "HTML · CSS · JavaScript · React · Next.js" },
  { label: "Creative Coding", tools: "Arduino · C# · three.js · Processing" },
  { label: "AI & Generative", tools: "Lovable · Bolt · Claude · Midjourney · ChatGPT" },
  { label: "Project Management", tools: "FigJam · Miro · Trello · Microsoft Teams/Office · LaTeX · Jira" },
];

const languages = [
  { lang: "Turkish", level: "Native" },
  { lang: "English", level: "C1 — Fluent" },
  { lang: "German", level: "B2.1 — Upper Intermediate" },
  { lang: "French", level: "A2 — Elementary" },
];

const references = [
  {
    name: "Univ. Prof. Dipl. Ing. Dr. Alexander Meschtscherjakov",
    org: "University of Salzburg",
    email: "alexander.meschtscherjakov@plus.ac.at",
  },
  {
    name: "Vincent van Rheden, MSc, PDEng",
    org: "Center for HCI, University of Salzburg",
    email: "vincent.vanrheden@plus.ac.at",
  },
];

export default function ResumeContent() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const pad = isMobile ? "20px" : "32px";

  return (
    <div>
      {/* Title + Download */}
      <div
        style={{
          padding: isMobile ? "48px 20px 24px" : "80px 32px 40px",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "flex-end",
          gap: "20px",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            fontSize: isMobile ? "clamp(32px, 10vw, 48px)" : "clamp(48px, 8vw, 96px)",
            fontWeight: 400,
            letterSpacing: isMobile ? "-1px" : "-2px",
            lineHeight: 0.95,
            textTransform: "uppercase",
            color: "var(--fg)",
          }}
        >
          Resume
        </motion.h1>

        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          href="/Ege Celikgögüs_UX:UI Designer_CV.pdf"
          download="Ege Celikgögüs_CV.pdf"
          style={{
            fontSize: isMobile ? "12px" : "13px",
            fontWeight: 400,
            color: "var(--fg-muted)",
            textDecoration: "none",
            border: "0.5px solid var(--fg-dim)",
            borderRadius: "24px",
            padding: isMobile ? "10px 20px" : "10px 24px",
            transition: "all 0.2s ease",
            whiteSpace: "nowrap",
          }}
        >
          Download PDF ↓
        </motion.a>
      </div>

      {/* Main content */}
      <div style={{ padding: `0 ${pad}`, maxWidth: "900px" }}>

        {/* Awards & Recognition */}
        <Section title="Awards & Recognition" isMobile={isMobile} delay={0.15}>
          {awards.map((award, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "180px 1fr",
                gap: isMobile ? "4px" : "40px",
                paddingBottom: "20px",
                marginBottom: "20px",
                borderBottom: i < awards.length - 1 ? "0.5px solid var(--border)" : "none",
              }}
            >
              <p style={{ fontSize: isMobile ? "11px" : "12px", color: "var(--fg-dim)", fontWeight: 300 }}>
                {award.year}
              </p>
              <div>
                <p style={{ fontSize: isMobile ? "13px" : "14px", fontWeight: 400, color: "var(--fg)", marginBottom: "2px" }}>
                  {award.title}
                </p>
                <p style={{ fontSize: isMobile ? "11px" : "12px", color: "var(--fg-muted)", fontWeight: 300, marginBottom: award.url ? "6px" : 0 }}>
                  {award.venue}
                </p>
                {award.url && (
                  <a href={award.url} target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: isMobile ? "11px" : "12px", color: "var(--fg-dim)", fontWeight: 300, textDecoration: "none" }}
                    onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                    onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
                  >
                    Read article ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </Section>

        {/* Publications */}
        <Section title="Publications" isMobile={isMobile} delay={0.2}>
          {publications.map((pub, i) => (
            <div
              key={i}
              style={{
                paddingBottom: "24px",
                marginBottom: "24px",
                borderBottom: i < publications.length - 1 ? "0.5px solid var(--border)" : "none",
              }}
            >
              <p style={{ fontSize: isMobile ? "13px" : "14px", fontWeight: 400, color: "var(--fg)", marginBottom: "4px", lineHeight: 1.5 }}>
                {pub.title}
              </p>
              <p style={{ fontSize: isMobile ? "12px" : "13px", color: "var(--fg-muted)", fontWeight: 300, marginBottom: "2px" }}>
                {pub.venue}
              </p>
              <p style={{ fontSize: isMobile ? "11px" : "12px", color: "var(--fg-dim)", fontWeight: 300, marginBottom: "6px" }}>
                {pub.detail}
              </p>
              <a href={pub.url} target="_blank" rel="noopener noreferrer"
                style={{ fontSize: isMobile ? "11px" : "12px", color: "var(--fg-dim)", fontWeight: 300, textDecoration: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
              >
                View publication ↗
              </a>
            </div>
          ))}
        </Section>

        {/* Experience */}
        <Section title="Experience" isMobile={isMobile} delay={0.25}>
          {work.map((job, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "180px 1fr",
                gap: isMobile ? "4px" : "40px",
                paddingBottom: isMobile ? "28px" : "36px",
                marginBottom: isMobile ? "28px" : "36px",
                borderBottom: i < work.length - 1 ? "0.5px solid var(--border)" : "none",
              }}
            >
              <div>
                <p style={{ fontSize: isMobile ? "11px" : "12px", color: "var(--fg-dim)", fontWeight: 300, letterSpacing: "0.3px" }}>
                  {job.period}
                </p>
                <p style={{ fontSize: isMobile ? "10px" : "11px", color: "var(--fg-dim)", fontWeight: 300, marginTop: "2px" }}>
                  {job.location}
                </p>
              </div>
              <div>
                <p style={{ fontSize: isMobile ? "14px" : "15px", fontWeight: 400, color: "var(--fg)", marginBottom: "2px" }}>
                  {job.role} <span style={{ fontWeight: 300, color: "var(--fg-muted)" }}>· {job.type}</span>
                </p>
                <p style={{ fontSize: isMobile ? "12px" : "13px", color: "var(--fg-muted)", fontWeight: 300, marginBottom: "12px" }}>
                  {job.company}
                </p>
                {job.items.map((item, j) => (
                  <p key={j} style={{ fontSize: isMobile ? "12px" : "13px", color: "var(--fg-dim)", fontWeight: 300, lineHeight: 1.7, marginBottom: "4px" }}>
                    – {item}
                  </p>
                ))}
                <p style={{ fontSize: isMobile ? "11px" : "12px", color: "var(--fg-dim)", fontWeight: 300, marginTop: "10px", fontStyle: "italic" }}>
                  {job.tools}
                </p>
                {job.link && (
                  <p style={{ fontSize: isMobile ? "11px" : "12px", color: "var(--fg-dim)", fontWeight: 300, marginTop: "4px" }}>
                    {job.link}
                  </p>
                )}
              </div>
            </div>
          ))}
        </Section>

        {/* Education */}
        <Section title="Education" isMobile={isMobile} delay={0.35}>
          {education.map((edu, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "180px 1fr",
                gap: isMobile ? "4px" : "40px",
                paddingBottom: isMobile ? "24px" : "32px",
                marginBottom: isMobile ? "24px" : "32px",
                borderBottom: i < education.length - 1 ? "0.5px solid var(--border)" : "none",
              }}
            >
              <div>
                <p style={{ fontSize: isMobile ? "11px" : "12px", color: "var(--fg-dim)", fontWeight: 300, letterSpacing: "0.3px" }}>
                  {edu.period}
                </p>
                <p style={{ fontSize: isMobile ? "10px" : "11px", color: "var(--fg-dim)", fontWeight: 300, marginTop: "2px" }}>
                  {edu.location}
                </p>
              </div>
              <div>
                <p style={{ fontSize: isMobile ? "14px" : "15px", fontWeight: 400, color: "var(--fg)", marginBottom: "2px" }}>
                  {edu.degree}
                </p>
                <p style={{ fontSize: isMobile ? "12px" : "13px", color: "var(--fg-muted)", fontWeight: 300, marginBottom: "4px" }}>
                  {edu.school}
                </p>
                <p style={{ fontSize: isMobile ? "11px" : "12px", color: "var(--fg-dim)", fontWeight: 300, marginBottom: "10px" }}>
                  {edu.grade}
                </p>
                <p style={{ fontSize: isMobile ? "12px" : "13px", color: "var(--fg-dim)", fontWeight: 300, lineHeight: 1.6, marginBottom: "8px" }}>
                  {edu.detail}
                </p>
                <p style={{ fontSize: isMobile ? "11px" : "12px", color: "var(--fg-dim)", fontWeight: 300, fontStyle: "italic" }}>
                  {edu.coursework}
                </p>
              </div>
            </div>
          ))}
        </Section>

        {/* Tools */}
        <Section title="Software & Tools" isMobile={isMobile} delay={0.4}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? "16px" : "24px 60px" }}>
            {toolGroups.map((group, i) => (
              <div key={i}>
                <p style={{ fontSize: isMobile ? "10px" : "11px", color: "var(--fg-dim)", fontWeight: 300, letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: "4px" }}>
                  {group.label}
                </p>
                <p style={{ fontSize: isMobile ? "13px" : "14px", color: "var(--fg-muted)", fontWeight: 300, lineHeight: 1.6 }}>
                  {group.tools}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Languages */}
        <Section title="Languages" isMobile={isMobile} delay={0.45}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)", gap: "16px" }}>
            {languages.map((l, i) => (
              <div key={i}>
                <p style={{ fontSize: isMobile ? "13px" : "14px", fontWeight: 400, color: "var(--fg)", marginBottom: "2px" }}>
                  {l.lang}
                </p>
                <p style={{ fontSize: isMobile ? "11px" : "12px", color: "var(--fg-dim)", fontWeight: 300 }}>
                  {l.level}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* References */}
        <Section title="References" isMobile={isMobile} delay={0.5}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? "24px" : "40px" }}>
            {references.map((ref, i) => (
              <div key={i}>
                <p style={{ fontSize: isMobile ? "13px" : "14px", fontWeight: 400, color: "var(--fg)", marginBottom: "4px" }}>
                  {ref.name}
                </p>
                <p style={{ fontSize: isMobile ? "12px" : "13px", color: "var(--fg-muted)", fontWeight: 300, marginBottom: "4px" }}>
                  {ref.org}
                </p>
                <a href={`mailto:${ref.email}`}
                  style={{ fontSize: isMobile ? "11px" : "12px", color: "var(--fg-dim)", fontWeight: 300, textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                  onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
                >
                  {ref.email}
                </a>
              </div>
            ))}
          </div>
        </Section>

      </div>

      <div style={{ height: isMobile ? "40px" : "60px" }} />
    </div>
  );
}

function Section({
  title,
  isMobile,
  delay,
  children,
}: {
  title: string;
  isMobile: boolean;
  delay: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      style={{ marginBottom: isMobile ? "40px" : "56px" }}
    >
      <h2
        style={{
          fontSize: isMobile ? "13px" : "14px",
          fontWeight: 400,
          color: "var(--fg)",
          textDecoration: "underline",
          textUnderlineOffset: "4px",
          marginBottom: isMobile ? "24px" : "32px",
        }}
      >
        {title}:
      </h2>
      {children}
    </motion.div>
  );
}
