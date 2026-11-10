import { motion } from "framer-motion";

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          <span className="gradient-text">{title}</span>
        </h2>
        {subtitle && <p className="mt-3 max-w-2xl text-slate-400">{subtitle}</p>}
        <div className="mt-10">{children}</div>
      </motion.div>
    </section>
  );
}
