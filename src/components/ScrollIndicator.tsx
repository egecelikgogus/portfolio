"use client";

import { useState, useEffect } from "react";

export default function ScrollIndicator() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div
      style={{
        padding: isMobile ? "14px 20px" : "20px 32px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {/* Swipe icon on mobile, mouse icon on desktop */}
        {isMobile ? (
          <span style={{ fontSize: "14px", color: "var(--fg-dim)" }}>
            ←→
          </span>
        ) : (
          <div
            style={{
              width: "16px",
              height: "26px",
              border: "1px solid var(--fg-dim)",
              borderRadius: "8px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "4px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "2px",
                height: "5px",
                background: "var(--fg-muted)",
                borderRadius: "1px",
                animation: "scrollDot 1.5s ease-in-out infinite",
              }}
            />
          </div>
        )}
        <span
          style={{
            fontSize: isMobile ? "10px" : "11px",
            color: "var(--fg-dim)",
            letterSpacing: "0.2px",
          }}
        >
          {isMobile ? "Swipe for more projects" : "Scroll for more projects"}
        </span>
      </div>

      <style>{`
        @keyframes scrollDot {
          0%, 100% { opacity: 1; transform: translateX(-50%) translateY(0); }
          50% { opacity: 0.3; transform: translateX(-50%) translateY(4px); }
        }
      `}</style>
    </div>
  );
}
