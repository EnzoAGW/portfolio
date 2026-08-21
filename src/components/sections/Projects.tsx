"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="work" className="border-b border-border px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <p className="mb-12 font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Work
        </p>
        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-accent/40"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-2xl font-semibold text-foreground">
                  {project.name}
                </h3>
                <p className="font-mono text-xs text-accent">{project.tagline}</p>
              </div>

              <dl className="mt-6 grid gap-5 sm:grid-cols-3">
                <div>
                  <dt className="mb-1 text-xs uppercase tracking-wide text-muted">
                    Problem
                  </dt>
                  <dd className="text-sm text-foreground/90">{project.problem}</dd>
                </div>
                <div>
                  <dt className="mb-1 text-xs uppercase tracking-wide text-muted">
                    Role
                  </dt>
                  <dd className="text-sm text-foreground/90">{project.role}</dd>
                </div>
                <div>
                  <dt className="mb-1 text-xs uppercase tracking-wide text-muted">
                    Result
                  </dt>
                  <dd className="text-sm text-foreground/90">{project.result}</dd>
                </div>
              </dl>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <ul className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                {project.links && project.links.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-accent px-4 py-1.5 text-xs font-medium text-background transition-opacity hover:opacity-90"
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
