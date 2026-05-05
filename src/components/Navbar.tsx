"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: isMobile ? "18px 20px 0" : "24px 32px 0",
          position: "relative",
          zIndex: 20,
        }}
      >
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          style={{
            textDecoration: "none",
            display: "flex",
            flexDirection: "column",
            gap: "1px",
          }}
        >
          <span
            style={{
              fontSize: isMobile ? "17px" : "19px",
              fontWeight: 600,
              letterSpacing: "-0.2px",
              color: "var(--fg)",
            }}
          >
            Ege Çelikgöğüs
          </span>
          <span
            style={{
              fontSize: isMobile ? "12px" : "13px",
              fontWeight: 300,
              letterSpacing: "0.1px",
              color: "var(--fg-muted)",
            }}
          >
            Product &amp; Interaction Designer
          </span>
          <span
            style={{
              fontSize: isMobile ? "11px" : "12px",
              fontWeight: 300,
              letterSpacing: "0.1px",
              color: "var(--fg-dim)",
            }}
          >
            Based in Vienna, Austria
          </span>
        </Link>

        {/* Desktop nav */}
        {!isMobile && (
          <div
            style={{
              display: "flex",
              gap: "28px",
              alignItems: "center",
            }}
          >
            <NavLink href="/" label="Work" />
            <NavLink href="/about" label="About" />
            <NavLink href="/resume" label="Resume" />

            <button
              onClick={toggleTheme}
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                border: "0.5px solid var(--border-hover)",
                background: "transparent",
                color: "var(--fg-muted)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "13px",
              }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "☀" : "☾"}
            </button>

            <Link
              href="/contact"
              style={{
                fontSize: "14px",
                color: "var(--fg-muted)",
                textDecoration: "none",
                fontWeight: 400,
                border: "0.5px solid var(--fg-dim)",
                borderRadius: "24px",
                padding: "8px 20px",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--fg)";
                e.currentTarget.style.borderColor = "var(--fg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--fg-muted)";
                e.currentTarget.style.borderColor = "var(--fg-dim)";
              }}
            >
              Get in touch →
            </Link>
          </div>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "4px",
              display: "flex",
              flexDirection: "column",
              gap: menuOpen ? "0px" : "5px",
              justifyContent: "center",
              alignItems: "center",
              width: "32px",
              height: "32px",
              position: "relative",
              zIndex: 30,
            }}
            aria-label="Toggle menu"
          >
            <span
              style={{
                width: "20px",
                height: "1.5px",
                background: "var(--fg)",
                borderRadius: "1px",
                transition: "all 0.3s ease",
                transform: menuOpen
                  ? "rotate(45deg) translateY(0.75px)"
                  : "rotate(0)",
                position: menuOpen ? "absolute" : "relative",
              }}
            />
            <span
              style={{
                width: "20px",
                height: "1.5px",
                background: "var(--fg)",
                borderRadius: "1px",
                transition: "all 0.3s ease",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                width: "20px",
                height: "1.5px",
                background: "var(--fg)",
                borderRadius: "1px",
                transition: "all 0.3s ease",
                transform: menuOpen
                  ? "rotate(-45deg) translateY(-0.75px)"
                  : "rotate(0)",
                position: menuOpen ? "absolute" : "relative",
              }}
            />
          </button>
        )}
      </nav>

      {/* Mobile full-screen overlay menu */}
      {isMobile && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "var(--bg)",
            zIndex: 15,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "32px",
            opacity: menuOpen ? 1 : 0,
            pointerEvents: menuOpen ? "auto" : "none",
            transition: "opacity 0.3s ease",
          }}
        >
          <MobileNavLink
            href="/"
            label="Work"
            onClick={() => setMenuOpen(false)}
          />
          <MobileNavLink
            href="/about"
            label="About"
            onClick={() => setMenuOpen(false)}
          />
          <MobileNavLink
            href="/resume"
            label="Resume"
            onClick={() => setMenuOpen(false)}
          />
          <MobileNavLink
            href="/contact"
            label="Get in touch"
            onClick={() => setMenuOpen(false)}
          />

          <button
            onClick={() => {
              toggleTheme();
            }}
            style={{
              marginTop: "16px",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "0.5px solid var(--border-hover)",
              background: "transparent",
              color: "var(--fg-muted)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
            }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>
        </div>
      )}
    </>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      style={{
        fontSize: "14px",
        color: "var(--fg-muted)",
        textDecoration: "none",
        fontWeight: 400,
        transition: "color 0.2s ease",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.color = "var(--fg)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.color = "var(--fg-muted)")
      }
    >
      {label}
    </Link>
  );
}

function MobileNavLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      style={{
        fontSize: "28px",
        fontWeight: 300,
        color: "var(--fg)",
        textDecoration: "none",
        letterSpacing: "-0.5px",
        transition: "opacity 0.2s ease",
      }}
    >
      {label}
    </Link>
  );
}
