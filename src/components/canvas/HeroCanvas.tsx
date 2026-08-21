"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const SerratedField = dynamic(
  () => import("./SerratedField").then((mod) => mod.SerratedField),
  { ssr: false }
);

function supportsHeavyCanvas(): boolean {
  if (typeof window === "undefined") return false;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (prefersReducedMotion) return false;

  const isNarrowViewport = window.innerWidth < 768;
  const isLowPower = (navigator.hardwareConcurrency ?? 8) <= 2;
  if (isNarrowViewport || isLowPower) return false;

  const canvas = document.createElement("canvas");
  const hasWebGL = !!(
    canvas.getContext("webgl2") || canvas.getContext("webgl")
  );

  return hasWebGL;
}

export function HeroCanvas() {
  const [canRender, setCanRender] = useState<boolean | null>(null);

  useEffect(() => {
    setCanRender(supportsHeavyCanvas());
  }, []);

  if (canRender === null) return <div className="hero-canvas-fallback" />;
  if (!canRender) return <div className="hero-canvas-fallback" />;

  return <SerratedField />;
}
