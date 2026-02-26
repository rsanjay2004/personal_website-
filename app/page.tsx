// app/page.tsx

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

        {/* CONTACT SECTION */}
        <section id="contact" className="py-12 border-t border-slate-800 mb-10">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-sm md:text-base text-slate-300 mb-4 max-w-xl">
            Want to chat about a project, collaboration, or just say hi? Feel
            free to reach out.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:youremail@example.com"
              className="rounded-full bg-indigo-500 px-5 py-2 text-sm font-medium hover:bg-indigo-400 transition"
            >
              Email me
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-600 px-5 py-2 text-sm font-medium hover:border-indigo-400 hover:text-indigo-300 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-600 px-5 py-2 text-sm font-medium hover:border-indigo-400 hover:text-indigo-300 transition"
            >
              GitHub
            </a>
          </div>
        </section>

        {/* FOOTER */}
          <footer className="py-6 border-t border-slate-800 text-xs text-slate-500 text-center">
            © {new Date().getFullYear()} Rajkumar Sanjay · All Rights Reserved
          </footer>
      </div>
    </main>
  );
}