"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion, type Transition, useScroll, useSpring } from "framer-motion";
import {
  ArrowDown,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Server,
  ShieldCheck,
  Sparkles,
  Sun,
  Terminal,
  X
} from "lucide-react";
import { contact, education, experiences, navItems, projects, skillGroups, stats } from "@/data/profile";

const fadeIn = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

const transition: Transition = { duration: 0.7, ease: [0.22, 1, 0.36, 1] };

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });

  useEffect(() => {
    const saved = window.localStorage.getItem("theme") as "dark" | "light" | null;
    const nextTheme = saved ?? "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    const timer = window.setTimeout(() => setLoaded(true), 720);
    return () => window.clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
  };

  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Adesh Kadu",
      jobTitle: "Final-Year B.E. Student in Artificial Intelligence & Data Science",
      email: contact.email,
      telephone: contact.phone,
      address: contact.location,
      url: "https://github.com/B1G0wl",
      sameAs: [contact.github, contact.linkedin]
    }),
    []
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <motion.div className="fixed left-0 right-0 top-0 z-[70] h-1 origin-left bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-500" style={{ scaleX }} />
      <LoadingScreen loaded={loaded} />
      <main className="min-h-screen overflow-hidden">
        <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} theme={theme} toggleTheme={toggleTheme} />
        <Hero />
        <RecruiterStatus />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Resume />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

function LoadingScreen({ loaded }: { loaded: boolean }) {
  return (
    <motion.div
      aria-hidden={loaded}
      className="fixed inset-0 z-[90] grid place-items-center bg-[#050611]"
      initial={false}
      animate={{ opacity: loaded ? 0 : 1, pointerEvents: loaded ? "none" : "auto" }}
      transition={{ duration: 0.45 }}
    >
      <div className="text-center">
        <motion.div
          className="mx-auto mb-5 h-12 w-12 rounded-lg border border-white/20 bg-white/5 shadow-[0_0_44px_rgba(49,87,255,0.45)]"
          animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
        <p className="font-display text-xl font-semibold tracking-wide text-white">Build with Adesh</p>
        <p className="mt-2 text-sm text-slate-400">Preparing the workspace</p>
      </div>
    </motion.div>
  );
}

