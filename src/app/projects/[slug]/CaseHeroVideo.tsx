"use client";

import { useEffect, useRef, useState } from "react";

/* Autoplaying loops are motion, which CSS can't switch off. When the viewer
   asks for reduced motion we hold the first frame and expose controls instead,
   so the hero still communicates without animating unprompted. */
export default function CaseHeroVideo({
  src,
  label,
}: {
  src: string;
  label: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      setReduced(mq.matches);
      const v = ref.current;
      if (!v) return;
      if (mq.matches) v.pause();
      else v.play().catch(() => {});
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      aria-label={label}
      muted
      loop
      playsInline
      preload="metadata"
      autoPlay={!reduced}
      controls={reduced}
    />
  );
}
