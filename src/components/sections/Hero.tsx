"use client";

import { motion } from "framer-motion";
import { HeroCanvas } from "@/components/canvas/HeroCanvas";
import { personal } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-end overflow-hidden border-b border-border"
    >
      <div className="absolute inset-0">
        <HeroCanvas />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full px-6 pb-20 sm:px-10 sm:pb-28"
      >
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
          {personal.role} — {personal.location}
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
          I build financial and health-tech systems that don&apos;t fall over.
        </h1>
        <p className="mt-6 max-w-xl text-sm text-muted sm:text-base">
          {personal.name} — fullstack developer working across Angular, React/Next.js,
          and .NET.
        </p>
      </motion.div>
    </section>
  );
}
