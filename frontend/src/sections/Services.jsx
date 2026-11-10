import { motion } from "framer-motion";
import Section from "../components/Section";
import { services } from "../data/content";

export default function Services() {
  return (
    <Section id="services" title="Services">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(([t, d], i) => (
          <motion.div key={t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} whileHover={{ y: -5 }} className="glass p-6">
            <h3 className="font-display text-lg font-bold text-white">{t}</h3>
            <p className="mt-2 text-sm text-slate-400">{d}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
