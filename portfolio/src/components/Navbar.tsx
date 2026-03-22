import { useState, useEffect } from "react";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Skills",   href: "#skills"   },
  { label: "About",    href: "#about"    },
  { label: "Contact",  href: "#contact"  },
];

export default function Navbar() {
  const [open,   setOpen]   = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0f0f0f]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <a
          href="#hero"
          className="text-sm font-semibold tracking-widest text-white/80 uppercase hover:text-white transition-colors"
        >
          Anton Satsuk
        </a>

        {/* Desktop links */}
        <ul className="hidden gap-8 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative text-sm transition-colors pb-0.5 ${
                  active === link.href
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
                {active === link.href && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 sm:hidden p-1"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className={`h-px w-6 bg-white/70 transition-transform duration-300 ${open ? "translate-y-[5px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-white/70 transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 bg-white/70 transition-transform duration-300 ${open ? "-translate-y-[9px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <ul className="flex flex-col gap-4 px-6 pb-5 sm:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block text-sm transition-colors ${
                  active === link.href ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
