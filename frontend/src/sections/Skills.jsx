import { motion } from "framer-motion";
import { Code2, Server, Wrench, Sparkles } from "lucide-react";
import Section from "../components/Section";
import { skills } from "../data/content";

const icons = { Frontend: Code2, Backend: Server, Tools: Wrench, Additional: Sparkles };

export default function Skills() {
  return (
    <Section id="skills" title="Technical Skills" subtitle="Technologies I use to build complete web applications.">
      <div className="grid gap-5 sm:grid-cols-2">
        {Object.entries(skills).map(([group, items], i) => {
          const Icon = icons[group];
          return (
            <motion.div
              key={group}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass p-6 transition hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="mb-4 flex items-center gap-3 text-white"><Icon className="text-accent" /><h3 className="font-display text-xl font-bold">{group}</h3></div>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => <span key={s} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">{s}</span>)}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
