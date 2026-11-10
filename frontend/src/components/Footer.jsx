import { Github, Linkedin } from "lucide-react";
import { navLinks, profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 text-center">
        <div>
          <p className="font-display text-lg font-bold text-white">{profile.name}</p>
          <p className="text-sm text-slate-500">{profile.role}</p>
        </div>
        <ul className="flex flex-wrap justify-center gap-5 text-sm">
          {navLinks.map((l) => <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-white">{l}</a></li>)}
        </ul>
        <div className="flex gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={20} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
        </div>
        <p className="text-xs text-slate-600">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
