import { useState } from "react";
import axios from "axios";
import { Github, Linkedin, Loader2, Mail, Send, Phone  } from "lucide-react";
import Section from "../components/Section";
import Toast from "../components/Toast";
import { profile } from "../data/content";


const API = import.meta.env.VITE_API_URL || "https://mern-stack-portfolio-dvxy.onrender.com";
const empty = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const notify = (type, text) => {
    setToast({ type, text });
    setTimeout(() => setToast(null), 4000);
  };

  const validate = () => {
    const e = {};
    if (form.name.trim().length < 2) e.name = "Name must be at least 2 characters";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (form.subject.trim().length < 3) e.subject = "Subject must be at least 3 characters";
    if (form.message.trim().length < 10) e.message = "Message must be at least 10 characters";
    return e;
  };

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;
    setLoading(true);
    try {
      const { data } = await axios.post(`${API}/api/contact`, form);
      notify("success", data.message);
      setForm(empty);
    } catch (err) {
      notify("error", err.response?.data?.message || "Network error. Is the backend running?");
    } finally {
      setLoading(false);
    }
  };

  const field = (name, label, props = {}) => (
    <div>
      <label htmlFor={name} className="mb-1 block text-xs text-slate-400">{label}</label>
      {name === "message" ? (
        <textarea id={name} name={name} rows={5} value={form[name]} onChange={onChange} className="input" placeholder={label} {...props} />
      ) : (
        <input id={name} name={name} value={form[name]} onChange={onChange} className="input" placeholder={label} {...props} />
      )}
      {errors[name] && <p className="mt-1 text-xs text-red-400" role="alert">{errors[name]}</p>}
    </div>
  );

  return (
    <Section id="contact" title="Let's Build Something Amazing Together.">
      <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
        <div className="space-y-4">
          <a href={`mailto:${profile.email}`} className="flex items-center gap-3 hover:text-white"><Mail className="text-accent" /> {profile.email}</a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white"><Github className="text-accent" /> GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white"><Linkedin className="text-accent" /> LinkedIn</a>
<a href={`tel:+91${profile.phone}`}className="flex items-center gap-3 hover:text-white"><Phone className="text-accent" />{profile.phone}</a>
        </div>
      </div>
      <Toast toast={toast} />
    </Section>
  );
}
