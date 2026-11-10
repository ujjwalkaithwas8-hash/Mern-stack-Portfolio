import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Section from "../components/Section";
import { projects } from "../data/content";

const filters = ["All", "Mern Stack", "Frontend"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const shown = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <Section id="projects" title="Featured Projects" subtitle="Live demo and GitHub links are editable placeholders in src/data/content.js.">
      <div className="mb-8 flex gap-2">
        {filters.map((f) => (
          <button key={f} aria-pressed={filter === f} onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-1.5 text-sm transition ${filter === f ? "bg-accent text-white" : "border border-white/10 hover:bg-white/10"}`}>
            {f}
          </button>
        ))}
      </div>
      <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {shown.map((p) => (
            <motion.article key={p.title} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
              whileHover={{ y: -8 }} className="glass flex flex-col overflow-hidden">
              <div className={`flex h-40 items-center justify-center bg-gradient-to-br ${p.gradient}`}>
                <span className="px-3 text-center font-display text-2xl font-bold text-white/90">{p.title}</span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-bold text-white">{p.subtitle}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-400">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => <span key={s} className="rounded-md bg-white/5 px-2 py-0.5 text-xs">{s}</span>)}
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  <a href={p.live} target="_blank" rel="noreferrer" className="btn-primary !px-3 !py-2 !text-xs"><ExternalLink size={14} /> Live Demo</a>
                  <a href={p.github} target="_blank" rel="noreferrer" className="btn-ghost !px-3 !py-2 !text-xs"><Github size={14} /> GitHub</a>
                  <button onClick={() => setSelected(p)} className="btn-ghost !px-3 !py-2 !text-xs">View Details</button>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-5" role="dialog" aria-modal="true" aria-label={selected.title}>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} onClick={(e) => e.stopPropagation()} className="glass w-full max-w-md bg-[#0d0f16] p-6">
              <h3 className="font-display text-2xl font-bold text-white">{selected.subtitle}</h3>
              <p className="mt-2 text-sm text-slate-400">{selected.description}</p>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm">{selected.features.map((f) => <li key={f}>{f}</li>)}</ul>
              <button onClick={() => setSelected(null)} className="btn-primary mt-6">Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
