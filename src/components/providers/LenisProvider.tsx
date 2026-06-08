"use client";

import React, { useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

interface LenisProviderProps {
  children: React.ReactNode;
}

export default function LenisProvider({ children }: LenisProviderProps) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Detect reduced motion preference on mount
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    // Listen for changes to the preference
    const listener = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", listener);
    return () => {
      mediaQuery.removeEventListener("change", listener);
    };
  }, []);

  const lenisOptions = {
    duration: reducedMotion ? 0 : 1.6,
    lerp: reducedMotion ? 1 : 0.05,
    smoothWheel: !reducedMotion,
    syncTouch: !reducedMotion,
    syncTouchLerp: 0.05,
    touchMultiplier: 1.5,
    wheelMultiplier: 1.0,
    autoRaf: true, // Let Lenis run its own requestAnimationFrame loop automatically
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}
