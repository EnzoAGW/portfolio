import { personal } from "@/lib/data";

const links = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 sm:px-10">
      <a href="#top" className="font-mono text-sm tracking-tight text-foreground">
        {personal.name}
      </a>
      <nav className="hidden gap-8 text-sm text-muted sm:flex">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="transition-colors hover:text-accent"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
