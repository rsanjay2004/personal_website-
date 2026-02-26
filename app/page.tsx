// app/page.tsx
import { Github, Linkedin, Mail, MapPin} from "lucide-react";

const projects = [
  {
    title: "Autonomous Underwater Vehicle",
    description:
      "Designed and implemented embedded systems for an AUV, focusing on robust sensor integration and fault-tolerant control.",
    tags: ["Embedded", "C/C++", "Control"],
  },
  {
    title: "AI Notes Summariser",
    description:
      "Web app that uses NLP models to summarise messy lecture notes into concise points.",
    tags: ["Next.js", "Python", "NLP"],
  },
  {
    title: "STEM Teaching Toolkit",
    description:
      "Interactive modules to teach robotics and coding concepts to beginners.",
    tags: ["React", "Education", "UI/UX"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Outer container */}
      <div className="mx-auto max-w-5xl px-4">
        {/* NAVBAR */}
        <nav className="sticky top-0 z-20 bg-slate-950/80 backdrop-blur flex items-center justify-between py-4 border-b border-slate-800">
          <span className="text-lg font-semibold tracking-tight">
            yourname<span className="text-indigo-400">.dev</span>
          </span>
          <div className="flex gap-4 text-sm">
            <a href="#about" className="hover:text-indigo-300 transition">
              About
            </a>
            <a href="#projects" className="hover:text-indigo-300 transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-indigo-300 transition">
              Contact
            </a>
          </div>
        </nav>

        {/* HERO */}
        <section
          id="hero"
          className="flex flex-col md:flex-row items-center gap-10 py-16 md:py-24"
        >
          {/* Left side: text */}
          <div className="flex-1">
            <p className="text-sm uppercase tracking-[0.2em] text-indigo-300 mb-3">
              Hello, I&apos;m
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Your Name Here
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-300 mb-6">
              Aspiring developer & hardware tinkerer
            </h2>
            <p className="text-sm md:text-base text-slate-400 mb-6 max-w-xl">
              I&apos;m a student who enjoys building things that mix{" "}
              <span className="text-indigo-300">software</span> and{" "}
              <span className="text-indigo-300">hardware</span> — from robots
              that move on their own to web apps powered by AI.
            </p>

            <div className="flex gap-4">
              <a
                href="#projects"
                className="rounded-full bg-indigo-500 px-5 py-2 text-sm font-medium hover:bg-indigo-400 transition"
              >
                View my projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-slate-600 px-5 py-2 text-sm font-medium hover:border-indigo-400 hover:text-indigo-300 transition"
              >
                Contact me
              </a>
            </div>
          </div>

          {/* Right side: fake profile card */}
          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-xs rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-indigo-500/10">
              <div className="h-20 w-20 rounded-full bg-gradient-to-tr from-indigo-400 to-violet-500 mb-4" />
              <p className="text-lg font-semibold mb-1">Your Name</p>
              <p className="text-sm text-slate-400 mb-4">
                Computer Engineering student · NUS
              </p>
              <p className="text-sm text-slate-300 mb-4">
                Interested in embedded systems, AI, and teaching others how to
                build cool things.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-slate-800 px-3 py-1">
                  Next.js
                </span>
                <span className="rounded-full bg-slate-800 px-3 py-1">
                  Tailwind
                </span>
                <span className="rounded-full bg-slate-800 px-3 py-1">
                  Embedded C
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-12 border-t border-slate-800">
          <h2 className="text-2xl font-semibold mb-4">About</h2>
          <p className="text-sm md:text-base text-slate-300 mb-4">
            I&apos;m currently a student exploring{" "}
            <span className="text-indigo-300">web development</span>,{" "}
            <span className="text-indigo-300">AI</span>, and{" "}
            <span className="text-indigo-300">embedded systems</span>. I enjoy
            working on hands-on projects, participating in competitions, and
            explaining tech concepts to beginners.
          </p>
          <p className="text-sm md:text-base text-slate-400">
            Right now I&apos;m focused on learning the modern web stack:
            React, Next.js, and Tailwind CSS — and building real projects to
            apply what I learn.
          </p>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-12 border-t border-slate-800">
          <h2 className="text-2xl font-semibold mb-6">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:border-indigo-400 hover:-translate-y-1 transition"
              >
                <h3 className="text-lg font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-800 px-3 py-1 text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

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
          <footer className="border-t border-slate-800 bg-black">
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