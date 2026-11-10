import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, profile } from "../data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-bg/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5" aria-label="Main">
        <a href="#home" className="font-display text-lg font-bold text-white">
          UK<span className="gradient-text">.dev</span>
        </a>
        <ul className="hidden gap-8 text-sm md:flex">
          {navLinks.map((l) => (
            <li key={l}><a href={`#${l.toLowerCase()}`} className="transition hover:text-white">{l}</a></li>
          ))}
        </ul>
        <a href="#contact" className="btn-primary hidden !py-2 md:inline-flex">Hire Me</a>
        <button className="text-white md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/5 bg-bg px-5 md:hidden"
          >
            {navLinks.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="block py-3 text-lg text-white">{l}</a>
              </li>
            ))}
            <li className="pb-4 text-xs text-slate-500">{profile.location}</li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
