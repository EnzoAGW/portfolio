"use client";

import { motion } from "framer-motion";
import { about } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="border-b border-border px-6 py-24 sm:px-10">
      <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-[200px_1fr]">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-muted"
        >
          About
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="max-w-2xl text-xl leading-relaxed text-foreground sm:text-2xl"
        >
          {about}
        </motion.p>
      </div>
    </section>
  );
}
