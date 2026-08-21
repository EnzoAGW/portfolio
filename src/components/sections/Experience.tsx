"use client";

import { motion } from "framer-motion";
import { education, experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="border-b border-border px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <p className="mb-12 font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Experience
        </p>

        <div className="flex flex-col gap-14">
          {experience.map((entry, i) => (
            <motion.div
              key={entry.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="grid gap-4 sm:grid-cols-[1fr_2fr]"
            >
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {entry.company}
                </h3>
                <p className="text-sm text-muted">{entry.role}</p>
                <p className="mt-1 font-mono text-xs text-accent">{entry.period}</p>
              </div>
              <ul className="flex flex-col gap-3 border-l border-border pl-6">
                {entry.bullets.map((bullet, j) => (
                  <li key={j} className="text-sm text-foreground/90">
                    {bullet.project && (
                      <span className="mr-2 font-mono text-xs text-muted">
                        {bullet.project}
                      </span>
                    )}
                    {bullet.text}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 border-t border-border pt-8">
          <p className="text-sm text-foreground">{education.degree}</p>
          <p className="text-sm text-muted">
            {education.school} · {education.period}
          </p>
        </div>
      </div>
    </section>
  );
}
