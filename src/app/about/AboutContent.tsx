"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AboutContent() {
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
      {/* Hero: Title */}
      <div
        style={{
          padding: isMobile ? "48px 20px 24px" : "80px 32px 40px",
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
          About
        </motion.h1>
      </div>

      {/* Two-column: Photo + Bio */}
      <div
        style={{
          padding: `0 ${pad}`,
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1.5fr",
          gap: isMobile ? "24px" : "60px",
          marginBottom: isMobile ? "48px" : "80px",
        }}
      >
        {/* Bio text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontSize: isMobile ? "16px" : "20px",
              fontWeight: 300,
              lineHeight: 1.7,
              color: "var(--fg)",
              marginBottom: "24px",
              letterSpacing: "-0.2px",
            }}
          >
            Servus, I&apos;m Ege — a Vienna-based product &amp; interaction
            designer with an MSc in Human-Computer Interaction from the
            University of Salzburg +  FH Salzburg.
          </p>
          <p
            style={{
              fontSize: isMobile ? "13px" : "15px",
              fontWeight: 300,
              lineHeight: 1.8,
              color: "var(--fg-muted)",
              marginBottom: "16px",
            }}
          >
            I work at the intersection of physical and digital design
            from wearable prototypes and interactive installations to
            complex UX systems and AI interfaces. My thesis project
            &quot;Into the Zone&quot; (smart running glasses with LED
            biofeedback) received the Best Demo Award at SportsHCI 2025
            and was published at MUM 2025.
          </p>
          <p
            style={{
              fontSize: isMobile ? "13px" : "15px",
              fontWeight: 300,
              lineHeight: 1.8,
              color: "var(--fg-muted)",
              marginBottom: "16px",
            }}
          >
          I also co-host Radio Biz, a bilingual Turkish-German show on Radio Orange 94.0, where I mix music and help bridge communities through storytelling. I'm also involved in youth development programs, helping newcomers integrate into Austrian life, which taught me how design thinking applies far beyond interfaces.
          I use emerging technologies daily, but I also draw and paint every day, not as portfolio work, but as a way to think without the constraints of grids and components. 
          I'm also very interested in electronic music production, experimenting with audiovisual work in TouchDesigner, and constantly exploring Vienna. These aren't hobbies separate from design; they're all part of how I see the world: as systems of interaction, rhythm, and craft.
          </p>
          <p
            style={{
              fontSize: isMobile ? "13px" : "15px",
              fontWeight: 300,
              lineHeight: 1.8,
              color: "var(--fg-muted)",
            }}
          >
            I&apos;m currently open to full-time and freelance opportunities
            in product design, interaction design, and UX research mainly in Vienna and surroundings.
          </p>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <img
            src="/images/aboutme.png"
            alt="Ege Çelikgöğüs"
            style={{
              width: "100%",
              height: isMobile ? "350px" : "500px",
              objectFit: "cover",
              borderRadius: "6px",
              display: "block",
            }}
          />
        </motion.div>
      </div>

      {/* Bottom spacer */}
      <div style={{ height: isMobile ? "40px" : "60px" }} />
    </div>
  );
}
