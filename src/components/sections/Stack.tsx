"use client";

import { motion } from "framer-motion";
import { stack } from "@/lib/data";

export function Stack() {
  return (
    <section id="stack" className="border-b border-border px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <p className="mb-12 font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Stack
        </p>
        <div className="grid gap-10 sm:grid-cols-3">
          {stack.map((group, i) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <h3 className="mb-3 text-sm font-medium text-foreground">
                {group.group}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
