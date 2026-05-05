"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const contactLinks = [
  {
    label: "Email",
    value: "egecelikgogus@gmail.com",
    href: "mailto:egecelikgogus@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/egecelikgogus",
    href: "https://linkedin.com/in/egecelikgogus",
  },
  {
    label: "Behance",
    value: "behance.net/egecl",
    href: "https://www.behance.net/egecl",
  },
  {
    label: "Instagram",
    value: "@egcldesigns",
    href: "https://www.instagram.com/egcldesigns/",
  },
  {
    label: "Portfolio",
    value: "egecelikgogus.com",
    href: "https://egecelikgogus.com",
  },
  {
    label: "Location",
    value: "Vienna, Austria",
    href: null,
  },
];

export default function ContactContent() {
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
      {/* Title */}
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
          Get in touch
        </motion.h1>
      </div>

      {/* Two-column: Message + Links */}
      <div
        style={{
          padding: `0 ${pad}`,
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "40px" : "60px",
          maxWidth: "1100px",
        }}
      >
        {/* Left: Intro text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
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
            I&apos;m open to new opportunities, collaborations,
            and interesting conversations.
          </p>
          <p
            style={{
              fontSize: isMobile ? "13px" : "15px",
              fontWeight: 300,
              lineHeight: 1.8,
              color: "var(--fg-muted)",
              marginBottom: "32px",
            }}
          >
            Whether you&apos;re looking for a designer for your team,
            want to collaborate on a project, or just want to say
            hello feel free to reach out. I&apos;m currently based
            in Vienna and open to both local and remote work.
          </p>

          {/* Big CTA email */}
          <a
            href="mailto:egecelikgogus@gmail.com"
            style={{
              display: "inline-block",
              fontSize: isMobile ? "14px" : "16px",
              fontWeight: 400,
              color: "var(--fg)",
              textDecoration: "none",
              border: "0.5px solid var(--fg-dim)",
              borderRadius: "28px",
              padding: isMobile ? "12px 24px" : "14px 28px",
              transition: "all 0.2s ease",
            }}
          >
            egecelikgogus@gmail.com →
          </a>
        </motion.div>

        {/* Right: Contact details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
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
            Details:
          </h2>

          {contactLinks.map((link, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: "16px",
                marginBottom: "16px",
                borderBottom:
                  i < contactLinks.length - 1
                    ? "0.5px solid var(--border)"
                    : "none",
              }}
            >
              <p
                style={{
                  fontSize: isMobile ? "11px" : "12px",
                  color: "var(--fg-dim)",
                  fontWeight: 300,
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                }}
              >
                {link.label}
              </p>
              {link.href ? (
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  style={{
                    fontSize: isMobile ? "13px" : "14px",
                    color: "var(--fg-muted)",
                    fontWeight: 300,
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                >
                  {link.value} →
                </a>
              ) : (
                <p
                  style={{
                    fontSize: isMobile ? "13px" : "14px",
                    color: "var(--fg-muted)",
                    fontWeight: 300,
                  }}
                >
                  {link.value}
                </p>
              )}
            </div>
          ))}

          {/* Availability status */}
          <div
            style={{
              marginTop: "32px",
              padding: "20px",
              borderRadius: "6px",
              background: "var(--bg-card)",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#4ade80",
                boxShadow: "0 0 8px rgba(74, 222, 128, 0.4)",
              }}
            />
            <p
              style={{
                fontSize: isMobile ? "12px" : "13px",
                color: "var(--fg-muted)",
                fontWeight: 300,
              }}
            >
              Currently open to full-time roles &amp; freelance projects
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom spacer */}
      <div style={{ height: isMobile ? "60px" : "100px" }} />
    </div>
  );
}
