import { useRef } from "react";
import { useInView } from "framer-motion";
import { User } from "lucide-react";
import Section from "../components/Section";
import useCountUp from "../hooks/useCountUp";
import { stats } from "../data/content";

function Stat({ value, label, active }) {
  const n = useCountUp(value, active);
  return (
    <div className="glass p-5 text-center">
      <p className="font-display text-3xl font-bold text-white">{n}{label.includes("Technologies") ? "+" : ""}</p>
      <p className="mt-1 text-xs text-slate-400">{label}</p>
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <Section id="about" title="About Me">
      <div className="grid gap-10 md:grid-cols-[260px_1fr]">
        <div className="glass flex aspect-square items-center justify-center text-slate-600" role="img" aria-label="Profile photo placeholder">
          <User size={80} />
        </div>
        <div className="space-y-4" ref={ref}>
          <p>I'm a passionate MERN Stack Developer based in Indore, India, focused on building responsive, user-friendly, and scalable web applications. I enjoy transforming ideas into functional digital experiences using modern technologies like React, Node.js, Express.js, and MongoDB.</p>
          <p><b className="text-white">Journey:</b> I started with frontend fundamentals, moved into the MERN stack, and now build full-stack projects independently.</p>
          <p><b className="text-white">Interests:</b> Clean UI engineering, REST API design, state management and performance.</p>
          <p><b className="text-white">Goal:</b> To join a product team as a MERN Stack Developer and keep growing into a well-rounded full-stack engineer.</p>
          <div className="grid grid-cols-3 gap-3 pt-4">
            {stats.map((s) => <Stat key={s.label} {...s} active={inView} />)}
          </div>
        </div>
      </div>
    </Section>
  );
}