function Navigation({
  menuOpen,
  setMenuOpen,
  theme,
  toggleTheme
}: {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  theme: "dark" | "light";
  toggleTheme: () => void;
}) {
  return (
    <header className="fixed left-0 right-0 top-4 z-[60]">
      <nav className="section-shell glass flex h-16 items-center justify-between rounded-2xl px-4 md:px-5" aria-label="Primary navigation">
        <a href="#home" className="focus-ring flex items-center gap-3 rounded-xl">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 font-display font-bold text-white">A</span>
          <span className="font-display text-base font-semibold">Build with Adesh</span>
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="focus-ring rounded-full px-3 py-2 text-sm font-medium text-[var(--muted)] transition hover:bg-white/10 hover:text-[var(--foreground)]">
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} onClick={toggleTheme} className="focus-ring grid h-10 w-10 place-items-center rounded-xl border border-[var(--line)] bg-white/5 transition hover:bg-white/12">
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button aria-label="Toggle navigation menu" onClick={() => setMenuOpen(!menuOpen)} className="focus-ring grid h-10 w-10 place-items-center rounded-xl border border-[var(--line)] bg-white/5 lg:hidden">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      {menuOpen ? (
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="section-shell glass mt-3 rounded-2xl p-3 lg:hidden">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-medium text-[var(--muted)] hover:bg-white/10 hover:text-[var(--foreground)]">
              {item.label}
            </a>
          ))}
        </motion.div>
      ) : null}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="section-shell grid min-h-screen items-center gap-12 pb-16 pt-32 lg:grid-cols-[1.08fr_0.92fr]">
      <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={transition}>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-blue-500/10 px-4 py-2 text-sm font-semibold text-[var(--foreground)]">
          <Sparkles size={16} className="text-[var(--blue)]" />
          Web Development · Final-Year B.E. Student
        </div>
        <h1 className="font-display text-5xl font-bold leading-[1.02] md:text-7xl">
          Build with <span className="aurora-text">Adesh</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] md:text-xl">
          I’m Adesh Kadu, a final-year B.E. student in Artificial Intelligence & Data Science, interested in building responsive web experiences and practical software. My foundation spans frontend development, Java backend, databases, Python, and cybersecurity.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#projects" className="focus-ring inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-3 font-semibold text-white shadow-[0_18px_60px_var(--shadow)] transition hover:-translate-y-0.5">
            View Projects <ArrowDown size={18} />
          </a>
          <a href="/resume/adesh-kadu-resume.pdf" className="focus-ring inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--line)] bg-white/7 px-5 py-3 font-semibold transition hover:-translate-y-0.5 hover:bg-white/12">
            View Resume <Download size={18} />
          </a>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-[var(--line)] bg-white/[0.055] p-4">
              <p className="font-display text-2xl font-bold">{stat.value}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.94, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ ...transition, delay: 0.15 }} className="relative">
        <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-blue-500/40 via-cyan-300/15 to-purple-500/35 blur-2xl" />
        <div className="glass relative overflow-hidden rounded-[2rem] p-3">
          <div className="relative aspect-[0.9] overflow-hidden rounded-[2rem] bg-slate-950 ring-1 ring-white/10 shadow-[0_25px_80px_rgba(49,87,255,.35)]">
            <Image
              src="/images/adesh-hero.jpeg"
              alt="Adesh Kadu"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 440px"
              className="object-cover"
              style={{ objectPosition: "50% 20%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050611]/42 via-transparent to-transparent" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function SectionHeader({ kicker, title, body }: { kicker: string; title: string; body?: string }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={fadeIn} transition={transition} className="mb-10 max-w-3xl">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[var(--blue)]">{kicker}</p>
      <h2 className="font-display text-3xl font-bold md:text-5xl">{title}</h2>
      {body ? <p className="mt-4 text-lg leading-8 text-[var(--muted)]">{body}</p> : null}
    </motion.div>
  );
}

function RecruiterStatus() {
  return (
    <section className="section-shell py-12" aria-label="Recruiter status">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={transition} className="glass grid gap-6 rounded-[1.75rem] p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
        <div>
          <p className="mb-2 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-[var(--cyan)]">
            <CheckCircle2 size={17} /> Recruiter Status
          </p>
          <h2 className="font-display text-2xl font-bold md:text-3xl">Open to internships, entry-level roles, and practical project opportunities.</h2>
          <p className="mt-3 max-w-3xl text-[var(--muted)]">
            Looking for opportunities where I can contribute to frontend and web development, UI/UX implementation, backend fundamentals, database-driven applications, and software projects while continuing to grow as an engineer.
          </p>
        </div>
        <a
          href="#contact"
          className="focus-ring inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5"
        >
          Contact Me
          <ArrowDown size={18} />
        </a>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-shell py-20">
      <SectionHeader kicker="About" title="A developer mindset shaped by design, code, and problem-solving." body="I am a final-year Artificial Intelligence & Data Science engineering student interested in web development and software engineering. I enjoy shaping user-friendly interfaces with Figma and frontend technologies, while also exploring Java backend development, databases, Python, and cybersecurity." />
      <div className="grid gap-5 md:grid-cols-3">
        {[
          ["AI & Security Interest", "I am especially interested in cybersecurity use cases such as intrusion detection, threat analysis, and responsible AI-driven monitoring."],
          ["Software Development Foundation", "My internships introduced me to Java backend development, MySQL queries and integration, Maven builds, advanced Python, and practical debugging."],
          ["Web & Product Thinking", "I enjoy combining layout, typography, responsive design, and frontend development to create interfaces that are clear and useful."]
        ].map(([title, body]) => (
          <motion.article key={title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={transition} className="glass rounded-2xl p-6">
            <h3 className="font-display text-xl font-semibold">{title}</h3>
            <p className="mt-3 leading-7 text-[var(--muted)]">{body}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  const icons = [Sparkles, Code2, Code2, Server, Database, BriefcaseBusiness, ShieldCheck];
  return (
    <section id="skills" className="section-shell py-20">
      <SectionHeader kicker="Skills" title="Design, develop, and solve problems across the stack." body="A resume-backed mix of UI/UX design, frontend development, backend fundamentals, databases, data visualization, and cybersecurity interests." />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = icons[index] ?? Code2;
          return (
            <motion.article key={group.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ ...transition, delay: index * 0.04 }} className="glass rounded-2xl p-6 transition hover:-translate-y-1">
              <div className="mb-5 flex items-center gap-3">
                <span className="skill-icon">
                  <Icon size={24} strokeWidth={2} />
                </span>
                <h3 className="font-display text-xl font-semibold">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill} className="rounded-full border border-[var(--line)] bg-white/[0.055] px-3 py-1.5 text-sm text-[var(--muted)]">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section-shell py-20">
      <SectionHeader kicker="Projects" title="Projects shaped around real problems." body="Each project is presented with the problem, solution, technologies, key features, and the learning outcome behind it." />
      <div className="grid gap-5">
        {projects.map((project, index) => (
          <motion.article key={project.title} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn} transition={{ ...transition, delay: index * 0.05 }} className={`glass rounded-[1.5rem] p-6 ${project.featured ? "md:p-8" : ""}`}>
            <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[var(--blue)]">{project.featured ? "Featured Project" : "Project"}</p>
                <h3 className="font-display text-2xl font-bold md:text-3xl">{project.title}</h3>
                <p className="mt-4 leading-7 text-[var(--muted)]">{project.overview}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[var(--line)] bg-blue-500/10 px-3 py-1.5 text-sm font-medium text-[var(--foreground)]">
                      {tech}
                  </span>
                  ))}
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <ProjectDetail title="Problem" body={project.problem} />
                <ProjectDetail title="Solution" body={project.solution} />
                <ProjectDetail title="Key Features" body={project.features.join(", ")} />
                <ProjectDetail title="What I Learned" body={project.learned} />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function ProjectDetail({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-[var(--line)] bg-white/[0.045] p-4">
      <h4 className="font-display text-base font-semibold">{title}</h4>
      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{body}</p>
    </div>
  );
}

function Experience() {
  return (
    <section id="experience" className="section-shell py-20">
      <SectionHeader kicker="Experience" title="Internship experience across software and data." body="Practical exposure to backend development, databases, Python programming, and data visualization." />
      <div className="grid gap-5 lg:grid-cols-2">
        {experiences.map((experience, index) => (
          <motion.article key={experience.company} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ ...transition, delay: index * 0.06 }} className="glass rounded-[1.5rem] p-6 md:p-7">
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="font-display text-2xl font-bold">{experience.company}</h3>
                <p className="mt-2 text-[var(--muted)]">{experience.role} · {experience.duration}</p>
              </div>
              <span className="w-fit rounded-full border border-[var(--line)] bg-blue-500/10 px-4 py-2 text-sm font-semibold text-[var(--foreground)]">{experience.badge}</span>
            </div>
            <div className="mt-6 space-y-3">
              {experience.points.map((point) => (
                <div key={point} className="flex gap-3 rounded-2xl border border-[var(--line)] bg-white/[0.04] p-4">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-[var(--blue)]" size={18} />
                  <p className="text-sm leading-6 text-[var(--muted)]">{point}</p>
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="section-shell py-20">
      <SectionHeader kicker="Education" title="Education path" />
      <div className="grid gap-4">
        {education.map((item) => (
          <motion.article key={item.degree} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={transition} className="glass flex flex-col gap-4 rounded-2xl p-6 md:flex-row md:items-center md:justify-between">
            <div className="flex gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-[var(--line)] bg-[var(--skill-icon-bg)] text-[var(--skill-icon-color)]">
                <GraduationCap size={22} />
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold">{item.degree}</h3>
                <p className="mt-1 text-[var(--muted)]">{item.institution}</p>
                {item.note ? <p className="mt-2 text-sm text-[var(--muted)]">{item.note}</p> : null}
              </div>
            </div>
            <p className="font-terminal text-sm text-[var(--cyan)]">{item.period}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Resume() {
  return (
    <section id="resume" className="section-shell py-20">
      <SectionHeader kicker="Resume" title="Resume & professional profile." body="View or download my updated resume covering UI/UX, web development, software development, internships, and education." />
      <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={transition} className="glass rounded-[1.5rem] p-6">
          <h3 className="font-display text-2xl font-semibold">Resume Snapshot</h3>
          <ul className="mt-5 space-y-3 text-[var(--muted)]">
            <li>Final-year B.E. student in Artificial Intelligence & Data Science at A.C. Patil College of Engineering.</li>
            <li>Internship experience at CrossAsyst Pvt. Ltd. (45 days) and Imarticus Learning (120 hours, A Grade certification).</li>
            <li>UI/UX foundation in Figma, wireframing, prototyping, visual design, and responsive design.</li>
            <li>Technical foundation in Java, Python, JavaScript, React.js, Express.js, MySQL, Maven, and Power BI.</li>
          </ul>
          <a href="/resume/adesh-kadu-resume.pdf" className="focus-ring mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-3 font-semibold text-white">
            Download Resume <Download size={18} />
          </a>
        </motion.div>
        <InteractiveTerminal />
      </div>
    </section>
  );
}

function InteractiveTerminal() {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ ...transition, delay: 0.08 }} className="glass overflow-hidden rounded-[1.5rem]">
      <div className="flex items-center justify-between border-b border-[var(--line)] px-5 py-4">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
          <Terminal size={16} /> adesh@portfolio
        </div>
      </div>
      <div className="font-terminal space-y-4 p-5 text-sm leading-7">
        <p><span className="text-[var(--cyan)]">$</span> whoami</p>
        <p className="text-[var(--muted)]">Adesh Kadu - AI & Data Science student building practical software projects.</p>
        <p><span className="text-[var(--cyan)]">$</span> focus --current</p>
        <p className="text-[var(--muted)]">Java backend, MySQL integration, Python AI projects, React interfaces.</p>
        <p><span className="text-[var(--cyan)]">$</span> contact --email</p>
        <a href={`mailto:${contact.email}`} className="focus-ring inline-block rounded text-blue-200 underline underline-offset-4">{contact.email}</a>
      </div>
    </motion.div>
  );
}

function Contact() {
  const links = [
    { label: "GitHub", value: "B1G0wl", href: contact.github, icon: Github },
    { label: "LinkedIn", value: "Adesh Kadu", href: contact.linkedin, icon: Linkedin },
    { label: "Email", value: contact.email, href: `mailto:${contact.email}`, icon: Mail },
    { label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}`, icon: Phone },
    { label: "Location", value: contact.location, href: "https://maps.google.com/?q=Navi%20Mumbai%2C%20Maharashtra", icon: MapPin }
  ];
  return (
    <section id="contact" className="section-shell py-20">
      <SectionHeader kicker="Contact" title="Let’s build something practical." body="For internship, project, or entry-level opportunities, these are the best ways to reach me." />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined} className="focus-ring glass group rounded-2xl p-5 transition hover:-translate-y-1">
              <div className="mb-4 flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/8 text-[var(--cyan)]">
                  <Icon size={20} />
                </span>
                <ExternalLink className="text-[var(--muted)] transition group-hover:text-[var(--foreground)]" size={18} />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--blue)]">{link.label}</p>
              <p className="mt-2 break-words font-display text-lg font-semibold">{link.value}</p>
            </a>
          );
        })}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="section-shell border-t border-[var(--line)] py-8">
      <div className="flex flex-col gap-3 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Build with Adesh. Designed and built from scratch.</p>
        <p>Navi Mumbai, Maharashtra</p>
      </div>
    </footer>
  );
}
