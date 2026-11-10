import { motion } from "framer-motion";
import { Download, Github, Linkedin } from "lucide-react";
import { profile } from "../data/content";

const words = "Building Modern, Scalable & Interactive Web Experiences.".split(" ");

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-5 pt-16">
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-accent/30 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-accent2/20 blur-[120px]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="glass inline-flex items-center gap-2 px-4 py-1.5 text-xs text-emerald-300"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" /> Open to Opportunities
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-6 font-display text-4xl font-bold text-white sm:text-6xl"
          >
            Hi, I'm <span className="gradient-text">{profile.name}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-3 font-display text-2xl text-white">
            {profile.role}
          </motion.p>
          <p className="mt-4 text-lg text-slate-400">
            {words.map((w, i) => (
              <motion.span key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.08 }} className="mr-1.5 inline-block">
                {w}
              </motion.span>
            ))}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">View My Projects</a>
            <a href="#contact" className="btn-ghost">Contact Me</a>
            <a href="/resume.pdf" download className="btn-ghost"><Download size={16} /> Resume</a>
          </div>
          <div className="mt-6 flex gap-4 text-slate-400">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-white"><Github /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-white"><Linkedin /></a>
          </div>
        </div>
        <motion.div
          animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="glass mx-auto w-full max-w-md p-5 font-mono text-xs leading-relaxed sm:text-sm" aria-hidden="true"
        >
          <div className="mb-3 flex gap-1.5"><i className="h-3 w-3 rounded-full bg-red-500" /><i className="h-3 w-3 rounded-full bg-yellow-400" /><i className="h-3 w-3 rounded-full bg-green-500" /></div>
          <p><span className="text-purple-400">const</span> <span className="text-blue-300">developer</span> = {"{"}</p>
          <p className="pl-4">name: <span className="text-emerald-300">"Ujjwal Kaithwas"</span>,</p>
          <p className="pl-4">stack: <span className="text-emerald-300">["MongoDB", "Express",</span></p>
          <p className="pl-10 text-emerald-300">"React", "Node"],</p>
          <p className="pl-4">location: <span className="text-emerald-300">"Indore, India"</span>,</p>
          <p className="pl-4">openToWork: <span className="text-orange-300">true</span></p>
          <p>{"};"}</p>
        </motion.div>
      </div>
    </section>
  );
}
