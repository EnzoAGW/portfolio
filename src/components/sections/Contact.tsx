"use client";

import { motion } from "framer-motion";
import { personal } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-28 sm:px-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Contact
        </p>
        <h2 className="text-3xl font-semibold text-foreground sm:text-5xl">
          Let&apos;s build something that doesn&apos;t fall over.
        </h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm">
          <a
            href={`mailto:${personal.email}`}
            className="rounded-full bg-accent px-6 py-3 font-medium text-background transition-opacity hover:opacity-90"
          >
            {personal.email}
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="text-muted transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-muted transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}
