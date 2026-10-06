"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

type RGB = readonly [number, number, number];

// Dot grid palette per theme: resting colour → near-cursor → under-cursor
const PALETTE: Record<"dark" | "light", { base: RGB; near: RGB; hot: RGB }> = {
  dark: { base: [58, 58, 56], near: [90, 90, 255], hot: [229, 52, 28] },
  light: { base: [214, 214, 208], near: [42, 42, 224], hot: [229, 52, 28] },
};

const CELL = 20;
const RADIUS = 120;

export default function IntroCard({
  cardWidth,
  isMobile,
}: {
  cardWidth: number;
  isMobile: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const { base, near, hot } = PALETTE[theme];
    const lerp = (a: RGB, b: RGB, t: number): RGB => [
      a[0] + (b[0] - a[0]) * t,
      a[1] + (b[1] - a[1]) * t,
      a[2] + (b[2] - a[2]) * t,
    ];

    let w = 0;
    let h = 0;
    let raf = 0;
    // Cursor in viewport coords; converted to canvas coords on every frame so
    // the grid stays correct while the carousel scrolls horizontally.
    let clientX = -9999;
    let clientY = -9999;

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const mx = clientX - rect.left;
      const my = clientY - rect.top;

      ctx.clearRect(0, 0, w, h);
      for (let x = CELL / 2; x < w; x += CELL) {
        for (let y = CELL / 2; y < h; y += CELL) {
          const inf = Math.max(0, 1 - Math.hypot(x - mx, y - my) / RADIUS);
          const size = 1.6 + inf * inf * 5;
          const c =
            inf === 0
              ? base
              : inf > 0.6
              ? lerp(near, hot, (inf - 0.6) / 0.4)
              : lerp(base, near, inf / 0.6);
          ctx.fillStyle = `rgba(${c[0] | 0},${c[1] | 0},${c[2] | 0},${
            0.5 + inf * 0.5
          })`;
          ctx.fillRect(x - size / 2, y - size / 2, size, size);
        }
      }
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    };

    // Card height comes from the flex row, so observe the element rather than
    // the window.
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return () => ro.disconnect();
    }

    const render = () => {
      raf = 0;
      draw();
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(render);
    };
    const onPointerMove = (e: PointerEvent) => {
      clientX = e.clientX;
      clientY = e.clientY;
      schedule();
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    // Capture phase so the carousel's own scroll (which doesn't bubble) counts.
    window.addEventListener("scroll", schedule, {
      passive: true,
      capture: true,
    });

    return () => {
      ro.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", schedule, { capture: true });
      if (raf) cancelAnimationFrame(raf);
    };
  }, [theme]);

  return (
    <div
      style={{
        width: `${cardWidth}px`,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <article
        tabIndex={0}
        aria-label="About Ege Çelikgöğüs"
        style={{
          flex: 1,
          position: "relative",
          overflow: "hidden",
          borderRadius: "6px",
          background: "var(--bg-card)",
          border: "1.5px solid var(--border-hover)",
          outline: "none",
        }}
      >
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            padding: isMobile ? "18px" : "24px",
            pointerEvents: "none",
          }}
        >
          <span
            style={{
              alignSelf: "flex-start",
              fontSize: isMobile ? "12px" : "13px",
              fontWeight: 600,
              letterSpacing: "-0.1px",
              color: "var(--fg)",
            }}
          >
            Ege Çelikgöğüs <span style={{ color: "#F5C542" }}>✴</span>
          </span>

          <p
            style={{
              marginTop: "auto",
              fontSize: isMobile ? "20px" : "26px",
              fontWeight: 600,
              lineHeight: 1.12,
              letterSpacing: "-0.5px",
              color: "var(--fg)",
              textWrap: "balance",
            }}
          >
            Hi! I&apos;m Ege, a product &amp; interaction designer crafting
            thoughtful experiences at the intersection of physical and digital.
          </p>
        </div>
      </article>
    </div>
  );
}
