// app/page.tsx
import Image from "next/image";
import {Moon, Github, Linkedin, Mail, Download, MapPin, GraduationCap} from "lucide-react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  return (
    <header className="sticky top-4 z-30 flex justify-center">
      <div className="flex items-center gap-3 rounded-full border border-slate-700/80 bg-slate-950/80 px-4 py-2 shadow-lg shadow-black/40 backdrop-blur">
        {/* nav links */}
        <nav className="flex items-center gap-6 px-4 py-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-200 hover:text-white transition"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* separator line */}
        <div className="h-8 w-px bg-slate-700/70" />

        {/* moon button (design only for now) */}
        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-100 hover:border-indigo-400 hover:bg-slate-800 hover:scale-110 transition"
        >
          <Moon size={18} />
        </button>
      </div>
    </header>
  );
}

const skills = [
  { name: "C++", label: "Programming Language" },
  { name: "JavaScript", label: "Programming Language" },
  { name: "React", label: "JavaScript Library" },
  { name: "Next.js", label: "React Framework" },
  { name: "Tailwind", label: "CSS Framework" },
  { name: "Git", label: "Version Control" },
  { name: "Arduino", label: "Hardware Prototyping" },
  { name: "Python", label: "Scripting & AI" },
];

function TechSection() {
  return (
    <section
      id="skills"
      className="border-t border-slate-800 bg-slate-950 py-16"
    >
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-3xl font-semibold text-white mb-2">
          Current technologies
        </h2>
        <p className="text-sm md:text-base text-slate-300 mb-8 max-w-3xl">
          I&apos;m proficient in a range of modern technologies that let me build
          full-stack web apps, work with hardware, and experiment with AI.
        </p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col justify-between rounded-2xl bg-slate-900/80 border border-slate-800 px-4 py-4 shadow-md shadow-black/40 hover:border-indigo-500/80 hover:-translate-y-1 transition"
            >
              <div>
                <p className="text-sm font-semibold text-white">
                  {skill.name}
                </p>
                <p className="mt-1 text-xs text-slate-400">{skill.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const projects = [
  {
    title: "AUV Control System",
    subtitle: "Embedded systems for an autonomous underwater vehicle.",
    image: "/projects/auv.jpg",
    tags: ["Embedded C", "CAN bus", "Sensors"],
    codeUrl: "https://github.com/your-auv-repo",
    demoUrl: "",
    highlight: "Competition Project",
  },
  {
    title: "AI Study Assistant",
    subtitle: "Web app that summarises notes and practice questions.",
    image: "/projects/ai-study.jpg",
    tags: ["Next.js", "Python", "NLP"],
    codeUrl: "https://github.com/your-ai-repo",
    demoUrl: "https://your-ai-demo.vercel.app",
    highlight: "Personal Project",
  },
  {
    title: "mBot Maze Solver",
    subtitle: "Autonomous robot that navigates mazes using sensors.",
    image: "/projects/mbot.jpg",
    tags: ["C++", "Arduino", "Robotics"],
    codeUrl: "https://github.com/your-mbot-repo",
    demoUrl: "",
    highlight: "Robotics",
  },
];

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="border-t border-slate-800 bg-slate-950 py-16"
    >
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-3xl font-semibold text-white text-center mb-2">
          Featured Projects
        </h2>
        <p className="text-sm md:text-base text-slate-300 text-center mb-10 max-w-2xl mx-auto">
          Here are some of my projects that showcase how I combine software,
          hardware, and AI to solve problems.
        </p>

        {/* horizontal scroll on small screens, centered on large */}
        <div className="flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {projects.map((p) => (
            <article
              key={p.title}
              className="min-w-[260px] md:min-w-0 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-lg shadow-black/40 flex flex-col overflow-hidden hover:border-indigo-500/80 hover:-translate-y-1 transition"
            >
              {/* top image */}
              {p.image && (
                <div className="relative h-40 w-full">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* main content */}
              <div className="flex flex-1 flex-col justify-between px-4 py-4">
                <div>
                  {p.highlight && (
                    <span className="inline-block rounded-full bg-amber-500/90 px-3 py-0.5 text-[11px] font-semibold text-black mb-2">
                      {p.highlight}
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-300 mb-3">
                    {p.subtitle}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-slate-800 px-3 py-1 text-[11px] text-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* buttons */}
                <div className="flex flex-wrap gap-3">
                  {p.codeUrl && (
                    <a
                      href={p.codeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-100 hover:border-indigo-400 hover:bg-slate-800 transition"
                    >
                      Code
                    </a>
                  )}
                  {p.demoUrl && (
                    <a
                      href={p.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center rounded-full bg-white px-3 py-1.5 text-xs font-medium text-slate-900 hover:bg-slate-100 transition"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-slate-500">
          Scroll sideways on mobile to see more →
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Outer container */}
      <div className="mx-auto max-w-5xl px-4">
        {/* NAVBAR */}
         <Navbar />

        {/* HERO */}
        <section
          id="hero"
          className="relative overflow-hidden bg-slate-950 py-16 md:py-24"
        >
          {/* dotted background */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.18),_transparent_60%)] opacity-70" />

          <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-12 px-4 md:flex-row md:items-center md:justify-between">
            {/* LEFT */}
            <div className="max-w-xl">
              <p className="text-sm uppercase tracking-[0.22em] text-slate-400 mb-2">
                Portfolio
              </p>

              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-3">
                Hi, I&apos;m <span className="text-white">Rajkumar Sanjay</span> 👋
              </h1>

              <span className="inline-flex items-center rounded-full bg-indigo-500/90 px-4 py-1.5 text-sm font-medium text-white shadow-lg shadow-indigo-500/40 mb-4">
                Aspiring Software Developer 
              </span>

              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300 mb-5">
                <span className="inline-flex items-center gap-2">
                  <MapPin size={16} /> Singapore
                </span>
                <span className="inline-flex items-center gap-2">
                  <GraduationCap size={16} /> Y1 Computer Engineer @ NUS
                </span>
              </div>

              <p className="text-sm md:text-base text-slate-300 mb-6">
                Passionate about building things that combine{" "}
                <span className="text-indigo-300">software development</span>,{" "}
                <span className="text-indigo-300">embedded systems</span>, and{" "}
                <span className="text-indigo-300">and AI</span>. Generally i enjoy turning ideas into a reality using my experiences. 
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-100 transition"
                >
                  Explore My Work ↓
                </a>
                <a
                  href="/Users/livelysan/Downloads/Sanjay_Resume"
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-5 py-2.5 text-sm font-medium text-slate-100 hover:border-indigo-400 hover:bg-slate-800 transition gap-2"
                >
                  <Download size={16} />
                  Download CV
                </a>
                <a
                  href="https://github.com/your-rsanjay2004"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-slate-100 border border-slate-700 hover:border-indigo-500 hover:bg-slate-800 hover:scale-110 transition"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/rajkumar-s-5389a123b"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-slate-100 border border-slate-700 hover:border-indigo-500 hover:bg-slate-800 hover:scale-110 transition"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            {/* RIGHT: circular photo */}
            <div className="flex justify-center md:justify-end w-full md:w-auto">
              <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full border border-slate-700 bg-slate-900 shadow-[0_0_60px_rgba(79,70,229,0.5)] overflow-hidden">
                <Image
                  src="/Users/livelysan/Downloads/me.jpg"
                  alt="Photo of Rajkumar Sanjay"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>


        {/*--------------------------------------------------ABOUT & PROJECTS SECTION -------------------------------------------------*/}
            <ProjectsSection />
            <TechSection />
        {/*---------------------------------------------- CONTACT SECTION -----------------------------------------------*/}
        <section
          id="contact"
          className="relative border-t border-slate-800 bg-slate-950 py-16"
          >
          {/* subtle dotted background */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.15),_transparent_60%)] opacity-60" />

          <div className="relative mx-auto max-w-5xl px-4">
            {/* Heading */}
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-semibold text-white">Get In Touch</h2>
              <p className="mt-3 text-sm md:text-base text-slate-300 max-w-2xl mx-auto">
                Interested in working together? Feel free to contact me through these mediums...
              </p>
            </div>

            {/* Two-column layout */}
            <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] items-start">
              {/* LEFT SIDE: contact info */}
              <div className="space-y-8">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-400">
                    Let&apos;s Connect
                  </p>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 border border-slate-700">
                    <MapPin size={18} className="text-slate-100" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-[0.14em]">
                      Location
                    </p>
                    <p className="text-sm text-slate-100">Singapore</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 border border-slate-700">
                    <Mail size={18} className="text-slate-100" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-[0.14em]">
                      Email
                    </p>
                    <a
                      href="mailto:rsanjay2004@gmail.com"
                      className="text-sm text-slate-100 hover:text-indigo-400"
                    >
                      rsanjay2004@gmail.com
                    </a>
                  </div>
                </div>

                {/* Social links */}
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                    Follow Me
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/your-rsanjay2004"
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-slate-100 border border-slate-700 hover:border-indigo-500 hover:bg-slate-800 hover:scale-110 transition"
                    >
                      <Github size={18} />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/rajkumar-s-5389a123b"
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-slate-100 border border-slate-700 hover:border-indigo-500 hover:bg-slate-800 hover:scale-110 transition"
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE: contact form (front-end only for now) */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8 shadow-lg shadow-black/40">
                <form className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-medium text-slate-300">
                        Rajkumar Sanjay
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/60"
                        placeholder="Rajkumar Sanjay"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs font-medium text-slate-300">
                        rsanjay2004@gmail.com
                      </label>
                      <input
                        type="email"
                        className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/60"
                        placeholder="helloworld@gmail.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-medium text-slate-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/60"
                      placeholder="Interested in working together?"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-medium text-slate-300">
                      Your Message
                    </label>
                    <textarea
                      rows={5}
                      className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/60"
                      placeholder="Tell me more in detail on how you would want to work together"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-slate-100 px-6 py-2.5 text-sm font-medium text-slate-900 hover:bg-white transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/*-------------------------------------------------- FOOTER -----------------------------------------------------*/}
          <footer className="border-t border-slate-800 bg-slate-950">
            <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-10 md:flex-row md:items-start md:justify-between">
              {/* Left: Name + tagline */}
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  Rajkumar Sanjay
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  Computer Engineering Student 
                </p>
              </div>

              {/* Middle: Quick links */}
              <div>
                <h4 className="text-lg font-semibold text-white">
                  Quick Links
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  <li><a href="#hero" className="hover:text-white">Home</a></li>
                  <li><a href="#about" className="hover:text-white"> About Myself </a></li>
                  <li><a href="#projects" className="hover:text-white">Current/Past Projects</a></li>
                  <li><a href="#skills" className="hover:text-white">Skills</a></li>
                  <li><a href="#contact" className="hover:text-white">Contact</a></li>
                </ul>
              </div>

              {/* Right: Social icons */}
              <div>
                <h4 className="text-lg font-semibold text-white">
                  Connect
                </h4>
                <div className="mt-4 flex gap-4">
                  {/* GitHub */}
                  <a
                    href="https://github.com/rsanjay2004"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-100 hover:bg-slate-700 transition">
                    <Github size={18} />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/rajkumar-s-5389a123b"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-100 hover:bg-slate-700 transition">
                    <Linkedin size={18} />
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:rsanjay2004@gmail.com"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-100 hover:bg-slate-700 transition">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
              © {new Date().getFullYear()} Rajkumar Sanjay. All Rights Reserved.
            </div>
          </footer>
      </div>
    </main>
  );
}