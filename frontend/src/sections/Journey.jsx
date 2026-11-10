import { motion } from "framer-motion";
import Section from "../components/Section";
import { journey } from "../data/content";

export default function Journey() {
  return (
    <Section id="journey" title="Experience & Journey" subtitle="Project-based experience built through independent learning.">
      <ol className="relative space-y-8 border-l border-white/10 pl-8">
        {journey.map((j, i) => (
          <motion.li key={j.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative">
            <span className="absolute -left-[39px] top-1 h-3 w-3 rounded-full bg-accent shadow shadow-accent" />
            <h3 className="font-display text-lg font-bold text-white">{j.title}</h3>
            <p className="mt-1 text-sm text-slate-400">{j.text}</p>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
